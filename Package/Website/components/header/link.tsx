import React from "react";

interface Props {
  href: string;
  title: string;
  text: string;
}

function Link({ href, title, text }: Props) {
  return (
    <li title={title}>
      <a href={href}>{text}</a>
    </li>
  );
}

export default Link;
