import { Hero, How, Contact, Footer, Header } from '../organisms'
import Loader from 'components/Loader/Loader'
import { Lights } from '../molecules'

function LandingPageTemplate() {
  return (
    <main>
      <Loader>
        <Header />
        <Lights />
        <Hero />
        <How />
        <Contact />
        <Footer />
      </Loader>
    </main>
  )
}

export default LandingPageTemplate
