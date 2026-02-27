'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Company', path: '/company' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-smart-white/90 backdrop-blur-md border-b border-smart-gray/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
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
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive(link.path) ? 'text-smart-dark font-bold' : 'text-smart-gray hover:text-smart-dark'
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
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-smart-white border-b border-smart-gray/10 md:hidden flex flex-col p-6 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="py-3 text-lg font-medium text-smart-dark border-b border-gray-100 last:border-0"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 w-full text-center py-3 bg-smart-dark text-white rounded-lg font-medium"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
