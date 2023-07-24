import { BsCalendar } from "react-icons/bs";
import { IoVolumeHigh } from "react-icons/io5";
import { MdMonitor } from "react-icons/md";

const data = {
  header: {
    links: [
      {
        title: "Dashboard to manage your devices ",
        href: "/",
        text: "Home",
      },
      {
        title: "Home of website",
        href: "/#features",
        text: "Features",
      },
      {
        title: "Contact with us",
        href: "/contact",
        text: "Contact",
      },
      {
        title: "Nuestos costos",
        href: "/pricing",
        text: "Costos",
      },
    ],
  },
  hero: {
    title: "SAMS",
    paragraph: "Tu solucion a las aulas con ruidos molestos",
    button: {
      text: "Empieza ya!",
      href: "/auth/login",
    },
  },
  features: {
    title: "¿Cómo Funciona?",
    paragraph:
      "Nuestro Sistema Automatizado de Monitoreo de Sonidos ofrece una serie decaracterísticas diseñadas para crear un entorno de aprendizaje tranquilo y optimizar la gestión del aula",
    cards: [
      {
        title: "Localización del Sonido",
        text: "Permite a los usuarios señalar áreas específicas responsables de la perturbación.",
        icon: IoVolumeHigh,
      },
      {
        title: "Monitoreo Simultáneo",
        text: "Con la capacidad de monitorear múltiples aulas al mismo tiempo.",
        icon: MdMonitor,
      },
      {
        title: "Datos Históricos",
        text: "Nuestro sistema proporciona una interfaz intuitiva. ",
        icon: BsCalendar,
      },
    ],
  },
};

export default data;
