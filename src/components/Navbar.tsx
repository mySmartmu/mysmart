'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'myCloud', path: '/mycloud' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Company', path: '/company' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-smart-white/90 backdrop-blur-md border-b border-smart-gray/10 py-4 shadow-[0_2px_24px_rgba(5,52,70,0.06)]'
          : 'bg-transparent py-6'
      }`}
    >
      {/* Reading progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#71cff3] to-[#053446] rounded-r-full transition-opacity duration-300"
        style={{ width: `${progress * 100}%`, opacity: scrolled ? 1 : 0 }}
      />

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="https://cdn.prod.website-files.com/6895b1f7baeb5ed49b7144a3/698b7ba5466457ae33a17f90_mySSF.png"
            alt="mySmart Logo"
            className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`relative text-sm font-medium transition-colors duration-200 after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:rounded-full after:bg-smart-blue after:transition-all after:duration-300 ${
                isActive(link.path)
                  ? 'text-smart-dark font-bold after:w-full'
                  : 'text-smart-gray hover:text-smart-dark after:w-0 hover:after:w-full'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-smart-dark text-white rounded-full text-sm font-medium overflow-hidden transition-all hover:bg-smart-dark/90 hover:shadow-lg hover:shadow-smart-dark/20"
          >
            <span className="relative z-10">Contact Us</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-smart-dark to-smart-blue opacity-0 group-hover:opacity-20 transition-opacity" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-smart-dark focus:outline-none"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-smart-white border-b border-smart-gray/10 md:hidden flex flex-col p-6 shadow-xl transition-all duration-300 ease-out ${
          isOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-3 invisible pointer-events-none'
        }`}
      >
        {navLinks.map((link, idx) => (
          <Link
            key={link.name}
            href={link.path}
            onClick={() => setIsOpen(false)}
            style={{ transitionDelay: isOpen ? `${60 * idx}ms` : '0ms' }}
            className={`py-3 text-lg font-medium text-smart-dark border-b border-gray-100 last:border-0 transition-all duration-300 ${
              isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
            }`}
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          style={{ transitionDelay: isOpen ? `${60 * navLinks.length}ms` : '0ms' }}
          className={`mt-4 w-full text-center py-3 bg-smart-dark text-white rounded-lg font-medium transition-all duration-300 active:scale-95 ${
            isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
