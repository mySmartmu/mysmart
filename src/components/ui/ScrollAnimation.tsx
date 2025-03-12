// src/components/ui/ScrollAnimation.tsx
'use client';
import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollAnimationProps {
  children: ReactNode;
  threshold?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  duration?: number;
}

export default function ScrollAnimation({
  children,
  threshold = 0.1,
  delay = 0,
  direction = 'up',
  className = '',
  duration = 0.5,
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  // Define animation variants based on direction
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { y: 50, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case 'down':
        return {
          hidden: { y: -50, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case 'left':
        return {
          hidden: { x: -50, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case 'right':
        return {
          hidden: { x: 50, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case 'none':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      default:
        return {
          hidden: { y: 50, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
    }
  };

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={getVariants()}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}