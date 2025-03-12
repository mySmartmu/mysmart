// src/app/page.tsx
'use client';
import Link from 'next/link';
//import { useState } from 'react';
import MobileMenu from '@/components/MobileMenu';
import ContactForm from '@/components/ContactForm';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import ScrollProgress from '@/components/ui/ScrollProgress';
import AnimatedCard from '@/components/ui/AnimatedCard';
import OptimizedImage from '@/components/ui/OptimizedImage';
import SmoothScroll from '@/components/SmoothScroll';
import ProductSlider from '@/components/ProductSlider';
// Icons
const SoftwareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const HardwareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const WebIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const ShopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

// const ProductIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
//   </svg>
// );

// const PayrollIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
//   </svg>
// );

// const POSIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
//   </svg>
// );

// // Tailored Approach Icon
// const TailoredApproachIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//   </svg>
// );

// // Comprehensive Solutions Icon
// const ComprehensiveSolutionsIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
//   </svg>
// );

// // Reliable Support Icon
// const ReliableSupportIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 21v-2a4 4 0 00-4-4h-4" />
//   </svg>
// );

// Tailored Approach Icon - Puzzle pieces representing customization
const TailoredApproachIcon2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
  </svg>
);

// Comprehensive Solutions Icon - Database/layers representing complete stack
const ComprehensiveSolutionsIcon2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

// Reliable Support Icon - Shield icon representing protection and reliability
const ReliableSupportIcon2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

// Another set with even more distinct icons

// Tailored Approach Icon - Measuring tape/ruler
// const TailoredApproachIcon3 = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
//   </svg>
// );

// // Comprehensive Solutions Icon - Document checklist
// const ComprehensiveSolutionsIcon3 = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
//   </svg>
// );

// // Reliable Support Icon - Headset/support icon
// const ReliableSupportIcon3 = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
//   </svg>
// );

