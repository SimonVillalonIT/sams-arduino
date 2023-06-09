'use client'
import Image from 'next/image'
import React from 'react'
import { GiExitDoor } from 'react-icons/gi'
import useUserStore from 'store/userStore'

function Header() {
  const { signOut } = useUserStore((state) => state)
  return (
    <header className="w-full px-8 z-99 bg-primary flex items-center justify-between">
      <Image
        className="w-auto md:h-[90px] z-10"
        src="/WhiteLogo.png"
        width={300}
        height={300}
        alt="Sams-Logo"
      />
      <GiExitDoor
        className="text-5xl text-white z-[99] cursor-pointer hover:text-secondary duration-300"
        onClick={signOut}
      />
    </header>
  )
}

export default Header
