import ProgressBar from "react-animated-progress-bar";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

const skills = [
  {
    title: "HTML & CSS",
    value: "90",
  },
  {
    title: "Javascript",
    value: "75",
  },
  {
    title: "React",
    value: "70",
  },
  {
    title: "Node",
    value: "70",
  },
  {
    title: "Express",
    value: "68",
  },
];

export default function Progress() {
  return (
    <>
      <div className="flex  flex-col md:flex-row justify-center md:justify-around items-center ">
        <div className="h-96 -mt-36 md:h-full md:-mt-0">
          <HeroHighlight>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="relative z-10 text-2xl md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold "
            >
              Here is what I am
              <Highlight className="text-black dark:text-white">
                Good at
              </Highlight>
            </motion.h1>
          </HeroHighlight>
        </div>

        <div className=" flex-col justify-center items-center gap-4">
          {skills.map((res) => (
            <div className=" mx-auto ">
              <h1 className="text-lg font-semibold text-white">{res.title}</h1>
              <ProgressBar
                width="350px"
                height="10px"
                rect
                percentage={res.value}
                rectPadding="1px"
                rectBorderRadius="20px"
                trackPathColor="transparent"
                bgColor="#333333"
                trackBorderColor="#93B1A6"
                fontColor="white"
                defColor={{
                  fair: "#93B1A6",
                  good: "#93B1A6",
                  excellent: "#93B1A6",
                  poor: "#93B1A6",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
