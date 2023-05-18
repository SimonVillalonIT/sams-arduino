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
    <header className="text-3xl overflow-x-hidden flex py-6 justify-between md:text-lg md:items-center md:justify-around md:px-4 md:py-6 ">
      <Logo />
      <Links />
      <Dashboard />
      {/* Only for mobile*/}
      <MenuButton menu={menu} />
      <Menu menu={menu} />
    </header>
  );
}

export default Header;
