import React from "react";
import Features from "./Features";
import { howData } from "@/data/How.data";

function How() {
  return (
    <section className="bg-primary h-screen relative">
      <div className="absolute -right-32 blur-[50px] opacity-30 top-48 w-96 h-96 z-0 rounded-full bg-terciary"></div>
      <h1 className="text-white pl-8 pt-12 text-4xl text-shadow">
        {howData.title}
      </h1>
      <p className="text-lg text-white px-8 pb-4 text-center mt-8 text-shadow z-10 relative">
        {howData.paragraph}
      </p>
      <div className="bg-primary h-full">
        <Features
          title="Localización del Sonido"
          text=" El sistema puede identificar la ubicación aproximada de las fuentes de
          sonido dentro del aula, lo que permite a los usuarios señalar áreas
          específicas responsables de la perturbación."
          right={true}
        />
        <div className="h-1/3">Hello</div>
        <div className="h-1/3">Hello</div>
      </div>
    </section>
  );
}

export default How;
