import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { POSITIONING, TAGLINE } from "@/data/company";

export const metadata: Metadata = {
  title: {
    default: `mySmart — ${TAGLINE}`,
    template: "%s | mySmart",
  },
  description: POSITIONING,
  metadataBase: new URL("https://mysmart.mu"),
  openGraph: {
    title: `mySmart — ${TAGLINE}`,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-smart-white flex flex-col font-sans text-smart-dark">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
