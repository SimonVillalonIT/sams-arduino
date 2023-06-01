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
    <div className={`h-1/3 flex justify-around items-center px-4 ${right ? "" : "flex-row-reverse"} md:bg-slate-700/10 md:flex-col md:justify-between md:min-h-[230px] md:p-8 md:max-w-[250px] md:shadow-2xl md:backdrop-blur-3xl`}>
      <div className="w-[30%] fill-secondary text-secondary">
        <Image src={img} width={300} height={300} alt="Icon" />
      </div>
      <div className={`flex flex-col ${right ? "items-end" : ""} w-[60%] md:w-full md:items-center`}>
        <h1 className={`${right ? "text-right" : ""} text-white text-shadow text-xl md:text-2xl font-semibold z-10 relative md:text-center md:max-w-[150px]`}>
          {title}
        </h1>
        <p className={`${right ? "text-right" : ""} text-white text-shadow md:text-center md:text-md font-light text-sm leading-6 z-10 relative md:min-h-[96px]`}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default Features;
