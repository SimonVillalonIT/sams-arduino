import { Hero, Features } from "components";

export default function page() {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero />
      <Features />
    </main>
  );
}
