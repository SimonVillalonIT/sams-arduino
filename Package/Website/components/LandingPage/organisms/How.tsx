import React from 'react'
import HowContent from '../molecules/HowContent'
import Light from '../atoms/Light'

function How() {
  return (
    <section className="bg-primary md:pt-0 h-screen overflow-x-clip">
      <Light className="-right-32 top-48 bg-terciary" />
      <Light className="-left-32 -bottom-24 bg-terciary" />
      <HowContent />
    </section>
  )
}

export default How
