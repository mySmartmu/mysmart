'use client';

import React, { useRef } from 'react';
import { useReducedMotion } from './scroll-engine';

interface Props {
  children: React.ReactNode;
  className?: string;
  /** Maximum rotation in degrees at the corners. */
  tilt?: number;
  /** Sweep a soft highlight across the surface with the cursor. */
  glare?: boolean;
}

/**
 * Card that tips toward the cursor in 3D, with a cursor-tracking sheen.
 *
 * ── WHAT MAKES A GRID OF THESE CHEAP ────────────────────────────────────────
 *
 * · Pointer maths writes CSS custom properties, so React never renders while
 *   the mouse moves — the cost is one style invalidation, not a reconcile.
 * · `will-change` is set on pointer enter and cleared on leave. Leaving it on
 *   permanently would hand the compositor a separate layer for every card on
 *   the page, which costs more memory than the effect is worth.
 * · The sheen is a plain radial gradient. An earlier version used
 *   `mix-blend-mode: overlay`, which forces the browser to read back the
 *   pixels underneath before compositing — expensive, and invisible next to
 *   a white gradient at the same opacity.
 *
 * Touch devices never fire pointermove without a press, so this degrades to a
 * plain card on mobile by design.
 */
export const TiltCard: React.FC<Props> = ({
  children,
  className = '',
  tilt = 7,
  glare = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const reduced = useReducedMotion();

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'touch') return;
    const el = ref.current;
    if (!el || frame.current) return;

    const { clientX, clientY } = e;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const rect = el.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;

      el.style.setProperty('--tilt-x', `${(x * 100).toFixed(2)}%`);
      el.style.setProperty('--tilt-y', `${(y * 100).toFixed(2)}%`);
      if (!reduced) {
        el.style.setProperty('--tilt-rx', `${((0.5 - y) * tilt * 2).toFixed(2)}deg`);
        el.style.setProperty('--tilt-ry', `${((x - 0.5) * tilt * 2).toFixed(2)}deg`);
      }
    });
  };

  const handleEnter = () => {
    const el = ref.current;
    if (el && !reduced) el.style.willChange = 'transform';
  };

  const handleLeave = () => {
    if (frame.current) {
      cancelAnimationFrame(frame.current);
      frame.current = 0;
    }
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--tilt-rx', '0deg');
    el.style.setProperty('--tilt-ry', '0deg');
    // Released so the compositor can drop the layer once the card settles.
    el.style.willChange = 'auto';
  };

  return (
    <div style={reduced ? undefined : { perspective: '1100px' }} className="h-full">
      <div
        ref={ref}
        onPointerMove={handleMove}
        onPointerEnter={handleEnter}
        onPointerLeave={handleLeave}
        className={`tilt-card group/tilt relative h-full ${className}`}
      >
        {glare && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/tilt:opacity-100"
            style={{
              background:
                'radial-gradient(280px circle at var(--tilt-x, 50%) var(--tilt-y, 50%), rgba(113,207,243,0.18), rgba(255,255,255,0.06) 40%, transparent 70%)',
            }}
          />
        )}
        {children}
      </div>
    </div>
  );
};

export default TiltCard;
