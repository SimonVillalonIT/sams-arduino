import React from 'react'
import Image from 'next/image'

interface card {
  title: string
  text: string
  img: string
}

function Card({ title, text, img }: card) {
  return (
    <article className="flex h-full flex-col items-center justify-evenly bg-slate-200/10 px-2 py-4 shadow-2xl backdrop-blur-2xl">
      <Image
        className="h-32 w-32"
        src={img}
        width={300}
        height={300}
        alt="Icon"
      />
      <h1
        className={` text-shadow relative z-10 text-xl font-semibold text-white md:max-w-[150px] md:text-center md:text-2xl`}
      >
        {title}
      </h1>
      <p className="w-72 text-center text-white">{text}</p>
    </article>
  )
}

export default Card
