'use client'
import Link from 'next/link'
import { links } from 'data/Home'
import { usePathname } from 'next/navigation'

function Navbar() {
  const path = usePathname()
  return (
    <nav className="fixed bottom-0 z-[200] flex w-full justify-center bg-primary/90 backdrop-blur-3xl md:bottom-auto md:left-0 md:h-full md:w-fit md:flex-col md:justify-start">
      {links.map(({ icon: Icon, title, href }, i) => (
        <Link
          className={`${path === href ? 'bg-slate-700/30' : null}`}
          key={i}
          title={title}
          href={href}
        >
          <Icon className="m-2 text-3xl text-secondary" />
        </Link>
      ))}
    </nav>
  )
}

export default Navbar
