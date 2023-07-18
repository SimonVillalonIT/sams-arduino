import Card from "./card";
import { home } from "data";
function Features() {
  const { features } = home;
  return (
    <section
      id="features"
      className="mb-40 flex min-h-[60vh] flex-col items-center justify-evenly lg:flex-row"
    >
      {features.cards.map((feature, i) => (
        <Card key={i} {...feature} />
      ))}
    </section>
  );
}

export default Features;
