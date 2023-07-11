import { header } from 'data/LandingPage'
import Link from 'next/link'

function Links() {
  return  (
    <div className="z-10 hidden justify-between text-white md:flex">
      {header.links.map((link, i) => (
        <Link
          className="mx-8 border-b-2 border-transparent text-[20px] font-semibold duration-300 hover:border-white"
          href={link.link}
          title={link.title}
          key={i}
        >
          {link.text}
        </Link>
      ))}
    </div>
  )
}

export default Links
