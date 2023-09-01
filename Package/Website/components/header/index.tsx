import Link from "./link";
import { home } from "data";
import HeaderContainer from "./header-container";

export default function Header() {
  return (
    <HeaderContainer>
      {home.header.links.map((link, key) => (
        <Link key={key} {...link} />
      ))}
    </HeaderContainer>
  );
}
