import { Header, Footer } from 'components/LandingPage/organisms'
import './globals.css'
import { Lights } from 'components/LandingPage/molecules'
import Loader from 'components/Loader/Loader'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary flex flex-col min-h-screen">
        <Lights />
        <Header />
        <Loader>{children}</Loader>
        <Footer />
      </body>
    </html>
  )
}
