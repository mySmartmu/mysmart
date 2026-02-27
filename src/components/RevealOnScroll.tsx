'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  delay?: number; // Delay in seconds
  className?: string;
}

export const RevealOnScroll: React.FC<Props> = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small buffer to ensure browser rendering readiness
          setTimeout(() => {
            setIsVisible(true);
          }, 50);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  const style = {
    transitionDelay: `${delay}s`,
  };

  return (
    <div
      ref={ref}
      style={style}
      // Enhanced Zoom Effect:
      // Starts at scale-90 (90% size) creates a distinct "zoom in" as it enters.
      // translate-y-10 adds a subtle upward float.
      // blur-sm keeps the "focus" reveal effect.
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] transform will-change-transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 blur-0'
          : 'opacity-0 translate-y-10 scale-90 blur-sm'
      } ${className}`}
    >
      {children}
    </div>
  );
};
