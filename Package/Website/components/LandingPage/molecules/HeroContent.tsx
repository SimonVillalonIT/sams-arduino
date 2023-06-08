'use client'

import { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

import { main } from 'data/LandingPage'

import SessionWrapper from 'components/SessionWrapper'
import { Button } from '../atoms'
import { Login } from '../organisms'

function HeroContent() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="flex flex-col items-center md:max-w-prose">
      {showLogin ? (
        <SessionWrapper>
          <Login />
        </SessionWrapper>
      ) : null}
      <h1 className="text-center italic font-semibold text-white text-shadow px-4 text-[30px] animate__animated animate__fadeInDown [--animate-duration:1s] z-10">
        {main.title}
      </h1>
      <p className="text-center text-lg px-5 text-white/80 text-shadow pt-8 pb-4 z-10 animate__animated animate__fadeInDown">
        {main.paragraph}
      </p>
      <p className="text-center text-xl px-5 text-white z-10 animate__animated animate__fadeInDown">
        {main.subparagraph}
      </p>
      <Button
        onClick={() => setShowLogin(true)}
        text={main.button}
        id="Button"
        right={true}
        className="mt-32 mb-8 z-10 animate__animated animate__fadeInUp md:mt-6 text-white"
      >
        <BsArrowRight id="Arrow" />
      </Button>
    </div>
  )
}

export default HeroContent
