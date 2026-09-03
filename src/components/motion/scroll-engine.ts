'use client';

import { useSyncExternalStore } from 'react';

/**
 * One passive scroll listener and one rAF for the whole page.
 *
 * ── THE THREE RULES EVERY EFFECT HERE OBEYS ─────────────────────────────────
 *
 * 1. **Transform and opacity only.** Both are compositor properties, so the
 *    browser can animate them without re-running layout or paint. Anything
 *    that touches `filter`, `width`, `top` or a background colour forces a
 *    re-raster every frame, and that is what makes "cinematic" sites stutter.
 *
 * 2. **No React render per frame.** Subscribers write CSS custom properties
 *    straight onto their element. A page with thirty of these costs React
 *    nothing while the mouse or the scrollbar moves.
 *
 * 3. **Smoothed, never raw.** A transform wired directly to scroll position
 *    snaps through its whole range on a trackpad flick. Each subscriber's
 *    progress is eased toward its target with frame-rate-independent
 *    exponential smoothing, which is what turns a scroll link into a camera
 *    move.
 *
 * The loop only runs while something is actually moving: subscribers are
 * ticked while they intersect the viewport, and the rAF stops entirely once
 * every one of them has settled on its target.
 */

/** Progress of an element travelling through the viewport. */
export interface ScrollFrame {
  /** 0 when the element's top touches the viewport bottom, 1 when its bottom leaves the top. */
  progress: number;
  /** -1 (below the fold) → 0 (centred) → 1 (above the fold). The one cinematic effects want. */
  centered: number;
  /**
   * 0 when the element's top reaches the viewport top, 1 when its bottom
   * reaches the viewport bottom — i.e. progress through a pinned section,
   * measured over exactly the scroll distance the pin consumes.
   */
  pinned: number;
}

type Apply = (frame: ScrollFrame) => void;

interface Sub {
  el: HTMLElement;
  apply: Apply;
  visible: boolean;
  /** Where the scroll says we are. */
  targetP: number;
  targetC: number;
  targetPin: number;
  /** Where the smoothing has got to. NaN until the first measurement. */
  currentP: number;
  currentC: number;
  currentPin: number;
  /** Smoothing time constant in seconds. Higher is heavier. */
  tau: number;
}

const subs = new Set<Sub>();
let frame = 0;
let last = 0;
let observer: IntersectionObserver | null = null;
let bound = false;

const REDUCE_QUERY = '(prefers-reduced-motion: reduce)';

export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia(REDUCE_QUERY).matches;
}

/** Read the scroll position of one subscriber. Layout read only — never a write. */
function measure(sub: Sub, viewport: number) {
  const rect = sub.el.getBoundingClientRect();

  const span = rect.height + viewport;
  const raw = span > 0 ? (viewport - rect.top) / span : 0;
  sub.targetP = raw < 0 ? 0 : raw > 1 ? 1 : raw;

  const mid = rect.top + rect.height / 2;
  const offset = (viewport / 2 - mid) / (viewport / 2 + rect.height / 2);
  sub.targetC = offset < -1 ? -1 : offset > 1 ? 1 : offset;

  // A pinned section is taller than the viewport; its travel is the overflow.
  const pinSpan = rect.height - viewport;
  const pin = pinSpan > 0 ? -rect.top / pinSpan : 0;
  sub.targetPin = pin < 0 ? 0 : pin > 1 ? 1 : pin;
}

