'use client'
import React from 'react'
import ClassroomContainer from '../molecules/ClassroomContainer'
import HeroContent from '../molecules/HeroContent'
import { FaArrowDown } from 'react-icons/fa'

function Hero() {
  return (
    <section className="flex h-[calc(100vh-90px)] flex-col bg-primary pt-8 md:px-16">
      <div className="justify-between md:flex">
        <HeroContent />
        <ClassroomContainer />
      </div>
      <a href="#how" id="arrow-down" className="self-center text-white">
        <FaArrowDown />
      </a>
    </section>
  )
}

export default Hero
