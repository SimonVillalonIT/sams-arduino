import { Hero, Features, Header, Footer } from "components";

export default function page() {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col items-center">
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}
