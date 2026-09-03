'use client';

import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/components/motion';

type Side = 'left' | 'right';

interface Node {
  side: Side;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const createNodes = (width: number, height: number, mobile: boolean): Node[] => {
  const count = mobile ? 18 : 38;

  return Array.from({ length: count }, (_, index) => {
    // Keep the dense mesh away from the central heading. The left side carries
    // the heavier network; the right has a sparse, quieter continuation.
    const side: Side = index < count * 0.68 ? 'left' : 'right';
    const minX = side === 'left' ? 0 : width * 0.77;
    const maxX = side === 'left' ? width * 0.27 : width;

    return {
      side,
      x: minX + Math.random() * (maxX - minX),
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.14,
      radius: Math.random() > 0.82 ? 1.75 : 1.1,
    };
  });
};

/**
 * A deliberately small canvas network for the hero. It uses a capped pixel
 * ratio and fewer than forty nodes, so it remains a decorative layer rather
 * than a competing animation or a performance cost.
 */
export const NetworkBackdrop: React.FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const element = canvas.current;
    const context = element?.getContext('2d', { alpha: true });
    if (!element || !context) return;

    let frame = 0;
    let previous = performance.now();
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let visible = true;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

    const resize = () => {
      const bounds = element.getBoundingClientRect();
      width = Math.max(1, Math.floor(bounds.width));
      height = Math.max(1, Math.floor(bounds.height));
      element.width = Math.floor(width * pixelRatio);
      element.height = Math.floor(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      nodes = createNodes(width, height, width < 768);
    };

    const draw = (now: number) => {
      if (!visible) {
        frame = 0;
        return;
      }

      const elapsed = Math.min((now - previous) / 16.67, 2);
      previous = now;
      context.clearRect(0, 0, width, height);

      for (const node of nodes) {
        const minX = node.side === 'left' ? 0 : width * 0.77;
        const maxX = node.side === 'left' ? width * 0.27 : width;

        node.x += node.vx * elapsed;
        node.y += node.vy * elapsed;

        if (node.x < minX || node.x > maxX) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        node.x = Math.max(minX, Math.min(maxX, node.x));
        node.y = Math.max(0, Math.min(height, node.y));
      }

      const range = width < 768 ? 115 : 165;
      for (let first = 0; first < nodes.length; first += 1) {
        for (let second = first + 1; second < nodes.length; second += 1) {
          const a = nodes[first];
          const b = nodes[second];
          if (a.side !== b.side) continue;

          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance >= range) continue;

          const strength = 1 - distance / range;
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.strokeStyle = `rgba(5, 52, 70, ${0.22 * strength})`;
          context.lineWidth = strength > 0.65 ? 1 : 0.65;
          context.stroke();
        }
      }

      for (const node of nodes) {
        context.beginPath();
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        context.fillStyle = node.radius > 1.2 ? 'rgba(113, 207, 243, 0.94)' : 'rgba(5, 52, 70, 0.46)';
        context.fill();
      }

      frame = requestAnimationFrame(draw);
    };

    const start = () => {
      if (!frame) {
        previous = performance.now();
        frame = requestAnimationFrame(draw);
      }
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(element);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
      },
      { rootMargin: '120px 0px' }
    );
    visibilityObserver.observe(element);
    start();

    return () => {
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [reduced]);

  return (
    <canvas
      ref={canvas}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-90"
    />
  );
};

export default NetworkBackdrop;
