'use client';

import React, { useEffect, useRef } from 'react';
import { subscribe, useReducedMotion, clamp, mix } from './scroll-engine';

export type CinematicVariant =
  /** Pushes in as it arrives and pulls back as it leaves — the default dolly. */
  | 'zoom'
  /** A tilted plane that rotates flat as you reach it. The signature move. */
  | 'perspective'
  /** Scale plus a long vertical drift, for full-bleed backdrops. */
  | 'parallax';

interface Props {
  children: React.ReactNode;
  variant?: CinematicVariant;
  /** How far the effect travels. 1 is the tuned default; 0.5 halves it. */
  intensity?: number;
  className?: string;
  /** Fade the edges of the travel as well as scaling. */
  fade?: boolean;
}

/** Ease-out-cubic — fast at the extremes, calm through the middle. */
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Scroll-driven cinematic framing.
 *
 * ── WHY THE RANGES ARE SMALL ────────────────────────────────────────────────
 *
 * Scale never travels further than 0.88 → 1 and rotation never past 16°.
 * Anything wider and the text swims: the effect should be felt rather than
 * watched. The engine smooths the progress before it reaches here, so a
 * trackpad flick sweeps the range instead of snapping through it.
 *
 * ── WHY THERE IS NO BLUR ────────────────────────────────────────────────────
 *
 * An earlier version faded the edges with `filter: blur()`. A blur driven by
 * scroll re-rasterises the whole section on every frame — on a full-bleed
 * panel that is the single most expensive thing this file could do. Opacity
 * reads almost identically and costs the compositor nothing.
 *
 * The wrapper is what gets measured; the inner element is what moves. Keeping
 * them separate means the transform never feeds back into the measurement,
 * which is what makes a scale-on-scroll effect jitter.
 */
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

    return subscribe(host, ({ centered }) => {
      // Distance from the centre of the viewport, eased. 0 = centred.
      const away = ease(clamp(Math.abs(centered)));
      const k = clamp(intensity, 0, 2);

      let scale = 1;
      let translate = 0;
      let rotate = 0;

      switch (variant) {
        case 'perspective':
          scale = mix(1, 1 - 0.1 * k, away);
          rotate = mix(0, 16 * k, ease(clamp(0.5 - centered / 2)));
          translate = mix(0, 18 * k, away);
          break;

        case 'parallax':
          scale = mix(1.06, 1.06 + 0.1 * k, away);
          translate = centered * -60 * k;
          break;

        case 'zoom':
        default:
          scale = mix(1, 1 - 0.12 * k, away);
          translate = mix(0, 34 * k, away) * (centered < 0 ? 1 : -0.45);
          break;
      }

      // Floor kept high: a large dark panel at low opacity over a cream page
      // reads as grey and broken, not as depth.
      const opacity = fade ? mix(1, 0.78, ease(clamp((Math.abs(centered) - 0.4) / 0.6))) : 1;

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
