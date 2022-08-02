import React from "react";
import Image from "next/image";

function Landing() {
  return (
    <div
      name="landing"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="bg-image-wrapper">
        <Image
          src="/background.png"
          alt="/"
          quality="100"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-center max-w-[1240px] m-auto md:mt-30 mb-0 md:translate-x-[-10rem]">
        <div>
          <Image
            src="/logo-2.png"
            alt="/"
            width={250}
            height={250}
            className="animate-spin-slow"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto z-10">
        <div className="flex flex-col col-span-2 justify-center md:items-start w-full px-2 py-8">
          <h1 className="text-4xl md:text-7xl font-pixel">Project Yin Yang</h1>
          <h3 className="font-pixel float-right w-full text-right text-white">
            By Us
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Landing;
