'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  delay?: number; // Delay in seconds
  className?: string;
  initiallyVisible?: boolean;
}

/**
 * Reveal a block as it enters the viewport: a slight upward float, a soft zoom
 * and a blur that resolves.
 *
 * ── WHY THE BLUR IS ARMED LATE AND DROPPED EARLY ────────────────────────────
 *
 * Blink runs a `filter` transition on the compositor. WebKit does not, and it
 * pays for a filter on every frame the element is composited — not only while
 * the value is moving. Measured in a real WebKit build, the twenty-nine blocks
 * sitting below the fold pre-blurred at `blur(3px)`, waiting their turn, were
 * about 15% of the page's entire blur surface and they were being carried the
 * whole way down the scroll.
 *
 * So the blur exists only for the stretch where it is actually needed:
 *
 *   far away   filter: none, transitions off  — costs nothing to scroll past
 *   armed      filter: blur(3px), applied with transitions off so it does not
 *              animate into place; the block is still at opacity 0 here, so
 *              there is nothing to see either way
 *   revealing  transitions on, blur -> 0 alongside opacity and transform
 *   settled    filter: none, hint released
 *
 * Arming happens 400px out, which at any normal scroll speed is comfortably
 * before the reveal trigger, so the animation itself is unchanged.
 *
 * `transition-all` is deliberately left on once armed: callers pass their own
 * hover transitions down through `className` and narrowing it would silently
 * kill those.
 */
export const RevealOnScroll: React.FC<Props> = ({ children, delay = 0, className = '', initiallyVisible = false }) => {
  const [armed, setArmed] = useState(initiallyVisible);
  const [isVisible, setIsVisible] = useState(initiallyVisible);
  const [settled, setSettled] = useState(initiallyVisible);
  const ref = useRef<HTMLDivElement>(null);

  // Arm well before the reveal, so the blur is in place by the time it runs.
  useEffect(() => {
    if (initiallyVisible) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setArmed(true);
        observer.disconnect();
      },
      { rootMargin: '400px 0px 400px 0px', threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [initiallyVisible]);

  useEffect(() => {
    if (initiallyVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small buffer to ensure browser rendering readiness
          setTimeout(() => {
            setIsVisible(true);
          }, 50);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [initiallyVisible]);

  // Release the filter surface and the layer hint once the reveal has run.
  // A timer rather than `transitionend`, which fires once per property and is
  // skipped entirely if the tab is backgrounded mid-reveal.
  useEffect(() => {
    if (!isVisible || settled) return;
    const timer = window.setTimeout(() => setSettled(true), delay * 1000 + 1100);
    return () => window.clearTimeout(timer);
  }, [isVisible, settled, delay]);

  const style: React.CSSProperties = {
    transitionDelay: `${delay}s`,
    // Off until armed, so arming does not animate. Restored afterwards rather
    // than cleared, because callers' hover transitions ride on the same
    // declaration.
    transitionProperty: armed ? undefined : 'none',
    willChange: armed && !settled ? 'opacity, transform, filter' : undefined,
    filter: settled || !armed ? 'none' : isVisible ? 'blur(0px)' : 'blur(3px)',
  };

  return (
    <div
      ref={ref}
      style={style}
      // Gentle rise + focus reveal: slight upward float, soft zoom, and a blur
      // that resolves as the element enters — subtler scale keeps it elegant.
      // The blur itself is driven from `style` above, not from a class.
      className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.96]'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
