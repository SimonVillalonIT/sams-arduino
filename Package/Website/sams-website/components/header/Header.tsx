"use client";
import React, { useRef } from "react";
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import Links from "./Links";
import Dashboard from "./Dashboard";
import Logo from "./Logo";

function Header() {
  const menu = useRef(null) as any;

  return (
    <header className="text-3xl overflow-x-hidden flex flex-row-reverse md:flex-row py-6 justify-between md:text-lg md:items-center md:justify-around md:px-4 md:py-6 ">
      <MenuButton menu={menu} />
      <Logo />
      <Links />
      <Dashboard />
      {/* Only for mobile*/}
      <Menu menu={menu} />
    </header>
  );
}

export default Header;
