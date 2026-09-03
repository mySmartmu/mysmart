'use client';

import React, { useEffect, useRef, useState } from 'react';
import { clamp, mix, subscribe, useReducedMotion } from '@/components/motion';

interface Props {
  lead: string;
  /** The live pinned product walk-through revealed through the opening. */
  children: React.ReactNode;
}

const DIVE_HEIGHT = '180svh';

const HEX = [
  [1, 0],
  [0.5, -0.8660254],
  [-0.5, -0.8660254],
  [-1, 0],
  [-0.5, 0.8660254],
  [0.5, 0.8660254],
] as const;

const hexPath = (cx: number, cy: number, radius: number) =>
  HEX.map(([x, y], index) => `${index ? 'L' : 'M'}${(cx + x * radius).toFixed(1)},${(cy + y * radius).toFixed(1)}`).join('') + 'Z';

const ease = (value: number) =>
  value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;

/**
 * A cinematic entrance for the real pinned product walk-through.
 *
 * The showcase is deliberately a sibling of the clipping frame, not a child
 * of it. That preserves its sticky behavior while this overlay opens a hole
 * directly onto the same Credence screen the visitor will then scroll through.
 */
export const ProductDive: React.FC<Props> = ({ children, lead }) => {
  const host = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const cover = useRef<SVGPathElement>(null);
  const intro = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const element = frame.current;
    if (!element) return;

    const measure = () => {
      const bounds = element.getBoundingClientRect();
      setSize((previous) =>
        previous.width === bounds.width && previous.height === bounds.height
          ? previous
          : { width: bounds.width, height: bounds.height }
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [reduced]);

  useEffect(() => {
    if (reduced || !size.width || !size.height) return;
    const element = host.current;
    if (!element) return;

    const centreX = size.width / 2;
    const centreY = size.height / 2;
    const endRadius = Math.hypot(size.width, size.height) * 1.1;

    const render = (progress: number) => {
      const entered = ease(clamp((progress - 0.06) / 0.78));
      const radius = mix(54, endRadius, entered);
      const introExit = clamp((entered - 0.18) / 0.42);

      if (cover.current) {
        cover.current.setAttribute(
          'd',
          `M${-size.width},${-size.height}H${size.width * 2}V${size.height * 2}H${-size.width}Z${hexPath(centreX, centreY, radius)}`
        );
      }
      if (intro.current) {
        intro.current.style.opacity = (1 - introExit).toFixed(3);
        intro.current.style.transform = `translate3d(0, 0, 0) scale(${mix(1, 2.05, entered).toFixed(3)})`;
      }
    };

    render(0);
    return subscribe(element, ({ pinned }) => render(pinned));
  }, [reduced, size.height, size.width]);

  return (
    <div className="relative">
      {!reduced && (
        <div ref={host} className="pointer-events-none relative z-10 -mx-6" style={{ height: DIVE_HEIGHT }}>
          <div ref={frame} className="sticky top-0 h-[100svh] overflow-hidden">
            {/* The even-odd path covers the viewport except for a growing
                hexagon, exposing the actual sticky showcase below. */}
            <svg className="absolute inset-0 h-full w-full" aria-hidden="true" focusable="false">
              <path
                ref={cover}
                fill="#f7fbfc"
                fillRule="evenodd"
                d="M-5000,-5000H5000V5000H-5000ZM0,0Z"
              />
            </svg>

            <div
              ref={intro}
              className="absolute inset-0 flex items-center justify-center will-change-transform"
              style={{ opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' }}
            >
              <div className="max-w-3xl px-6 text-center">
                <p className="mb-4 text-sm font-medium uppercase tracking-wide text-[#71cff3]">
                  Product Ecosystem
                </p>
                <h2 className="mb-6 text-4xl font-bold text-[#053446] md:text-6xl">
                  Products and platforms
                </h2>
                <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#95969a] md:text-xl">{lead}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Begin the live sticky sequence at the same document position as the
          overlay. It is outside the clipping frame, so sticky still works. */}
      <div style={{ marginTop: reduced ? 0 : `-${DIVE_HEIGHT}` }}>{children}</div>
    </div>
  );
};

export default ProductDive;
