'use client';

import React, { useRef } from 'react';
import { useReducedMotion } from './scroll-engine';

interface Props {
  children: React.ReactNode;
  className?: string;
  /** How far the element is allowed to chase the cursor, in px. */
  strength?: number;
}

/**
 * Wraps an interactive element so it leans toward the cursor while hovered and
 * springs back on leave. Pointer-type guarded, so taps on mobile are unaffected.
 */
export const Magnetic: React.FC<Props> = ({ children, className = '', strength = 10 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const frame = useRef(0);
  const reduced = useReducedMotion();

  const handleMove = (e: React.PointerEvent<HTMLSpanElement>) => {
    if (e.pointerType === 'touch' || reduced) return;
    const el = ref.current;
    if (!el || frame.current) return;

    const { clientX, clientY } = e;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const rect = el.getBoundingClientRect();
      const dx = (clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const dy = (clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      el.style.transform = `translate3d(${(dx * strength).toFixed(1)}px, ${(dy * strength).toFixed(1)}px, 0)`;
      el.style.transition = 'transform 120ms cubic-bezier(0.22, 1, 0.36, 1)';
    });
  };

  const reset = () => {
    if (frame.current) {
      cancelAnimationFrame(frame.current);
      frame.current = 0;
    }
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate3d(0, 0, 0)';
    el.style.transition = 'transform 520ms cubic-bezier(0.22, 1.4, 0.36, 1)';
  };

  if (reduced) return <span className={`inline-flex ${className}`}>{children}</span>;

  return (
    <span
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className={`inline-flex will-change-transform ${className}`}
    >
      {children}
    </span>
  );
};

export default Magnetic;
