'use client'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import useUserStore from 'store/userStore'
import { Links } from '../molecules'

function Header() {
  const { loggedIn } = useUserStore((state) => state)
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
        <>
          <Links />
          <a
            className="z-50 cursor-pointer border-2 border-transparent text-lg font-bold text-white duration-300 hover:border-b-2 hover:border-b-white"
            href="/home"
          >
            Ir al dashboard
          </a>
        </>
      ) : (
        <Links />
      )}
      <GiHamburgerMenu className="z-10 text-3xl text-secondary md:hidden" />
    </header>
  )
}

export default Header
