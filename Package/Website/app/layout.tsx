import Header from '@/components/landingPage/header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/landingPage/footer/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-backgroundColor container`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
