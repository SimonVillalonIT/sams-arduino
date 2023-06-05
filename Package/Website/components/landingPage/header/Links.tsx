import { headersData } from '@/data/Header.data'
import React from 'react'

function Links() {
  return (
    <div className="hidden md:flex justify-between text-white z-10">
      {headersData.links.map((link, i) => (
        <a
          className="text-[20px] font-semibold mx-8 duration-300 border-b-2 border-transparent hover:border-white"
          href={link.link}
          title={link.title}
          key={i}
        >
          {link.text}
        </a>
      ))}
    </div>
  )
}

export default Links
