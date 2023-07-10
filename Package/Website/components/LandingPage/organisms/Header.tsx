'use client'
import { RefObject, useRef } from 'react'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'

import { Links } from '../molecules'
import MobileNavbar from '../molecules/MobileNavbar'

function Header() {
  const mobileNavbar: RefObject<HTMLDivElement> = useRef(null)

  const toggleNavbar = () => {
    mobileNavbar.current?.classList.toggle('translate-x-[100vw]')
    mobileNavbar.current?.classList.toggle('hidden')
    mobileNavbar.current?.classList.toggle('flex')
  }

  return (
    <header className="z-99 flex w-full items-center justify-between bg-primary px-8">
      <Image
        className="z-10 w-auto md:h-[90px]"
        src="/WhiteLogo.png"
        width={300}
        height={300}
        alt="Sams-Logo"
      />
      <Links />
      <GiHamburgerMenu
        className="z-10 text-3xl text-secondary md:hidden"
        onClick={toggleNavbar}
      />
      <MobileNavbar ref={mobileNavbar} toggle={toggleNavbar} />
    </header>
  )
}

export default Header
