'use client'
import Header from '@/components/LandingPage/organisms/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/LandingPage/organisms/Footer'
import SessionWrapper from '@/components/SessionWrapper'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-primary container overflow-x-hidden`}
      >
        {' '}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
