import ToggleTheme from "./toggle-theme";
import { PropsWithChildren } from "react";

export default function HeaderContainer({ children }: PropsWithChildren) {
  return (
    <header className="navbar bg-base-100 px-8">
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
            {children}
          </ul>
        </div>
        <a className="btn-ghost btn text-xl normal-case">SAMS</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{children}</ul>
        <ToggleTheme />
      </div>
      <div className="navbar-end lg:hidden">
        <ToggleTheme />
      </div>
    </header>
  );
}
