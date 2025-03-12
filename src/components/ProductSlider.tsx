// src/components/ProductSlider.tsx
'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import OptimizedImage from '@/components/ui/OptimizedImage';

// Define the product type
interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  logoUrl: string; // Added logo URL
  status: 'available' | 'coming-soon';
  primaryAction: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

interface ProductSliderProps {
  products: Product[];
  autoRotateInterval?: number; // in milliseconds
}

export default function ProductSlider({ 
  products, 
  autoRotateInterval = 10000 
}: ProductSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Wrap resetTimer in useCallback to prevent recreation on every render
  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    timerRef.current = setTimeout(() => {
      // This ensures it loops back to the first item after reaching the end
      setActiveIndex((prevIndex) => 
        prevIndex >= products.length - 1 ? 0 : prevIndex + 1
      );
    }, autoRotateInterval);
  }, [products.length, autoRotateInterval]);

  // Auto-rotate functionality - updated to be more resilient
  useEffect(() => {
    // Always reset the timer when the active index changes
    if (!isPaused) {
      resetTimer();
    }
    
    // Cleanup on unmount
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [activeIndex, isPaused, resetTimer]);

  // Ensure rotation continues even on mobile
  useEffect(() => {
    // Additional safeguard to ensure rotation happens even without mouse events
    const intervalId = setInterval(() => {
      if (!isPaused && !timerRef.current) {
        resetTimer();
      }
    }, autoRotateInterval + 1000); // Check slightly after expected rotation
    
    return () => clearInterval(intervalId);
  }, [isPaused, autoRotateInterval, resetTimer]);

  // Handle tab click
  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    resetTimer();
  };

  // Handle navigation
  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex >= products.length - 1 ? 0 : prevIndex + 1
    );
    resetTimer();
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex <= 0 ? products.length - 1 : prevIndex - 1
    );
    resetTimer();
  };

  // Add touch event handlers for mobile
  const handleTouchStart = () => {
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    resetTimer();
  };

  // Render product image or placeholder
  const renderProductImage = (product: Product) => {
    if (product.status === 'coming-soon' && !product.imageUrl) {
      // Render a placeholder gradient for coming soon products without images
      return (
        <div className="w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
      );
    }
    
    // For products with images
    return (
      <OptimizedImage
        src={product.imageUrl}
        alt={product.name}
        width={800}
        height={600}
        className="object-cover w-full h-full"
      />
    );
  };

  return (
    <div 
      ref={sliderRef}
      className="relative" 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        resetTimer();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Tabs */}
      <div className="flex justify-center mb-8 overflow-x-auto">
        <div className="inline-flex bg-gray-100 p-1 rounded-lg">
          {products.map((product, index) => (
            <button
              key={product.id}
              onClick={() => handleTabClick(index)}
              className={`px-4 py-2 rounded-md font-medium transition-all ${
                index === activeIndex 
                  ? 'bg-white text-cyan-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {product.name}
              {product.status === 'coming-soon' && (
                <span className="ml-2 text-xs px-1.5 py-0.5 bg-yellow-100 text-yellow-800 rounded">Soon</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-0"
          >
            {/* Product Info */}
            <div className="p-8 flex flex-col justify-center">
              {/* Logo and Title combined */}
              <div className="flex items-center mb-4">
                {/* Logo with taller container and preserved aspect ratio */}
                {products[activeIndex].logoUrl && (
                  <div className="mr-4 h-11 w-11 flex-shrink-0">
                    <OptimizedImage
                      src={products[activeIndex].logoUrl}
                      alt={`${products[activeIndex].name} logo`}
                      width={40}  // Approximately 1/6 of original width
                      height={40} // Approximately 1/6 of original height
                      className="object-contain h-full w-full"
                    />
                  </div>
                )}
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-800">
                  {products[activeIndex].name}
                  {products[activeIndex].status === 'coming-soon' && (
                    <span className="ml-2 text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded">
                      Coming Soon
                    </span>
                  )}
                </h3>
              </div>
              
              <p className="text-gray-700 mb-8">
                {products[activeIndex].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                {products[activeIndex].primaryAction && (
                  products[activeIndex].primaryAction.isExternal ? (
                    <a 
                      href={products[activeIndex].primaryAction.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block font-medium py-2 px-4 rounded-md transition-colors text-center ${
                        products[activeIndex].status === 'coming-soon'
                          ? 'bg-gray-200 text-gray-700'
                          : 'bg-cyan-600 hover:bg-cyan-700 text-white'
                      }`}
                    >
                      {products[activeIndex].primaryAction.label}
                    </a>
                  ) : (
                    <Link 
                      href={products[activeIndex].primaryAction.href}
                      className={`inline-block font-medium py-2 px-4 rounded-md transition-colors text-center ${
                        products[activeIndex].status === 'coming-soon'
                          ? 'bg-gray-200 text-gray-700'
                          : 'bg-cyan-600 hover:bg-cyan-700 text-white'
                      }`}
                    >
                      {products[activeIndex].primaryAction.label}
                    </Link>
                  )
                )}
                
                {products[activeIndex].secondaryAction && (
                  <Link 
                    href={products[activeIndex].secondaryAction.href}
                    className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors text-center"
                  >
                    {products[activeIndex].secondaryAction.label}
                  </Link>
                )}
              </div>
            </div>
            
            {/* Product Image */}
            <div className="relative h-64 md:h-auto overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200">
              {renderProductImage(products[activeIndex])}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
          <motion.div 
            className="h-full bg-cyan-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: autoRotateInterval / 1000, 
              ease: "linear",
              repeat: 0
            }}
            key={`progress-${activeIndex}-${isPaused ? 'paused' : 'playing'}`}
          />
        </div>

        {/* Navigation buttons */}
        <button 
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-gray-700 hover:bg-white transition-all z-10"
          aria-label="Previous product"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center text-gray-700 hover:bg-white transition-all z-10"
          aria-label="Next product"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center mt-6">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`w-2.5 h-2.5 rounded-full mx-1.5 transition-all ${
              index === activeIndex ? 'bg-cyan-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}