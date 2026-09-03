import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Mail, Phone } from 'lucide-react';
import { NetworkBackdrop } from '@/components/NetworkBackdrop';
import { POSITIONING, TAGLINE } from '@/data/company';

const EXPLORE = [
  { name: 'Products', href: '/products' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'myCloud', href: '/mycloud' },
  { name: 'Company', href: '/company' },
] as const;

const Footer: React.FC = () => {
  return (
    <footer className="relative isolate overflow-hidden bg-[#053446] text-white">
      <NetworkBackdrop tone="dark" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(113,207,243,0.16),transparent_52%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-20">
        <div className="grid gap-14 border-b border-white/10 pb-14 lg:grid-cols-[1.35fr_0.65fr_0.75fr] lg:gap-12">
          <div>
            <Link href="/" prefetch={false} className="inline-flex transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src="/brand/mysmart-logo-v1.png"
                alt="mySmart"
                width={297}
                height={96}
                loading="lazy"
                decoding="async"
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-6 text-lg font-semibold text-[#71cff3]">{TAGLINE}</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">{POSITIONING}</p>

            <Link
              href="/contact"
              prefetch={false}
              className="group mt-7 inline-flex items-center gap-2 rounded-full border border-[#71cff3]/40 bg-[#71cff3]/10 px-5 py-3 text-sm font-bold text-white transition-all hover:border-[#71cff3] hover:bg-[#71cff3] hover:text-[#053446]"
            >
              Start a conversation
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#71cff3]">Explore</p>
            <nav aria-label="Footer navigation" className="flex flex-col items-start gap-3">
              {EXPLORE.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={false}
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-white/75 transition-colors hover:text-[#71cff3]"
                >
                  {link.name}
                  <ArrowUpRight size={14} className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>
              ))}
              <a
                href="https://heyotto.mu"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-white/75 transition-colors hover:text-[#71cff3]"
              >
                Otto
                <ArrowUpRight size={14} className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>
            </nav>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#71cff3]">Get in touch</p>
            <div className="flex flex-col items-start gap-4 text-sm">
              <a
                href="mailto:sales@mysmart.mu"
                className="group inline-flex items-center gap-3 text-white/75 transition-colors hover:text-[#71cff3]"
              >
                <Mail size={16} className="text-[#71cff3]" />
                sales@mysmart.mu
              </a>
              <a
                href="mailto:info@mysmart.mu"
                className="group inline-flex items-center gap-3 text-white/75 transition-colors hover:text-[#71cff3]"
              >
                <Mail size={16} className="text-[#71cff3]" />
                info@mysmart.mu
              </a>
              <a
                href="tel:+23058535757"
                className="group inline-flex items-center gap-3 text-white/75 transition-colors hover:text-[#71cff3]"
              >
                <Phone size={16} className="text-[#71cff3]" />
                +230 58 53 57 57
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-7 text-xs text-white/45 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} mySmart Ltd. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/legal" prefetch={false} className="transition-colors hover:text-[#71cff3]">
              Legal
            </Link>
            <Link href="/contact" prefetch={false} className="transition-colors hover:text-[#71cff3]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
