import Link from "./link";
import { home } from "data";
import HeaderContainer from "./header-container";

export default function Header() {
  return (
    <HeaderContainer>
      {home.header.links.map((link, i) => (
        <Link key={i} {...link} />
      ))}
    </HeaderContainer>
  );
}
