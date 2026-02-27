'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Code,
  Server,
  FileDigit,
  Zap,
  Layers,
  Globe,
  ShieldCheck,
  Users,
  Cloud
} from 'lucide-react';
import { RevealOnScroll } from '@/components/RevealOnScroll';

const HomeClient: React.FC = () => {
  return (
    <div className="pt-24 pb-0 overflow-hidden bg-[#fcfcfa]">

      {/* 1. HERO SECTION */}
      <section className="relative px-6 max-w-7xl mx-auto min-h-[70vh] flex flex-col justify-center items-center text-center mb-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#71cff3]/10 rounded-full blur-[120px] -z-10" />

        <RevealOnScroll delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#053446] tracking-tight mb-8 leading-[1.1]">
            Simplifying and Streamlining <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#053446] to-[#71cff3]">
              with Smart Technology.
            </span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <p className="text-xl text-[#95969a] max-w-2xl mx-auto mb-10">
            We transition businesses from manual processes to efficient digital systems, helping you adapt and thrive in the digital age.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#053446] text-white rounded-full font-semibold hover:bg-[#053446]/90 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Free Consultation
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 bg-white border border-[#95969a]/20 text-[#053446] rounded-full font-semibold hover:bg-[#fcfcfa] transition-all hover:scale-105"
            >
              View Services
            </Link>
          </div>
        </RevealOnScroll>
      </section>

{/* 2. TRUSTED BY */}
<section className="py-12 border-y border-[#053446]/5 bg-[#fcfcfa]">
  <style jsx>{`
    @keyframes marquee-scroll-desktop {
      0% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(calc(-100% / 2), 0, 0);
      }
    }
    
    @keyframes marquee-scroll-mobile {
      0% {
        transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(calc(-100% / 2), 0, 0);
      }
    }
    
    .marquee-container {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      position: relative;
      will-change: transform;
      backface-visibility: hidden;
      transform: translate3d(0, 0, 0);
      -webkit-font-smoothing: antialiased;
    }
    
    .marquee-track {
      display: inline-flex;
      animation: marquee-scroll-desktop 45s linear infinite;
      width: max-content;
      will-change: transform;
      backface-visibility: hidden;
      perspective: 1000px;
      transform-style: preserve-3d;
    }
    
    .marquee-track:hover {
      animation-play-state: paused;
    }
    
    /* Mobile optimisations */
    @media (max-width: 768px) {
      .marquee-track {
        animation: marquee-scroll-mobile 35s linear infinite;
      }
      
      .marquee-track:hover {
        animation-play-state: running;
      }
    }
    
    /* Low performance devices */
    @media (max-width: 768px) and (max-resolution: 96dpi) {
      .marquee-track {
        animation-duration: 50s !important;
      }
    }
    
    .client-item {
      flex-shrink: 0;
      transform: translate3d(0, 0, 0);
      will-change: transform;
      padding: 0 1.5rem;
    }
    
    .client-logo {
      filter: grayscale(100%) brightness(0) opacity(0.4);
      transition: filter 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      transform: translateZ(0);
      backface-visibility: hidden;
      image-rendering: auto;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    .client-logo:hover {
      filter: grayscale(100%) brightness(0) opacity(1);
    }
    
    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
      .marquee-track {
        animation: none;
        justify-content: center;
        width: 100%;
        overflow-x: auto;
        padding: 0 1rem;
      }
      
      .marquee-track:hover {
        animation-play-state: running;
      }
    }
  `}</style>

  <p className="text-xs font-bold text-[#95969a] uppercase tracking-[0.2em] text-center mb-6">
    Trusted Partners
  </p>

  <div className="relative">
    <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#fcfcfa] via-[#fcfcfa] to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#fcfcfa] via-[#fcfcfa] to-transparent z-10 pointer-events-none" />
    
    <div className="marquee-container">
      <div className="marquee-track">
        {/* First set */}
        {[
          { logo: 'Sensoria.png', name: '', showName: false },
          { logo: 'acropolis.png', name: 'Acropolis Training Institution', showName: true },
          { logo: 'Toolmaster.png', name: '', showName: false },
          { logo: 'pooltec.png', name: '', showName: false },
          { logo: 'speedlink.png', name: 'SpeedLink', showName: true },
          { logo: 'RAIS.png', name: 'Rais Enterprises', showName: true },
          { logo: "Choco'she.png", name: "Choco'She", showName: true },
          { logo: 'ACE.png', name: 'Aux Champs Elysées', showName: true },
          { logo: 'adonis.png', name: 'Adonis Management Consulting', showName: true },
          { logo: 'frotcom.png', name: 'Frotcom Indian Ocean', showName: true }
        ].map((client, idx) => (
          <div key={`set1-${idx}`} className="client-item">
            <div className="flex items-center gap-3 cursor-default group">
              <img
                src={`/client/${client.logo}`}
                alt={client.name || 'Partner'}
                className="client-logo h-8 w-auto object-contain"
                loading="lazy"
                width="auto"
                height="32"
                decoding="async"
                draggable="false"
              />
              {client.showName && (
                <span className="text-[#053446]/40 group-hover:text-[#053446] transition-colors duration-300 font-semibold text-sm md:text-base tracking-wide whitespace-nowrap">
                  {client.name}
                </span>
              )}
            </div>
          </div>
        ))}
        
        {/* Second set - Exact duplicate for seamless loop */}
        {[
          { logo: 'Sensoria.png', name: '', showName: false },
          { logo: 'acropolis.png', name: 'Acropolis Training Institution', showName: true },
          { logo: 'Toolmaster.png', name: '', showName: false },
          { logo: 'pooltec.png', name: '', showName: false },
          { logo: 'speedlink.png', name: 'SpeedLink', showName: true },
          { logo: 'RAIS.png', name: 'Rais Enterprises', showName: true },
          { logo: "Choco'she.png", name: "Choco'She", showName: true },
          { logo: 'ACE.png', name: 'Aux Champs Elysées', showName: true },
          { logo: 'adonis.png', name: 'Adonis Management Consulting', showName: true },
          { logo: 'frotcom.png', name: 'Frotcom Indian Ocean', showName: true }
        ].map((client, idx) => (
          <div key={`set2-${idx}`} className="client-item">
            <div className="flex items-center gap-3 cursor-default group">
              <img
                src={`/client/${client.logo}`}
                alt={client.name || 'Partner'}
                className="client-logo h-8 w-auto object-contain"
                loading="lazy"
                width="auto"
                height="32"
                decoding="async"
                draggable="false"
              />
              {client.showName && (
                <span className="text-[#053446]/40 group-hover:text-[#053446] transition-colors duration-300 font-semibold text-sm md:text-base tracking-wide whitespace-nowrap">
                  {client.name}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* 3. SERVICES */}
      <section className="py-32 bg-[#053446] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#71cff3]/10 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="text-[#71cff3] text-sm font-medium tracking-wide uppercase mb-4">What We Do</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Tailored Solutions,<br />
                  <span className="text-[#71cff3]">Measurable Impact</span>
                </h2>
              </div>
              <p className="text-[#95969a] max-w-md text-base leading-relaxed">
                We engineer custom ecosystems that transform how your business operates.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code, title: "Software & SaaS", desc: "Custom AI-enabled apps, cloud solutions, and seamless API integrations.", color: "#71cff3" },
              { icon: FileDigit, title: "Digitalisation", desc: "Document digitisation, workflow automation, and process optimisation.", color: "#71cff3" },
              { icon: Globe, title: "Web & Digital", desc: "Website development, email hosting, and digital transformation consulting.", color: "#71cff3" },
              { icon: Server, title: "IT Infrastructure", desc: "Assessment, optimisation, troubleshooting, and hardware installation.", color: "#71cff3" },
            ].map((service, idx) => (
              <RevealOnScroll key={idx} delay={0.1 * idx}>
                <div className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 hover:bg-white/[0.08] hover:border-[#71cff3]/30 hover:-translate-y-1">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon size={22} style={{ color: service.color }} />
                  </div>
                  <h3 className="font-semibold text-xl text-white mb-3">{service.title}</h3>
                  <p className="text-[#95969a] text-sm leading-relaxed">{service.desc}</p>
                  <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#71cff3]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUCT SUITE */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <p className="text-[#71cff3] text-sm font-medium tracking-wide uppercase mb-4">Product Ecosystem</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#053446] mb-6">
              Integrated Business Suite
            </h2>
            <p className="text-[#95969a] max-w-xl mx-auto">
              Purpose-built tools designed to work in harmony, powering every facet of your operations.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 auto-rows-auto md:auto-rows-[220px]">

          {/* myInvoice Pro */}
          <div className="md:col-span-4 md:row-span-1">
            <RevealOnScroll delay={0.1}>
              <div className="group h-full bg-[#fcfcfa] border border-[#053446]/10 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-[#71cff3]/10 hover:border-[#71cff3]/30 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#71cff3]/5 rounded-full blur-3xl transition-all duration-500 group-hover:bg-[#71cff3]/10" />
                <div className="flex-1 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-[#71cff3]/10 flex items-center justify-center text-[#71cff3] mb-5 group-hover:scale-110 transition-transform duration-300">
                    <img src="/images/01myInvoicePro.png" alt="myInvoice Pro" className="w-10 h-10 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#053446] mb-2">myInvoice Pro</h3>
                  <p className="text-[#95969a] text-sm leading-relaxed max-w-sm">
                    Invoicing, expense tracking, and goal setting for financial clarity.
                  </p>
                </div>
                <div className="relative z-10 w-full md:w-auto flex items-center justify-center">
                  <img
                    src="https://cdn.prod.website-files.com/6895b1f7baeb5ed49b7144a3/69a1a40978b80c2cc84bec7f_Screenshot%202026-02-27%20175949.png"
                    alt="myInvoice Pro Preview"
                    className="h-32 w-auto object-contain"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* myPOS */}
          <div className="md:col-span-2 md:row-span-1 h-full">
            <RevealOnScroll delay={0.2} className="h-full">
              <div className="group h-full bg-[#95969a] rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden relative">
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white mb-4">
                  <img src="/images/02myPOS.png" alt="myPOS" className="w-10 h-10 object-contain" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2">myPOS</h3>
                  <p className="text-white/80 text-sm leading-relaxed">Website stock manager with real-time inventory sync.</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* myPayroll */}
          <div className="md:col-span-2 md:row-span-1 h-full">
            <RevealOnScroll delay={0.3} className="h-full">
              <div className="group h-full bg-[#71cff3] rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#053446]/10 rounded-full blur-2xl" />
                <div className="w-11 h-11 rounded-xl bg-[#053446]/10 flex items-center justify-center text-[#053446] mb-4">
                  <img src="/images/04myPayroll.png" alt="myPayroll" className="w-10 h-10 object-contain" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[#053446] mb-2">myPayroll</h3>
                  <p className="text-[#053446]/80 text-sm leading-relaxed">Timesheet, leave, and payslip management.</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* mySmartCloud */}
          <div className="md:col-span-2 md:row-span-1 h-full">
            <RevealOnScroll delay={0.35} className="h-full">
              <div className="group h-full bg-[#053446] rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden relative">
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#71cff3]/20 rounded-full blur-2xl" />
                <div className="w-11 h-11 rounded-xl bg-[#71cff3]/20 flex items-center justify-center text-[#71cff3] mb-4">
                  <Cloud size={22} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-2">mySmartCloud</h3>
                  <p className="text-white/80 text-sm leading-relaxed">Secure cloud storage with daily backups and 99.9% uptime.</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* myEdu Pro */}
          <div className="md:col-span-2 md:row-span-1 h-full">
            <RevealOnScroll delay={0.4} className="h-full">
              <div className="group h-full bg-[#053446]/5 border border-[#053446]/10 rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:bg-[#053446]/[0.08] flex flex-col justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#053446]/10 flex items-center justify-center text-[#053446] mb-4">
                  <img src="/images/03myEdupro.png" alt="myEdu Pro" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#053446] mb-2">myEdu Pro</h3>
                  <p className="text-[#95969a] text-sm leading-relaxed">
                    School ERP and Conference management with automated certificates.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* myTag */}
          <div className="md:col-span-4 md:row-span-1">
            <RevealOnScroll delay={0.5}>
              <div className="group h-full bg-[#053446] rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-[#053446]/30 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#71cff3]/10 rounded-full blur-[100px]" />
                <div className="flex-1 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-[#71cff3]/20 flex items-center justify-center text-[#71cff3] mb-5">
                    <img src="/images/05myTag.png" alt="myTag" className="w-10 h-10 object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">myTag</h3>
                  <p className="text-[#95969a] text-sm leading-relaxed max-w-sm">
                    Dynamic digital tagging solution for instant price and information updates.
                  </p>
                </div>
                <div className="relative z-10 w-full md:w-auto flex items-center justify-center">
                  <img
                    src="https://cdn.prod.website-files.com/6895b1f7baeb5ed49b7144a3/69a19edb8be2764a0ce8dfc7_ESL.png"
                    alt="Electronic Shelf Label"
                    className="h-32 w-auto object-contain"
                  />
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Smart Automation */}
          <div className="md:col-span-2 md:row-span-1 h-full">
            <RevealOnScroll delay={0.6} className="h-full">
              <div className="group h-full bg-[#fcfcfa] border border-[#053446]/10 rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:border-[#71cff3]/30 flex flex-col justify-between">
                <div className="w-11 h-11 rounded-xl bg-[#71cff3]/10 flex items-center justify-center text-[#71cff3] mb-4">
                  <img src="/images/06HomeAutomation.png" alt="Smart Automation" className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#053446] mb-2">Smart Automation</h3>
                  <p className="text-[#95969a] text-sm leading-relaxed">Intelligent automation for businesses and homes — device integration, workflow control, and smart infrastructure.</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </section>

      {/* 5. ABOUT / VALUES */}
      <section className="py-32 bg-[#053446] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#71cff3]/5 rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <RevealOnScroll>
                <p className="text-[#71cff3] text-sm font-medium tracking-wide uppercase mb-6">About Us</p>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1]">
                  Architecting<br />
                  <span className="text-[#71cff3]">Tomorrow's</span><br />
                  Operations
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
                <div className="space-y-6 text-[#95969a] text-lg leading-relaxed">
                  <p>At <span className="text-white font-medium">mySmart Ltd</span>, we reimagine business processes.</p>
                  <p>We transition legacy systems into <span className="text-[#71cff3]">intelligent digital ecosystems</span> with custom software and hardware integration.</p>
                </div>
              </RevealOnScroll>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, title: "Innovation", desc: "Predictive algorithms adapting to markets.", color: "#71cff3" },
                { icon: ShieldCheck, title: "Reliability", desc: "99.9% uptime. Resilience by design.", color: "#71cff3" },
                { icon: Layers, title: "Integration", desc: "Bridges between software & hardware.", color: "#71cff3" },
                { icon: Users, title: "User-First", desc: "Complex tech, simplified for humans.", color: "#71cff3" }
              ].map((item, idx) => (
                <RevealOnScroll key={idx} delay={0.15 * (idx + 1)}>
                  <div className="group bg-white/[0.03] backdrop-blur-sm border border-white/5 p-7 rounded-2xl hover:bg-white/[0.06] hover:border-[#71cff3]/20 transition-all duration-500">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                      <item.icon size={20} />
                    </div>
                    <h4 className="font-semibold text-white text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-[#95969a] leading-relaxed">{item.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-32 bg-[#fcfcfa]">
        <div className="max-w-5xl mx-auto px-6">
          <RevealOnScroll>
            <div className="relative rounded-[2.5rem] overflow-hidden bg-[#053446] isolate">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#71cff3]/10 rounded-full blur-[150px]" />
              </div>
              <div className="relative p-12 md:p-20 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
                  Ready to Transform<br />
                  <span className="text-[#71cff3]">Your Business?</span>
                </h2>
                <p className="text-lg md:text-xl text-[#95969a] mb-12 max-w-2xl mx-auto">
                  Let's architect an intelligent ecosystem that streamlines your operations.
                </p>
                <Link href="/contact" className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-[#053446] text-lg font-semibold rounded-full transition-all">
                  Get Your Free Consultation
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default HomeClient;
