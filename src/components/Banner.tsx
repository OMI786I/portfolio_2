"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { GlareImage } from "./GlareImage";
import { Link } from "react-router-dom";
export function Banner() {
  return (
    <div className="h-[40rem] w-full  rounded-md bg-neutral-950 relative flex flex-col   justify-center antialiased">
      <div className="flex flex-col md:flex-row items-center justify-center">
        {" "}
        <div className="max-w-2xl mt-16 md:mt-0  p-4">
          <h1 className=" relative z-10 text-2xl md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600   font-sans font-bold ">
            {" "}
            I am Tahid
          </h1>
          <h1 className="relative z-10 text-2xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-left font-sans font-bold">
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
      <div className="z-10 flex flex-col justify-center md:flex-row items-center gap-5 mt-5">
        <Link
          to={
            "https://drive.google.com/file/d/1mmdYFX4UJDsXowatXEVwXBc2uAAAmwXA/view?usp=drive_link"
          }
        >
          <button className="px-8 py-2 rounded-md bg-[#5C8374] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-download"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              <path d="M7 11l5 5l5 -5" />
              <path d="M12 4l0 12" />
            </svg>
            Download Resume
          </button>
        </Link>
        <div className="flex gap-5">
          <Link
            to={"https://www.linkedin.com/in/tahid-sohrawardy-omi-040b93332/"}
          >
            <button className="px-8 flex py-2 rounded-md bg-[#5C8374] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 11v5" />
                <path d="M8 8v.01" />
                <path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
              </svg>
              Linkedin
            </button>
          </Link>
          <Link to={"https://github.com/OMI786I"}>
            <button className="px-8 flex py-2 rounded-md bg-[#5C8374] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
              Github
            </button>
          </Link>
        </div>
      </div>
      <BackgroundBeams className="" />
    </div>
  );
}
