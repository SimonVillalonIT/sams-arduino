import React, { PropsWithChildren } from "react";
import Image from "next/image";

interface features {
  title: string;
  right: boolean;
  text: string;
}

function Features({ title, right, text }: PropsWithChildren<features>) {
  return (
    <div className="h-1/3 flex justify-around items-center px-4">
      <div className="w-[30%] fill-secondary text-secondary">
        <Image src={"/svg/calendar.svg"} width={300} height={300} alt="Icon" />
      </div>
      <div className="flex flex-col items-end w-[60%]">
        <h1 className="text-right text-white text-shadow text-xl font-semibold z-10 relative">
          {title}
        </h1>
        <p className="text-right text-white text-shadow font-light text-sm leading-6 z-10 relative">
          {text}
        </p>
      </div>
    </div>
  );
}

export default Features;
