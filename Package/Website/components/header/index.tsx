import Link from "./link";
import { home } from "data";
import HeaderContainer from "./header-container";

export default function Header() {
  return (
    <HeaderContainer>
<<<<<<< HEAD
      {home.header.links.map((link, key) => (
        <Link key={key} {...link} />
=======
      {home.header.links.map((link, i) => (
        <Link key={i} {...link} />
>>>>>>> ad5736d93822d1589808b85cd8bb93f77cc28cba
      ))}
    </HeaderContainer>
  );
}
