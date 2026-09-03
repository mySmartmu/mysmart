'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  Code,
  Server,
  Globe,
  Zap,
  Sparkles,
  ShieldCheck,
  Cloud,
  Lock,
  Gauge,
  Cpu,
} from 'lucide-react';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { NetworkBackdrop } from '@/components/NetworkBackdrop';
import { PartnerMarquee } from '@/components/PartnerMarquee';
import { ProductDive } from '@/components/ProductDive';
import { StickyShowcase } from '@/components/StickyShowcase';
import { Cinematic, TiltCard, Magnetic, TextReveal, CountUp, Parallax } from '@/components/motion';
import { PLATFORMS, SUITE, STATUS } from '@/data/products';
import {
  POSITIONING,
  CAPABILITIES,
  SERVICES_LEAD,
  PROCESS,
  PROCESS_LEAD,
  PRODUCTS_LEAD,
  PRODUCTS_FOOTNOTE,
  REASONS,
  REASONS_LEAD,
  INFRASTRUCTURE,
  INFRASTRUCTURE_LEAD,
  CERTIFICATIONS,
} from '@/data/company';

const capabilityIcons = {
  code: Code,
  sparkles: Sparkles,
  zap: Zap,
  server: Server,
  globe: Globe,
} as const;

const infraIcons = [ShieldCheck, Gauge, Lock, Cpu];

const otto = PLATFORMS.find((p) => p.flagship)!;
const rest = PLATFORMS.filter((p) => !p.flagship);

