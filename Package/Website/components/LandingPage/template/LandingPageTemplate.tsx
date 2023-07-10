import { Hero, How, ContactCard, Footer, Header } from '../organisms'
import Loader from 'components/Loader/Loader'
import { Lights } from '../molecules'
function LandingPageTemplate() {
  return (
    <>
      <Loader>
        <Header />
        <main>
          <Lights />
          <Hero />
          <How />
          <ContactCard />
        </main>
        <Footer />
      </Loader>
    </>
  )
}

export default LandingPageTemplate
