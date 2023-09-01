import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface LinkProps {
  text: string;
  href: string;
  icon: IconType;
}

const HeaderLink = ({ icon: Icon, text, href }: LinkProps) => {
  return (
    <li>
      <Link href={href}>
        <Icon />
        {text}
      </Link>
    </li>
  );
};

export default HeaderLink;
