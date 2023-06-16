'use client'
import Image from 'next/image'
import { GiExitDoor } from 'react-icons/gi'
import useUserStore from 'store/userStore'

function Header() {
  const { signOut } = useUserStore((state) => state)
  return (
    <header className="z-99 flex w-full items-center justify-between bg-primary px-8">
      <Image
        className="z-10 w-auto md:h-[90px]"
        src="/WhiteLogo.png"
        width={300}
        height={300}
        alt="Sams-Logo"
      />
      <GiExitDoor
        className="z-[99] cursor-pointer text-5xl text-white duration-300 hover:text-secondary"
        onClick={signOut}
      />
    </header>
  )
}

export default Header
