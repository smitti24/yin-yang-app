/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Image from "next/image";
import { FaTwitter, FaDiscord } from "react-icons/fa";

function Nav() {
  const twitterUrl = "https://twitter.com/Projectyinyang";
  const discordUrl = "https://discord.gg/dystoapez";

  return (
    <div className="w-screen h-[100px] z-10 sticky md:fixed">
      <div className="text-center md:text-left px-2 md:mt-5 md:flex justify-between items-center w-full h-full">
        <Image
          className="object-contain"
          src="/logo-alt-2-no-background.png"
          width={350}
          height={100}
          alt="Yin Yang Gang"
        />
        <div className="hidden md:flex pr-4 p-4">
          <ul className="text-center flex justify-between md:gap-16">
            <li className="md:p-4 text-[1rem] sm-text-sm md:text-2xl">
              The Gang
            </li>
            <li className="md:p-4 text-[1rem] md:text-2xl">Broadcasts</li>
            <li className="md:p-4 text-[1rem] md:text-2xl">FAQ</li>
          </ul>
        </div>
        <div className="pr-4 p-4">
          <div className="flex justify-evenly md:gap-16">
            <a href={twitterUrl} target="_blank">
              <FaTwitter className="nav-icons" />
            </a>

            <a href={discordUrl} target="_blank">
              <FaDiscord className="nav-icons" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
