import React from "react"
import Link from "./link"
import ToggleTheme from "./toggle-theme"
import {home} from "data"

export default function Header() {
  return (
    <header className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
          {home.header.links.map((link) => <Link {...link} />)}
          </ul>
        </div>
        <a className="btn-ghost btn text-xl normal-case">SAMS</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {home.header.links.map((link) => <Link {...link} />)}
        </ul>
        <ToggleTheme />
      </div>
      <div className="navbar-end lg:hidden">
        <ToggleTheme />
      </div>
    </header>
  );
}