function tick(now: number) {
  frame = 0;

  const dt = last ? Math.min((now - last) / 1000, 0.05) : 0.016;
  last = now;
  const viewport = window.innerHeight || 1;

  let moving = false;

  // Every getBoundingClientRect happens before any style write, so the frame
  // contains exactly one layout pass rather than one per subscriber.
  for (const sub of subs) {
    if (sub.visible) measure(sub, viewport);
  }

  for (const sub of subs) {
    if (!sub.visible) continue;

    // Frame-rate independent easing: the same visual speed at 60Hz and 120Hz.
    const alpha = 1 - Math.exp(-dt / sub.tau);

    if (Number.isNaN(sub.currentP)) {
      // First sight of this element — snap, so it never animates in from a lie.
      sub.currentP = sub.targetP;
      sub.currentC = sub.targetC;
      sub.currentPin = sub.targetPin;
    } else {
      sub.currentP += (sub.targetP - sub.currentP) * alpha;
      sub.currentC += (sub.targetC - sub.currentC) * alpha;
      sub.currentPin += (sub.targetPin - sub.currentPin) * alpha;
    }

    const settled =
      Math.abs(sub.targetP - sub.currentP) < 0.0004 &&
      Math.abs(sub.targetC - sub.currentC) < 0.0004 &&
      Math.abs(sub.targetPin - sub.currentPin) < 0.0004;

    if (settled) {
      sub.currentP = sub.targetP;
      sub.currentC = sub.targetC;
      sub.currentPin = sub.targetPin;
    } else {
      moving = true;
    }

    sub.apply({ progress: sub.currentP, centered: sub.currentC, pinned: sub.currentPin });
  }

  // Keep the loop alive only while something is still travelling.
  if (moving) frame = requestAnimationFrame(tick);
  else last = 0;
}

function schedule() {
  if (!frame) {
    last = 0;
    frame = requestAnimationFrame(tick);
  }
}

function ensureBound() {
  if (bound) return;
  bound = true;

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule, { passive: true });

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        for (const sub of subs) {
          if (sub.el !== entry.target) continue;
          sub.visible = entry.isIntersecting;
          if (!entry.isIntersecting) {
            // Forget the smoothed position so it snaps rather than sweeps
            // when the element comes back.
            sub.currentP = NaN;
          }
        }
      }
      schedule();
    },
    // A viewport of slack either side, so an element is already correct by the
    // time it is painted.
    { rootMargin: '60% 0px 60% 0px', threshold: 0 }
  );
}

function teardownIfIdle() {
  if (subs.size > 0 || !bound) return;
  bound = false;
  window.removeEventListener('scroll', schedule);
  window.removeEventListener('resize', schedule);
  observer?.disconnect();
  observer = null;
  if (frame) {
    cancelAnimationFrame(frame);
    frame = 0;
  }
}

/**
 * Drive `apply` from the page scroll while `el` is near the viewport.
 * Returns the unsubscribe function.
 *
 * Callers are expected to skip subscribing altogether under reduced motion —
 * the correct fix for a zooming page is to not zoom, not to zoom instantly.
 */
export function subscribe(el: HTMLElement, apply: Apply, tau = 0.11): () => void {
  ensureBound();

  const sub: Sub = {
    el,
    apply,
    visible: true,
    targetP: 0,
    targetC: 0,
    targetPin: 0,
    currentP: NaN,
    currentC: NaN,
    currentPin: NaN,
    tau,
  };

  subs.add(sub);
  observer?.observe(el);
  schedule();

  return () => {
    subs.delete(sub);
    observer?.unobserve(el);
    teardownIfIdle();
  };
}

/** Clamp helper shared by the effect components. */
export const clamp = (v: number, min = 0, max = 1) => (v < min ? min : v > max ? max : v);

/** Linear interpolation. */
export const mix = (from: number, to: number, t: number) => from + (to - from) * t;

/* ────────────────────────────────────────────────────────────────────────────
   useReducedMotion — the SSR-safe version.

   Reading the media query while initialising state yields `false` on the
   server and `true` on a client that has the preference set. Components here
   branch their MARKUP on this value — a plain div instead of an animated one —
   so those two trees would disagree and React would throw a hydration
   mismatch.

   `useSyncExternalStore` is the sanctioned fix: React uses the server snapshot
   for the server render AND for hydration, then re-renders with the client
   snapshot immediately after. Both trees agree, and a reduced-motion visitor
   still gets the static version one frame later.

   The store lives at module scope so `subscribe` and `getSnapshot` keep stable
   identities; fresh closures would resubscribe on every render.
   ──────────────────────────────────────────────────────────────────────── */

function subscribeToReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCE_QUERY);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}

const getReducedMotionSnapshot = () => window.matchMedia(REDUCE_QUERY).matches;
/** The server cannot know. Assume motion, then correct after hydration. */
const getReducedMotionServerSnapshot = () => false;

export function useReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
}
