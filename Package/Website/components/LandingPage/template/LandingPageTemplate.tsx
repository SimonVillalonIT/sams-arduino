import React from 'react'
import Hero from '../organisms/Hero'
import How from '../organisms/How'
import Contact from '../organisms/Contact'
import Lights from '../molecules/Lights'

function LandingPageTemplate() {
  return (
    <main>
      <Hero />
      <How />
      <Contact />
      <Lights />
    </main>
  )
}

export default LandingPageTemplate
