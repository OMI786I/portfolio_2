import { BackgroundGradient } from "./ui/background-gradient";

const tech = [
  {
    tech: "Front End",
    technologies: [
      {
        name: "React",
        icons: "/assets/physics.png",
      },
      {
        name: "Tailwind",
        icons: "/assets/images.png",
      },
      {
        name: "Daisy UI",
        icons: "/assets/daisyui-logomark-1024-1024.png",
      },
      {
        name: "ShadCn",
        icons: "/assets/shadcn.png",
      },
      {
        name: "Acertinity Ui",
        icons: "/assets/acertinityui.png",
      },
    ],
  },
  {
    tech: "Back End",
    technologies: [
      {
        name: "Express Js",
        icons: "/assets/express-logo-E9DA5D0AF7-seeklogo.com.png",
      },
      {
        name: "Node Js",
        icons: "/assets/node.png",
      },
      {
        name: "MongoDB",
        icons: "/assets/mongo.png",
      },
      {
        name: "Mongoose",
        icons: "/assets/mongoose.png",
      },
    ],
  },
  {
    tech: "Version Control",
    technologies: [
      {
        name: "Github",
        icons: "/assets/github.png",
      },
    ],
  },
];

export function Technologies() {
  return (
    <div className="my-7">
      <h1 className=" relative z-10 text-2xl md:text-5xl text-center  bg-clip-text text-transparent bg-gradient-to-b p-2 from-neutral-200 to-neutral-600   font-sans font-bold ">
        {" "}
        Here are the Technologies that i mostly used
      </h1>
      <div className="grid md:grid-cols-2  gap-5 p-6">
        {" "}
        {tech.map((res) => (
          <BackgroundGradient className="h-full w-full">
            {" "}
            <div className="rounded-[22px] w-full h-full  sm:p-10 bg-white dark:bg-zinc-900">
              <h1 className="  p-4 text-xl md:text-2xl text-center   bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600   font-sans font-bold ">
                {" "}
                {res.tech}
              </h1>
              <div className="grid grid-cols-2 gap-2 pb-5 justify-center items-center ">
                {/* Individual Tech Cards */}
                {res.technologies.map((res2) => (
                  <button className="   md:px-8 w-32 justify-self-center  md:h-full md:w-full py-2 rounded-md bg-[#5C8374] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500 flex justify-center items-center gap-1">
                    <img className=" w-4 md:w-6" src={res2.icons}></img>
                    <p className=" text-sm md:text-lg font-semibold">
                      {res2.name}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
}
