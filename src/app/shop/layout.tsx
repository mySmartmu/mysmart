// src/app/shop/layout.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Shop Navigation */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
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
                  <span className="text-gray-500 ml-1 text-xs font-normal">Shop</span>
                </span>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <Link href="/shop/products" className="border-transparent hover:border-cyan-500 text-gray-700 hover:text-gray-800 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Products
                </Link>
              </div>
            </div>
            
            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              {/* Cart icon - visible on all screens */}
              <Link 
                href="/shop/cart" 
                className="text-gray-700 hover:text-cyan-600 p-2 rounded-md"
                aria-label="Shopping Cart"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </Link>
              
              {/* Home icon - visible on all screens */}
              <Link 
                href="/" 
                className="text-gray-700 hover:text-cyan-600 p-2 rounded-md"
                aria-label="Main Site"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </Link>
              
              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-cyan-600 hover:bg-gray-100 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                {!isMobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {isMobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
              <Link
                href="/shop"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop Home
              </Link>
              <Link
                href="/shop/products"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/shop/cart"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cart
              </Link>
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Main Site
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-white mt-auto border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Link href="/" className="flex items-center">
                <div className="h-6 w-8 relative mr-2">
                  <OptimizedImage
                    src="/images/logo.png" 
                    alt="mySmart Logo"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>
                <span className="text-base font-bold">
                  <span className="text-cyan-500">my</span>
                  <span className="text-gray-700">Smart</span>
                </span>
              </Link>
            </div>
            <p className="text-gray-700 text-sm">
              © 2025 mySmart – Mauritius. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}