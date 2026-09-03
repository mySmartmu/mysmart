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
  function nav() { return document.querySelector('nav[data-menu-root]'); }
  function set(n, open) {
    n.setAttribute('data-menu', open ? 'open' : 'closed');
    var b = n.querySelector('[data-menu-toggle]');
    if (b) b.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  document.addEventListener('click', function (e) {
    var n = nav();
    if (!n) return;
    var t = e.target.closest ? e.target.closest('[data-menu-toggle]') : null;
    if (t) { set(n, n.getAttribute('data-menu') !== 'open'); return; }
    if (e.target.closest && e.target.closest('[data-menu-panel] a')) set(n, false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var n = nav();
    if (n && n.getAttribute('data-menu') === 'open') set(n, false);
  });
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
