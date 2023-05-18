import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

function MenuButton({ menu }: any) {
  const toggleMenu = () => {
    menu.current.classList.toggle("translate-x-[800px]");
    menu.current.classList.toggle("translate-x-[0px]");
  };

  return (
    <div className="flex justify-end md:hidden px-8">
      <AiOutlineMenu onClick={toggleMenu} />
    </div>
  );
}

export default MenuButton;
