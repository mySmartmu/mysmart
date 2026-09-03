import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { POSITIONING, TAGLINE } from "@/data/company";

export const metadata: Metadata = {
  title: {
    default: `mySmart: ${TAGLINE}`,
    template: "%s | mySmart",
  },
  description: POSITIONING,
  metadataBase: new URL("https://mysmart.mu"),
  openGraph: {
    title: `mySmart: ${TAGLINE}`,
    description: POSITIONING,
    url: "https://mysmart.mu",
    siteName: "mySmart",
    locale: "en_MU",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/**
 * Mobile-menu toggle, inlined into the document so it is live while the HTML
 * is still parsing.
 *
 * The menu markup is entirely server-rendered; the only thing missing before
 * hydration was something to flip a boolean. Doing that in React meant the
 * first tap was swallowed until the page had hydrated — 5.2s on a throttled
 * phone. This listener is delegated off `document`, so it works no matter when
 * the nav appears, and it costs well under a kilobyte.
 */
const menuScript = `
(function () {
  var root = document.documentElement;
  function set(open) {
    // The flag goes on <html>, which React does not reconcile — the same
    // place next-themes writes its theme, and for the same reason: an
    // attribute added before hydration to a node React is about to hydrate
    // can be patched away when React catches up.
    if (open) root.setAttribute('data-menu', 'open');
    else root.removeAttribute('data-menu');
    var b = document.querySelector('[data-menu-toggle]');
    if (b) b.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  // Capture phase, and that third argument is the whole trick.
  //
  // React 18+ replays discrete events that land on a tree it has not hydrated
  // yet: it intercepts the click at its root listener, stops it, and re-fires
  // it once hydration catches up. A bubble-phase listener on document never
  // sees those clicks at all — which produced a dead window of roughly half a
  // second, right in the middle of hydration, where tapping the button did
  // nothing. Capture at document runs before React's root listener, so the
  // tap is handled whatever React is in the middle of.
  document.addEventListener('click', function (e) {
    var t = e.target && e.target.closest ? e.target.closest('[data-menu-toggle]') : null;
    if (t) { set(root.getAttribute('data-menu') !== 'open'); return; }
    if (e.target && e.target.closest && e.target.closest('[data-menu-panel] a')) set(false);
  }, true);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') set(false);
  }, true);
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-smart-white flex flex-col font-sans text-smart-dark">
        <script dangerouslySetInnerHTML={{ __html: menuScript }} />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
