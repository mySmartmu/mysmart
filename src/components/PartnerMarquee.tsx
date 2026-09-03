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
    <section className="border-y border-[#fcfcfa]/10 bg-smart-slate py-14">
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

        /* No translate3d hint here. The track above is a single animated
           layer and the items never move relative to it, so promoting all 52
           of them only cost WebKit 52 textures it had to keep at 3x DPR. */
        .partner-item {
          flex-shrink: 0;
          padding: 0 2rem;
        }

        /* No filter. Each logo now shows its own colours against the slate
           backdrop, which was picked to carry white and black marks equally.
           The fade and the hover scale are unchanged. */
        .partner-logo {
          opacity: 0.9;
          transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .partner-item:hover .partner-logo {
          opacity: 1;
          transform: scale(1.08);
        }

        /* Antrick's supplied logo is a tall stacked mark. Its original
           emblem and wordmark are shown as compact slices so it aligns with
           the rest of the carousel without losing the brand name. */
        .antrick-lockup {
          display: flex;
          width: 92px;
          flex-direction: column;
          align-items: center;
          line-height: 0;
        }

        .antrick-emblem-crop {
          width: 62px;
          height: 38px;
          overflow: hidden;
        }

        .antrick-wordmark-crop {
          width: 92px;
          height: 11px;
          margin-top: 1px;
          overflow: hidden;
        }

        .antrick-slice {
          display: block;
          max-width: none;
          opacity: 0.9;
          transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .antrick-emblem-slice {
          width: 62px;
          height: 49px;
        }

        .antrick-wordmark-slice {
          width: 92px;
          height: 72px;
          transform: translateY(-57px);
        }

        .partner-item:hover .antrick-slice {
          opacity: 1;
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

      <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#fcfcfa]/80">
        Trusted Partners
      </p>

      <div className="relative">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-smart-slate via-smart-slate to-transparent md:w-32" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-smart-slate via-smart-slate to-transparent md:w-32" />

        <div className="partner-viewport">
          <div className="partner-track">
            {[0, 1].map((pass) =>
              CLIENTS.map((client, idx) => (
                <div key={`pass${pass}-${idx}`} className="partner-item">
                  <div className="group flex cursor-default items-center gap-3">
                    {client.variant === 'stacked-wordmark' ? (
                      <div
                        className="antrick-lockup"
                        role="img"
                        aria-label={client.name}
                        aria-hidden={pass === 1}
                      >
                        <div className="antrick-emblem-crop" aria-hidden="true">
                          <Image
                            src={`/client/${client.logo}`}
                            alt=""
                            width={62}
                            height={49}
                            sizes="62px"
                            className="antrick-slice antrick-emblem-slice"
                            loading="lazy"
                            decoding="async"
                            draggable="false"
                          />
                        </div>
                        <div className="antrick-wordmark-crop" aria-hidden="true">
                          <Image
                            src={`/client/${client.logo}`}
                            alt=""
                            width={92}
                            height={72}
                            sizes="92px"
                            className="antrick-slice antrick-wordmark-slice"
                            loading="lazy"
                            decoding="async"
                            draggable="false"
                          />
                        </div>
                      </div>
                    ) : (
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
                    )}
                    {client.showName && (
                      <span className="whitespace-nowrap text-base font-semibold tracking-wide text-[#fcfcfa]/75 transition-colors duration-300 group-hover:text-[#fcfcfa] md:text-lg">
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
