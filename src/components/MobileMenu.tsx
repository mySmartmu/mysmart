// src/components/MobileMenu.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  links: NavLink[];
}

export default function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Menu animation variants
  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  // Menu item animation variants
  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  // Toggle button animation variants
  const buttonVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 }
  };
  
  // Helper function to get icon for nav links - now only returns icon for shop
  // const getNavIcon = (href: string) => {
  //   if (href === '/shop') {
  //     return (
  //       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  //       </svg>
  //     );
  //   }
  //   return null;
  // };
  
  // Filter out the shop link from the main navigation
  const mainNavLinks = links.filter(link => link.href !== '/shop');

  return (
    <div className="md:hidden">
      {/* Background overlay when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Menu button */}
      <motion.button 
        id="menu-button"
        className="relative z-40 text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        animate={isOpen ? 'open' : 'closed'}
        variants={buttonVariants}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isOpen ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          )}
        </svg>
      </motion.button>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            id="mobile-menu"
            className="fixed top-0 right-0 w-2/3 h-[85vh] bg-white shadow-lg z-40 overflow-y-auto"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex flex-col h-full bg-white">
              <div className="flex justify-between items-center p-6 border-b bg-white">
                <div className="flex items-center">
                  {/* Logo */}
                  <div className="relative h-6 w-10 mr-2 flex items-center justify-center">
                    <OptimizedImage
                      src="/images/logo.png" 
                      alt="mySmart Logo"
                      width={38}
                      height={38}
                      priority={true}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xl font-bold">
                    <span className="text-cyan-500">my</span>
                    <span className="text-gray-500">Smart</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 focus:outline-none"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>
                </button>
              </div>
              
              <nav className="flex-1 flex flex-col pt-6 bg-white overflow-y-auto">
                {mainNavLinks.map((link, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:bg-gray-50 px-6 py-4 text-lg font-medium border-b flex items-center"
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              
              <motion.div 
                className="p-6 bg-gray-50 mt-auto"
                variants={itemVariants}
              >
                <Link
                  href="/shop"
                  className="flex items-center justify-center bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded transition-colors"
                  onClick={handleLinkClick}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Shop
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}