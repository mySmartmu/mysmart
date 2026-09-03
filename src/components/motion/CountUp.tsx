'use client';

import React, { useEffect, useRef } from 'react';
import { prefersReducedMotion } from './scroll-engine';

interface Props {
  /** The number to count to. Decimals are preserved via `decimals`. */
  value: number;
  /** Where the run starts. A year counting up from zero reads as a glitch. */
  from?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  /** Milliseconds for the whole run. */
  duration?: number;
  className?: string;
}

/** Ease-out-quart: quick off the mark, long settle. */
const ease = (t: number) => 1 - Math.pow(1 - t, 4);

/**
 * Counts up to `value` the first time it scrolls into view.
 *
 * The final figure is what renders on the server and on the first client pass,
 * so the markup is correct without JavaScript and hydration has nothing to
 * disagree about. The run then rewinds to `from` and plays forward, writing to
 * the DOM node directly rather than through state — a page of these costs no
 * React work per frame.
 */
export const CountUp: React.FC<Props> = ({
  value,
  from = 0,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1600,
  className = '',
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const render = (n: number) => {
      el.textContent = `${prefix}${n.toFixed(decimals)}${suffix}`;
    };

    let raf = 0;
    let start = 0;

    const step = (now: number) => {
      if (!start) start = now;
      const t = Math.min((now - start) / duration, 1);
      render(from + (value - from) * ease(t));
      if (t < 1) raf = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );

    // Rewind only once the observer is armed, so a figure scrolled past
    // before hydration is never blanked out.
    render(from);
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
      render(value);
    };
  }, [value, from, decimals, prefix, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export default CountUp;
