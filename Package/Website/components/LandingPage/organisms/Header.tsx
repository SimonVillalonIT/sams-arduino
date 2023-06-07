import Image from 'next/image'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import Links from '../molecules/Links'
function Header() {
  return (
    <header className="w-full px-8 bg-primary flex items-center justify-between">
      <Image
        className="w-auto md:h-[90px] z-10"
        src="/WhiteLogo.png"
        width={300}
        height={300}
        alt="Sams-Logo"
      />
      <Links />
      <GiHamburgerMenu className="text-secondary text-3xl md:hidden z-10" />
    </header>
  )
}

export default Header