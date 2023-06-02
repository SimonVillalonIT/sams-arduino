"use client";
import React from "react";
import Button from "../Button";
import { BsArrowRight } from "react-icons/bs";
import Title from "./Title";
import { mainData } from "@/data/Main.data";

import ClassroomContainer from "./ClassroomContainer";

function Main() {
  return (
    <section className="bg-white sm:flex justify-between pt-8 pb-16">
      <div className="flex flex-col items-center max-w-prose">
        <Title />
        <p className="text-center text-lg px-5 text-text text-shadow pt-8 pb-4  animate__animated animate__fadeInDown">
          {mainData.paragraph}
        </p>
        <p className="text-center text-xl px-5 text-strong  animate__animated animate__fadeInDown">
          {mainData.subparagraph}
        </p>
        <Button
          text={mainData.button}
          id="Button"
          href="/"
          className="mt-6 mb-8  animate__animated animate__fadeInUp"
        >
          <BsArrowRight id="Arrow" />
        </Button>
      </div>
      <ClassroomContainer />
    </section>
  );
}

export default Main;
