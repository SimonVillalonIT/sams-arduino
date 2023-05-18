import React from "react";
import {ImCross} from "react-icons/Im"

function CloseMenu({ menu }: any) {
  const toggleMenu = () => {
    menu.current.classList.toggle("translate-x-[800px]");
    menu.current.classList.toggle("translate-x-[0px]");
  };
  return <div className="absolute text-secondary top-6 right-8" onClick={toggleMenu}>
    <ImCross />
  </div>;
}

export default CloseMenu;
