import { HTMLInputTypeAttribute } from "react";

export interface LoginData {
  inputs: {
    text: string;
    name: "email" | "password";
    type: HTMLInputTypeAttribute;
  }[];
  button: string;
  link: { href: string; text: string; linkText: string };
}

const data: LoginData = {
  inputs: [
    {
      text: "Correo Electrónico",
      name: "email",
      type: "email",
    },
    {
      text: "Contraseña",
      type: "password",
      name: "password",
    },
  ],
  button: "Iniciar sesión",
  link: {
    href: "/auth/register",
    text: "No tienes una cuenta?",
    linkText: "Registrate!",
  },
};

export default data;
