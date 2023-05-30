"use client";
import React, { Suspense } from "react";
import Button from "../Button";
import { BsArrowRight } from "react-icons/bs";
import Title from "./Title";
import { mainData } from "@/data/Main.data";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Classroom";
import { OrbitControls } from "@react-three/drei";

function Main() {
  return (
    <section className="main bg-white flex flex-col items-center justify-between pt-8 pb-16">
      <Title />
      <div>
        <p className="text-center text-lg px-5 text-text text-shadow pt-8 pb-4">
          {mainData.paragraph}
        </p>
        <p className="text-center text-xl px-5 text-strong">
          {mainData.subparagraph}
        </p>
      </div>
      <Button text={mainData.button} id="Button" href="/" className="mt-6 mb-8">
        <BsArrowRight id="Arrow" />
      </Button>
      <div className="w-3/4 h-screen">
        <Canvas camera={{ zoom: 1, position: [15, 20, 15] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[35, 35, 0]} />
          <pointLight position={[-35, 35, 0]} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
      <div className="wave"></div>
    </section>
  );
}

export default Main;
