'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check, ChevronDown, ShieldCheck } from 'lucide-react';
import { TiltCard } from '@/components/motion';
import { STATUS, type Platform } from '@/data/products';

interface Props {
  product: Platform;
  /** Full card with capabilities and integrations. The compact form is a teaser. */
  detailed?: boolean;
}

/** Dark cards carry the light wordmarks; light cards carry the dark ones. */
const surfaceStyles = (surface: Platform['surface']) =>
  surface === 'dark'
    ? {
        shell: 'bg-[#053446] border-white/10 hover:border-[#71cff3]/40',
        plate: 'bg-white/[0.06] border-white/10',
        title: 'text-white',
        kicker: 'text-[#71cff3]',
        body: 'text-[#95969a]',
        strong: 'text-white/90',
        rule: 'border-white/10',
        chip: 'bg-white/[0.06] text-[#95969a] border-white/10',
        linkHover: 'hover:text-white',
      }
    : {
        shell: 'bg-white border-[#053446]/10 hover:border-[#71cff3]/40',
        plate: 'bg-[#053446]/[0.03] border-[#053446]/[0.06]',
        title: 'text-[#053446]',
        kicker: 'text-[#71cff3]',
        body: 'text-[#95969a]',
        strong: 'text-[#053446]',
        rule: 'border-[#053446]/10',
        chip: 'bg-[#053446]/[0.04] text-[#053446]/70 border-[#053446]/10',
        linkHover: 'hover:text-[#053446]',
      };

export const PlatformCard: React.FC<Props> = ({ product, detailed = false }) => {
  const [open, setOpen] = useState(false);
  const s = surfaceStyles(product.surface);
  const status = STATUS[product.status];

  return (
    <TiltCard
      className={`rounded-3xl border ${s.shell} overflow-hidden transition-[border-color,box-shadow] duration-500 hover:shadow-2xl hover:shadow-[#71cff3]/10`}
      tilt={detailed ? 4 : 6}
    >
      {/* Ambient glow, warmed on hover */}
      <div
        aria-hidden
        className="soft-glow pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
      />

      <div className="relative z-10 flex h-full flex-col p-7 md:p-8">
        {/* Logo plate + status */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className={`flex h-24 items-center rounded-2xl border px-5 ${s.plate}`}>
            <Image
              src={product.logo}
              alt={`${product.name} logo`}
              width={product.logoWidth}
              height={product.logoHeight}
              sizes="240px"
              className={`${product.logoClass} w-auto max-w-[176px] object-contain transition-transform duration-500 group-hover/tilt:scale-105`}
            />
          </div>

          <span
            className={`flex-shrink-0 rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider ${
              status.inMarket
                ? 'border-[#71cff3]/40 bg-[#71cff3]/15 text-[#71cff3]'
                : `${s.chip}`
            }`}
          >
            {status.label}
          </span>
        </div>

        <p className={`mb-1.5 text-xs font-bold uppercase tracking-[0.16em] ${s.kicker}`}>
          {product.kicker}
        </p>
        <h3 className={`mb-3 text-2xl font-bold md:text-3xl ${s.title}`}>{product.name}</h3>
        <p className={`mb-4 text-base font-medium leading-relaxed ${s.strong}`}>{product.summary}</p>

        <p className={`mb-6 text-sm leading-relaxed ${s.body}`}>{product.description}</p>

        {detailed && (
          <>
            {/* Capabilities — first four always visible, the rest on request */}
            <div className="mb-5 space-y-2.5">
              {product.capabilities.slice(0, 4).map((cap) => (
                <div key={cap} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#71cff3]/15 text-[#71cff3]">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className={`text-sm leading-relaxed ${s.body}`}>{cap}</span>
                </div>
              ))}
            </div>

            {product.capabilities.length > 4 && (
              <div className={`border-t pt-4 ${s.rule}`}>
                <button
                  type="button"
                  onClick={() => setOpen((v) => !v)}
                  aria-expanded={open}
                  className={`flex w-full items-center justify-between text-left text-xs font-bold uppercase tracking-wider ${s.strong}`}
                >
                  {open ? 'Show less' : `${product.capabilities.length - 4} more capabilities`}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    open ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-2.5">
                      {product.capabilities.slice(4).map((cap) => (
                        <div key={cap} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#71cff3]/15 text-[#71cff3]">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <span className={`text-sm leading-relaxed ${s.body}`}>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {product.boundary && (
              <div
                className={`mt-6 flex items-start gap-3 rounded-2xl border p-4 ${s.plate}`}
              >
                <ShieldCheck size={18} className="mt-0.5 flex-shrink-0 text-[#71cff3]" />
                <p className={`text-xs leading-relaxed ${s.body}`}>{product.boundary}</p>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {product.worksWith.map((tool) => (
                <span
                  key={tool}
                  className={`rounded-full border px-3 py-1 text-[11px] font-medium ${s.chip}`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </>
        )}

        {/* Footer pinned to the bottom so a row of cards lines up */}
        <div className={`mt-auto flex flex-wrap items-center justify-between gap-3 border-t pt-5 ${s.rule}`}>
          <span className={`text-xs font-medium ${s.body}`}>{product.segments[0]}</span>

          {product.href ? (
            <a
              href={product.href}
              target={product.href.startsWith('http') ? '_blank' : undefined}
              rel={product.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group/link inline-flex items-center gap-1.5 text-sm font-bold text-[#71cff3] transition-colors ${s.linkHover}`}
            >
              {product.href.startsWith('http') ? product.href.replace('https://', '') : 'Learn more'}
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </a>
          ) : (
            <Link
              href="/contact"
              prefetch={false}
              className={`group/link inline-flex items-center gap-1.5 text-sm font-bold text-[#71cff3] transition-colors ${s.linkHover}`}
            >
              Talk to us
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </Link>
          )}
        </div>
      </div>
    </TiltCard>
  );
};

export default PlatformCard;
