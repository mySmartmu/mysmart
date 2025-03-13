import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
//import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'mySmart - IT & Automation Solutions',
  description: 'Smart IT & Automation Solutions for your Business and Home',
  keywords: 'IT solutions, automation, smart home, business software, custom software, digital services',
  icons: [
    { rel: 'icon', url: '/mysmartfavicon.ico' },
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/mysmartfavicon.ico" />
        <link rel="shortcut icon" href="/mysmartfavicon.ico" />
        <link rel="apple-touch-icon" href="/insq.png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}