export default function Home() {
  const navLinks = [
    { href: '#about', label: 'About us' },
    { href: '#services', label: 'Services' },
    { href: '#products', label: 'Products' },
    { href: '#why-us', label: 'Why us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Include the SmoothScroll component */}
      <SmoothScroll />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
    {/* Header/Navigation with blue Shop button */}
<header className="bg-white py-4 px-6 md:px-12 shadow-sm sticky top-0 z-20">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <div className="flex items-center">
      {/* Logo */}
      <div className="h-8 w-10 relative mr-2">
        <OptimizedImage
          src="/images/logo.png" 
          alt="mySmart Logo"
          width={40}
          height={40}
          priority={true}
          className="object-contain"
        />
      </div>
      <span className="text-xl font-bold">
        <span className="text-cyan-500">my</span>
        <span className="text-gray-500">Smart</span>
      </span>
    </div>
    
    {/* Desktop Navigation - Added nowrap and adjusted spacing */}
    <nav className="hidden md:flex items-center whitespace-nowrap">
      {navLinks.map((link, index) => (
        <Link 
          key={index}
          href={link.href} 
          className="text-gray-700 hover:text-cyan-600 font-medium px-3 lg:px-4" // Reduced horizontal padding
        >
          {link.label}
        </Link>
      ))}
      <Link 
        href="/shop" 
        className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-3 lg:px-4 rounded-md flex items-center transition-colors ml-2"
      >
        <ShopIcon /> <span className="ml-1">Shop</span>
      </Link>
    </nav>
    
    {/* Mobile Menu - show on smaller screens */}
    <MobileMenu links={[...navLinks, { href: '/shop', label: 'Shop' }]} />
  </div>
</header>

      {/* Hero Section with simplified background approach */}
<section 
  className="relative min-h-[80vh] flex items-center bg-cover bg-center z-0"
  style={{
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url('/images/hero/herobg1.jpg')`
  }}
>
  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
    <div className="max-w-3xl">
      <ScrollAnimation direction="up" delay={0.1}>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Smart IT & Automation Solutions for your Business and Home
        </h1>
      </ScrollAnimation>
      
      <ScrollAnimation direction="up" delay={0.3}>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          From tailor-made software to optimised hardware solutions and complete smart home automation,
          mySmart empowers you with cutting-edge solutions.
        </p>
      </ScrollAnimation>
      
      <ScrollAnimation direction="up" delay={0.5}>
        <div className="flex gap-3">
          <Link 
            href="#services" 
            className="inline-block bg-gray-500 hover:bg-slate-700 text-white font-medium py-2.5 px-5 rounded-md min-w-[120px] text-center"
          >
            Learn more
          </Link>
          <Link 
            href="/shop" 
            className="inline-flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2.5 px-5 rounded-md min-w-[120px]"
          >
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg> */}
            Our shop
          </Link>
        </div>
      </ScrollAnimation>
    </div>
  </div>
</section>

      {/* About Us Section */}
      <section id="about" className="py-16 px-6 bg-white relative z-1 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">About Us</h2>
          </ScrollAnimation>
          
          <div className="max-w-3xl">
            <ScrollAnimation direction="up" delay={0.2}>
              <p className="text-gray-700 mb-4">
                <span className="font-bold"><span className="text-cyan-500">my</span><span className="text-gray-700">Smart</span></span> specialises in providing <span className="font-semibold">smart IT and automation solutions</span> designed to simplify and streamline both business and home operations.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.4}>
              <p className="text-gray-700 mb-4">
                From custom software designed to suit your business needs to hardware solutions that keep your business running smoothly, we provide end-to-end solutions. We also help businesses transition into the digital age by converting manual processes into efficient digital systems.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation direction="up" delay={0.6}>
              <p className="text-gray-700">
                Beyond IT, we bring smart automation to homes – evaluating and advising on the best smart devices and handling installation and configuration to create a seamless, connected environment.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-gradient-to-r from-cyan-50 to-blue-50 relative z-1 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation direction="up">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-12 text-center">Our Services</h2>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Software & SaaS Solutions */}
            <AnimatedCard
              title="Software & SaaS Solutions"
              contentSections={[
                {
                  subtitle: "Custom software and app development",
                  description: "Tailored solutions built around your business needs to optimise, support and improve your workflows"
                },
                {
                  subtitle: "Cloud-based SaaS solutions",
                  description: "Scalable and secure applications designed to streamline your operations and enhance productivity"
                }
              ]}
              icon={<SoftwareIcon />}
              className="h-full"
              // imageUrl="/images/services/software.jpg" // Uncomment when you have an image
            />

            {/* Hardware & IT Infrastructure */}
            <AnimatedCard
              title="Hardware & IT Infrastructure"
              contentSections={[
                {
                  subtitle: "IT infrastructure and optimisation",
                  description: "Assess your hardware needs, source the right equipment and handle installation and maintenance"
                },
                {
                  subtitle: "Troubleshooting and IT support",
                  description: "Keep your IT infrastructure running smoothly with expert problem-solving and technical support"
                }
              ]}
              icon={<HardwareIcon />}
              className="h-full"
              // imageUrl="/images/services/hardware.jpg" // Uncomment when you have an image
            />

            {/* Web & Digital Services */}
            <AnimatedCard
              title="Web & Digital Services"
              contentSections={[
                {
                  subtitle: "Website development and design",
                  description: "Creating functional and custom websites to support your business goals"
                },
                {
                  subtitle: "Email hosting",
                  description: "Secure and reliable business email hosting with domain registration for a professional online presence"
                },
                {
                  subtitle: "Digitalisation",
                  description: "Transforming physical documents and manual workflows info efficient digital systems"
                }
              ]}
              icon={<WebIcon />}
              className="h-full"
              // imageUrl="/images/services/web.jpg" // Uncomment when you have an image
            />

            {/* Home Automation */}
            <AnimatedCard
              title="Home Automation"
              contentSections={[
                {
                  subtitle: "Smart home assessments",
                  description: "Evaluating and identifying automation opportunities for the best smart devices to enhance comfort and efficiency"
                },
                {
                  subtitle: "Supply, installation and configuration",
                  description: "Providing and setting up smart home devices, ensuring seamless integration and ease of use"
                }
              ]}
              icon={<HomeIcon />}
              className="h-full"
              // imageUrl="/images/services/home-automation.jpg" // Uncomment when you have an image
            />
          </div>
        </div>
      </section>

     {/* Products Section */}
<section id="products" className="py-16 px-6 bg-white relative z-1 scroll-mt-20">
  <div className="max-w-7xl mx-auto">
    <ScrollAnimation direction="up">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-12 text-center">Our Products</h2>
    </ScrollAnimation>
    
    <ScrollAnimation direction="up" delay={0.2}>
      <ProductSlider 
        products={[
          {
            id: 'mypayroll',
            name: 'myPayroll',
            description: 'A comprehensive payroll management system designed to streamline your HR processes. Manage employee salaries, taxes, and benefits with ease.',
            imageUrl: '/images/products/payroll.png',
            logoUrl: '/images/products/payroll-logo.png', // Add your logo path here
            status: 'available',
            primaryAction: {
              label: 'Visit app',
              href: 'https://payroll-two-rose.vercel.app/',
              isExternal: true
            },
            secondaryAction: {
              label: 'Request demo',
              href: '#contact'
            }
          },
          {
            id: 'mypos',
            name: 'myPOS',
            description: 'A modern point-of-sale system that helps managing inventory, process sales, and track customer data. Perfect for retail businesses.',
            imageUrl: '/images/products/mypos.png', // You can leave this empty if you don't have the image yet
            logoUrl: '/images/products/mypos-logo.png', // Add your logo path here
            status: 'coming-soon',
            primaryAction: {
              label: 'Join waitlist',
              href: '#contact'
            }
          }
          // You can add more products as needed
        ]}
        autoRotateInterval={10000} // 10 seconds
      />
    </ScrollAnimation>
  </div>
</section>
     {/* Card-Style Why Choose Us Section - More consistent with your services section */}
<section id="why-us" className="py-16 px-6 bg-gradient-to-r from-cyan-50 to-blue-50 relative z-1 scroll-mt-20">
  <div className="max-w-7xl mx-auto">
    <ScrollAnimation direction="up">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-12 text-center">Why choose mySmart?</h2>
    </ScrollAnimation>
    
    <div className="grid md:grid-cols-3 gap-8">
      {/* Tailored Approach */}
      <AnimatedCard
        title="Tailored Approach"
        description="We assess your unique needs, whether for business efficiency or home convenience and deliver customised solutions"
        icon={<TailoredApproachIcon2 />}
        className="h-full"
        hoverEffect="glow"
      />

      {/* Comprehensive Solutions */}
      <AnimatedCard
        title="Comprehensive Solutions"
        description="From IT infrastructure to digital transformation to smart home automation, we provide a full range of solutions"
        icon={<ComprehensiveSolutionsIcon2 />}
        className="h-full"
        hoverEffect="glow"
      />

      {/* Reliable Support */}
      <AnimatedCard
        title="Reliable Support"
        description="Your trusted partner for ongoing IT needs, maintenance, troubleshooting and smart device optimisation"
        icon={<ReliableSupportIcon2 />}
        className="h-full"
        hoverEffect="glow"
      />
    </div>
  </div>
</section>

      {/* Contact Section */}
<section id="contact" className="py-16 px-6 bg-white relative z-1 scroll-mt-20">
  <div className="max-w-7xl mx-auto">
    <ScrollAnimation direction="up">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">Contact Us</h2>
      <p className="text-gray-700 mb-8 text-center">Get in touch for a free consultation</p>
    </ScrollAnimation>
    
    <ScrollAnimation direction="up" delay={0.3}>
      <div className="max-w-md mx-auto">
        <ContactForm />
      </div>
    </ScrollAnimation>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-6 relative z-1">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© 2025 mySmart – Mauritius. All rights reserved</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal" className="text-gray-300 hover:text-white transition-colors">
                Legal Disclaimer
              </Link>
              <Link href="/shop" className="text-gray-300 hover:text-white transition-colors">
                Shop
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}