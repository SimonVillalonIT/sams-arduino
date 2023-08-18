"use client";
import { usePathname } from "next/navigation";
import HeaderContainer from "../header/header-container";
import Logout from "./logout";
import data from "data/dashboard";
import HeaderLink from "./header-link";
import NotificationButton from "./notification-button";

const Navigation = () => {
  type path = "config" | "devices" | "dashboard" | "create";
  const paths = {
    config: "Configuración",
    devices: "Dispositivos",
    dashboard: "Inicio",
    create: "Crear",
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
              {header.links.map((link, i) => (
                <HeaderLink key={i} {...link} />
              ))}
              <Logout />
            </ul>
          </details>
        </li>
      </ul>
      <NotificationButton />
    </HeaderContainer>
  );
};

export default Navigation;
