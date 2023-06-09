'use client'
import Image from 'next/image'
import React from 'react'
import { GiHamburgerMenu, GiExitDoor } from 'react-icons/gi'
import Links from '../molecules/Links'
import useUserStore from 'store/userStore'

function Header() {
  const { signOut, loggedIn } = useUserStore((state) => state)
  return (
    <header className="w-full px-8 z-99 bg-primary flex items-center justify-between">
      <Image
        className="w-auto md:h-[90px] z-10"
        src="/WhiteLogo.png"
        width={300}
        height={300}
        alt="Sams-Logo"
      />
      {loggedIn ? (
        <GiExitDoor
          className="text-3xl text-white z-[99] cursor-pointer"
          onClick={signOut}
        />
      ) : (
        <Links />
      )}
      <GiHamburgerMenu className="text-secondary text-3xl md:hidden z-10" />
    </header>
  )
}

export default Header
