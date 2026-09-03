'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react';
import { subscribe, useReducedMotion } from '@/components/motion';
import { STATUS, type Platform } from '@/data/products';

interface Props {
  products: Platform[];
  className?: string;
}

/**
 * The pinned product walk-through.
 *
 * The section is `products.length × 100svh` tall and its inner frame is
 * sticky, so one screen holds still while the scroll advances an index. Text
 * and visual cross-fade on that index, and the section releases into normal
 * scrolling once the last product has been shown.
 *
 * ── WHY THE INDEX IS STATE AND NOTHING ELSE IS ──────────────────────────────
 *
 * Everything else in this site derives its transform from the scroll engine
 * and never re-renders. Here the content genuinely changes — a different
 * product, different words, a different logo — so a React render is
 * unavoidable. It happens once per product across the whole scroll rather
 * than once per frame, which is the distinction that matters. The engine
 * callback compares before it sets, so a frame that does not cross a
 * boundary costs nothing.
 *
 * ── THE PIN'S ONE HARD REQUIREMENT ──────────────────────────────────────────
 *
 * `position: sticky` is broken by `overflow: hidden` on ANY ancestor — the
 * element then sticks inside that box instead of the viewport, which for an
 * auto-height wrapper means it does not stick at all. Pages using this must
 * clip with `overflow-x: clip` rather than `overflow-x: hidden`.
 *
 * The progress rail is not decoration: a pinned section takes away the
 * reader's sense of how much is left, and that is disorienting unless you
 * hand it back.
 */
