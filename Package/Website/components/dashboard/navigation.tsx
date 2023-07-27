"use client";
import { usePathname } from "next/navigation";
import HeaderContainer from "../header/header-container";
import Logout from "./logout";
import data from "data/dashboard";
import HeaderLink from "./header-link";

const Navigation = () => {
  type path = "config" | "devices" | "dashboard";
  const paths = {
    config: "Configuración",
    devices: "Dispositivos",
    dashboard: "Inicio",
  };
  const path = usePathname().split("/").pop() as path;

  const { header } = data;
  return (
    <HeaderContainer>
      <ul className="menu menu-horizontal">
        <li>
          <details>
            <summary className="min-w-[135px]">{paths[path]}</summary>
            <ul className="p-2 bg-base-100">
              {header.links.map((link) => (
                <HeaderLink {...link} />
              ))}
              <Logout />
            </ul>
          </details>
        </li>
      </ul>
    </HeaderContainer>
  );
};

export default Navigation;
