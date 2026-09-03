/*
 * Deliberately NOT a client component.
 *
 * The CSS below used to live here in a styled-jsx block, which was the only
 * thing forcing a client boundary — there is no state, no effect and no
 * handler in this file. styled-jsx also injects its CSS from JavaScript at
 * runtime: those rules appeared in neither the server HTML nor the
 * stylesheet, so on a cold load the wall rendered with its class names and
 * nothing behind them — no overflow, no flex row, no track width, no
 * animation — until hydration landed and snapped it into place. That was the
 * broken-looking strip visitors saw while the page was still loading.
 *
 * The rules now live in globals.css, so they arrive with the stylesheet and
 * the wall is correct in the very first painted frame.
 */
import React from 'react';
import Image from 'next/image';
import { CLIENTS } from '@/data/company';

/**
 * Trusted-partner logo wall.
 *
 * The track holds the list twice and translates by exactly half its width, so
 * the loop is seamless without measuring anything. Each logo keeps its own
 * colours and lifts slightly on hover.
 */
export const PartnerMarquee: React.FC = () => {
  return (
    <section className="border-y border-[#053446]/5 bg-[#fcfcfa] py-10">

      <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#053446]/70">
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
                      <span className="whitespace-nowrap text-base font-semibold tracking-wide text-[#053446] transition-colors duration-300 group-hover:text-[#053446] md:text-lg">
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