export const StickyShowcase: React.FC<Props> = ({ products, className = '' }) => {
  const host = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const el = host.current;
    if (!el) return;

    return subscribe(el, ({ pinned }) => {
      // Bias into each band so the switch lands when the product is properly
      // on screen rather than the instant its range begins.
      const next = Math.min(
        products.length - 1,
        Math.max(0, Math.floor(pinned * products.length + 0.12))
      );
      setActive((prev) => (prev === next ? prev : next));
    });
  }, [products.length, reduced]);

  // Reduced motion: no pin, no cross-fade. Just the products, stacked and
  // readable, which is all the pin was ever presenting anyway.
  if (reduced) {
    return (
      <div className={`space-y-24 ${className}`}>
        {products.map((product, i) => (
          <div key={product.id} className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <ShowcaseText product={product} index={i} total={products.length} />
            <ShowcaseVisual product={product} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={host}
      className={`relative ${className}`}
      style={{ height: `${products.length * 100}svh` }}
    >
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* ── Left: the words ─────────────────────────────────────────── */}
          <div className="flex gap-6">
            <ProgressRail count={products.length} active={active} />
            <div className="relative min-h-[22rem] flex-1 sm:min-h-[24rem]">
              {products.map((product, i) => (
                <div
                  key={product.id}
                  aria-hidden={i !== active}
                  className="absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    opacity: i === active ? 1 : 0,
                    transform: i === active ? 'translateY(0)' : `translateY(${i < active ? -16 : 22}px)`,
                    filter: i === active ? 'blur(0)' : 'blur(6px)',
                    pointerEvents: i === active ? 'auto' : 'none',
                  }}
                >
                  <ShowcaseText product={product} index={i} total={products.length} />
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: the product ──────────────────────────────────────── */}
          <div className="relative hidden aspect-[4/3] lg:block">
            {products.map((product, i) => (
              <div
                key={product.id}
                aria-hidden={i !== active}
                className="absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? 'scale(1)' : 'scale(0.94)',
                  pointerEvents: i === active ? 'auto' : 'none',
                }}
              >
                <ShowcaseVisual product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function ShowcaseText({
  product,
  index,
  total,
}: {
  product: Platform;
  index: number;
  total: number;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#71cff3]">
          {product.kicker}
        </span>
        <span className="text-[11px] tabular-nums text-[#95969a]">
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-3 text-3xl font-bold text-[#053446] sm:mt-4 sm:text-4xl md:text-5xl">
        {product.name}
      </h3>

      <p className="mt-3 max-w-lg text-base font-medium leading-relaxed text-[#053446] sm:mt-4 sm:text-lg">
        {product.summary}
      </p>

      <p className="mt-3 hidden max-w-lg text-sm leading-relaxed text-[#95969a] sm:block">
        {product.description}
      </p>

      <ul className="mt-5 space-y-2.5 sm:mt-6">
        {product.capabilities.slice(0, 4).map((cap, i) => (
          <li key={cap} className={`items-start gap-3 ${i < 2 ? 'flex' : 'hidden sm:flex'}`}>
            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#71cff3]/15 text-[#71cff3]">
              <Check size={12} strokeWidth={3} />
            </span>
            <span className="text-sm leading-relaxed text-[#95969a]">{cap}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 sm:mt-7">
        {product.href ? (
          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-[#71cff3] transition-colors hover:text-[#053446]"
          >
            {product.href.replace('https://', '')}
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </a>
        ) : (
          <Link
            href="/products"
            prefetch={false}
            className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-[#71cff3] transition-colors hover:text-[#053446]"
          >
            See the full detail
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
            />
          </Link>
        )}
      </div>
    </div>
  );
}

function ShowcaseVisual({ product }: { product: Platform }) {
  const dark = product.surface === 'dark';
  return (
    <div
      className={`relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border p-8 shadow-xl ${
        dark ? 'border-white/10 bg-[#053446]' : 'border-[#053446]/10 bg-white'
      }`}
    >
      <div
        aria-hidden
        className="soft-glow pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full"
      />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div
          className={`flex h-28 items-center rounded-2xl border px-6 ${
            dark ? 'border-white/10 bg-white/[0.06]' : 'border-[#053446]/[0.06] bg-[#053446]/[0.03]'
          }`}
        >
          <Image
            src={product.logo}
            alt={`${product.name} logo`}
            width={product.logoWidth}
            height={product.logoHeight}
            sizes="260px"
            className={`${product.logoClass} w-auto max-w-[200px] object-contain`}
          />
        </div>
        <span className="flex-shrink-0 rounded-full border border-[#71cff3]/40 bg-[#71cff3]/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#71cff3]">
          {STATUS[product.status].label}
        </span>
      </div>

      {/* Middle tier. Without it a product that carries no boundary line leaves
          a hollow gap between the logo and the integrations. */}
      <div className="relative z-10 my-6">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#95969a]">
          Built for
        </p>
        <ul className="space-y-1.5">
          {product.segments.map((segment) => (
            <li
              key={segment}
              className={`flex items-center gap-2.5 text-sm ${dark ? 'text-white/80' : 'text-[#053446]/80'}`}
            >
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#71cff3]" />
              {segment}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10">
        {product.boundary && (
          <div
            className={`mb-5 flex items-start gap-3 rounded-2xl border p-4 ${
              dark ? 'border-white/10 bg-white/[0.05]' : 'border-[#053446]/[0.06] bg-[#053446]/[0.03]'
            }`}
          >
            <ShieldCheck size={18} className="mt-0.5 flex-shrink-0 text-[#71cff3]" />
            <p className="text-xs leading-relaxed text-[#95969a]">{product.boundary}</p>
          </div>
        )}

        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#95969a]">
          Works with
        </p>
        <div className="flex flex-wrap gap-2">
          {product.worksWith.map((tool) => (
            <span
              key={tool}
              className={`rounded-full border px-3 py-1 text-[11px] font-medium ${
                dark
                  ? 'border-white/10 bg-white/[0.06] text-[#95969a]'
                  : 'border-[#053446]/10 bg-[#053446]/[0.04] text-[#053446]/70'
              }`}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProgressRail({ count, active }: { count: number; active: number }) {
  return (
    <div className="flex h-64 shrink-0 flex-col items-center gap-2 pt-2 sm:h-72" aria-hidden>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="relative w-px flex-1 overflow-hidden rounded-full bg-[#053446]/10">
          <span
            className="absolute inset-x-0 top-0 rounded-full bg-[#71cff3] transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ height: i <= active ? '100%' : '0%' }}
          />
        </span>
      ))}
    </div>
  );
}

export default StickyShowcase;
