"use client";
import { usePathname } from "next/navigation";
import HeaderContainer from "../header/header-container";
import Logout from "./logout";
import data from "data/dashboard";
import HeaderLink from "./header-link";
import NotificationButton from "./notification-button";

const Navigation = () => {
  const paths = {
    config: "Configuración",
    devices: "Dispositivos",
    dashboard: "Inicio",
    create: "Crear",
    login: "Inicio",
  };
  let pathName = usePathname().split("/");
  while (!Object.hasOwn(paths, pathName[pathName.length - 1])) {
    pathName.pop();
  }

  const path = pathName[pathName.length - 1] as keyof typeof paths;
  const { header } = data;

  return (
    <HeaderContainer>
      <ul className="menu menu-horizontal">
        <li>
          <details className="">
            <summary className="min-w-[135px]  z-[100]">{paths[path]}</summary>
            <ul className="p-2 bg-base-100 ">
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
