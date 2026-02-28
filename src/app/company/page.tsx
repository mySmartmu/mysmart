'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Code,
  Home,
  Globe,
  Server,
  Zap,
  ShieldCheck,
  Users,
  Layers
} from 'lucide-react';
import { RevealOnScroll } from '@/components/RevealOnScroll';

const Company = () => {
  return (
    <div className="pt-32 pb-0 overflow-hidden bg-[#fcfcfa]">

      {/* 1. MAIN INTRODUCTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <RevealOnScroll>
          <h1 className="text-4xl md:text-6xl font-bold text-[#053446] mb-8 text-center">
            About mySmart
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <p className="text-2xl md:text-3xl text-[#053446] font-semibold text-center mb-8 leading-relaxed">
            mySmart specialises in AI-driven IT and automation solutions designed to simplify and streamline business and residential operations.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p className="text-lg text-[#95969a] text-center leading-relaxed max-w-4xl mx-auto">
            We provide end-to-end services, from custom AI-integrated software and hardware to complete smart home automation. Our expertise lies in transitioning businesses from manual processes to efficient digital systems, helping organisations adapt and thrive in the digital age.
          </p>
        </RevealOnScroll>
      </section>

      {/* 2. OUR FOUNDERS */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-[#053446] mb-12 text-center uppercase tracking-wide">
              Our Founders
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Twahir Nuckcheddy */}
            <RevealOnScroll delay={0.1}>
              <div className="bg-[#fcfcfa] border border-[#053446]/10 rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-lg hover:border-[#71cff3]/30">
                <h3 className="text-2xl font-bold text-[#53b8d8] mb-1">Twahir Nuckcheddy</h3>
                <p className="text-sm font-semibold text-[#95969a] mb-4">Co-Founder & CEO</p>
                <p className="text-[#555] leading-relaxed">
                  Information Systems certified professional with expertise in{' '}
                  <strong>software development, cloud computing (AWS) and data analysis</strong>.
                  Specialises in AI-integrated business applications, IoT solutions, and intelligent automation systems.
                </p>
              </div>
            </RevealOnScroll>

            {/* Ibraheem Nuckcheddy */}
            <RevealOnScroll delay={0.2}>
              <div className="bg-[#fcfcfa] border border-[#053446]/10 rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-lg hover:border-[#71cff3]/30">
                <h3 className="text-2xl font-bold text-[#53b8d8] mb-1">Ibraheem Nuckcheddy</h3>
                <p className="text-sm font-semibold text-[#95969a] mb-4">Co-Founder & CTO</p>
                <p className="text-[#555] leading-relaxed">
                  Computing specialist with extensive experience in{' '}
                  <strong>system administration, cloud computing and cybersecurity</strong>.
                  Expert in server management, AI infrastructure deployment, database administration and enterprise security protocols.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#053446] mb-4">
                What We Do
              </h2>
              <p className="text-[#95969a] max-w-3xl mx-auto">
                Our multidisciplinary team brings together expertise in software engineering, AI integration, data analytics, and hardware solutions to deliver technically sound and strategically aligned results.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Code, title: "Software & SaaS Solutions", desc: "Custom software development, AI-enabled applications, cloud-based platforms, and API integration" },
              { icon: Globe, title: "Digital Transformation", desc: "Website development, digital consulting, document digitization, and workflow automation enhanced with AI" },
              { icon: Home, title: "Smart Home Automation", desc: "Complete assessments, device supply and installation, configuration and integration" },
              { icon: Server, title: "IT Infrastructure", desc: "Hardware sourcing, system optimisation, troubleshooting, and technical support" },
            ].map((service, idx) => (
              <RevealOnScroll key={idx} delay={0.1 * idx}>
                <div className="group bg-[#fcfcfa] border border-[#053446]/10 rounded-2xl p-6 h-full transition-all duration-500 hover:shadow-lg hover:border-[#71cff3]/30 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-[#71cff3]/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <service.icon size={20} className="text-[#71cff3]" />
                  </div>
                  <h3 className="font-semibold text-lg text-[#053446] mb-2">{service.title}</h3>
                  <p className="text-[#95969a] text-sm leading-relaxed">{service.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR EXPERIENCE */}
      <section className="py-20 bg-[#fcfcfa]">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#053446] mb-4">
                Our Experience
              </h2>
              <p className="text-[#95969a] max-w-3xl mx-auto leading-relaxed">
                We serve clients across diverse sectors including luxury furniture and retail, training institutions and sports academies, accounting firms, professional services, industrial equipment suppliers, food producers, and residential automation projects. Each solution is tailored to meet unique operational needs while maintaining efficiency and scalability.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {[
              "Retail & Interiors",
              "Education",
              "Professional Services",
              "Industrial Equipment",
              "Food & Hospitality",
              "Home Automation"
            ].map((sector, idx) => (
              <RevealOnScroll key={idx} delay={0.05 * idx}>
                <div className="bg-white border border-[#053446]/10 rounded-xl p-4 text-center hover:border-[#71cff3]/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <p className="text-sm font-semibold text-[#053446]">{sector}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#053446] mb-4">
                Our Values
              </h2>
              <p className="text-[#95969a] max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Innovation", desc: "Delivering cutting-edge solutions that stay ahead of technology trends" },
              { icon: ShieldCheck, title: "Reliability", desc: "Ensuring consistent performance and dependable support" },
              { icon: Users, title: "Customer Focus", desc: "Tailoring solutions to meet unique business and residential needs" },
              { icon: Layers, title: "Integration", desc: "Creating seamless connections between systems and devices" }
            ].map((item, idx) => (
              <RevealOnScroll key={idx} delay={0.1 * idx}>
                <div className="group bg-[#fcfcfa] border border-[#053446]/10 rounded-2xl p-6 h-full transition-all duration-500 hover:shadow-lg hover:border-[#71cff3]/30 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-[#71cff3]/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <item.icon size={20} className="text-[#71cff3]" />
                  </div>
                  <h3 className="font-semibold text-lg text-[#053446] mb-2">{item.title}</h3>
                  <p className="text-[#95969a] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR MISSION */}
      <section className="py-20 bg-[#fcfcfa]">
        <div className="max-w-5xl mx-auto px-6">
          <RevealOnScroll>
            <div className="bg-gradient-to-br from-[#053446] to-[#053446]/90 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
              />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg md:text-xl text-[#95969a] max-w-3xl mx-auto leading-relaxed">
                  To simplify operations by providing cutting-edge IT and automation solutions that transform manual processes into intelligent digital ecosystems for both business and residential environments.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#053446] leading-tight">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-lg text-[#95969a] mb-10 max-w-2xl mx-auto">
                Let's discuss how our solutions can streamline your business or home.
              </p>
              <Link href="/contact" className="group inline-flex items-center gap-3 px-10 py-4 bg-[#053446] text-white text-lg font-semibold rounded-full transition-all hover:scale-105 hover:bg-[#053446]/90">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Company;
