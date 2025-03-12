// src/components/ShopProductSlider.tsx
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
  logoUrl?: string;
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

export default function ShopProductSlider({ 
  products, 
  autoRotateInterval = 10000 
}: ProductSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isFirstRenderRef = useRef(true);

  // Wrap resetTimer in useCallback to prevent recreation on every render
  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
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
    // Skip on first render to avoid conflicts with SSR
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      resetTimer();
      return;
    }

    if (!isPaused) {
      resetTimer();
    }
    
    // Cleanup on unmount
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [activeIndex, isPaused, resetTimer]);

  // Additional safety interval to check if rotation is working
  useEffect(() => {
    const safetyIntervalId = setInterval(() => {
      if (!isPaused && !timerRef.current) {
        resetTimer();
      }
    }, autoRotateInterval * 1.5); // Check after 1.5x the normal interval
    
    return () => {
      clearInterval(safetyIntervalId);
    };
  }, [isPaused, autoRotateInterval, resetTimer]);

  // For debugging - can be removed in production
  useEffect(() => {
    // console.log(`Active index: ${activeIndex}, Paused: ${isPaused}, Timer active: ${!!timerRef.current}`);
  }, [activeIndex, isPaused]);

  // Handle tab click
  const handleDotClick = (index: number) => {
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
        <div className="w-full h-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
      );
    }
    
    // For products with images
    return (
      <OptimizedImage
        src={product.imageUrl}
        alt={product.name}
        width={400}
        height={300}
        className="object-contain w-full h-full"
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
      {/* Slider */}
      <div className="relative overflow-hidden rounded-xl shadow-md bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col"
          >
            {/* Product Title & Status Badge */}
            <div className="px-6 pt-5 pb-2 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-800">{products[activeIndex].name}</h3>
              {products[activeIndex].status === 'coming-soon' && (
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2.5 py-1 rounded">
                  Coming Soon
                </span>
              )}
            </div>
            
            {/* Product Image */}
            <div className="p-6 pb-2">
              <div className="bg-gray-50 h-48 flex items-center justify-center rounded-md">
                {renderProductImage(products[activeIndex])}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="px-6 pb-6">
              <p className="text-gray-700 mb-5 line-clamp-3">
                {products[activeIndex].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {products[activeIndex].primaryAction && (
                  products[activeIndex].primaryAction.isExternal ? (
                    <a 
                      href={products[activeIndex].primaryAction.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors text-center"
                    >
                      {products[activeIndex].primaryAction.label}
                    </a>
                  ) : (
                    <Link 
                      href={products[activeIndex].primaryAction.href}
                      className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors text-center"
                    >
                      {products[activeIndex].primaryAction.label}
                    </Link>
                  )
                )}
                
                {products[activeIndex].secondaryAction && (
                  <Link 
                    href={products[activeIndex].secondaryAction.href}
                    className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2.5 px-4 rounded-md transition-colors text-center"
                  >
                    {products[activeIndex].secondaryAction.label}
                  </Link>
                )}
              </div>
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
            key={`progress-${activeIndex}-${Date.now()}`} // Using timestamp to force rerender
          />
        </div>

        {/* Navigation buttons */}
        <button 
          onClick={goToPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow-md flex items-center justify-center text-gray-700 hover:bg-white transition-all z-10"
          aria-label="Previous product"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow-md flex items-center justify-center text-gray-700 hover:bg-white transition-all z-10"
          aria-label="Next product"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center mt-4">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full mx-1 transition-all ${
              index === activeIndex ? 'bg-cyan-600 w-4' : 'bg-gray-300'
            }`}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}