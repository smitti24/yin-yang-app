/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
function Faq() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="max-w-[1240px] m-auto px-4 py-16">
      <div className="flex w-full justify-center text-center text-5xl font-default mb-20 text-white md:text-[5rem] font-extrabold">
        Frequently asked questions
      </div>
      <div>
        <Accordion
          open={open === 1}
          onClick={() => handleOpen(1)}
          icon={<Icon id={1} open={open} />}
        >
          <AccordionHeader className="text-default text-white text-2xl hover:text-white">
            Is there a Discord?
          </AccordionHeader>
          <div
            className={
              open === 1
                ? "h-10 text-white mt-10 mb-5 font-default font-bold text-xl z-8"
                : "h-0 opacity-0"
            }
          >
            The official Yin Yang Discord:{" "}
            <a href="https://discord.gg/dystoapez" target="_blank">
              https://discord.gg/dystoapez
            </a>
          </div>
        </Accordion>
        <Accordion
          open={open === 2}
          onClick={() => handleOpen(2)}
          icon={<Icon id={2} open={open} />}
        >
          <AccordionHeader className="text-default text-white text-2xl hover:text-white">
            How much is the mint?
          </AccordionHeader>
          <div
            className={
              open === 2
                ? "h-10 text-white mt-10 mb-5 font-default font-bold text-xl z-8"
                : "h-0 opacity-0"
            }
          >
            Free! WHAT NO WAY! Yes, it{"'"}s free, only have to pay gas.
          </div>
        </Accordion>
        <Accordion
          open={open === 3}
          onClick={() => handleOpen(3)}
          icon={<Icon id={3} open={open} />}
        >
          <AccordionHeader className="text-default text-white text-2xl hover:text-white">
            When is the mint
          </AccordionHeader>
          <div
            className={
              open === 3
                ? "h-10 text-white mt-10 mb-5 font-default font-bold text-xl"
                : "h-0 opacity-0"
            }
          >
            TBD
          </div>
        </Accordion>
        <Accordion
          open={open === 4}
          onClick={() => handleOpen(4)}
          icon={<Icon id={4} open={open} />}
        >
          <AccordionHeader className="text-default text-white text-2xl hover:text-white">
            How do I join YYG?
          </AccordionHeader>
          <div
            className={
              open === 4
                ? "h-10 text-white mt-10 mb-5font-default font-bold text-xl"
                : "h-0 opacity-0"
            }
          >
            <div>- Change your pfp to YY4L</div>
            <div>- Change you banner also.</div>
            <div>- Add ☯️ to your twitter name.</div>
            <div>
              - Tweet about project yin yang and make sure to tag
              @projectyinyang
            </div>
            <div>- Fan art about the revolution!</div>
          </div>
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
