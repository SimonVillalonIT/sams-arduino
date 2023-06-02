import React from "react";
import Features from "./Features";
import { howData } from "@/data/How.data";
import "animate.css"

function How() {
  return (
    <section className="bg-primary w-screen relative overflow-x-clip">
      <div className="absolute -right-32 blur-[50px] opacity-30 top-48 w-96 h-96 z-0 rounded-full bg-terciary"></div>
      <div className="absolute -left-32 blur-[50px] opacity-30 -bottom-24 w-96 h-96 z-0 rounded-full bg-terciary"></div>
      <h1 className="text-white pl-8 pt-12 text-4xl text-shadow max-w-prose">
        {howData.title}
      </h1>
      <div className="md:flex md:flex-col md:items-center">
        <p className="text-lg text-white px-8 pb-4 text-center mt-8 text-shadow z-10 relative max-w-prose md:text-xl">
          {howData.paragraph}
        </p>
        <div className="bg-primary flex flex-col md:min-w-[75%] min-h-[400px] h-full justify-between md:justify-evenly md:max-w-2/3 md:flex-row">
          {howData.features.map((feature) => (
            <Features {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default How;
