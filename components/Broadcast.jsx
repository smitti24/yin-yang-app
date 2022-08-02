import React from "react";
import Image from "next/image";

function Broadcast() {
  return (
    <div name="broadcasts" className="w-full flex flex-col justify-between">
      <div>
        <div className="flex w-full justify-center text-4xl font-default my-20 text-white md:text-[5rem] font-extrabold">
          Leaked Files
        </div>
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto mb-10">
          <div>
            <video
              src="/yingyang.mp4"
              alt="/"
              width={500}
              height={500}
              autoPlay
              loop
              muted
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left md:items-start w-full px-2 py-8">
            <h1 className="py-3 text-5xl md:text-7xl font-bold font-default uppercase">
              Broadcast 1
            </h1>
            <p className="py-3 text-xl md:text-2xl font-bold font-default text-white">
              We took a huge risk contacting you here, but our lives are at
              risk. Get down to the black market and grab a burner while we
              setup secure comms.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto mb-10">
          <div>
            <video
              src="/broadcast-2.mp4"
              alt="/"
              width={500}
              height={500}
              autoPlay
              loop
              muted
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left md:items-start w-full px-2 py-8">
            <h1 className="py-3 text-5xl md:text-7xl font-bold font-default uppercase">
              Broadcast 2
            </h1>
            <p className="py-3 text-xl md:text-2xl font-bold font-default text-white">
              Did you all really think we wouldn’t find out? YYG numbers have
              been growing at an alarming rate. We know you guys are helping
              them. Nevertheless, Dysto Inc will never lose control of this
              city...
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto gap-10">
          <div>
            <Image
              src="/broadcast-3.png"
              alt="/"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left md:items-start w-full px-2 py-8">
            <h1 className="py-3 text-5xl md:text-7xl font-bold font-default uppercase">
              Broadcast 3
            </h1>
            <p className="py-3 text-xl md:text-2xl font-bold font-default text-white">
              Dysto Inc has been oppressing us for years. They thought we wouldn
              {"'"}t find out about their secret weapon {'"'}Nightshade-XZ45
              {'"'}
              They{"'"}ve been using it against us for centuries. It{"'"}s time
              we level the playing field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Broadcast;
