'use client';

import React from 'react';
import Image from 'next/image';
import { CLIENTS } from '@/data/company';

/**
 * Trusted-partner logo wall.
 *
 * The track holds the list twice and translates by exactly half its width, so
 * the loop is seamless without measuring anything. Logos are flattened to a
 * single dark silhouette and only reach full strength on hover — a wall of
 * competing brand colours would fight the page.
 */
export const PartnerMarquee: React.FC = () => {
  return (
    <section className="border-y border-[#053446]/5 bg-[#fcfcfa] py-14">
      <style jsx global>{`
        @keyframes partner-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .partner-viewport {
          position: relative;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }

        .partner-track {
          display: inline-flex;
          width: max-content;
          animation: partner-scroll 52s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }

        .partner-viewport:hover .partner-track {
          animation-play-state: paused;
        }

        .partner-item {
          flex-shrink: 0;
          padding: 0 2rem;
          transform: translate3d(0, 0, 0);
        }

        .partner-logo {
          filter: grayscale(100%) brightness(0) opacity(0.5);
          transition: filter 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          backface-visibility: hidden;
        }

        .partner-item:hover .partner-logo {
          filter: grayscale(100%) brightness(0) opacity(1);
          transform: scale(1.08);
        }

        @media (max-width: 768px) {
          .partner-track {
            animation-duration: 38s;
          }
          /* A finger resting on the strip should not stop it. */
          .partner-viewport:hover .partner-track {
            animation-play-state: running;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .partner-viewport {
            overflow-x: auto;
          }
          .partner-track {
            animation: none;
          }
        }
      `}</style>

      <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#95969a]">
        Trusted Partners
      </p>

      <div className="relative">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-[#fcfcfa] via-[#fcfcfa] to-transparent md:w-32" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-[#fcfcfa] via-[#fcfcfa] to-transparent md:w-32" />

        <div className="partner-viewport">
          <div className="partner-track">
            {[0, 1].map((pass) =>
              CLIENTS.map((client, idx) => (
                <div key={`pass${pass}-${idx}`} className="partner-item">
                  <div className="group flex cursor-default items-center gap-3">
                    <Image
                      src={`/client/${client.logo}`}
                      alt={client.name}
                      width={client.width}
                      height={client.height}
                      sizes="(max-width: 768px) 180px, 240px"
                      className={`partner-logo ${client.heightClass ?? 'h-10'} w-auto object-contain`}
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                      // The second pass is decorative duplication, not content.
                      aria-hidden={pass === 1}
                    />
                    {client.showName && (
                      <span className="whitespace-nowrap text-base font-semibold tracking-wide text-[#053446]/55 transition-colors duration-300 group-hover:text-[#053446] md:text-lg">
                        {client.name}
                      </span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerMarquee;
