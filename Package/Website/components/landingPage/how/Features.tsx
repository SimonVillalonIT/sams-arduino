import React, { PropsWithChildren } from "react";
import Image from "next/image";

interface features {
  title: string;
  right: boolean;
  text: string;
  img: string;
}

function Features({ title, right, text, img }: features) {
  return (
    <div className={`h-1/3 flex justify-around items-center px-4 ${right ? "" : "flex-row-reverse"}`}>
      <div className="w-[30%] fill-secondary text-secondary">
        <Image src={img} width={300} height={300} alt="Icon" />
      </div>
      <div className={`flex flex-col ${right ? "items-end" : ""} w-[60%]`}>
        <h1 className={`${right ? "text-right" : ""} text-white text-shadow text-xl font-semibold z-10 relative`}>
          {title}
        </h1>
        <p className={`${right ? "text-right" : ""} text-white text-shadow font-light text-sm leading-6 z-10 relative`}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default Features;
