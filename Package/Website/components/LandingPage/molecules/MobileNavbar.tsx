import { header } from 'data/LandingPage'
import React, { LegacyRef, forwardRef } from 'react'
import { ImCross } from 'react-icons/im'

const MobileNavbar = forwardRef(
  ({toggle}: { toggle: () => void }, ref: LegacyRef<HTMLDivElement>) => {
    return (
      <div
        ref={ref}
        className="fixed inset-0 z-[900] hidden min-h-screen w-full translate-x-[100vw] flex-col items-center bg-primary pt-4 transition-transform duration-500 md:hidden"
      >
        <ImCross
          className="z-10 text-3xl text-secondary md:hidden"
          onClick={toggle}
        />
        <div className="text-center text-2xl font-bold text-white">
          <a className="block pb-4" href="/home">
            Ir al dashboard
          </a>
          {header.links.map((link, i) => (
            <a
              className="block pb-4"
              href={link.link}
              title={link.title}
              key={i}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    )
  },
)

export default MobileNavbar
