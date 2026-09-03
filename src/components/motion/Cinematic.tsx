'use client';

import React, { useEffect, useRef } from 'react';
import { subscribe, useReducedMotion, mix } from './scroll-engine';

export type CinematicVariant =
  /** Pushes in as it arrives, holds at 1:1, pulls back as it leaves. */
  | 'zoom'
  /** A plane tilted away from you that stands up as you reach it. The signature move. */
  | 'perspective'
  /** A long vertical drift, for full-bleed backdrops. */
  | 'parallax';

interface Props {
  children: React.ReactNode;
  variant?: CinematicVariant;
  /** How far the effect travels. 1 is the tuned default; 0.5 halves it. */
  intensity?: number;
  className?: string;
  /** Fade the ends of the travel as well as scaling. */
  fade?: boolean;
}

/**
 * Piecewise-linear interpolation across matching stop/value arrays.
 *
 * This is the shape every effect below is written in, because it is the one
 * that says plainly where the element is at rest: a flat middle section
 * between two stops, with the movement pushed out to the ends.
 */
function ramp(t: number, stops: readonly number[], values: readonly number[]): number {
  const last = stops.length - 1;
  if (t <= stops[0]) return values[0];
  if (t >= stops[last]) return values[last];

  for (let i = 1; i <= last; i++) {
    if (t > stops[i]) continue;
    const span = stops[i] - stops[i - 1];
    return span > 0 ? mix(values[i - 1], values[i], (t - stops[i - 1]) / span) : values[i];
  }
  return values[last];
}

/**
 * Scroll-driven cinematic framing.
 *
 * ── WHY THIS IS DRIVEN BY `progress` AND NOT BY `centered` ──────────────────
 *
 * An earlier version derived everything from distance-to-viewport-centre.
 * That has two failures, and this component had both:
 *
 *   · The tilt never reached zero. Rotation was eased off a value that is
 *     0.5 when the element is centred, so the panel sat at 14° at the exact
 *     moment it was supposed to be flat, and only straightened once it had
 *     scrolled off the top.
 *   · Tall elements barely moved at all. `centered` is normalised by half the
 *     element's own height, so a 560px panel keeps that value near zero for
 *     its whole visible pass — the scale stayed at 1 and there was no zoom.
 *
 * `progress` runs 0 → 1 as the element crosses the viewport regardless of how
 * tall it is, so a stat row and a full-bleed panel get the same gesture.
 *
 * ── THE STOPS ──────────────────────────────────────────────────────────────
 *
 * 0 → 0.42 is the approach, 0.42 → 0.62 is the hold, 0.62 → 1 is the exit.
 * The hold matters: without a flat middle the element is only ever at 1:1 for
 * a single frame, which reads as drift rather than as a camera settling.
 *
 * Ranges stay small — 14% of scale, 18° of rotation — because the effect
 * should be felt rather than watched. The engine smooths progress before it
 * arrives here, so a trackpad flick sweeps the range instead of snapping.
 *
 * There is no `filter: blur()` anywhere: a blur driven by scroll re-rasterises
 * the whole section every frame, which is the usual cause of a "cinematic"
 * page stuttering. Opacity reads the same and costs the compositor nothing.
 */
const STOPS = [0, 0.42, 0.62, 1] as const;

export const Cinematic: React.FC<Props> = ({
  children,
  variant = 'zoom',
  intensity = 1,
  className = '',
  fade = true,
}) => {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const host = outer.current;
    const target = inner.current;
    if (!host || !target) return;

    return subscribe(host, ({ progress: p }) => {
      const k = intensity < 0 ? 0 : intensity > 2 ? 2 : intensity;

      let scale = 1;
      let translate = 0;
      let rotate = 0;

      switch (variant) {
        case 'perspective':
          // Tilted away on approach, flat across the hold, a slight lean back
          // on the way out so the gesture closes instead of just stopping.
          rotate = ramp(p, STOPS, [18 * k, 0, 0, -7 * k]);
          scale = ramp(p, STOPS, [1 - 0.13 * k, 1, 1, 1 - 0.06 * k]);
          translate = ramp(p, STOPS, [46 * k, 0, 0, -20 * k]);
          break;

        case 'parallax':
          scale = 1.06;
          translate = mix(70 * k, -70 * k, p);
          break;

        case 'zoom':
        default:
          scale = ramp(p, STOPS, [1 - 0.14 * k, 1, 1, 1 - 0.08 * k]);
          translate = ramp(p, STOPS, [48 * k, 0, 0, -24 * k]);
          break;
      }

      // Floor kept high: a large dark panel at low opacity over a cream page
      // reads as grey and broken, not as depth.
      const opacity = fade ? ramp(p, [0, 0.24, 0.78, 1], [0.6, 1, 1, 0.7]) : 1;

      target.style.transform = `translate3d(0,${translate.toFixed(2)}px,0) rotateX(${rotate.toFixed(2)}deg) scale(${scale.toFixed(4)})`;
      target.style.opacity = opacity.toFixed(3);
    });
  }, [variant, intensity, fade, reduced]);

  // A page that zooms as you scroll is a textbook vestibular trigger. The fix
  // is to not zoom — not to zoom instantly.
  if (reduced) return <div className={className}>{children}</div>;

  return (
    <div
      ref={outer}
      className={className}
      style={variant === 'perspective' ? { perspective: '1400px' } : undefined}
    >
      <div ref={inner} className="will-change-transform">
        {children}
      </div>
    </div>
  );
};

export default Cinematic;
