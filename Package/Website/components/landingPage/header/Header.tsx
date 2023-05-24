import Image from "next/image";
import React from "react";
import {GiHamburgerMenu} from "react-icons/gi"

function Header() {
  return (
    <header className="w-full pt-4 px-8 bg-white flex justify-between items-center">
      <Image className="w-32 h-16" src="/Logo.png" width={300} height={300} alt="Sams-Logo" />
      <GiHamburgerMenu className="text-secondary text-3xl" />
    </header>
  );
}

export default Header;
