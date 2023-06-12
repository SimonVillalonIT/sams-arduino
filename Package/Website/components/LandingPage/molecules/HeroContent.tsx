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
      <h1 className="text-shadow animate__animated animate__fadeInDown z-10 px-4 text-center text-[30px] font-semibold italic text-white [--animate-duration:1s]">
        {main.title}
      </h1>
      <p className="text-shadow animate__animated animate__fadeInDown z-10 px-5 pb-4 pt-8 text-center text-lg text-white/80">
        {main.paragraph}
      </p>
      <p className="animate__animated animate__fadeInDown z-10 px-5 text-center text-xl text-white">
        {main.subparagraph}
      </p>
      <Button
        onClick={() => setShowLogin(true)}
        text={main.button}
        id="Button"
        right={true}
        className="animate__animated animate__fadeInUp z-10 mb-8 mt-32 text-white md:mt-6"
      >
        <BsArrowRight id="Arrow" />
      </Button>
    </div>
  )
}

export default HeroContent
