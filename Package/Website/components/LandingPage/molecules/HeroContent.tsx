import React, { useState } from 'react'
import Button from '../atoms/Button'
import { BsArrowRight } from 'react-icons/bs'
import Title from '../atoms/Title'
import { mainData } from '@/data/Main.data'
import Login from '../organisms/Login'
import SessionWrapper from '@/components/SessionWrapper'

function HeroContent() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="flex flex-col items-center md:max-w-prose">
      {showLogin ? (
        <SessionWrapper>
          <Login />
        </SessionWrapper>
      ) : null}
      <Title />
      <p className="text-center text-lg px-5 text-white/80 text-shadow pt-8 pb-4 z-10 animate__animated animate__fadeInDown">
        {mainData.paragraph}
      </p>
      <p className="text-center text-xl px-5 text-white z-10 animate__animated animate__fadeInDown">
        {mainData.subparagraph}
      </p>
      <Button
        onClick={() => setShowLogin(true)}
        text={mainData.button}
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