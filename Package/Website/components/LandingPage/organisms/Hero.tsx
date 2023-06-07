'use client'
import React from 'react'
import ClassroomContainer from '../molecules/ClassroomContainer'
import HeroContent from '../molecules/HeroContent'

function Hero() {
  return (
    <section className="bg-primary sm:flex justify-between pt-8 md:px-16 h-[calc(100vh-90px)]">
      <HeroContent />
      <ClassroomContainer />
    </section>
  )
}

export default Hero
