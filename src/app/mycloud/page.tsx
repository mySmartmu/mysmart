/*
 * Deliberately NOT a client component.
 *
 * Nothing in this file uses state, an effect or an event handler — it only
 * composes components that do. With `'use client'` at the top, React had to
 * ship and hydrate this entire tree in the browser: on the homepage that was
 * ~900 elements and a single 2.2s main-thread task on a throttled phone,
 * during which nothing on the page could be tapped.
 *
 * Without the directive this renders on the server and only the interactive
 * leaves below (the reveals, the marquee, the canvas) hydrate. Everything
 * passed to them as `children` stays server-rendered. No animation changes;
 * they are the same components, mounted the same way.
 */
import React from 'react';
import {
  Check,
  ArrowRight,
  Cloud,
  Smartphone,
  ShieldCheck,
  Users,
  Activity,
  Settings,
  HardDrive,
  CalendarClock,
  RefreshCw,
} from 'lucide-react';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { SpotlightCard } from '@/components/SpotlightCard';

const heroStats = [
  { value: '99%', label: 'Uptime SLA' },
  { value: 'Daily', label: 'Auto Backups' },
  { value: 'Instant', label: 'Remote Access' },
  { value: '1 Fee', label: 'All Included' },
];

const features = [
  {
    icon: Smartphone,
    title: 'Instant Remote Access',
    description: 'Access files from any device, anywhere. Desktop, mobile or browser, always in sync.',
  },
  {
    icon: CalendarClock,
    title: 'Daily Automated Backups',
    description: 'Your data backed up every day automatically. No setup, no manual steps.',
  },
  {
    icon: ShieldCheck,
    title: 'End-to-End Encryption',
    description: 'All data encrypted in transit and at rest. Your files stay private, always.',
  },
  {
    icon: Users,
    title: 'User Permissions & Sharing',
    description: 'Fine-grained access control for your whole team. Secure sharing with internal or external users.',
  },
  {
    icon: Activity,
    title: '99% Uptime SLA',
    description: 'We monitor the infrastructure around the clock so storage is available when you need it.',
  },
  {
    icon: Settings,
    title: 'Fully Managed, No IT Needed',
    description: 'Updates, maintenance, hardware and monitoring all handled by our team.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Choose your plan',
    description: 'Pick the plan that fits your team size and budget. All plans are billed yearly.',
  },
  {
    number: '02',
    title: 'We set everything up',
    description: 'Our team provisions your space, creates accounts, and configures access. No IT effort from you.',
  },
  {
    number: '03',
    title: 'Connect & collaborate',
    description: 'Install the app, log in, and start storing files. Your team is up in minutes.',
  },
  {
    number: '04',
    title: 'We handle the rest',
    description: 'Backups, monitoring, and updates are all managed by us. You focus on your business.',
  },
];

