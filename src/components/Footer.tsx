import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { POSITIONING, TAGLINE } from '@/data/company';

const LINKS = [
  { name: 'Products', href: '/products' },
  { name: 'myCloud', href: '/mycloud' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Company', href: '/company' },
  { name: 'Contact', href: '/contact' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-smart-dark pb-10 pt-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/brand/mysmart-logo-v1.png"
              alt="mySmart Logo"
              width={297}
              height={96}
              loading="lazy"
              decoding="async"
              className="mb-6 h-8 w-auto brightness-0 invert"
            />
            <p className="mb-4 text-lg font-semibold text-[#71cff3]">{TAGLINE}</p>
            <p className="mb-6 max-w-sm text-gray-400">{POSITIONING}</p>

            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="mailto:info@mysmart.mu" className="transition-colors hover:text-[#71cff3]">
                info@mysmart.mu
              </a>
              <a
                href="https://heyotto.mu"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-1 transition-colors hover:text-[#71cff3]"
              >
                Otto — heyotto.mu
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-start gap-x-8 gap-y-4">
            {LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                prefetch={false}
                className="group flex items-center gap-1 text-lg font-bold transition-colors hover:text-[#71cff3]"
              >
                {link.name}
                <ArrowUpRight size={16} className="opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} mySmart Ltd. All rights reserved.</p>
          <Link href="/legal" prefetch={false} className="transition-colors hover:text-[#71cff3]">
            Legal
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
