import React from 'react'
import { headersData } from "@/data/Header.data";

function MenuLinks() {
  return (
    <div className='flex flex-col items-center justify-between h-96 bg-red-700'>
    {headersData.links.map((e, i) => (
        <a  key={i} href={e.link} title={e.title}>
          {e.text}
        </a>
      ))}
      </div>
  )
}

export default MenuLinks