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
 * ── WHY THE `filter` IS HANDLED SEPARATELY FROM THE REST ────────────────────
 *
 * Blink runs a `filter` transition on the compositor. WebKit does not — it
 * re-rasterises the element on every frame for the whole second. With a dozen
 * of these per page, all firing while the user scrolls, that was the single
 * most expensive thing on the site in Safari.
 *
 * Two things fix it without touching how the reveal looks:
 *
 * 1. **`will-change` names `filter`, and only while the blur is actually
 *    moving.** The old version hinted `transform` — which is compositor-safe
 *    with or without the hint — but never `filter`, which is the one WebKit
 *    needs warning about. It then left the hint in place for the life of the
 *    page, pinning one compositing layer per reveal.
 *
 * 2. **The filter is dropped to `none` once the reveal has landed.**
 *    `blur(0)` is still a filter: the offscreen surface stays allocated and
 *    the element stays on its own layer. `none` releases both. Identical
 *    pixels, and the cost disappears about a second after the block appears.
 *
 * The transition itself stays `transition-all`, because callers pass their own
 * hover transitions down through `className` and narrowing it here would
 * silently kill those.
 */
export const RevealOnScroll: React.FC<Props> = ({ children, delay = 0, className = '', initiallyVisible = false }) => {
  const [isVisible, setIsVisible] = useState(initiallyVisible);
  // True once the reveal has finished, so the blur surface and the layer hint
  // can both be released.
  const [settled, setSettled] = useState(initiallyVisible);
  const ref = useRef<HTMLDivElement>(null);

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
    // Name the expensive property while it moves, then stop paying for it.
    willChange: settled ? undefined : 'opacity, transform, filter',
    // `blur(0)` keeps an offscreen surface alive; `none` hands it back.
    filter: settled ? 'none' : undefined,
  };

  return (
    <div
      ref={ref}
      style={style}
      // Gentle rise + focus reveal: slight upward float, soft zoom, and a blur
      // that resolves as the element enters — subtler scale keeps it elegant.
      className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 blur-0'
          : 'opacity-0 translate-y-8 scale-[0.96] blur-[3px]'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
