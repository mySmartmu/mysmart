'use client';

import React, { useEffect, useRef, useState } from 'react';
import { subscribe, useReducedMotion, clamp, mix } from '@/components/motion';

interface Props {
  /** What the viewer flies through the hexagon into. */
  children: React.ReactNode;
}

/**
 * The hexagon dive.
 *
 * The mySmart mark rises out of the page, then the scroll flies the camera
 * through its hexagon: the mark scales up until its opening is larger than the
 * window, and what is behind it — the partner wall — is revealed through the
 * hole. The pin then releases into normal scrolling.
 *
 * ── HOW THE HOLE IS CUT, AND WHY IT IS DONE THIS WAY ────────────────────────
 *
 * The cover is a single `<path>` with `fill-rule: evenodd`: an enormous outer
 * rectangle, then the hexagon. Even-odd makes the hexagon a hole rather than
 * more fill, so growing the hexagon opens the window.
 *
 * The obvious alternatives are both worse here:
 *
 *   · An SVG `<mask>` needs an offscreen buffer composited every frame.
 *   · Scaling the whole cover with a CSS transform is compositor-cheap, but
 *     the browser scales the rasterised bitmap, so by the time the hexagon
 *     fills the screen its edges are a blurry mess. The dive ends at roughly
 *     15x, which is far past the point where that shows.
 *
 * One flat-filled path repainting per frame is cheap, and it stays vector
 * sharp at every size. Only the `d` attribute changes; nothing re-lays-out.
 *
 * Growth is geometric rather than linear (`start · ratio^t`). A linear radius
 * decelerates visually as it grows — the last doubling takes as long as the
 * first, but covers far more screen — and reads as the dive stalling.
 */

/** Flat-top regular hexagon of circumradius 1, centred on the origin. */
const HEX = [
  [1, 0],
  [0.5, -0.8660254],
  [-0.5, -0.8660254],
  [-1, 0],
  [-0.5, 0.8660254],
  [0.5, 0.8660254],
] as const;

const hexPath = (cx: number, cy: number, r: number) =>
  HEX.map(([x, y], i) => `${i ? 'L' : 'M'}${(cx + x * r).toFixed(1)},${(cy + y * r).toFixed(1)}`).join('') + 'Z';

/** Ease-in-out-cubic. Slow to commit, fast through the middle, settles. */
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/** Radius at rest, in px — roughly the size of the mark in the navbar, enlarged. */
const R_START = 64;

export const HeroDive: React.FC<Props> = ({ children }) => {
  const host = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const cover = useRef<SVGPathElement>(null);
  const ringOuter = useRef<SVGPathElement>(null);
  const ringInner = useRef<SVGPathElement>(null);
  const wordmark = useRef<HTMLDivElement>(null);
  const hint = useRef<HTMLDivElement>(null);
  const revealed = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const reduced = useReducedMotion();

  // The hexagon is drawn in CSS pixels, so the SVG needs the frame's real size.
  useEffect(() => {
    if (reduced) return;
    const el = frame.current;
    if (!el) return;

    const measure = () => {
      const r = el.getBoundingClientRect();
      setSize((prev) => (prev.w === r.width && prev.h === r.height ? prev : { w: r.width, h: r.height }));
    };
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  useEffect(() => {
    if (reduced || !size.w || !size.h) return;
    const el = host.current;
    if (!el) return;

    const cx = size.w / 2;
    const cy = size.h / 2;

    // Big enough that the hexagon's narrowest span clears the frame. A flat-top
    // hexagon is only 0.866r tall, so height is usually the binding constraint.
    const rEnd = Math.max(size.w / 2, size.h / 1.732) * 1.6;
    const ratio = rEnd / R_START;

    return subscribe(el, ({ pinned: p }) => {
      // 0.00-0.16 the mark arrives · 0.16-0.78 the dive · 0.78-1 held open.
      const arrive = clamp(p / 0.16);
      const dive = ease(clamp((p - 0.16) / 0.62));

      const r = R_START * Math.pow(ratio, dive);

      cover.current?.setAttribute(
        'd',
        `M${-size.w},${-size.h}H${size.w * 2}V${size.h * 2}H${-size.w}Z${hexPath(cx, cy, r)}`
      );

      // The ring rides the hole and thins out as it passes the viewer.
      const ringAlpha = mix(1, 0, clamp((dive - 0.45) / 0.4));
      for (const [ref, scale, width] of [
        [ringOuter, 1.34, 11],
        [ringInner, 1, 7],
      ] as const) {
        const node = ref.current;
        if (!node) continue;
        node.setAttribute('d', hexPath(cx, cy, r * scale));
        node.setAttribute('stroke-width', String(width * Math.pow(r / R_START, 0.55)));
        node.setAttribute('opacity', ringAlpha.toFixed(3));
      }

      if (wordmark.current) {
        // Sits just under the mark so the two read as one lockup, then slides
        // past the camera as it moves in.
        const out = clamp((dive - 0.04) / 0.26);
        wordmark.current.style.opacity = (arrive * (1 - out)).toFixed(3);
        wordmark.current.style.transform = `translate3d(0,${mix(104, 420, dive).toFixed(1)}px,0) scale(${mix(1, 3.2, dive).toFixed(3)})`;
      }

      if (hint.current) {
        // Only useful while the pin is still asking for scroll.
        hint.current.style.opacity = (arrive * (1 - clamp((dive - 0.55) / 0.3))).toFixed(3);
      }

      if (revealed.current) {
        // Already moving before the hole is wide, so it reads as depth rather
        // than as a picture switched on at the end.
        revealed.current.style.opacity = mix(0.25, 1, clamp(dive / 0.75)).toFixed(3);
        revealed.current.style.transform = `scale(${mix(1.14, 1, ease(clamp(dive / 0.85))).toFixed(4)})`;
      }
    });
  }, [reduced, size.w, size.h]);

  // Reduced motion gets the destination without the journey.
  if (reduced) return <>{children}</>;

  return (
    <div ref={host} className="relative" style={{ height: '260svh' }}>
      <div ref={frame} className="sticky top-0 h-[100svh] overflow-hidden">
        {/* What you fly into */}
        <div
          ref={revealed}
          className="absolute inset-0 flex flex-col items-stretch justify-center will-change-transform"
          style={{ opacity: 0.25, transform: 'scale(1.14)' }}
        >
          {children}
        </div>

        {/* The cover, with the hexagon cut out of it */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden
          focusable="false"
        >
          <path ref={cover} fill="#fcfcfa" fillRule="evenodd" d="" />
          <path ref={ringOuter} fill="none" stroke="#95969a" strokeWidth={11} strokeLinejoin="round" d="" />
          <path ref={ringInner} fill="none" stroke="#71cff3" strokeWidth={7} strokeLinejoin="round" d="" />
        </svg>

        {/* The wordmark, riding above the mark */}
        <div
          ref={wordmark}
          className="pointer-events-none absolute inset-0 flex items-center justify-center will-change-transform"
          style={{ opacity: 0 }}
        >
          <p className="text-3xl font-extrabold tracking-tight text-[#053446] md:text-5xl">
            my<span className="text-[#71cff3]">Smart</span>
          </p>
        </div>

        {/* Hint that the pin is scroll-driven, not stuck */}
        <div
          ref={hint}
          className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center"
          style={{ opacity: 0 }}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#95969a]">
            Scroll
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroDive;
