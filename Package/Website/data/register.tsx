import { HTMLInputTypeAttribute } from "react";

export interface RegisterData {
  inputs: {
    text: string;
    name: "email" | "password" | "re-password";
    type: HTMLInputTypeAttribute;
  }[];
  button: string;
  link: { href: string; text: string; linkText: string };
}

const data: RegisterData = {
  inputs: [
    { text: "Correo electronico", name: "email", type: "email" },
    {
      text: "Contraseña",
      type: "password",
      name: "password",
    },
    { text: "Confirma tu contraseña", type: "password", name: "re-password" },
  ],
  button: "Registrarse",
  link: {
    href: "/auth/login",
    text: "Ya tienes cuenta?",
    linkText: "Inicia sesión aquí!",
  },
};

export default data;
