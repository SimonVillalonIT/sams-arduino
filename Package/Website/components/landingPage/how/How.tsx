import React from "react";
import Features from "./Features";
import { howData } from "@/data/How.data";

function How() {
  return (
    <section className="bg-primary h-screen w-full relative overflow-x-clip">
      <div className="absolute -right-32 blur-[50px] opacity-30 top-48 w-96 h-96 z-0 rounded-full bg-terciary"></div>
      <div className="absolute -left-32 blur-[50px] opacity-30 -bottom-24 w-96 h-96 z-0 rounded-full bg-terciary"></div>
      <h1 className="text-white pl-8 pt-12 text-4xl text-shadow max-w-prose">
        {howData.title}
      </h1>
      <p className="text-lg text-white px-8 pb-4 text-center mt-8 text-shadow z-10 relative max-w-prose md:text-xl">
        {howData.paragraph}
      </p>
      <div className="bg-primary h-full max-w-prose md:flex">
        {howData.features.map(feature => <Features {...feature} />)}
      </div>
    </section>
  );
}

export default How;
