import Image from "next/image";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonCircleOutline } from "react-icons/io5";
import Button from "../Button";

function Header() {
  return (
    <header className="w-full pt-4 px-8 bg-white flex justify-between items-center">
      <Image
        className="w-32 h-16"
        src="/Logo.png"
        width={300}
        height={300}
        alt="Sams-Logo"
      />
      <GiHamburgerMenu className="text-secondary text-3xl md:hidden" />
      <div className="hidden sm:flex">
        <li>About us</li>
        <li>About us</li>
        <li>About us</li>
      </div>
      <div className="hidden sm:flex flex-col"> 
        <IoPersonCircleOutline />
        <small>Log in</small>
      </div>
    </header>
  );
}

export default Header;
