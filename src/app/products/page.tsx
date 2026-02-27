'use client';

import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  Receipt,
  Store,
  GraduationCap,
  Clock,
  Tag,
  Zap,
  Info,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { RevealOnScroll } from '@/components/RevealOnScroll';

const Products: React.FC = () => {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const products = [
    {
      id: 'myinvoice',
      name: 'myInvoice Pro',
      tagline: 'Invoicing & VAT Management System',
      description: 'Create and send professional invoices and receipts in seconds. Automatically calculate VAT, track payments, log business expenses, and set quarterly revenue goals — all from one dashboard.',
      features: [
        'Detailed Customer Recording',
        'Invoice & Receipt Issuance',
        'Automatic VAT Calculation',
        'Payment Collection Tracking',
        'Business Expense Logging',
        'Quarterly & Yearly Goal Setting'
      ],
      benefits: [
        'Save hours per week on accounting tasks',
        'Reduce invoice errors',
        'Get paid faster with automated reminders'
      ],
      icon: Receipt,
      logo: '/images/01myInvoicePro.png',
      color: '#71cff3',
      category: 'finance',
      popular: true
    },
    {
      id: 'mypos',
      name: 'myPOS',
      tagline: 'Point of Sale & Inventory System',
      description: 'A complete point of sale solution that connects your physical store with your online shop. Process sales, manage stock levels in real time, and keep your inventory perfectly synced across all channels.',
      features: [
        'In-store Sales & Checkout',
        'Real-time Inventory Updates',
        'Website Stock Synchronization',
        'Sales & Transaction Reporting',
        'Multi-location Inventory Sync'
      ],
      benefits: [
        'Eliminate stock discrepancies completely',
        'Sync inventory across all channels instantly',
        'Reduce overselling incidents'
      ],
      icon: Store,
      logo: '/images/02myPOS.png',
      color: '#ff9f43',
      category: 'retail',
      popular: false
    },
    {
      id: 'myedu',
      name: 'myEdu Pro',
      tagline: 'Education & Conference Management System',
      description: 'An all-in-one platform for schools, training centres, and event organisers. Manage student registrations, automate invoicing, schedule courses or conferences, process payments, and generate certificates.',
      features: [
        'Student & Attendee Registration',
        'Automated Invoicing & Receipts',
        'Course & Conference Scheduling',
        'Digital Certificate Generation'
      ],
      benefits: [
        'Reduce admin workload by 60%',
        'Automate certificate generation',
        'Streamline enrollment and payments'
      ],
      icon: GraduationCap,
      logo: '/images/03myEdupro.png',
      color: '#a55eea',
      category: 'education',
      popular: true
    },
    {
      id: 'mypayroll',
      name: 'myPayroll',
      tagline: 'Payroll & Payslip Generation System',
      description: 'Import employee timesheets, apply allowances and deductions, and generate accurate payslips automatically. Manage employee loans with repayment tracking and keep clean records for every pay cycle.',
      features: [
        'Timesheet Import & Processing',
        'Allowance & Deduction Calculation',
        'Employee Loan Management',
        'Automatic Payslip Generation',
        'Employee Record Maintenance'
      ],
      benefits: [
        'Process payroll in minutes, not hours',
        'Eliminate manual calculation errors',
        'Track loan balances automatically'
      ],
      icon: Clock,
      logo: '/images/04myPayroll.png',
      color: '#26de81',
      category: 'hr',
      popular: false
    },
    {
      id: 'mytag',
      name: 'myTag',
      tagline: 'Electronic Shelf Label System',
      description: 'Digital price tags for modern retail. Update product prices, promotions, and information across your entire store instantly from the cloud — no more manual label changes.',
      features: [
        'Cloud-controlled Price Tags',
        'Instant Shelf-edge Updates',
        'Ultra-low Power Displays',
        'Customizable Layout Design',
        'Seamless Software Integration'
      ],
      benefits: [
        'Update 1,000+ prices in seconds',
        '5-year battery life on tags',
        'Reduce pricing errors to zero'
      ],
      icon: Tag,
      logo: '/images/05myTag.png',
      color: '#71cff3',
      category: 'retail',
      popular: true
    },
    {
      id: 'smart-automation',
      name: 'Smart Automation',
      tagline: 'IoT & Smart Building Solutions',
      description: 'Professional smart automation for offices, retail spaces, warehouses, and homes. We handle the full setup — certified electrical installation, IoT device configuration, and unified control across lighting, security, and climate systems.',
      features: [
        'Certified Electrical Installation',
        'Commercial & Residential Setup',
        'IoT Ecosystem Configuration',
        'Automated Lighting, Security & Climate',
        'Unified Smart Control Hub'
      ],
      benefits: [
        'Reduce energy costs by up to 30%',
        'Control everything from one dashboard',
        'Professional installation included'
      ],
      icon: Zap,
      logo: '/images/06HomeAutomation.png',
      color: '#ff9f43',
      category: 'iot',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'finance', name: 'Finance', count: products.filter(p => p.category === 'finance').length },
    { id: 'retail', name: 'Retail', count: products.filter(p => p.category === 'retail').length },
    { id: 'education', name: 'Education', count: products.filter(p => p.category === 'education').length },
    { id: 'hr', name: 'HR', count: products.filter(p => p.category === 'hr').length },
    { id: 'iot', name: 'IoT', count: products.filter(p => p.category === 'iot').length },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const toggleExpand = (productId: string) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  return (
    <div className="pt-32 bg-[#fcfcfa] overflow-hidden">

      {/* Enhanced Hero Section */}
      <section className="pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[420px]">
            {/* Left: Text Content */}
            <div className="text-left relative z-10">
              <RevealOnScroll>
                <h1 className="text-5xl md:text-7xl font-extrabold text-[#053446] tracking-tight mb-6 leading-[1.1]">
                  Solutions Built for
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#053446] to-[#71cff3]">
                    Your Success
                  </span>
                </h1>
              </RevealOnScroll>

              <RevealOnScroll delay={0.1}>
                <p className="text-xl text-[#95969a] max-w-xl mb-6 leading-relaxed">
                  From invoicing to inventory, education to automation, discover our integrated suite
                  of tools designed to streamline your operations and accelerate growth.
                </p>
              </RevealOnScroll>
            </div>

            {/* Right: 3D Abstract Gradient Visual */}
            <RevealOnScroll delay={0.2}>
              <div className="relative w-full h-[420px] hidden lg:block overflow-visible">
                {/* Fade overlay on the left edge to blend into text */}
                <div className="absolute -left-16 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#fcfcfa] to-transparent pointer-events-none" />

                {/* Layered 3D abstract shapes - spread across the full area */}
                <div className="absolute -inset-4">
                  {/* Large base blob covering the center */}
                  <div className="absolute top-[5%] left-[10%] w-[90%] h-[85%] rounded-[60%_40%_50%_45%] bg-gradient-to-br from-[#71cff3]/25 to-[#053446]/15 blur-[1px]" style={{ animation: 'morph 12s ease-in-out infinite' }} />

                  {/* Secondary blob for depth */}
                  <div className="absolute top-[15%] left-[20%] w-[70%] h-[65%] rounded-[45%_55%_40%_60%] bg-gradient-to-tr from-[#053446]/20 to-[#71cff3]/35 blur-[1px]" style={{ animation: 'morph 10s ease-in-out infinite reverse' }} />

                  {/* Floating 3D rounded cube */}
                  <div className="absolute top-[12%] right-[8%] w-[180px] h-[180px] rounded-[35px] bg-gradient-to-tr from-[#053446]/25 to-[#71cff3]/45 rotate-12 shadow-2xl" style={{ animation: 'float 8s ease-in-out infinite' }} />

                  {/* Mid-left floating shape to fill the gap */}
                  <div className="absolute top-[25%] left-[5%] w-[160px] h-[160px] rounded-[30px] bg-gradient-to-bl from-[#71cff3]/30 to-[#053446]/15 -rotate-12 shadow-xl" style={{ animation: 'float 7s ease-in-out infinite reverse' }} />

                  {/* Accent orb bottom-right */}
                  <div className="absolute bottom-[10%] right-[15%] w-[130px] h-[130px] rounded-full bg-gradient-to-bl from-[#ff9f43]/35 to-[#a55eea]/25 shadow-xl" style={{ animation: 'float 5s ease-in-out infinite reverse' }} />

                  {/* Lower-left shape to cover bottom gap */}
                  <div className="absolute bottom-[8%] left-[15%] w-[140px] h-[100px] rounded-[25px] bg-gradient-to-tr from-[#71cff3]/20 to-[#053446]/10 rotate-6 shadow-lg" style={{ animation: 'float 9s ease-in-out infinite' }} />

                  {/* Stacked glass cards - center */}
                  <div className="absolute top-[45%] left-[30%] w-[190px] h-[140px] rounded-2xl bg-gradient-to-br from-white/50 to-[#71cff3]/15 backdrop-blur-md border border-white/40 shadow-lg -rotate-6" style={{ animation: 'float 9s ease-in-out infinite' }} />
                  <div className="absolute top-[50%] left-[35%] w-[190px] h-[140px] rounded-2xl bg-gradient-to-br from-white/35 to-[#053446]/10 backdrop-blur-md border border-white/30 shadow-md rotate-3" style={{ animation: 'float 9s ease-in-out infinite reverse' }} />

                  {/* Glowing dots scattered */}
                  <div className="absolute top-[20%] left-[45%] w-4 h-4 rounded-full bg-[#71cff3] shadow-[0_0_20px_rgba(113,207,243,0.6)]" style={{ animation: 'float 4s ease-in-out infinite' }} />
                  <div className="absolute top-[70%] left-[50%] w-3 h-3 rounded-full bg-[#ff9f43] shadow-[0_0_15px_rgba(255,159,67,0.5)]" style={{ animation: 'float 3s ease-in-out infinite reverse' }} />
                  <div className="absolute top-[35%] right-[5%] w-3 h-3 rounded-full bg-[#a55eea] shadow-[0_0_12px_rgba(165,94,234,0.5)]" style={{ animation: 'float 5s ease-in-out infinite' }} />
                  <div className="absolute bottom-[25%] left-[10%] w-2 h-2 rounded-full bg-[#26de81] shadow-[0_0_10px_rgba(38,222,129,0.5)]" style={{ animation: 'float 6s ease-in-out infinite reverse' }} />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Category Filter Pills - Full width below hero */}
      <section className="pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-[#053446] text-white shadow-lg scale-105'
                      : 'bg-white text-[#053446] border border-[#053446]/10 hover:border-[#71cff3] hover:shadow-md'
                  }`}
                >
                  {category.name}
                  <span className="ml-2 opacity-60">({category.count})</span>
                </button>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Float animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(var(--tw-rotate, 0deg)); }
          50% { transform: translateY(-20px) rotate(var(--tw-rotate, 0deg)); }
        }
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 50% 45% / 50% 60% 40% 55%; }
          25% { border-radius: 45% 55% 60% 40% / 60% 40% 55% 50%; }
          50% { border-radius: 50% 50% 40% 60% / 45% 55% 50% 50%; }
          75% { border-radius: 55% 45% 55% 45% / 50% 45% 60% 40%; }
        }
      `}</style>

      {/* Enhanced Product Cards Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product, index) => (
              <RevealOnScroll key={product.id} delay={0.1 * (index % 4)}>
                <div className="group relative bg-white rounded-3xl border border-[#053446]/10 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#71cff3]/10 hover:border-[#71cff3]/30 hover:-translate-y-2">

                  {/* Gradient Background Blob */}
                  <div
                    className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] opacity-10 transition-opacity duration-500 group-hover:opacity-20"
                    style={{ backgroundColor: product.color }}
                  />

                  <div className="relative z-10 p-8">

                    {/* Popular Badge */}
                    {product.popular && (
                      <div className="flex justify-end mb-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#71cff3] text-white rounded-full text-xs font-bold shadow-lg">
                          <Sparkles size={14} />
                          POPULAR
                        </div>
                      </div>
                    )}

                    {/* Header Section */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                          style={{ backgroundColor: `${product.color}15` }}
                        >
                          <img src={product.logo} alt={product.name} className="w-12 h-12 object-contain" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#053446] mb-1">{product.name}</h3>
                          <p className="text-sm font-medium text-[#71cff3] uppercase tracking-wide">
                            {product.tagline}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#95969a] leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Key Benefits - Always Visible */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-[#053446] uppercase tracking-wide mb-4 flex items-center gap-2">
                        <Sparkles size={16} style={{ color: product.color }} />
                        Key Benefits
                      </h4>
                      <div className="space-y-3">
                        {product.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div
                              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                              style={{ backgroundColor: `${product.color}20`, color: product.color }}
                            >
                              <Check size={14} strokeWidth={3} />
                            </div>
                            <span className="text-sm text-[#053446] font-medium leading-relaxed">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expandable Features Section */}
                    <div className="border-t border-[#053446]/5 pt-6">
                      <button
                        onClick={() => toggleExpand(product.id)}
                        className="flex items-center justify-between w-full text-left group/expand"
                      >
                        <h4 className="text-sm font-bold text-[#053446] uppercase tracking-wide flex items-center gap-2">
                          <Info size={16} style={{ color: product.color }} />
                          Full Feature List
                        </h4>
                        <ChevronDown
                          size={20}
                          className={`text-[#053446] transition-transform duration-300 ${
                            expandedProduct === product.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Animated Expandable Content */}
                      <div
                        className={`grid transition-all duration-500 ease-in-out ${
                          expandedProduct === product.id
                            ? 'grid-rows-[1fr] opacity-100 mt-4'
                            : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="grid grid-cols-1 gap-3">
                            {product.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-3 py-2 px-4 bg-[#053446]/[0.02] rounded-lg">
                                <div
                                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                                  style={{ backgroundColor: `${product.color}15`, color: product.color }}
                                >
                                  <Check size={12} strokeWidth={3} />
                                </div>
                                <span className="text-sm text-[#053446] font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8">
                      <a
                        href="/contact"
                        className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold transition-all duration-300 group/btn"
                        style={{
                          backgroundColor: product.color,
                          color: 'white'
                        }}
                      >
                        Contact Us
                        <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="bg-[#053446] py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#71cff3]/10 rounded-full blur-[150px]" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#71cff3]/20 text-[#71cff3] text-sm font-semibold mb-8">
              <Sparkles size={16} />
              Custom Solutions Available
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
              Don't See What You Need?
              <br />
              <span className="text-[#71cff3]">Let's Build It Together.</span>
            </h2>

            <p className="text-lg md:text-xl text-[#95969a] mb-12 max-w-3xl mx-auto leading-relaxed">
              Our technical team specialises in custom software and hardware integrations
              tailored to your unique operational challenges. From concept to deployment,
              we engineer solutions that scale with your business.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="group px-10 py-5 bg-[#71cff3] text-[#053446] rounded-full font-bold transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-[#71cff3]/20 hover:scale-105 flex items-center justify-center gap-3">
                Book a free consultation
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Trust Indicators - hidden for now */}
            <div className="hidden grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">10K+</div>
                <div className="text-sm text-[#95969a] uppercase tracking-wide">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-sm text-[#95969a] uppercase tracking-wide">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-[#95969a] uppercase tracking-wide">Support</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Products;
