import Header from '@/components/landingPage/organisms/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/landingPage/organisms/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary container`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
