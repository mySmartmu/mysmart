'use client';

import React from 'react';
import Link from 'next/link';
import { Linkedin, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-smart-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <img
              src="https://cdn.prod.website-files.com/6895b1f7baeb5ed49b7144a3/698b7ba5466457ae33a17f90_mySSF.png"
              alt="mySmart Logo"
              className="h-8 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 max-w-sm mb-6">
              We develop AI-powered applications and custom software that help businesses streamline operations, automate workflows, and thrive in the digital age.
            </p>
            <div className="hidden flex gap-4">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-full border border-white/10 hover:bg-smart-blue hover:text-smart-dark transition-all text-white">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-row gap-8 items-center">
            <Link href="/products" className="font-bold text-lg hover:text-[#71cff3] transition-colors flex items-center gap-1 group">
              Products
              <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link href="/solutions" className="font-bold text-lg hover:text-[#71cff3] transition-colors flex items-center gap-1 group">
              Solutions
              <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link href="/company" className="font-bold text-lg hover:text-[#71cff3] transition-colors flex items-center gap-1 group">
              Company
              <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} mySmart Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
