'use client';

import React, { useEffect, useRef } from 'react';
import { subscribe, useReducedMotion } from './scroll-engine';

interface Props {
  children: React.ReactNode;
  /** Positive drifts against the scroll, negative with it. Roughly px of travel. */
  speed?: number;
  className?: string;
}

/** Drifts its contents vertically as the page scrolls past. */
export const Parallax: React.FC<Props> = ({ children, speed = 60, className = '' }) => {
  const host = useRef<HTMLDivElement>(null);
  const layer = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const outer = host.current;
    const target = layer.current;
    if (!outer || !target) return;

    return subscribe(outer, ({ centered }) => {
      target.style.transform = `translate3d(0, ${(centered * speed).toFixed(2)}px, 0)`;
    });
  }, [speed, reduced]);

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <div ref={host} className={className}>
      <div ref={layer} className="will-change-transform">
        {children}
      </div>
    </div>
  );
};

export default Parallax;
