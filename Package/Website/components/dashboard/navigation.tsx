"use client";
import { usePathname } from "next/navigation";
import HeaderContainer from "../header/header-container";
import Logout from "./logout";
import data from "data/dashboard";
import HeaderLink from "./header-link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { HiCheck, HiX } from "react-icons/hi";
import { isDynamicMetadataRoute } from "next/dist/build/analysis/get-page-static-info";

const Navigation = () => {
  const [notification, setNotification] = useState<
    Database["public"]["Tables"]["notification"]["Row"][] | []
  >([]);

  const [toggle, setToggle] = useState(false);
  type path = "config" | "devices" | "dashboard" | "create";
  const paths = {
    config: "Configuración",
    devices: "Dispositivos",
    dashboard: "Inicio",
    create: "Crear",
  };
  const path = usePathname().split("/").pop() as path;

  const { header } = data;

  const supabase = createClientComponentClient<Database>();

  const getNotifications = async () => {
    const { data, error } = await supabase.from("notification").select("*");
    if (error) setNotification([]);
    if (data) setNotification(data);
    console.log(error);
  };

  const accept = async (
    data: Database["public"]["Tables"]["user_device"]["Insert"],
  ) => {
    //const { error } = await supabase.from("user_device").insert(data);
    //console.log(error);
    setNotification(notification.filter((n) => n.id_device !== data.id_device));
  };

  const deny = async (
    data: Database["public"]["Tables"]["notification"]["Row"],
  ) => {
    setNotification(notification.filter((n) => n.id_device !== data.id_device));
  };

  useEffect(() => {
    getNotifications();
  }, []);
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
      <div>
        <button
          onClick={() => setToggle(!toggle)}
          className="btn btn-ghost btn-circle"
        >
          <div className="indicator">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item">
              <p className="text-[10px]">{notification.length}</p>
            </span>
          </div>
        </button>
        <div className="toast top-14 toast-end">
          {toggle
            ? notification.map((n) => (
                <div className="alert alert-info">
                  <span>{n.id_device}</span>
                  <HiCheck
                    onClick={() =>
                      accept({ id_device: n.id_device, id_user: n.id_user })
                    }
                  />
                  <HiX onClick={() => deny(n)} />
                </div>
              ))
            : null}
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Navigation;
