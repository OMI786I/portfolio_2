import { Meteors } from "./ui/meteors";

const data = [
  {
    title: "Vision",
    description:
      "My Vision is to create innovative , accessible and impactful digital solutions that drive the future of the web, enhancing user experiences while fostering sustainability and incluisivity ",
    icons: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="72"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-eye w-24"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
      </svg>
    ),
  },
  {
    title: "Mission",
    description:
      "My mission is to build efficient, user-friendly websites and applications that solves problems,enhancing user experiences and stay aligned with modern web standards and technologies ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="72"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-target-arrow"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M12 7a5 5 0 1 0 5 5" />
        <path d="M13 3.055a9 9 0 1 0 7.941 7.945" />
        <path d="M15 6v3h3l3 -3h-3v-3z" />
        <path d="M15 9l-3 3" />
      </svg>
    ),
  },
];

const MissionVision = () => {
  return (
    <div className="mx-4 z-10 my-4 ">
      <h1 className="my-3 relative text-2xl md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 p-2 text-center font-sans font-bold ">
        My Mission and vision
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-5">
        {" "}
        {data.map((res) => (
          <div className="my-5">
            <div className=" w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-2 w-2 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                    />
                  </svg>
                </div>

                <h1 className="font-bold text-3xl text-white mb-4 relative z-10">
                  {res.title}
                </h1>

                <p className="font-normal text-xl text-slate-500 mb-4 relative z-10">
                  {res.description}
                </p>

                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionVision;
