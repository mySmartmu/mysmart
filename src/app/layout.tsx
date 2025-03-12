import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Initialize the Inter font
const inter = Inter({ subsets: ['latin'] })

// Metadata for the website
export const metadata: Metadata = {
  title: 'mySmart - IT & Automation Solutions',
  description: 'Smart IT & Automation Solutions for your Business and Home',
  keywords: 'IT solutions, automation, smart home, business software, custom software, digital services',
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/insq.png' },
  ],
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
