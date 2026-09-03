'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  delay?: number; // Delay in seconds
  className?: string;
  initiallyVisible?: boolean;
}

export const RevealOnScroll: React.FC<Props> = ({ children, delay = 0, className = '', initiallyVisible = false }) => {
  const [isVisible, setIsVisible] = useState(initiallyVisible);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initiallyVisible) {
      return;
    }

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

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [initiallyVisible]);

  const style = {
    transitionDelay: `${delay}s`,
  };

  return (
    <div
      ref={ref}
      style={style}
      // Gentle rise + focus reveal: slight upward float, soft zoom, and a blur
      // that resolves as the element enters — subtler scale keeps it elegant.
      className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] transform will-change-transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 blur-0'
          : 'opacity-0 translate-y-8 scale-[0.96] blur-[3px]'
      } ${className}`}
    >
      {children}
    </div>
  );
};
