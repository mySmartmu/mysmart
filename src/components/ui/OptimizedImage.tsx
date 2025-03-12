// src/components/ui/OptimizedImage.tsx
'use client';
import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  // Add transform property
  transform?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  priority = false,
  sizes = '100vw',
  objectFit = 'cover',
  transform = 'scale(1)',
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div 
      className={`${className} ${fill ? 'relative' : ''} overflow-hidden`}
      style={{ 
        // Apply the transform via CSS variable to child image
        '--img-transform': transform
      } as React.CSSProperties}
    >
      <Image
        src={src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        priority={priority}
        sizes={sizes}
        className={`
          ${isLoading ? 'scale-110 blur-sm' : 'scale-100 blur-0'}
          transition-all duration-500
          ${fill ? `object-${objectFit}` : ''}
          ${transform !== 'scale(1)' ? 'hover:scale-105' : ''}
        `}
        onLoad={() => setIsLoading(false)}  // Changed from onLoadingComplete to onLoad
      />
    </div>
  );
}