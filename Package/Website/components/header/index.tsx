import Link from "./link";
import ToggleTheme from "./toggle-theme";
import { home } from "data";
import HeaderContainer from "./header-container";

export default function Header() {
  return (
    <HeaderContainer>
      {home.header.links.map((link) => (
        <Link {...link} />
      ))}
    </HeaderContainer>
  );
}