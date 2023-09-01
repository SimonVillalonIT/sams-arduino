import Link from "next/link";
import { home } from "data";
import HeroContainer from "./hero-container";

function Hero() {
  const { title, paragraph, button } = home.hero;
  return (
    <HeroContainer>
      <h1 className="mb-5 text-5xl font-extrabold">{title}</h1>
      <p className="bold mb-5">{paragraph}</p>
      <Link href={button.href} className="btn-accent glass btn">
        {button.text}
      </Link>
    </HeroContainer>
  );
}

export default Hero;
