'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  /**
   * There is deliberately no `isOpen` state.
   *
   * The panel and every item inside it are already in the server-rendered
   * HTML — the only thing the old version needed JavaScript for was flipping a
   * boolean. But that boolean lived in React, so the first tap did nothing at
   * all until this whole page had hydrated: measured at 5.2s on a throttled
   * phone. Taps before that were swallowed silently, which is exactly what
   * "it doesn't open instantly" feels like.
   *
   * Open/closed now lives in the `data-menu` attribute on the <nav> below,
   * flipped by the delegated listener in the document head (`menuScript` in
   * app/layout.tsx). That listener is attached while the HTML is still
   * parsing, so the menu answers the very first tap whenever it comes. Every
   * duration, easing and stagger is unchanged — see `.nav-panel` / `.nav-item`
   * in globals.css.
   *
   * `scrolled` stays in React: it is a scroll effect, and nothing the user can
   * tap is blocked on it.
   */
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // A client-side navigation keeps this component mounted, so the panel has to
  // be told to close when the route changes underneath it.
  useEffect(() => {
    document.querySelector('nav[data-menu-root]')?.setAttribute('data-menu', 'closed');
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
      data-menu-root
      data-menu="closed"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-smart-white/90 backdrop-blur-md border-b border-smart-gray/10 py-4 shadow-[0_2px_24px_rgba(5,52,70,0.06)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" prefetch={false} className="flex items-center gap-2 group">
          <Image
            src="/brand/mysmart-logo-v1.png"
            alt="mySmart Logo"
            width={297}
            height={96}
            preload
            decoding="async"
            className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="https://heyotto.mu"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-1 text-sm font-medium text-smart-gray transition-colors duration-200 hover:text-smart-dark after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:rounded-full after:bg-smart-blue after:transition-all after:duration-300 hover:after:w-full"
          >
            Otto
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              prefetch={false}
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
            prefetch={false}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-smart-dark text-white rounded-full text-sm font-medium overflow-hidden transition-all hover:bg-smart-dark/90 hover:shadow-lg hover:shadow-smart-dark/20"
          >
            <span className="relative z-10">Contact Us</span>
            <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-smart-dark to-smart-blue opacity-0 group-hover:opacity-20 transition-opacity" />
          </Link>
        </div>

        {/* Mobile Toggle — both icons ship in the HTML so the swap needs no JS */}
        <button
          type="button"
          data-menu-toggle
          aria-label="Toggle navigation menu"
          aria-expanded="false"
          aria-controls="mobile-menu"
          className="md:hidden text-smart-dark focus:outline-none"
        >
          <Menu className="nav-icon-open" />
          <X className="nav-icon-close" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        data-menu-panel
        className="nav-panel absolute top-full left-0 w-full bg-smart-white border-b border-smart-gray/10 md:hidden flex flex-col p-6 shadow-xl"
      >
        {navLinks.map((link, idx) => (
          <Link
            key={link.name}
            href={link.path}
            prefetch={false}
            style={{ '--nav-delay': `${60 * idx}ms` } as React.CSSProperties}
            className="nav-item py-3 text-lg font-medium text-smart-dark border-b border-gray-100 last:border-0"
          >
            {link.name}
          </Link>
        ))}
        <a
          href="https://heyotto.mu"
          target="_blank"
          rel="noopener noreferrer"
          style={{ '--nav-delay': `${60 * navLinks.length}ms` } as React.CSSProperties}
          className="nav-item flex items-center gap-1 border-b border-gray-100 py-3 text-lg font-medium text-smart-dark"
        >
          Otto
          <ArrowUpRight size={15} />
        </a>
        <Link
          href="/contact"
          prefetch={false}
          style={{ '--nav-delay': `${60 * (navLinks.length + 1)}ms` } as React.CSSProperties}
          className="nav-item mt-4 w-full text-center py-3 bg-smart-dark text-white rounded-lg font-medium active:scale-95"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
