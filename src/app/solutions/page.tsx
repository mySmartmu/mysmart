'use client';

import React from 'react';
import Link from 'next/link';
import {
  Code,
  Server,
  Globe,
  FileDigit,
  Home,
  ArrowRight,
  Cpu,
  Cloud,
  Zap,
  Database,
  Workflow,
  FileCode,
  Mail,
  Smartphone,
  HardDrive,
  Shield
} from 'lucide-react';
import { RevealOnScroll } from '@/components/RevealOnScroll';

const Solutions = () => {
  return (
    <div className="pt-24 pb-0 overflow-hidden bg-[#fcfcfa]">

      {/* 1. HERO SECTION */}
      <section className="relative px-6 overflow-hidden mb-12">
        <div className="max-w-7xl mx-auto pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[70vh]">
            {/* Left: Text - left aligned */}
            <div className="text-left relative z-10">
              <RevealOnScroll>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#71cff3]/10 text-[#053446] text-xs font-semibold mb-8">
                  <span className="w-2 h-2 rounded-full bg-[#71cff3] animate-pulse" />
                  Solutions & Services
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={0.1}>
                <h1 className="text-5xl md:text-7xl font-extrabold text-[#053446] tracking-tight mb-8 leading-[1.1]">
                  Tailored Solutions for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#053446] to-[#71cff3]">
                    Every Business Need
                  </span>
                </h1>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <p className="text-xl text-[#95969a] max-w-xl mb-10">
                  From AI-driven software to complete smart automation, we deliver end-to-end solutions that transform operations.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-[#053446] text-white rounded-full font-semibold hover:bg-[#053446]/90 transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Contact Us
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/products"
                    className="px-8 py-4 bg-white border border-[#95969a]/20 text-[#053446] rounded-full font-semibold hover:bg-[#fcfcfa] transition-all hover:scale-105"
                  >
                    View Products
                  </Link>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right: Solutions-themed abstract — interconnected nodes & puzzle pieces */}
            <RevealOnScroll delay={0.2}>
              <div className="relative w-full h-[520px] hidden lg:block">
                {/* Fade to left */}
                <div className="absolute -left-12 top-0 bottom-0 w-24 z-20 bg-gradient-to-r from-[#fcfcfa] to-transparent pointer-events-none" />

                {/* SVG connection lines between nodes */}
                <svg className="absolute inset-0 w-full h-full z-[1] pointer-events-none" viewBox="0 0 500 520" fill="none">
                  {/* Lines connecting the nodes */}
                  <line x1="250" y1="130" x2="380" y2="220" stroke="#71cff3" strokeWidth="2" strokeOpacity="0.2" strokeDasharray="6 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="3s" repeatCount="indefinite" />
                  </line>
                  <line x1="250" y1="130" x2="140" y2="260" stroke="#71cff3" strokeWidth="2" strokeOpacity="0.15" strokeDasharray="6 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="4s" repeatCount="indefinite" />
                  </line>
                  <line x1="380" y1="220" x2="320" y2="380" stroke="#053446" strokeWidth="2" strokeOpacity="0.12" strokeDasharray="6 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="3.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="140" y1="260" x2="320" y2="380" stroke="#71cff3" strokeWidth="2" strokeOpacity="0.18" strokeDasharray="6 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="140" y1="260" x2="200" y2="430" stroke="#053446" strokeWidth="1.5" strokeOpacity="0.1" strokeDasharray="4 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="4s" repeatCount="indefinite" />
                  </line>
                  <line x1="380" y1="220" x2="420" y2="350" stroke="#71cff3" strokeWidth="1.5" strokeOpacity="0.12" strokeDasharray="4 4">
                    <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="3s" repeatCount="indefinite" />
                  </line>
                </svg>

                {/* Central hub — large dark node */}
                <div className="absolute top-[16%] left-[42%] w-[110px] h-[110px] z-10" style={{ animation: 'solFloat 7s ease-in-out infinite' }}>
                  <div className="w-full h-full rounded-[28px] bg-gradient-to-br from-[#053446] to-[#053446]/80 shadow-2xl shadow-[#053446]/20 flex items-center justify-center rotate-6">
                    <Zap size={36} className="text-[#71cff3]" />
                  </div>
                </div>

                {/* Node 2 — top right, software */}
                <div className="absolute top-[34%] right-[12%] w-[90px] h-[90px] z-10" style={{ animation: 'solFloat 6s ease-in-out infinite reverse' }}>
                  <div className="w-full h-full rounded-[24px] bg-gradient-to-br from-[#71cff3]/25 to-[#71cff3]/10 backdrop-blur-sm border border-[#71cff3]/30 shadow-xl flex items-center justify-center -rotate-6">
                    <Code size={28} className="text-[#053446]" />
                  </div>
                </div>

                {/* Node 3 — mid left, infrastructure */}
                <div className="absolute top-[42%] left-[15%] w-[85px] h-[85px] z-10" style={{ animation: 'solFloat 8s ease-in-out infinite' }}>
                  <div className="w-full h-full rounded-[22px] bg-gradient-to-tr from-[#053446]/15 to-[#71cff3]/20 backdrop-blur-sm border border-[#053446]/15 shadow-xl flex items-center justify-center rotate-12">
                    <Server size={26} className="text-[#053446]" />
                  </div>
                </div>

                {/* Node 4 — bottom center, cloud */}
                <div className="absolute bottom-[16%] left-[50%] -translate-x-1/2 w-[95px] h-[95px] z-10" style={{ animation: 'solFloat 5s ease-in-out infinite reverse' }}>
                  <div className="w-full h-full rounded-[26px] bg-gradient-to-bl from-[#71cff3]/30 to-[#053446]/10 backdrop-blur-sm border border-[#71cff3]/20 shadow-xl flex items-center justify-center -rotate-3">
                    <Cloud size={30} className="text-[#053446]" />
                  </div>
                </div>

                {/* Node 5 — bottom right */}
                <div className="absolute bottom-[26%] right-[8%] w-[70px] h-[70px] z-10" style={{ animation: 'solFloat 6s ease-in-out infinite' }}>
                  <div className="w-full h-full rounded-[18px] bg-gradient-to-br from-[#ff9f43]/20 to-[#ff9f43]/8 backdrop-blur-sm border border-[#ff9f43]/20 shadow-lg flex items-center justify-center rotate-6">
                    <Globe size={22} className="text-[#053446]" />
                  </div>
                </div>

                {/* Node 6 — bottom left */}
                <div className="absolute bottom-[20%] left-[22%] w-[65px] h-[65px] z-10" style={{ animation: 'solFloat 7s ease-in-out infinite reverse' }}>
                  <div className="w-full h-full rounded-[16px] bg-gradient-to-tr from-[#a55eea]/15 to-[#a55eea]/5 backdrop-blur-sm border border-[#a55eea]/15 shadow-lg flex items-center justify-center -rotate-12">
                    <Database size={20} className="text-[#053446]" />
                  </div>
                </div>

                {/* Large soft background shape */}
                <div className="absolute top-[8%] right-[5%] w-[85%] h-[80%] rounded-[50%_50%_45%_55%/55%_45%_55%_45%] bg-gradient-to-br from-[#71cff3]/8 to-[#053446]/5 blur-[1px] z-0" style={{ animation: 'solMorph 14s ease-in-out infinite' }} />

                {/* Glowing pulse dots at intersections */}
                <div className="absolute top-[28%] left-[35%] w-3 h-3 rounded-full bg-[#71cff3] shadow-[0_0_16px_rgba(113,207,243,0.5)] z-[2]" style={{ animation: 'solPulse 3s ease-in-out infinite' }} />
                <div className="absolute top-[55%] right-[25%] w-2.5 h-2.5 rounded-full bg-[#053446] shadow-[0_0_12px_rgba(5,52,70,0.3)] z-[2]" style={{ animation: 'solPulse 4s ease-in-out infinite 1s' }} />
                <div className="absolute bottom-[35%] left-[38%] w-2 h-2 rounded-full bg-[#ff9f43] shadow-[0_0_10px_rgba(255,159,67,0.4)] z-[2]" style={{ animation: 'solPulse 3.5s ease-in-out infinite 0.5s' }} />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Hero animation keyframes */}
      <style jsx>{`
        @keyframes solFloat {
          0%, 100% { transform: translateY(0px) rotate(var(--tw-rotate, 0deg)); }
          50% { transform: translateY(-12px) rotate(var(--tw-rotate, 0deg)); }
        }
        @keyframes solMorph {
          0%, 100% { border-radius: 50% 50% 45% 55% / 55% 45% 55% 45%; }
          33% { border-radius: 45% 55% 55% 45% / 50% 50% 45% 55%; }
          66% { border-radius: 55% 45% 50% 50% / 45% 55% 50% 50%; }
        }
        @keyframes solPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
      `}</style>

      {/* 2. SOFTWARE & SAAS SOLUTIONS */}
      <section className="py-32 bg-[#053446] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#71cff3]/10 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-[#71cff3]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-[#71cff3]" />
              </div>
              <p className="text-[#71cff3] text-sm font-medium tracking-wide uppercase mb-4">Core Solutions</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Software & SaaS Solutions
              </h2>
              <p className="text-[#95969a] max-w-2xl mx-auto text-lg">
                Custom-built applications powered by AI to drive your business forward
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Cpu, title: "Custom Software Development", desc: "Tailored applications built to your exact specifications and business logic." },
              { icon: Zap, title: "AI-Enabled Applications", desc: "Intelligent systems that learn, adapt, and optimise your workflows." },
              { icon: Cloud, title: "Cloud-Based SaaS Solutions", desc: "Scalable platforms accessible anywhere, anytime with enterprise-grade security." },
              { icon: Database, title: "API Integration", desc: "Seamless connections between your existing tools and new systems." },
              { icon: FileCode, title: "System Connectivity", desc: "Connect your existing platforms, databases, and third-party tools into one seamless workflow." },
              { icon: Server, title: "Enterprise Solutions", desc: "Robust platforms designed to scale with your growing business needs." }
            ].map((item, idx) => (
              <RevealOnScroll key={idx} delay={0.1 * idx}>
                <div className="group bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 hover:bg-white/[0.08] hover:border-[#71cff3]/30 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-[#71cff3]/15 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                    <item.icon size={22} className="text-[#71cff3]" />
                  </div>
                  <h3 className="font-semibold text-xl text-white mb-3">{item.title}</h3>
                  <p className="text-[#95969a] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HARDWARE & IT INFRASTRUCTURE */}
      <section className="py-32 bg-[#fcfcfa]">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-[#053446]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Server className="w-8 h-8 text-[#053446]" />
              </div>
              <p className="text-[#71cff3] text-sm font-medium tracking-wide uppercase mb-4">Infrastructure</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#053446] leading-tight mb-6">
                Hardware & IT Infrastructure
              </h2>
              <p className="text-[#95969a] max-w-2xl mx-auto text-lg">
                Complete infrastructure solutions from assessment to optimisation
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "IT Infrastructure Assessment", desc: "Comprehensive evaluation of your current systems and optimisation opportunities." },
              { title: "System Optimisation", desc: "Fine-tuning your infrastructure for maximum performance and efficiency." },
              { title: "Troubleshooting & Support", desc: "Expert technical support when you need it most." },
              { title: "Hardware Sourcing", desc: "Access to quality hardware at competitive prices." },
              { title: "Professional Installation", desc: "Seamless deployment and configuration by certified technicians." },
              { title: "Maintenance & Monitoring", desc: "Proactive monitoring and maintenance to prevent downtime." }
            ].map((item, idx) => (
              <RevealOnScroll key={idx} delay={0.1 * idx}>
                <div className="group bg-white border border-[#053446]/10 rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-[#71cff3]/10 hover:border-[#71cff3]/30 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#71cff3]/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#71cff3]/20 transition-colors">
                      <div className="w-3 h-3 rounded-full bg-[#71cff3]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#053446] mb-2">{item.title}</h3>
                      <p className="text-[#95969a] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WEB & DIGITAL SERVICES */}
      <section className="py-32 bg-[#053446] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#71cff3]/10 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-[#71cff3]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-[#71cff3]" />
              </div>
              <p className="text-[#71cff3] text-sm font-medium tracking-wide uppercase mb-4">Digital Presence</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Web & Digital Services
              </h2>
              <p className="text-[#95969a] max-w-2xl mx-auto text-lg">
                Build your digital presence with modern, responsive solutions
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RevealOnScroll delay={0.1}>
              <div className="group bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-10 transition-all duration-500 hover:bg-white/[0.08] hover:border-[#71cff3]/30">
                <Globe className="w-12 h-12 text-[#71cff3] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Website Development & Design</h3>
                <p className="text-[#95969a] leading-relaxed mb-6">
                  Modern, responsive websites built with the latest technologies. From landing pages to complex web applications, we create digital experiences that convert.
                </p>
                <ul className="space-y-3">
                  {["Custom Design", "Mobile-First Approach", "SEO Optimised", "Performance Optimised"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#95969a] text-sm">
                      <div className="w-5 h-5 rounded-full bg-[#71cff3]/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#71cff3]" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="group bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-10 transition-all duration-500 hover:bg-white/[0.08] hover:border-[#71cff3]/30">
                <Mail className="w-12 h-12 text-[#71cff3] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Email Hosting & Domain Services</h3>
                <p className="text-[#95969a] leading-relaxed mb-6">
                  Professional email solutions and domain management for your business. Secure, reliable, and easy to manage.
                </p>
                <ul className="space-y-3">
                  {["Custom Domain Email", "99.9% Uptime", "Spam Protection"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#95969a] text-sm">
                      <div className="w-5 h-5 rounded-full bg-[#71cff3]/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#71cff3]" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <div className="group lg:col-span-2 bg-gradient-to-br from-[#71cff3]/10 to-transparent backdrop-blur-sm border border-[#71cff3]/20 rounded-3xl p-10 transition-all duration-500 hover:border-[#71cff3]/40">
                <Workflow className="w-12 h-12 text-[#71cff3] mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation Consulting</h3>
                <p className="text-[#95969a] leading-relaxed max-w-3xl">
                  Strategic guidance to navigate your digital journey. We help you identify opportunities, plan implementations, and execute transformations that deliver measurable results.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 5. DIGITALISATION */}
      <section className="py-32 bg-[#fcfcfa]">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-[#053446]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileDigit className="w-8 h-8 text-[#053446]" />
              </div>
              <p className="text-[#71cff3] text-sm font-medium tracking-wide uppercase mb-4">Process Optimisation</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#053446] leading-tight mb-6">
                Digitalisation Services
              </h2>
              <p className="text-[#95969a] max-w-2xl mx-auto text-lg">
                Transform manual workflows into efficient, AI-enhanced digital processes
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RevealOnScroll delay={0.1}>
              <div className="bg-white border border-[#053446]/10 rounded-2xl p-8 hover:shadow-xl hover:border-[#71cff3]/30 transition-all duration-500">
                <div className="w-14 h-14 bg-[#71cff3]/10 rounded-xl flex items-center justify-center mb-6">
                  <FileDigit className="w-7 h-7 text-[#71cff3]" />
                </div>
                <h3 className="text-xl font-bold text-[#053446] mb-3">Document Digitisation</h3>
                <p className="text-[#95969a] leading-relaxed">
                  Convert paper-based processes to digital formats with OCR and intelligent data extraction.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="bg-white border border-[#053446]/10 rounded-2xl p-8 hover:shadow-xl hover:border-[#71cff3]/30 transition-all duration-500">
                <div className="w-14 h-14 bg-[#71cff3]/10 rounded-xl flex items-center justify-center mb-6">
                  <Database className="w-7 h-7 text-[#71cff3]" />
                </div>
                <h3 className="text-xl font-bold text-[#053446] mb-3">Document Management</h3>
                <p className="text-[#95969a] leading-relaxed">
                  Centralised systems for storing, organising, and retrieving digital documents efficiently.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <div className="bg-white border border-[#053446]/10 rounded-2xl p-8 hover:shadow-xl hover:border-[#71cff3]/30 transition-all duration-500">
                <div className="w-14 h-14 bg-[#71cff3]/10 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-[#71cff3]" />
                </div>
                <h3 className="text-xl font-bold text-[#053446] mb-3">Workflow Automation</h3>
                <p className="text-[#95969a] leading-relaxed">
                  AI-enhanced automation that eliminates repetitive tasks and accelerates processes.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <div className="bg-white border border-[#053446]/10 rounded-2xl p-8 md:col-span-2 lg:col-span-3 hover:shadow-xl hover:border-[#71cff3]/30 transition-all duration-500">
                <div className="w-14 h-14 bg-[#71cff3]/10 rounded-xl flex items-center justify-center mb-6">
                  <Workflow className="w-7 h-7 text-[#71cff3]" />
                </div>
                <h3 className="text-xl font-bold text-[#053446] mb-3">Process Optimisation & Efficiency</h3>
                <p className="text-[#95969a] leading-relaxed">
                  Analyse, streamline, and optimise your business processes with data-driven insights and continuous improvement strategies.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 6. MYCLOUD SERVICES */}
      <section className="py-32 bg-[#053446] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#71cff3]/10 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-[#71cff3]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-8 h-8 text-[#71cff3]" />
              </div>
              <p className="text-[#71cff3] text-sm font-medium tracking-wide uppercase mb-4">Cloud Solutions</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                mySmartCloud Services
              </h2>
              <p className="text-[#95969a] max-w-2xl mx-auto text-lg">
                Seamless working anywhere in the world with secure, reliable cloud infrastructure
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <RevealOnScroll delay={0.1}>
              <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-[#71cff3]/30 transition-all duration-500">
                <div className="w-12 h-12 bg-[#71cff3]/20 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-[#71cff3]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Work Anywhere</h3>
                <p className="text-[#95969a] text-sm leading-relaxed">
                  Access your data and applications from anywhere in the world with secure cloud connectivity.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-[#71cff3]/30 transition-all duration-500">
                <div className="w-12 h-12 bg-[#71cff3]/20 rounded-xl flex items-center justify-center mb-6">
                  <HardDrive className="w-6 h-6 text-[#71cff3]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Daily Backups</h3>
                <p className="text-[#95969a] text-sm leading-relaxed">
                  Automated daily backups ensure your data is always protected and recoverable.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-[#71cff3]/30 transition-all duration-500">
                <div className="w-12 h-12 bg-[#71cff3]/20 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-[#71cff3]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Data Recovery</h3>
                <p className="text-[#95969a] text-sm leading-relaxed">
                  Reliable data recovery services to restore your critical information when needed.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
              <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-[#71cff3]/30 transition-all duration-500">
                <div className="w-12 h-12 bg-[#71cff3]/20 rounded-xl flex items-center justify-center mb-6">
                  <Server className="w-6 h-6 text-[#71cff3]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Dedicated Support</h3>
                <p className="text-[#95969a] text-sm leading-relaxed">
                  Responsive technical support from our team to keep your cloud services running smoothly.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.5}>
            <div className="mt-12 bg-gradient-to-r from-[#71cff3]/10 to-transparent border border-[#71cff3]/20 rounded-3xl p-10 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">Reliable & Secure Infrastructure</h3>
                  <p className="text-[#95969a] leading-relaxed">
                    Your data is stored on dedicated hardware with built-in encryption, RAID-protected storage, and automated snapshot recovery. Private, secure, and fully managed by our team.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-[#71cff3] mb-2">99.9%</div>
                  <div className="text-sm text-[#95969a]">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 7. SMART AUTOMATION */}
      <section className="py-32 bg-[#053446] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-[#71cff3]/10 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-[#71cff3]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Home className="w-8 h-8 text-[#71cff3]" />
              </div>
              <p className="text-[#71cff3] text-sm font-medium tracking-wide uppercase mb-4">Smart Automation</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                IoT & Smart Building Solutions
              </h2>
              <p className="text-[#95969a] max-w-2xl mx-auto text-lg">
                Professional automation for offices, retail spaces, warehouses, and residential properties
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <RevealOnScroll delay={0.1}>
              <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-[#71cff3]/30 transition-all duration-500">
                <div className="w-12 h-12 bg-[#71cff3]/20 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-[#71cff3]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Site Assessment & Planning</h3>
                <p className="text-[#95969a] leading-relaxed mb-4">
                  On-site evaluation of your premises to identify automation opportunities and design a tailored solution.
                </p>
                <ul className="space-y-2 text-sm text-[#95969a]">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#71cff3]" />
                    Premises Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#71cff3]" />
                    Requirements Mapping
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#71cff3]" />
                    Budget Planning
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-[#71cff3]/30 transition-all duration-500">
                <div className="w-12 h-12 bg-[#71cff3]/20 rounded-xl flex items-center justify-center mb-6">
                  <HardDrive className="w-6 h-6 text-[#71cff3]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Device Supply & Installation</h3>
                <p className="text-[#95969a] leading-relaxed mb-4">
                  Quality smart devices from leading manufacturers, professionally installed by certified electricians and technicians.
                </p>
                <ul className="space-y-2 text-sm text-[#95969a]">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#71cff3]" />
                    Premium Devices
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#71cff3]" />
                    Certified Installation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#71cff3]" />
                    Warranty Support
                  </li>
                </ul>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-[#71cff3]/30 transition-all duration-500">
                <div className="w-12 h-12 bg-[#71cff3]/20 rounded-xl flex items-center justify-center mb-6">
                  <Smartphone className="w-6 h-6 text-[#71cff3]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Configuration & Integration</h3>
                <p className="text-[#95969a] leading-relaxed mb-4">
                  Full setup of lighting, security, climate, and access control into one unified management system.
                </p>
                <ul className="space-y-2 text-sm text-[#95969a]">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#71cff3]" />
                    System Setup
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#71cff3]" />
                    Device Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#71cff3]" />
                    Staff Training
                  </li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="py-32 bg-[#fcfcfa]">
        <div className="max-w-5xl mx-auto px-6">
          <RevealOnScroll>
            <div className="relative rounded-[2.5rem] overflow-hidden bg-[#053446] isolate">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#71cff3]/10 rounded-full blur-[150px]" />
              </div>
              <div className="relative p-12 md:p-20 text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
                  Ready to Get Started?
                </h2>
                <p className="text-lg md:text-xl text-[#95969a] mb-12 max-w-2xl mx-auto">
                  Let's discuss how our solutions can transform your business operations.
                </p>
                <Link href="/contact" className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-[#053446] text-lg font-semibold rounded-full transition-all hover:scale-105">
                  Schedule Free Consultation
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

export default Solutions;
