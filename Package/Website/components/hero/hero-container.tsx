import Arrow from "./arrow";
import { PropsWithChildren } from "react";

function HeroContainer({ children }: PropsWithChildren<{}>) {
  return (
    <section
      className="hero relative min-h-screen"
      style={{
        backgroundAttachment: "fixed",
        backgroundImage:
          "url(https://wallpapers.com/images/featured/classroom-47m0khjt8s0p7c2s.jpg",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">{children}</div>
      </div>
      <Arrow />
    </section>
  );
}

export default HeroContainer;
