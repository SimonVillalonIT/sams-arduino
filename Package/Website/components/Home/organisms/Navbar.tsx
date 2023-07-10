"use client";
import Link from "next/link";
import { links } from "data/Home";
import { usePathname } from "next/navigation";

function Navbar() {
  const path = usePathname();
  return (
    <nav className="fixed bottom-0 md:flex-col md:justify-start w-full flex justify-center md:w-fit md:bottom-auto md:left-0 md:h-full bg-primary/90 backdrop-blur-3xl z-[200]">
      {links.map(({ icon: Icon, title, href }, i) => (
        <Link className={`${path === href ? "bg-slate-700/30" : null}`} key={i} title={title} href={href}>
          <Icon
            className='text-3xl m-2 text-secondary'
          />
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