const HomeClient: React.FC = () => {
  return (
    <div className="overflow-x-clip bg-[#fcfcfa] pb-0 pt-24">

      {/* ─── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative isolate mx-auto mb-4 flex min-h-[58vh] max-w-7xl flex-col items-center justify-center px-6 pb-8 text-center">
        <NetworkBackdrop />
        <div className="animate-glow absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#71cff3]/10 blur-[120px]" />

        {/* Floating accents drift against the scroll */}
        <Parallax speed={40} className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
          <div
            className="absolute left-[7%] top-[16%]"
            style={{ animation: 'float-soft 7s ease-in-out infinite' }}
          >
            <div className="h-16 w-16 rotate-12 rounded-[20px] border border-[#71cff3]/20 bg-gradient-to-br from-[#71cff3]/25 to-[#71cff3]/5 shadow-lg" />
          </div>
          <div
            className="absolute right-[8%] top-[58%]"
            style={{ animation: 'float-soft 9s ease-in-out infinite reverse' }}
          >
            <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-[#053446]/10 to-[#71cff3]/20 shadow-lg" />
          </div>
          <div
            className="absolute bottom-[14%] left-[16%]"
            style={{ animation: 'float-soft 8s ease-in-out infinite' }}
          >
            <div className="h-10 w-10 -rotate-12 rounded-[12px] border border-[#053446]/10 bg-gradient-to-bl from-[#053446]/15 to-[#71cff3]/10 shadow-md" />
          </div>
        </Parallax>

        <div
          className="absolute right-[18%] top-[28%] -z-10 h-3 w-3 rounded-full bg-[#71cff3] shadow-[0_0_14px_rgba(113,207,243,0.5)]"
          style={{ animation: 'pulse-dot 3s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-[26%] left-[12%] -z-10 h-2 w-2 rounded-full bg-[#71cff3]/70 shadow-[0_0_10px_rgba(113,207,243,0.4)]"
          style={{ animation: 'pulse-dot 4s ease-in-out infinite 1s' }}
        />
        <div
          className="absolute left-[34%] top-[20%] -z-10 h-2 w-2 rounded-full bg-[#053446]/30"
          style={{ animation: 'pulse-dot 3.5s ease-in-out infinite 0.5s' }}
        />

        <RevealOnScroll delay={0.05} initiallyVisible>
          <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#053446]/10 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-[#053446] shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#71cff3] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#71cff3]" />
            </span>
            Built, hosted and supported in Mauritius
          </span>
        </RevealOnScroll>

        <h1 className="mb-8 text-5xl font-extrabold leading-[1.05] tracking-tight text-[#053446] md:text-8xl">
          <TextReveal as="span" text="Smart Technology." className="block" />
          <TextReveal
            as="span"
            text="Made Simple."
            delay={0.28}
            gradient
            className="animate-gradient-text block bg-gradient-to-r from-[#053446] via-[#71cff3] to-[#053446] bg-clip-text text-transparent"
          />
        </h1>

        <RevealOnScroll delay={0.45} initiallyVisible>
          <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-[#95969a]">
            {POSITIONING}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.55} initiallyVisible>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Magnetic strength={7}>
              <Link
                href="/contact"
                prefetch={false}
                className="sheen group flex items-center justify-center gap-2 rounded-full bg-[#053446] px-8 py-4 font-semibold text-white transition-all hover:bg-[#053446]/90 hover:shadow-lg hover:shadow-[#053446]/20 active:scale-95"
              >
                Free Consultation
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Magnetic>
            <Magnetic strength={7}>
              <Link
                href="/products"
                prefetch={false}
                className="rounded-full border border-[#95969a]/20 bg-white px-8 py-4 font-semibold text-[#053446] transition-all hover:border-[#71cff3]/40 hover:bg-[#fcfcfa] active:scale-95"
              >
                See the portfolio
              </Link>
            </Magnetic>
          </div>
        </RevealOnScroll>
      </section>

      {/* ─── 2. TRUSTED PARTNERS ─────────────────────────────────────────── */}
      <PartnerMarquee />

      {/* ─── 3. WHAT WE DO ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#053446] py-32">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#71cff3]/10 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <RevealOnScroll>
            <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-sm font-medium uppercase tracking-wide text-[#71cff3]">
                  What We Do
                </p>
                <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                  Five main services,
                  <br />
                  <span className="text-[#71cff3]">combined as needed</span>
                </h2>
              </div>
              <p className="max-w-md text-base leading-relaxed text-[#95969a]">{SERVICES_LEAD}</p>
            </div>
          </RevealOnScroll>

          <Cinematic variant="zoom" intensity={0.5} fade={false}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
              {CAPABILITIES.map((cap, idx) => {
                const Icon = capabilityIcons[cap.icon];
                return (
                  <RevealOnScroll key={cap.title} delay={0.08 * idx}>
                    <TiltCard
                      tilt={8}
                      className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-500 hover:border-[#71cff3]/30 hover:bg-white/[0.07]"
                    >
                      <div className="relative z-10">
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#71cff3]/15 transition-transform duration-500 group-hover/tilt:scale-110 group-hover/tilt:rotate-3">
                          <Icon size={22} className="text-[#71cff3]" />
                        </div>
                        <h3 className="mb-3 text-lg font-semibold text-white">{cap.title}</h3>
                        <p className="text-sm leading-relaxed text-[#95969a]">{cap.desc}</p>
                      </div>
                      <div className="absolute bottom-0 left-7 right-7 h-0.5 scale-x-0 bg-gradient-to-r from-transparent via-[#71cff3]/60 to-transparent transition-transform duration-500 group-hover/tilt:scale-x-100" />
                    </TiltCard>
                  </RevealOnScroll>
                );
              })}
            </div>
          </Cinematic>
        </div>
      </section>

      {/* ─── 4. FLAGSHIP — OTTO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 py-32">
        <div className="absolute left-1/2 top-1/3 -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#71cff3]/[0.07] blur-[150px]" />

        <div className="mx-auto max-w-6xl">
          <RevealOnScroll>
            <div className="mb-12 text-center">
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#053446] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#71cff3]">
                <Sparkles size={14} />
                Flagship
              </span>
              <h2 className="mb-6 text-4xl font-bold leading-tight text-[#053446] md:text-6xl">
                A workforce of{' '}
                <span className="animate-gradient-text bg-gradient-to-r from-[#053446] via-[#71cff3] to-[#053446] bg-clip-text text-transparent">
                  AI agents
                </span>{' '}
                for everyday business work
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#95969a]">
                {otto.description}
              </p>
            </div>
          </RevealOnScroll>

          {/* The cinematic centrepiece: a tilted plane that rotates flat as you reach it */}
          <Cinematic variant="perspective" intensity={1}>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#053446] p-8 shadow-2xl shadow-[#053446]/20 md:p-14">
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#71cff3]/20 blur-[110px]" />

              <div className="relative z-10">
                <div className="mb-10 flex flex-col items-center gap-6 text-center">
                  <Image
                    src={otto.logo}
                    alt="Otto logo"
                    width={otto.logoWidth}
                    height={otto.logoHeight}
                    sizes="240px"
                    className="h-14 w-auto object-contain"
                  />
                  <p className="max-w-xl text-lg font-medium text-white/90">{otto.summary}</p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <span className="rounded-full border border-[#71cff3]/40 bg-[#71cff3]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#71cff3]">
                      {STATUS[otto.status].label}
                    </span>
                    <a
                      href="https://heyotto.mu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 text-sm font-bold text-white transition-colors hover:text-[#71cff3]"
                    >
                      heyotto.mu
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>

                {/* The workforce, as job titles */}
                <div className="mb-10 flex flex-wrap justify-center gap-2.5">
                  {[
                    'The Invoicer',
                    'The Invoice Processor',
                    'The Bookkeeper',
                    'The VAT Preparer',
                    'The KYC Agent',
                    'The Compliance Assistant',
                    'The Bank Reconciler',
                    'The Registrar',
                    'The Collector',
                  ].map((job, i) => (
                    <span
                      key={job}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#71cff3]/40 hover:bg-[#71cff3]/10 hover:text-white"
                      style={{ transitionDelay: `${i * 12}ms` }}
                    >
                      Otto <span className="text-[#71cff3]">{job}</span>
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 text-center">
                  {[
                    { n: 7, label: 'Available now' },
                    { n: 3, label: 'Coming soon' },
                    { n: 8, label: 'Planned' },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="mb-1 text-3xl font-extrabold text-[#71cff3] md:text-4xl">
                        <CountUp value={item.n} duration={1100} />
                      </p>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#95969a]">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                {otto.boundary && (
                  <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <ShieldCheck size={20} className="mt-0.5 flex-shrink-0 text-[#71cff3]" />
                    <p className="text-sm leading-relaxed text-[#95969a]">{otto.boundary}</p>
                  </div>
                )}
              </div>
            </div>
          </Cinematic>
        </div>
      </section>

      {/* ─── 5. THE PORTFOLIO ────────────────────────────────────────────── */}
      <section className="px-6 pb-32">
        {/* The heading is the entry scene: it zooms into the first product,
            then the independently pinned card sequence takes over. */}
        <ProductDive lead={PRODUCTS_LEAD}>
          {/* The dive opens directly onto this frame. It is not a preview:
              this is the actual pinned product walk-through. */}
          <StickyShowcase products={rest} leadInSvh={80} />
        </ProductDive>

        <div className="mx-auto max-w-7xl">

          {/* The business suite, in a denser row */}
          <RevealOnScroll>
            <p className="mb-6 mt-16 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#95969a]">
              And the business suite
            </p>
          </RevealOnScroll>

          <Cinematic variant="zoom" intensity={0.5} fade={false}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {SUITE.map((item, idx) => {
                const body = (
                  <TiltCard
                    tilt={9}
                    className="h-full rounded-2xl border border-[#053446]/10 bg-white p-6 transition-colors duration-500 hover:border-[#71cff3]/40"
                  >
                    <div className="relative z-10 flex h-full flex-col">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#71cff3]/10 transition-transform duration-500 group-hover/tilt:scale-110">
                        {item.logo ? (
                          <Image
                            src={item.logo}
                            alt={item.name}
                            width={160}
                            height={160}
                            sizes="40px"
                            className="h-8 w-8 object-contain"
                          />
                        ) : (
                          <Cloud size={20} className="text-[#71cff3]" />
                        )}
                      </div>
                      <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#71cff3]">
                        {item.kicker}
                      </p>
                      <h3 className="mb-2 text-lg font-bold text-[#053446]">{item.name}</h3>
                      <p className="text-sm leading-relaxed text-[#95969a]">{item.summary}</p>
                      {item.href && (
                        <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#71cff3]">
                          Learn more
                          <ArrowRight size={13} className="transition-transform duration-300 group-hover/tilt:translate-x-1" />
                        </span>
                      )}
                    </div>
                  </TiltCard>
                );

                return (
                  <RevealOnScroll key={item.id} delay={0.06 * idx} className="h-full">
                    {item.href ? (
                      <Link href={item.href} prefetch={false} className="block h-full">
                        {body}
                      </Link>
                    ) : (
                      body
                    )}
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

      {/* ─── 6. HOW WE WORK ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#053446] py-32">
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-[#71cff3]/[0.08] blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <RevealOnScroll>
            <div className="mb-16 max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-wide text-[#71cff3]">
                How We Work
              </p>
              <h2 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
                Understand, build,
                <br />
                <span className="text-[#71cff3]">and support</span>
              </h2>
              <p className="text-lg leading-relaxed text-[#95969a]">{PROCESS_LEAD}</p>
            </div>
          </RevealOnScroll>

          <Cinematic variant="zoom" intensity={0.5} fade={false}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {PROCESS.map((phase, idx) => (
                <RevealOnScroll key={phase.step} delay={0.12 * idx} className="h-full">
                  <TiltCard
                    tilt={6}
                    className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-500 hover:border-[#71cff3]/30 hover:bg-white/[0.07]"
                  >
                    <div className="relative z-10">
                      <span className="mb-6 block text-5xl font-extrabold text-[#71cff3]/25 transition-colors duration-500 group-hover/tilt:text-[#71cff3]/50">
                        {phase.step}
                      </span>
                      <h3 className="mb-4 text-2xl font-bold text-white">{phase.title}</h3>
                      <p className="text-sm leading-relaxed text-[#95969a]">{phase.desc}</p>
                    </div>
                  </TiltCard>
                </RevealOnScroll>
              ))}
            </div>
          </Cinematic>
        </div>
      </section>

      {/* ─── 7. INFRASTRUCTURE ───────────────────────────────────────────── */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <div className="mb-16 text-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-wide text-[#71cff3]">
                Infrastructure
              </p>
              <h2 className="mb-6 text-4xl font-bold text-[#053446] md:text-5xl">
                Secure enterprise infrastructure
              </h2>
              <p className="mx-auto max-w-2xl leading-relaxed text-[#95969a]">
                {INFRASTRUCTURE_LEAD}
              </p>
            </div>
          </RevealOnScroll>

          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {INFRASTRUCTURE.map((item, idx) => {
              const Icon = infraIcons[idx] ?? ShieldCheck;
              return (
                <RevealOnScroll key={item.title} delay={0.08 * idx} className="h-full">
                  <TiltCard
                    tilt={7}
                    className="h-full rounded-2xl border border-[#053446]/10 bg-white p-7 transition-colors duration-500 hover:border-[#71cff3]/40"
                  >
                    <div className="relative z-10">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#71cff3]/10 transition-transform duration-500 group-hover/tilt:scale-110 group-hover/tilt:rotate-3">
                        <Icon size={22} className="text-[#71cff3]" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-[#053446]">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-[#95969a]">{item.desc}</p>
                    </div>
                  </TiltCard>
                </RevealOnScroll>
              );
            })}
          </div>

          <RevealOnScroll>
            <div className="flex flex-col items-center gap-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#95969a]">
                Certified and audited on
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {CERTIFICATIONS.map((cert) => (
                  <span
                    key={cert}
                    className="rounded-full border border-[#053446]/10 bg-white px-5 py-2.5 text-sm font-semibold text-[#053446] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#71cff3]/40 hover:shadow-md hover:shadow-[#71cff3]/10"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── 8. WHY CLIENTS CHOOSE US ────────────────────────────────────── */}
      <section className="bg-white px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <div className="mb-16 max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-wide text-[#71cff3]">
                Why Clients Choose Us
              </p>
              <h2 className="mb-5 text-4xl font-bold leading-tight text-[#053446] md:text-5xl">
                Why clients
                <br />
                <span className="text-[#71cff3]">choose us</span>
              </h2>
              <p className="text-lg leading-relaxed text-[#95969a]">{REASONS_LEAD}</p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {REASONS.map((reason, idx) => (
              <RevealOnScroll key={reason.step} delay={0.08 * idx} className="h-full">
                <TiltCard
                  tilt={5}
                  className="h-full rounded-3xl border border-[#053446]/10 bg-[#fcfcfa] p-8 transition-colors duration-500 hover:border-[#71cff3]/40"
                >
                  <div className="relative z-10 flex gap-6">
                    <span className="text-4xl font-extrabold text-[#71cff3]/30 transition-colors duration-500 group-hover/tilt:text-[#71cff3]/60">
                      {reason.step}
                    </span>
                    <div>
                      <h3 className="mb-3 text-xl font-bold text-[#053446]">{reason.title}</h3>
                      <p className="text-sm leading-relaxed text-[#95969a]">{reason.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-[#fcfcfa] py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Cinematic variant="zoom" intensity={1}>
            <div className="isolate relative overflow-hidden rounded-[2.5rem] bg-[#053446]">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#71cff3]/10 blur-[150px]" />
              </div>
              <div className="relative p-12 text-center md:p-20">
                <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                  Ready to Transform
                  <br />
                  <span className="text-[#71cff3]">Your Business?</span>
                </h2>
                <p className="mx-auto mb-12 max-w-2xl text-lg text-[#95969a] md:text-xl">
                  Let&apos;s map what your team actually does — then build the system around it.
                </p>
                <Magnetic strength={9}>
                  <Link
                    href="/contact"
                    prefetch={false}
                    className="group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full bg-white px-6 py-5 text-base font-semibold text-[#053446] transition-all duration-300 hover:shadow-2xl hover:shadow-[#71cff3]/20 active:scale-95 md:px-10 md:text-lg"
                  >
                    Get Your Free Consultation
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
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

export default HomeClient;
