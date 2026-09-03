'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Phone, Code, Sparkles, Zap, Server, Globe } from 'lucide-react';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { Cinematic, TiltCard, Magnetic, TextReveal, CountUp } from '@/components/motion';
import {
  STATS,
  CAPABILITIES,
  PROCESS,
  REASONS,
  HORIZONS,
  FOUNDERS,
  SECTORS,
} from '@/data/company';

const capabilityIcons = {
  code: Code,
  sparkles: Sparkles,
  zap: Zap,
  server: Server,
  globe: Globe,
} as const;

const Company = () => {
  return (
    <div className="overflow-hidden bg-[#fcfcfa] pb-0 pt-32">

      {/* ─── INTRO ───────────────────────────────────────────────────────── */}
      <section className="relative px-6 py-20">
        <div className="animate-glow absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#71cff3]/10 blur-[130px]" />

        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(5, 52, 70, 0.10) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 35%, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 35%, black 30%, transparent 75%)',
          }}
        />

        <div className="mx-auto max-w-6xl">
          <h1 className="mb-8 text-center text-4xl font-bold text-[#053446] md:text-6xl">
            <TextReveal as="span" text="A Mauritian technology company" className="block" />
            <TextReveal
              as="span"
              text="that stays to support it"
              delay={0.3}
              gradient
              className="animate-gradient-text block bg-gradient-to-r from-[#053446] via-[#71cff3] to-[#053446] bg-clip-text text-transparent"
            />
          </h1>

          <RevealOnScroll delay={0.45} initiallyVisible>
            <p className="mx-auto mb-8 max-w-4xl text-center text-2xl font-semibold leading-relaxed text-[#053446] md:text-3xl">
              We design and deliver technology that simplifies how businesses operate — from custom
              applications and AI integration to automation, infrastructure and hardware.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.55} initiallyVisible>
            <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-[#95969a]">
              Our focus is on replacing fragmented and manual processes with practical, connected
              solutions — built, hosted and supported locally.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ─── STATS ───────────────────────────────────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <Cinematic variant="zoom" intensity={0.5} fade={false}>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {STATS.map((stat) => (
                <TiltCard
                  key={stat.label}
                  tilt={5}
                  glare={false}
                  className="rounded-2xl border border-[#053446]/10 bg-white p-6 text-center transition-colors duration-500 hover:border-[#71cff3]/40"
                >
                  <div className="relative z-10">
                    <p className="mb-1 text-3xl font-extrabold tracking-tight text-[#053446] md:text-4xl">
                      <CountUp
                        value={stat.value}
                        from={stat.from}
                        decimals={stat.decimals}
                        suffix={stat.suffix}
                      />
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#95969a]">
                      {stat.label}
                    </p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </Cinematic>
        </div>
      </section>

      {/* ─── FOUNDERS ────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <RevealOnScroll>
            <div className="mb-12 text-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-wide text-[#71cff3]">
                The people who do the work
              </p>
              <h2 className="mb-4 text-3xl font-bold text-[#053446] md:text-4xl">
                Founder-led and hands-on
              </h2>
              <p className="mx-auto max-w-2xl text-[#95969a]">
                The two people below are the ones who will be in your meetings and on your systems.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {FOUNDERS.map((founder, idx) => (
              <RevealOnScroll key={founder.name} delay={0.1 * (idx + 1)} className="h-full">
                <TiltCard
                  tilt={5}
                  className="h-full rounded-3xl border border-[#053446]/10 bg-[#fcfcfa] p-8 transition-colors duration-500 hover:border-[#71cff3]/40"
                >
                  <div
                    aria-hidden
                    className="soft-glow pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full"
                  />
                  <div className="relative z-10 flex h-full flex-col">
                    <h3 className="mb-1 text-2xl font-bold text-[#053446]">{founder.name}</h3>
                    <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-[#71cff3]">
                      {founder.role}
                    </p>
                    <p className="mb-6 leading-relaxed text-[#95969a]">{founder.bio}</p>

                    <div className="mt-auto flex flex-col gap-2 border-t border-[#053446]/10 pt-5">
                      <a
                        href={`tel:${founder.phone.replace(/\s/g, '')}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#053446] transition-colors hover:text-[#71cff3]"
                      >
                        <Phone size={15} className="text-[#71cff3]" />
                        {founder.phone}
                      </a>
                      <a
                        href={`mailto:${founder.email}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-[#053446] transition-colors hover:text-[#71cff3]"
                      >
                        <Mail size={15} className="text-[#71cff3]" />
                        {founder.email}
                      </a>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-8 right-8 h-0.5 scale-x-0 bg-gradient-to-r from-transparent via-[#71cff3]/60 to-transparent transition-transform duration-500 group-hover/tilt:scale-x-100" />
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE DO ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#053446] py-28">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="animate-glow absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#71cff3]/10 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <RevealOnScroll>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">What We Do</h2>
              <p className="mx-auto max-w-3xl text-[#95969a]">
                Five capabilities that combine into one delivery. Most engagements use three of them
                at once, which is the reason for keeping them under one roof.
              </p>
            </div>
          </RevealOnScroll>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {CAPABILITIES.map((cap, idx) => {
              const Icon = capabilityIcons[cap.icon];
              return (
                <RevealOnScroll key={cap.title} delay={0.08 * idx} className="h-full">
                  <TiltCard
                    tilt={8}
                    className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-500 hover:border-[#71cff3]/30 hover:bg-white/[0.08]"
                  >
                    <div className="relative z-10">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#71cff3]/15 transition-transform duration-500 group-hover/tilt:scale-110 group-hover/tilt:rotate-3">
                        <Icon size={20} className="text-[#71cff3]" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-white">{cap.title}</h3>
                      <p className="text-sm leading-relaxed text-[#95969a]">{cap.desc}</p>
                    </div>
                  </TiltCard>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK ─────────────────────────────────────────────────── */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <div className="mb-14 max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-wide text-[#71cff3]">
                How We Work
              </p>
              <h2 className="mb-5 text-3xl font-bold leading-tight text-[#053446] md:text-5xl">
                Three phases, one team throughout
              </h2>
              <p className="text-lg leading-relaxed text-[#95969a]">
                Nobody gets handed to a different vendor halfway, and nobody disappears at go-live.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PROCESS.map((phase, idx) => (
              <RevealOnScroll key={phase.step} delay={0.12 * idx} className="h-full">
                <TiltCard
                  tilt={6}
                  className="h-full rounded-3xl border border-[#053446]/10 bg-white p-8 transition-colors duration-500 hover:border-[#71cff3]/40"
                >
                  <div className="relative z-10">
                    <span className="mb-6 block text-5xl font-extrabold text-[#71cff3]/25 transition-colors duration-500 group-hover/tilt:text-[#71cff3]/60">
                      {phase.step}
                    </span>
                    <h3 className="mb-4 text-2xl font-bold text-[#053446]">{phase.title}</h3>
                    <p className="text-sm leading-relaxed text-[#95969a]">{phase.desc}</p>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ──────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <RevealOnScroll>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-[#053446] md:text-4xl">Our Experience</h2>
              <p className="mx-auto max-w-3xl leading-relaxed text-[#95969a]">
                Hospitality, retail, training institutions, accounting, logistics, IT services, home
                services and industrial businesses. Each solution is tailored to the operation it
                serves while staying efficient and scalable.
              </p>
            </div>
          </RevealOnScroll>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {SECTORS.map((sector, idx) => (
              <RevealOnScroll key={sector} delay={0.05 * idx}>
                <div className="group relative overflow-hidden rounded-xl border border-[#053446]/10 bg-[#fcfcfa] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#71cff3]/40 hover:shadow-lg hover:shadow-[#71cff3]/10">
                  <div className="absolute left-1/2 top-0 h-[2px] w-8 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#71cff3] to-transparent opacity-0 transition-all duration-300 group-hover:w-16 group-hover:opacity-100" />
                  <p className="text-sm font-semibold text-[#053446]">{sector}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CLIENTS CHOOSE US ───────────────────────────────────────── */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <RevealOnScroll>
            <div className="mb-14 max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-wide text-[#71cff3]">
                Why Clients Choose Us
              </p>
              <h2 className="text-3xl font-bold leading-tight text-[#053446] md:text-5xl">
                Four reasons, and the honest version of each
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {REASONS.map((reason, idx) => (
              <RevealOnScroll key={reason.step} delay={0.08 * idx} className="h-full">
                <TiltCard
                  tilt={5}
                  className="h-full rounded-3xl border border-[#053446]/10 bg-white p-8 transition-colors duration-500 hover:border-[#71cff3]/40"
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

      {/* ─── THREE HORIZONS ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#053446] py-28">
        <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-[#71cff3]/[0.08] blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <RevealOnScroll>
            <div className="mb-14 max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-wide text-[#71cff3]">
                Where We Are Going
              </p>
              <h2 className="mb-5 text-3xl font-bold leading-tight text-white md:text-5xl">
                Three horizons
              </h2>
              <p className="text-lg leading-relaxed text-[#95969a]">
                Each horizon is funded by the one before it, and nothing on the list is speculative —
                every item has either a client waiting or a product already in market.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {HORIZONS.map((horizon, idx) => (
              <RevealOnScroll key={horizon.title} delay={0.12 * idx} className="h-full">
                <TiltCard
                  tilt={6}
                  className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-500 hover:border-[#71cff3]/30 hover:bg-white/[0.07]"
                >
                  <div className="relative z-10">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#71cff3]">
                      {horizon.period}
                    </p>
                    <h3 className="mb-6 text-2xl font-bold text-white">{horizon.title}</h3>
                    <ul className="space-y-3">
                      {horizon.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#71cff3]" />
                          <span className="text-sm leading-relaxed text-[#95969a]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MISSION ─────────────────────────────────────────────────────── */}
      <section className="bg-[#fcfcfa] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Cinematic variant="zoom" intensity={0.6}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#053446] to-[#053446]/90 p-12 text-center md:p-16">
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              <div className="animate-glow absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#71cff3]/10 blur-[120px]" />
              <div className="relative z-10">
                <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Our Mission</h2>
                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#95969a] md:text-xl">
                  To simplify operations by providing cutting-edge IT and automation solutions that
                  transform manual processes into intelligent digital ecosystems — for businesses and
                  homes alike.
                </p>
              </div>
            </div>
          </Cinematic>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <RevealOnScroll>
            <div className="text-center">
              <h2 className="mb-6 text-3xl font-bold leading-tight text-[#053446] md:text-5xl">
                Ready to Transform Your Operations?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-[#95969a]">
                Let&apos;s discuss how our solutions can streamline your business or home.
              </p>
              <Magnetic strength={9}>
                <Link
                  href="/contact"
                  prefetch={false}
                  className="sheen group inline-flex items-center gap-3 rounded-full bg-[#053446] px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#053446]/90 hover:shadow-lg hover:shadow-[#053446]/20 active:scale-95"
                >
                  Schedule Free Consultation
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Company;
