import React from 'react'
import Image from 'next/image'

interface card {
  title: string
  text: string
  img: string
}

function Card({ title, text, img }: card) {
  return (
    <article className="backdrop-blur-2xl shadow-2xl bg-slate-200/10 h-full flex flex-col justify-evenly items-center px-2 py-4">
      <Image
        className="w-32 h-32"
        src={img}
        width={300}
        height={300}
        alt="Icon"
      />
      <h1
        className={` text-white text-shadow text-xl md:text-2xl font-semibold z-10 relative md:text-center md:max-w-[150px]`}
      >
        {title}
      </h1>
      <p className="w-72 text-white text-center">{text}</p>
    </article>
  )
}

export default Card
