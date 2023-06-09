'use client'
import SessionWrapper from 'components/SessionWrapper'
import useUserStore from 'store/userStore'
import React from 'react'
import Card from '../molecules/Card'
import { Button } from 'components/LandingPage/atoms'

function Home() {
  const { session } = useUserStore((state) => state)

  return (
    <main className="z-[99] flex flex-col items-center">
      <SessionWrapper>
        <h1 className="text-white font-bold text-2xl pb-8">
          Bienvenido de nuevo, {session?.user.user_metadata.full_name}
        </h1>
        <div className="flex justify-evenly w-11/12 h-72 items-center">
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
          className="text-white font-bold mt-8"
        />
      </SessionWrapper>
    </main>
  )
}

export default Home
