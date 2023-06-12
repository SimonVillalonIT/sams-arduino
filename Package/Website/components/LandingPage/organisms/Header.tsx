'use client'
import Image from 'next/image'
import React from 'react'
import { GiHamburgerMenu, GiExitDoor } from 'react-icons/gi'
import Links from '../molecules/Links'
import useUserStore from 'store/userStore'

function Header() {
  const { signOut, loggedIn } = useUserStore((state) => state)
  return (
    <header className="z-99 flex w-full items-center justify-between bg-primary px-8">
      <Image
        className="z-10 w-auto md:h-[90px]"
        src="/WhiteLogo.png"
        width={300}
        height={300}
        alt="Sams-Logo"
      />
      {loggedIn ? (
        <a className="z-50 cursor-pointer text-white" href="/home">
          Ir al dashboard
        </a>
      ) : (
        <Links />
      )}
      <GiHamburgerMenu className="z-10 text-3xl text-secondary md:hidden" />
    </header>
  )
}

export default Header
