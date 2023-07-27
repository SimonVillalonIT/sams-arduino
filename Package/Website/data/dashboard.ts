import { IoAddCircleSharp, IoHomeSharp, IoTimeSharp } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdSensors } from "react-icons/md";
import { BsFillGearFill } from "react-icons/bs";
import { HiCog, HiOutlineStatusOnline, HiOutlineHome } from "react-icons/hi";

const data = {
  header: {
    links: [
      { href: "/dashboard", text: "Inicio", icon: HiOutlineHome },
      {
        href: "/dashboard/devices",
        text: "Dispositivos",
        icon: HiOutlineStatusOnline,
      },
      { href: "/dashboard/config", text: "Configuración", icon: HiCog },
    ],
  },
  title: "¡Bienvenido a SAMS, conecta tus dispositivos para comenzar!",
  cards: [
    {
      title: "Aulas",
      text: "Crea las aulas donde los sistemas seran utilizados",
      icon: SiGoogleclassroom,
    },
    {
      title: "Usuarios",
      text: "Asigna a los usuarios que podran acceder a esas aulas",
      icon: AiOutlineUserAdd,
    },
    {
      title: "Sensores",
      text: "Distribuye los sensores de las aulas que tengas disponibles",
      icon: MdSensors,
    },
  ],
  links: [
    {
      title: "home",
      icon: IoHomeSharp,
      href: "/home",
    },
    {
      title: "create",
      icon: IoAddCircleSharp,
      href: "/home/create",
    },
    {
      title: "home",
      icon: IoTimeSharp,
      href: "/historic",
    },
    {
      title: "config",
      icon: BsFillGearFill,
      href: "/config",
    },
  ],
  button: {
    href: "/home/create",
    text: "Crea tu primer aula",
    className: "mt-8 font-bold text-white",
  },
};

export default data;
