import { useEffect, useState } from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const Projects = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="w-full mx-auto px-8 mt-32">
      <h1 className="relative z-10 text-2xl md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold text-center">
        Here are some of Best Projects
      </h1>
      <HoverEffect items={data} />
    </div>
  );
};

export default Projects;
