import React from "react";
import { headersData } from "@/data/Header.data";

function Links() {
  return (
    <div className="hidden md:flex">
      {headersData.links.map((e, i) => (
        <a  key={i} href={e.link} title={e.title}>
          {e.text}
        </a>
      ))}
    </div>
  );
}

export default Links;