const plans = [
  {
    name: 'Starter',
    price: 'MUR 850',
    cadence: 'per month · billed yearly',
    users: '1 to 8 Users',
    features: [
      'Daily automated backups',
      'File sharing & sync',
      'Remote access (mobile & desktop)',
      'User permissions management',
      'End-to-end encryption',
      'Email support',
      '99% Uptime SLA',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: 'MUR 1,350',
    cadence: 'per month · billed yearly',
    users: '8 to 16 Users',
    features: [
      'Everything in Starter',
      'Real-time backup',
      'Advanced encryption',
      'Priority phone support',
      'Enhanced monitoring',
      '99% Uptime SLA',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact us',
    cadence: 'Custom pricing for your team',
    users: 'Unlimited Users',
    features: [
      'Everything in Professional',
      'Continuous backup',
      'Advanced user management',
      'Dedicated account manager',
      'Custom SLA & reporting',
      'On-site support available',
    ],
    popular: false,
  },
];

const MyCloud: React.FC = () => {
  return (
    <div className="overflow-hidden bg-[#fcfcfa]">

      {/* Hero Section */}
      <section className="relative px-6 overflow-hidden pt-32 pb-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#71cff3]/10 rounded-full blur-[140px] -z-10 animate-glow" />

        {/* Modern dot-grid backdrop, fading out toward the edges */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(5, 52, 70, 0.10) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 35%, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 35%, black 30%, transparent 75%)',
          }}
        />

        <div className="max-w-7xl mx-auto">
          <div className="relative grid grid-cols-1 lg:grid-cols-[0.9fr_1.3fr] gap-4 items-center min-h-[64vh]">

            {/* Mobile: animated cloud cluster as faint background */}
            <div className="absolute inset-0 lg:hidden overflow-hidden pointer-events-none">
              <div className="absolute top-[8%] right-[5%] w-[85%] h-[80%] rounded-[50%_50%_45%_55%/55%_45%_55%_45%] bg-gradient-to-br from-[#71cff3]/12 to-[#053446]/8 blur-[1px]" style={{ animation: 'cloudMorph 14s ease-in-out infinite' }} />
              <div className="absolute top-[14%] right-[10%] w-[80px] h-[80px] rounded-[22px] bg-gradient-to-br from-[#71cff3]/20 to-[#71cff3]/8 border border-[#71cff3]/20 shadow-lg flex items-center justify-center rotate-6" style={{ animation: 'cloudFloat 6s ease-in-out infinite' }}>
                <Cloud size={30} className="text-[#053446]" />
              </div>
              <div className="absolute bottom-[18%] left-[8%] w-[70px] h-[70px] rounded-[18px] bg-gradient-to-tr from-[#053446]/12 to-[#71cff3]/15 border border-[#053446]/10 shadow-lg flex items-center justify-center -rotate-12" style={{ animation: 'cloudFloat 8s ease-in-out infinite reverse' }}>
                <ShieldCheck size={26} className="text-[#053446]" />
              </div>
              <div className="absolute inset-0 bg-[#fcfcfa]/25 backdrop-blur-[1px]" />
            </div>

            {/* Left: Text */}
            <div className="text-left relative z-10">
              <RevealOnScroll>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#71cff3]/10 text-[#053446] text-xs font-semibold mb-8">
                  <Cloud size={14} className="text-[#71cff3]" />
                  Managed Cloud Storage · Powered by mySmart
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.1}>
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-[#053446] tracking-tight mb-8 leading-[1.1] lg:whitespace-nowrap">
                  Your files, hosted.
                  <br />
                  Zero hardware.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#053446] via-[#71cff3] to-[#053446] animate-gradient-text">
                    Zero headache.
                  </span>
                </h1>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <p className="text-xl text-[#95969a] max-w-xl mb-10 leading-relaxed">
                  myCloud gives you enterprise-grade storage space, fully managed,
                  always on, always secure. Just focus on your work.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#pricing"
                    className="group sheen px-8 py-4 bg-[#053446] text-white rounded-full font-semibold hover:bg-[#053446]/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#053446]/20 active:scale-95 flex items-center justify-center gap-2"
                  >
                    See pricing
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="/contact"
                    className="px-8 py-4 bg-white border border-[#95969a]/20 text-[#053446] rounded-full font-semibold hover:bg-[#fcfcfa] hover:border-[#71cff3]/40 transition-all hover:scale-105 active:scale-95 flex items-center justify-center"
                  >
                    Talk to us
                  </a>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right: Animated cloud-themed cluster */}
            <RevealOnScroll delay={0.2} className="relative z-0 lg:-ml-32">
              <div className="relative w-full h-[620px] hidden lg:block">
                {/* Soft fade to left so the heading overlaps gently */}
                <div className="absolute -left-12 top-0 bottom-0 w-16 z-20 bg-gradient-to-r from-[#fcfcfa]/70 to-transparent pointer-events-none" />

                {/* Animated connection lines */}
                <svg className="absolute inset-0 w-full h-full z-[1] pointer-events-none" viewBox="0 0 500 520" fill="none">
                  <line x1="250" y1="150" x2="380" y2="250" stroke="#71cff3" strokeWidth="2" strokeOpacity="0.2" strokeDasharray="6 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="3s" repeatCount="indefinite" />
                  </line>
                  <line x1="250" y1="150" x2="130" y2="270" stroke="#71cff3" strokeWidth="2" strokeOpacity="0.15" strokeDasharray="6 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="4s" repeatCount="indefinite" />
                  </line>
                  <line x1="380" y1="250" x2="300" y2="400" stroke="#053446" strokeWidth="2" strokeOpacity="0.12" strokeDasharray="6 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="3.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="130" y1="270" x2="300" y2="400" stroke="#71cff3" strokeWidth="2" strokeOpacity="0.18" strokeDasharray="6 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2.5s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* Central hub — the cloud */}
                <div className="absolute top-[18%] left-[42%] w-[120px] h-[120px] z-10" style={{ animation: 'cloudFloat 7s ease-in-out infinite' }}>
                  <div className="w-full h-full rounded-[30px] bg-gradient-to-br from-[#053446] to-[#053446]/80 shadow-2xl shadow-[#053446]/20 flex items-center justify-center rotate-6">
                    <Cloud size={48} className="text-[#71cff3]" />
                  </div>
                </div>

                {/* Node — remote access (blue) */}
                <div className="absolute top-[38%] right-[12%] w-[90px] h-[90px] z-10" style={{ animation: 'cloudFloat 6s ease-in-out infinite reverse' }}>
                  <div className="w-full h-full rounded-[24px] bg-gradient-to-br from-[#71cff3]/30 to-[#71cff3]/10 backdrop-blur-sm border border-[#71cff3]/30 shadow-xl flex items-center justify-center -rotate-6">
                    <Smartphone size={28} className="text-[#053446]" />
                  </div>
                </div>

                {/* Node — encryption (green) */}
                <div className="absolute top-[44%] left-[12%] w-[85px] h-[85px] z-10" style={{ animation: 'cloudFloat 8s ease-in-out infinite' }}>
                  <div className="w-full h-full rounded-[22px] bg-gradient-to-tr from-[#26de81]/20 to-[#26de81]/8 backdrop-blur-sm border border-[#26de81]/30 shadow-xl flex items-center justify-center rotate-12">
                    <ShieldCheck size={26} className="text-[#1ba968]" />
                  </div>
                </div>

                {/* Node — backups (purple) */}
                <div className="absolute bottom-[14%] left-[48%] -translate-x-1/2 w-[95px] h-[95px] z-10" style={{ animation: 'cloudFloat 5s ease-in-out infinite reverse' }}>
                  <div className="w-full h-full rounded-[26px] bg-gradient-to-bl from-[#a55eea]/25 to-[#a55eea]/8 backdrop-blur-sm border border-[#a55eea]/30 shadow-xl flex items-center justify-center -rotate-3">
                    <RefreshCw size={30} className="text-[#8b3fd4]" />
                  </div>
                </div>

                {/* Node — storage (orange) */}
                <div className="absolute bottom-[24%] right-[10%] w-[72px] h-[72px] z-10" style={{ animation: 'cloudFloat 6s ease-in-out infinite' }}>
                  <div className="w-full h-full rounded-[18px] bg-gradient-to-br from-[#ff9f43]/25 to-[#ff9f43]/8 backdrop-blur-sm border border-[#ff9f43]/30 shadow-lg flex items-center justify-center rotate-6">
                    <HardDrive size={24} className="text-[#e07c1a]" />
                  </div>
                </div>

                {/* Node — sharing (blue) */}
                <div className="absolute bottom-[22%] left-[20%] w-[66px] h-[66px] z-10" style={{ animation: 'cloudFloat 7s ease-in-out infinite reverse' }}>
                  <div className="w-full h-full rounded-[16px] bg-gradient-to-tr from-[#71cff3]/20 to-[#71cff3]/8 backdrop-blur-sm border border-[#71cff3]/25 shadow-lg flex items-center justify-center -rotate-12">
                    <Users size={22} className="text-[#053446]" />
                  </div>
                </div>

                {/* Large soft morphing background shape */}
                <div className="absolute top-[8%] right-[5%] w-[85%] h-[80%] rounded-[50%_50%_45%_55%/55%_45%_55%_45%] bg-gradient-to-br from-[#71cff3]/10 via-[#a55eea]/6 to-[#053446]/5 blur-[1px] z-0" style={{ animation: 'cloudMorph 14s ease-in-out infinite' }} />

                {/* Pulsing dots */}
                <div className="absolute top-[30%] left-[35%] w-3 h-3 rounded-full bg-[#71cff3] shadow-[0_0_16px_rgba(113,207,243,0.5)] z-[2]" style={{ animation: 'cloudPulse 3s ease-in-out infinite' }} />
                <div className="absolute top-[58%] right-[26%] w-2.5 h-2.5 rounded-full bg-[#ff9f43] shadow-[0_0_12px_rgba(255,159,67,0.5)] z-[2]" style={{ animation: 'cloudPulse 4s ease-in-out infinite 1s' }} />
                <div className="absolute bottom-[36%] left-[38%] w-2 h-2 rounded-full bg-[#a55eea] shadow-[0_0_10px_rgba(165,94,234,0.5)] z-[2]" style={{ animation: 'cloudPulse 3.5s ease-in-out infinite 0.5s' }} />
                <div className="absolute top-[44%] right-[34%] w-2 h-2 rounded-full bg-[#26de81] shadow-[0_0_10px_rgba(38,222,129,0.5)] z-[2]" style={{ animation: 'cloudPulse 3s ease-in-out infinite 0.8s' }} />
              </div>
            </RevealOnScroll>
          </div>

          {/* Hero Stats */}
          <RevealOnScroll delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden bg-white border border-[#053446]/10 rounded-2xl py-6 px-4 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#71cff3]/10 hover:-translate-y-1 hover:border-[#71cff3]/30 text-center"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-12 rounded-b-full bg-gradient-to-r from-transparent via-[#71cff3] to-transparent opacity-60 transition-all duration-500 group-hover:w-24 group-hover:opacity-100" />
                  <div className="text-3xl md:text-4xl font-bold text-[#053446] mb-1 transition-colors duration-300">{stat.value}</div>
                  <div className="text-sm text-[#95969a] uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>

        {/* Hero animation keyframes */}
      </section>

      {/* Features Section */}
      <section className="py-28 px-6 bg-[#053446] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#71cff3]/10 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <p className="text-sm font-bold text-[#71cff3] uppercase tracking-[0.15em] mb-3 text-center">
              What&apos;s Included
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-center mb-4">
              Everything you need, nothing you don&apos;t
            </h2>
            <p className="text-lg text-[#95969a] text-center max-w-2xl mx-auto mb-16">
              Every myCloud plan comes fully loaded, with no add-ons or surprises.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <RevealOnScroll key={feature.title} delay={0.1 * (index % 3)}>
                <SpotlightCard className="group h-full bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 p-8 transition-all duration-500 hover:bg-white/[0.08] hover:border-[#71cff3]/30 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-[#71cff3]/15 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <feature.icon size={24} className="text-[#71cff3]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-[#95969a] leading-relaxed">{feature.description}</p>
                </SpotlightCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-28 px-6 bg-white border-y border-[#053446]/5">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <p className="text-sm font-bold text-[#71cff3] uppercase tracking-[0.15em] mb-3 text-center">
              Simple Process
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#053446] tracking-tight text-center mb-16">
              Up and running in minutes
            </h2>
          </RevealOnScroll>

          <div className="relative">
            {/* Dashed connector visible in the gaps between step cards (desktop) */}
            <div className="hidden lg:block absolute top-20 left-[10%] right-[10%] border-t-2 border-dashed border-[#71cff3]/30" aria-hidden="true" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <RevealOnScroll key={step.number} delay={0.1 * index}>
                  <div className="group relative h-full bg-[#fcfcfa] rounded-2xl border border-[#053446]/10 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#71cff3]/10 hover:border-[#71cff3]/30">
                    <div className="h-1 w-12 bg-[#71cff3] rounded-full mb-6 transition-all duration-500 group-hover:w-20" />
                    <div className="text-5xl font-extrabold text-[#053446]/15 mb-4 transition-colors duration-500 group-hover:text-[#71cff3]/40">{step.number}</div>
                    <h3 className="text-lg font-bold text-[#053446] mb-3">{step.title}</h3>
                    <p className="text-sm text-[#95969a] leading-relaxed">{step.description}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-28 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <p className="text-sm font-bold text-[#71cff3] uppercase tracking-[0.15em] mb-3 text-center">
              Transparent Pricing
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#053446] tracking-tight text-center mb-16">
              Simple plans, one flat fee
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, index) => (
              <RevealOnScroll key={plan.name} delay={0.1 * index}>
                <div className={`relative h-full ${plan.popular ? 'lg:scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <div className="px-5 py-1.5 bg-[#71cff3] text-[#053446] rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div
                    className={`relative h-full rounded-3xl ${
                      plan.popular
                        ? 'p-[2px] overflow-hidden bg-[#71cff3]/20 shadow-2xl shadow-[#71cff3]/20'
                        : ''
                    }`}
                  >
                    {plan.popular && (
                      <div
                        className="absolute -inset-[150%] animate-spin-slow"
                        style={{
                          background:
                            'conic-gradient(from 0deg, transparent 0deg, transparent 50deg, rgba(113, 207, 243, 0.9) 90deg, transparent 130deg, transparent 360deg)',
                        }}
                      />
                    )}

                    <div
                      className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 ${
                        plan.popular
                          ? 'bg-[#053446] text-white'
                          : 'bg-white border border-[#053446]/10 hover:shadow-xl hover:shadow-[#71cff3]/10 hover:-translate-y-1'
                      }`}
                    >
                  <h3 className={`text-xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-[#053446]'}`}>
                    {plan.name}
                  </h3>
                  <div className={`text-4xl font-extrabold mb-1 ${plan.popular ? 'text-white' : 'text-[#053446]'}`}>
                    {plan.price}
                  </div>
                  <p className={`text-sm mb-6 ${plan.popular ? 'text-[#71cff3]' : 'text-[#95969a]'}`}>
                    {plan.cadence}
                  </p>

                  <div
                    className={`w-full text-center py-3 rounded-full text-sm font-semibold mb-8 ${
                      plan.popular
                        ? 'bg-white/10 text-[#71cff3]'
                        : 'bg-[#053446]/5 text-[#053446]'
                    }`}
                  >
                    {plan.users}
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div
                          className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                            plan.popular ? 'bg-[#71cff3]/20 text-[#71cff3]' : 'bg-[#71cff3]/15 text-[#71cff3]'
                          }`}
                        >
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className={`text-sm font-medium ${plan.popular ? 'text-gray-200' : 'text-[#053446]'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="/contact"
                    className={`flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-lg active:scale-[0.98] group/btn ${
                      plan.popular
                        ? 'bg-[#71cff3] text-[#053446] hover:bg-white'
                        : 'bg-[#053446] text-white hover:bg-[#053446]/90'
                    }`}
                  >
                    {plan.price === 'Contact us' ? 'Contact us' : 'Get started'}
                    <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                  </a>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={0.3}>
            <p className="text-center text-sm text-[#95969a] mt-12 max-w-2xl mx-auto">
              *Storage sized for normal business operations. Contact us for specific capacity requirements.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#053446] py-28 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#71cff3]/10 rounded-full blur-[150px] animate-glow" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <RevealOnScroll>
            <div className="flex justify-center gap-8 mb-8 text-[#71cff3]">
              {[HardDrive, RefreshCw, ShieldCheck].map((Icon, i) => (
                <div
                  key={i}
                  className="p-3 rounded-2xl bg-[#71cff3]/10 border border-[#71cff3]/20"
                  style={{ animation: `cloudFloat ${5 + i}s ease-in-out infinite`, animationDelay: `${i * 0.5}s` }}
                >
                  <Icon size={28} />
                </div>
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Ready to move to <span className="text-[#71cff3]">myCloud?</span>
            </h2>
            <p className="text-lg text-[#95969a] mb-10 max-w-2xl mx-auto leading-relaxed">
              Zero hardware to buy, zero IT to manage. Tell us your team size and we&apos;ll
              have your space ready in minutes.
            </p>
            <a
              href="/contact"
              className="group inline-flex px-10 py-5 bg-[#71cff3] text-[#053446] rounded-full font-bold transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-[#71cff3]/20 hover:scale-105 active:scale-95 items-center justify-center gap-3"
            >
              Get started today
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default MyCloud;
