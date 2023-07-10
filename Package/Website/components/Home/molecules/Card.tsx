import { PropsWithChildren } from "react"

interface card {
  title: string
  text: string
}

function Card({ title, text,children }: PropsWithChildren<card>) {
  return (
    <article className="flex min-h-full flex-col items-center justify-evenly bg-slate-200/10 px-2 py-16 shadow-2xl backdrop-blur-2xl">
      {children}
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
