'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import mySmartLogo from '../../mySmart_logoS.png';
import { clamp, mix, subscribe, useReducedMotion } from '@/components/motion';
import { type Platform } from '@/data/products';

interface Props {
  /** The first frozen card shown immediately after the transition. */
  product: Platform;
}

const HEX = [
  [1, 0],
  [0.5, -0.8660254],
  [-0.5, -0.8660254],
  [-1, 0],
  [-0.5, 0.8660254],
  [0.5, 0.8660254],
] as const;

const hexClip = (cx: number, cy: number, radius: number) =>
  `polygon(${HEX.map(([x, y]) => `${(cx + x * radius).toFixed(1)}px ${(cy + y * radius).toFixed(1)}px`).join(', ')})`;

const ease = (value: number) =>
  value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;

/**
 * A brief transition into the pinned product walk-through.
 *
 * It deliberately sits before, rather than around, StickyShowcase: a sticky
 * frame cannot work inside an ancestor that clips or transforms during the
 * animation. The final product preview is therefore a visual landing point;
 * the real frozen card takes over on the next scroll step.
 */
export const ProductDive: React.FC<Props> = ({ product }) => {
  const host = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const aperture = useRef<HTMLDivElement>(null);
  const mark = useRef<HTMLDivElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const reduced = useReducedMotion();
  const dark = product.surface === 'dark';

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
      const markExit = clamp((entered - 0.12) / 0.38);

      if (aperture.current) {
        aperture.current.style.clipPath = hexClip(centreX, centreY, radius);
      }
      if (mark.current) {
        mark.current.style.opacity = (1 - markExit).toFixed(3);
        mark.current.style.transform = `translate3d(0, 0, 0) scale(${mix(0.72, 4.4, entered).toFixed(3)})`;
      }
      if (preview.current) {
        preview.current.style.opacity = mix(0.7, 1, entered).toFixed(3);
        preview.current.style.transform = `scale(${mix(1.06, 1, entered).toFixed(3)})`;
      }
    };

    render(0);
    return subscribe(element, ({ pinned }) => render(pinned));
  }, [reduced, size.height, size.width]);

  // People who prefer reduced motion move directly from the title to the
  // regular, independently pinned product cards.
  if (reduced) return null;

  return (
    <div ref={host} className="relative -mx-6" style={{ height: '155svh' }}>
      <div ref={frame} className="sticky top-0 h-[100svh] overflow-hidden bg-[#f7fbfc]">
        <div
          ref={aperture}
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center bg-[#eef9fd] will-change-[clip-path]"
          style={{ clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%)' }}
        >
          <div
            ref={preview}
            className={`grid w-[min(90vw,68rem)] gap-8 rounded-[2rem] border p-7 shadow-2xl sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center ${
              dark ? 'border-white/10 bg-[#053446]' : 'border-[#053446]/10 bg-white'
            }`}
            style={{ opacity: 0.7, transform: 'scale(1.06)' }}
          >
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#71cff3]">
                {product.kicker}
              </p>
              <p className={`mt-4 text-3xl font-bold sm:text-5xl ${dark ? 'text-white' : 'text-[#053446]'}`}>
                {product.name}
              </p>
              <p className={`mt-4 max-w-lg text-base leading-relaxed sm:text-lg ${dark ? 'text-white/70' : 'text-[#95969a]'}`}>
                {product.summary}
              </p>
            </div>
            <div
              className={`flex min-h-44 items-center justify-center rounded-2xl border p-8 ${
                dark ? 'border-white/10 bg-white/[0.06]' : 'border-[#053446]/[0.06] bg-[#053446]/[0.03]'
              }`}
            >
              <Image
                src={product.logo}
                alt=""
                width={product.logoWidth}
                height={product.logoHeight}
                sizes="(max-width: 768px) 220px, 320px"
                className={`${product.logoClass} max-h-20 w-auto max-w-full object-contain`}
              />
            </div>
          </div>
        </div>

        {/* The supplied mark is the only logo used by the dive. */}
        <div
          ref={mark}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center will-change-transform"
          style={{ opacity: 1, transform: 'translate3d(0, 0, 0) scale(0.72)' }}
        >
          <Image
            src={mySmartLogo}
            alt=""
            sizes="(max-width: 768px) 96px, 128px"
            className="h-24 w-auto md:h-32"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDive;
