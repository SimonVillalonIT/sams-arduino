import Image from 'next/image'

interface features {
  title: string
  right: boolean
  text: string
  img: string
}

function Features({ title, right, text, img }: features) {
  return (
    <article
      className={`flex h-1/3 items-center justify-around px-4 ${
        right ? '' : 'flex-row-reverse'
      } z-10 md:mt-16 md:min-h-[230px] md:max-w-[250px] md:flex-col md:justify-between md:bg-slate-700/10 md:p-8 md:shadow-2xl md:backdrop-blur-xl`}
    >
      <div className="w-[30%] fill-secondary text-secondary">
        <Image src={img} width={300} height={300} alt="Icon" />
      </div>
      <div
        className={`flex flex-col ${
          right ? 'items-end' : ''
        } w-[60%] md:w-full md:items-center`}
      >
        <h1
          className={`${
            right ? 'text-right' : ''
          } text-shadow relative z-10 text-xl font-semibold text-white md:max-w-[150px] md:text-center md:text-2xl`}
        >
          {title}
        </h1>
        <p
          className={`${
            right ? 'text-right' : ''
          } text-shadow md:text-md relative z-10 text-sm font-light leading-6 text-white md:min-h-[96px] md:text-center`}
        >
          {text}
        </p>
      </div>
    </article>
  )
}

export default Features
