'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Props {
  /** Plain text. Split on whitespace, so it stays selectable and searchable. */
  text: string;
  className?: string;
  /** Seconds between consecutive words. */
  stagger?: number;
  /** Seconds before the line starts. */
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  /**
   * Set when `className` carries a `bg-clip-text` gradient.
   *
   * `background-clip: text` clips the element's background to its own text
   * box. Splitting the line into per-word `inline-block` spans moves that text
   * into child boxes, so the parent ends up clipping its gradient to nothing
   * and the headline renders invisible. A gradient line therefore animates as
   * a single unit — the text stays where the background is.
   */
  gradient?: boolean;
}

const TRANSITION =
  'opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1), filter 700ms ease';

/**
 * Words resolve out of a blur, one after another, the first time the line
 * scrolls into view. Runs once — a headline that re-animates on every pass
 * reads as a glitch rather than a flourish.
 *
 * Reduced motion is handled in CSS (`.reveal-word`), not here, so the markup
 * is identical on the server and the client and hydration has nothing to
 * disagree about.
 */
export const TextReveal: React.FC<Props> = ({
  text,
  className = '',
  stagger = 0.045,
  delay = 0,
  as: Tag = 'span',
  gradient = false,
}) => {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = (index: number): React.CSSProperties => ({
    transition: TRANSITION,
    transitionDelay: `${delay + index * stagger}s`,
    opacity: shown ? 1 : 0,
    transform: shown ? 'translateY(0)' : 'translateY(0.4em)',
    filter: shown ? 'blur(0)' : 'blur(8px)',
  });

  if (gradient) {
    return (
      <Tag ref={ref as React.Ref<never>} className={`reveal-word ${className}`} style={style(0)}>
        {text}
      </Tag>
    );
  }

  const words = text.split(' ');

  return (
    <Tag ref={ref as React.Ref<never>} className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="reveal-word inline-block" style={style(i)}>
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
};

export default TextReveal;
