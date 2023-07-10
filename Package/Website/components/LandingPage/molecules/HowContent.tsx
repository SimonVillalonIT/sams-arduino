import React from 'react'
import { Features } from './'
import { how } from 'data/LandingPage'
import 'animate.css'

function HowContent() {
  return (
    <div className="flex flex-col md:flex md:flex-col md:items-center">
      <p className="text-shadow relative z-10 max-w-prose px-8 pb-4 pt-12 text-center text-lg text-white md:pt-0 md:text-xl">
        {how.paragraph}
      </p>
      <div className="md:max-w-2/3 flex h-full min-h-[440px] flex-col justify-between bg-primary pt-12 md:min-h-[370px] md:min-w-[75%] md:flex-row md:justify-evenly md:pt-0">
        {how.features.map((feature, i) => (
          <Features key={i} {...feature} />
        ))}
      </div>
    </div>
  )
}

export default HowContent
