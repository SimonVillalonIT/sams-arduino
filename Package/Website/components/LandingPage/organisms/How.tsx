import React from 'react'
import HowContent from '../molecules/HowContent'
import Light from '../atoms/Light'

function How() {
  return (
    <section id="how" className="h-screen overflow-x-clip bg-primary md:pt-8">
      <Light className="-right-32 top-48 bg-terciary" />
      <Light className="-bottom-24 -left-32 bg-terciary" />
      <HowContent />
    </section>
  )
}

export default How
