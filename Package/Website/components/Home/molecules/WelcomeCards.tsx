import React from 'react'
import useUserStore from 'store/userStore'
import { Button } from 'components/LandingPage/atoms'
import { Carousel, Card } from '../molecules'

function WelcomeCards() {
  const { session } = useUserStore((state) => state)
  return (
    <>
      <h1 className="pb-8 text-2xl font-bold text-white">
        ¡Bienvenido! {session?.user.user_metadata.full_name}
      </h1>
      <Carousel />
      <div className="hidden h-72 w-11/12 items-center justify-evenly md:flex">
        <Card
          title="Aulas"
          text="Crea las aulas donde los sistemas seran utilizados"
          img="/svg/volume.svg"
        />
        <Card
          title="Usuarios"
          text="Asigna a los usuarios que podran acceder a esas aulas"
          img="/svg/volume.svg"
        />
        <Card
          title="Sensores"
          text="Distribuye los sensores de las aulas que tengo disponibles"
          img="/svg/volume.svg"
        />
      </div>
      <Button
        href="/home/create"
        text="Create your first classroom"
        className="mt-8 font-bold text-white"
      />
    </>
  )
}

export default WelcomeCards
