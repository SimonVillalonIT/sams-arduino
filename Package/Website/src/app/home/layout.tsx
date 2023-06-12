import { Header, Navbar } from 'components/Home/organisms'
import { Footer } from 'components/LandingPage/organisms'
import Loader from 'components/Loader/Loader'
import SessionWrapper from 'components/SessionWrapper'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionWrapper>
      <Header />
      <main>
        <Navbar />
        <Loader>{children}</Loader>
      </main>
      <Footer />
    </SessionWrapper>
  )
}
