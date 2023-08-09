"use client";
import { HiCalculator, HiHome, HiAdjustments } from "react-icons/hi";
import IconLink from "./icon-link";

const Navigation = () => (
  <nav className="bg-red-700 fixed h-full justify-center items-center flex flex-col">
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <IconLink href="/dashboard" icon={HiHome} />
          <IconLink href="/dashboard/devices" icon={HiCalculator} />
          <IconLink href="/dashboard/config" icon={HiAdjustments} />
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Link 1 </a>
                </li>
                <li>
                  <a> Link 2 </a>{" "}
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
