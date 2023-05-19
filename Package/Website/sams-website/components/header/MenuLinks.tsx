import React from "react";
import { headersData } from "@/data/Header.data";
import Link from "./Link";

function MenuLinks() {
  return (
    <div className="flex items-center flex-col h-screen w-full bg-white p-4">
      <div className="mt-24 h-72 flex flex-col justify-between">
        {headersData.links.map((e, i) => (
          <Link title={e.title} link={e.link} text={e.text} />
        ))}
      </div>
      <button className='rounded-full text-white bg-terciary mt-28 px-2 py-4'>Iniciar sesión</button>
    </div>
  );
}

export default MenuLinks;
