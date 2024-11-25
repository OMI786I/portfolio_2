"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { GlareImage } from "./GlareImage";

export function Banner() {
  return (
    <div className="h-[40rem] w-full  rounded-md bg-neutral-950 relative flex flex-col   justify-center antialiased">
      <div className="flex  items-center justify-center">
        {" "}
        <div className="max-w-2xl  p-4">
          <h1 className=" relative z-10 text-lg md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600   font-sans font-bold ">
            {" "}
            I am Tahid
          </h1>
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Web Developer
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-left relative z-10">
            I'm a passionate web developer with expertise in building
            responsive, user-friendly websites and web applications. Skilled in
            HTML, CSS, JavaScript, React, Node.js, Express & Mongodb. I focus on
            clean, efficient code and seamless user experiences. I enjoy working
            collaboratively and staying updated with the latest industry trends
            to create modern, impactful digital solutions.
          </p>
        </div>
        <div className="z-10">
          <GlareImage />
        </div>
      </div>
      <div className="z-10 flex justify-center"></div>
      <BackgroundBeams className="" />
    </div>
  );
}
