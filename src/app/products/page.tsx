'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Cloud, Sparkles } from 'lucide-react';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { PlatformCard } from '@/components/PlatformCard';
import { Cinematic, TiltCard, Magnetic, TextReveal } from '@/components/motion';
import { PLATFORMS, SUITE, STATUS } from '@/data/products';
import { PRODUCTS_LEAD, PRODUCTS_FOOTNOTE } from '@/data/company';

const CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'ai', name: 'AI & automation' },
  { id: 'compliance', name: 'Compliance' },
  { id: 'finance', name: 'Finance' },
  { id: 'business', name: 'Business ops' },
  { id: 'logistics', name: 'Logistics' },
  { id: 'hardware', name: 'Hardware & IoT' },
  { id: 'infrastructure', name: 'Infrastructure' },
] as const;

const Products: React.FC = () => {
  const [category, setCategory] = useState<string>('all');

  const platforms = useMemo(
    () => (category === 'all' ? PLATFORMS : PLATFORMS.filter((p) => p.category === category)),
    [category]
  );
  const suite = useMemo(
    () => (category === 'all' ? SUITE : SUITE.filter((p) => p.category === category)),
    [category]
  );

  // Counts drive the pill labels, so an empty filter is never offered.
  const counts = useMemo(() => {
    const map: Record<string, number> = { all: PLATFORMS.length + SUITE.length };
    for (const item of [...PLATFORMS, ...SUITE]) {
      map[item.category] = (map[item.category] ?? 0) + 1;
    }
    return map;
  }, []);

  return (
    <div className="overflow-hidden bg-[#fcfcfa] pt-32">

      {/* ─── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative px-6 pb-10">
        <div className="animate-glow absolute left-1/2 top-0 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#71cff3]/10 blur-[130px]" />

        <div className="mx-auto max-w-4xl text-center">
          <RevealOnScroll initiallyVisible>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#053446]/10 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-[#053446] shadow-sm">
              <Sparkles size={14} className="text-[#71cff3]" />
              Ten products, one team
            </span>
          </RevealOnScroll>

          <h1 className="mb-6 text-5xl font-extrabold leading-[1.12] tracking-tight text-[#053446] md:text-7xl">
            <TextReveal as="span" text="Solutions built for" className="block" immediate />
            <TextReveal
              as="span"
              text="your success"
              delay={0.24}
              gradient
              immediate
              className="animate-gradient-text block pb-[0.1em] bg-gradient-to-r from-[#053446] via-[#71cff3] to-[#053446] bg-clip-text text-transparent"
            />
          </h1>

          <RevealOnScroll delay={0.4} initiallyVisible>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-[#95969a]">
              {PRODUCTS_LEAD}
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── FILTER ──────────────────────────────────────────────────────── */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll delay={0.15} initiallyVisible>
            <div className="flex flex-wrap justify-center gap-2.5">
              {CATEGORIES.filter((c) => counts[c.id]).map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCategory(c.id)}
                  aria-pressed={category === c.id}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 active:scale-95 ${
                    category === c.id
                      ? 'scale-105 bg-[#053446] text-white shadow-lg'
                      : 'border border-[#053446]/10 bg-white text-[#053446] hover:border-[#71cff3] hover:shadow-md'
                  }`}
                >
                  {c.name}
                  <span className="ml-2 opacity-60">({counts[c.id]})</span>
                </button>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── PLATFORMS ───────────────────────────────────────────────────── */}
      {platforms.length > 0 && (
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-7xl">
            <RevealOnScroll>
              <div className="mb-10">
                <p className="mb-3 text-sm font-medium uppercase tracking-wide text-[#71cff3]">
                  Platforms
                </p>
                <h2 className="text-3xl font-bold text-[#053446] md:text-4xl">
                  The systems we build businesses on
                </h2>
              </div>
            </RevealOnScroll>

            <Cinematic variant="zoom" intensity={0.5} fade={false}>
              <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
                {platforms.map((product, idx) => (
                  <RevealOnScroll key={product.id} delay={0.08 * (idx % 2)} className="h-full">
                    <PlatformCard product={product} detailed />
                  </RevealOnScroll>
                ))}
              </div>
            </Cinematic>
          </div>
        </section>
      )}

      {/* ─── BUSINESS SUITE ──────────────────────────────────────────────── */}
      {suite.length > 0 && (
        <section className="px-6 pb-32">
          <div className="mx-auto max-w-7xl">
            <RevealOnScroll>
              <div className="mb-10">
                <p className="mb-3 text-sm font-medium uppercase tracking-wide text-[#71cff3]">
                  Business suite
                </p>
                <h2 className="text-3xl font-bold text-[#053446] md:text-4xl">
                  The everyday tools that run alongside them
                </h2>
              </div>
            </RevealOnScroll>

            <Cinematic variant="zoom" intensity={0.5} fade={false}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {suite.map((item, idx) => {
                  const status = STATUS[item.status];
                  const body = (
                    <TiltCard
                      tilt={6}
                      className="h-full rounded-3xl border border-[#053446]/10 bg-white p-8 transition-colors duration-500 hover:border-[#71cff3]/40"
                    >
                      <div
                        aria-hidden
                        className="soft-glow pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full"
                      />
                      <div className="relative z-10 flex h-full flex-col">
                        <div className="mb-6 flex items-start justify-between gap-3">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#71cff3]/10 transition-transform duration-500 group-hover/tilt:scale-110 group-hover/tilt:rotate-3">
                            {item.logo ? (
                              <Image
                                src={item.logo}
                                alt={item.name}
                                width={160}
                                height={160}
                                sizes="48px"
                                className="h-10 w-10 object-contain"
                              />
                            ) : (
                              <Cloud size={24} className="text-[#71cff3]" />
                            )}
                          </div>
                          <span className="rounded-full border border-[#71cff3]/40 bg-[#71cff3]/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#71cff3]">
                            {status.label}
                          </span>
                        </div>

                        <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#71cff3]">
                          {item.kicker}
                        </p>
                        <h3 className="mb-3 text-2xl font-bold text-[#053446]">{item.name}</h3>
                        <p className="mb-6 text-sm leading-relaxed text-[#95969a]">{item.summary}</p>

                        <div className="mb-6 space-y-2.5">
                          {item.capabilities.map((cap) => (
                            <div key={cap} className="flex items-start gap-3">
                              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#71cff3]/15 text-[#71cff3]">
                                <Check size={12} strokeWidth={3} />
                              </span>
                              <span className="text-sm leading-relaxed text-[#95969a]">{cap}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-auto border-t border-[#053446]/10 pt-5">
                          <span className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-[#71cff3]">
                            {item.href ? 'Learn more' : 'Talk to us'}
                            <ArrowRight
                              size={15}
                              className="transition-transform duration-300 group-hover/tilt:translate-x-1"
                            />
                          </span>
                        </div>
                      </div>
                    </TiltCard>
                  );

                  return (
                    <RevealOnScroll key={item.id} delay={0.07 * (idx % 3)} className="h-full">
                      <Link
                        href={item.href ?? '/contact'}
                        prefetch={false}
                        className="block h-full"
                        aria-label={`${item.name}: ${item.summary}`}
                      >
                        {body}
                      </Link>
                    </RevealOnScroll>
                  );
                })}
              </div>
            </Cinematic>

            <RevealOnScroll>
              <p className="mt-12 text-center text-sm text-[#95969a]">{PRODUCTS_FOOTNOTE}</p>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <Cinematic variant="zoom" intensity={1}>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#053446] px-6 py-24 text-center md:px-16">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#71cff3]/10 blur-[150px]" />

              <div className="relative z-10 mx-auto max-w-3xl">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#71cff3]/20 px-4 py-2 text-sm font-semibold text-[#71cff3]">
                  <Sparkles size={16} />
                  Custom solutions available
                </div>

                <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                  Don&apos;t see what you need?
                  <br />
                  <span className="text-[#71cff3]">Let&apos;s build it together.</span>
                </h2>

                <p className="mx-auto mb-12 text-lg leading-relaxed text-[#95969a] md:text-xl">
                  We map the real process first, then build the system around your staff, approvals
                  and reporting, with software, AI and hardware from one team.
                </p>

                <Magnetic strength={9}>
                  <Link
                    href="/contact"
                    prefetch={false}
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#71cff3] px-10 py-5 font-bold text-[#053446] transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-[#71cff3]/20 active:scale-95"
                  >
                    Book a free consultation
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </Magnetic>
              </div>
            </div>
          </Cinematic>
        </div>
      </section>
    </div>
  );
};

export default Products;
