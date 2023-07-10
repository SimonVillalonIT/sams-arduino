import React from 'react'
import { Button } from 'components/LandingPage/atoms'
import { Card, Carousel } from '../molecules'
import { button, cards, title } from 'data/Home'

function WelcomeCards() {
  return (
    <>
      <h1 className="pb-8 pt-8 text-2xl font-bold text-white">{title}</h1>
      <Carousel />
      <div className="hidden h-72 w-11/12 items-center justify-evenly md:flex">
        {cards.map(({ text, title, icon: Icon }) => (
          <Card text={text} title={title}>
            <Icon className="text-7xl text-secondary" />
          </Card>
        ))}
      </div>
      <Button {...button} />
    </>
  )
}

export default WelcomeCards
