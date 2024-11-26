const services = [
  {
    id: 1,
    name: "Web Development",
    description:
      "Building responsive and scalable websites using modern technologies like HTML, CSS, JavaScript, React, and backend technologies like Node.js and Express.",
    icon: (
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-app-window"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
        <path d="M6 8h.01" />
        <path d="M9 8h.01" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Web Design",
    description:
      "Designing visually appealing, user-friendly, and modern web layouts, including UI/UX design, prototyping, and wireframing using tools like Figma, Adobe XD, and Sketch.",
    icon: (
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-wand"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 21l15 -15l-3 -3l-15 15l3 3" />
        <path d="M15 6l3 3" />
        <path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
        <path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Graphic Design",
    description:
      "Creating unique and professional graphics for brands, including logos, brochures, banners, and social media graphics using Adobe Photoshop, Illustrator, and InDesign.",
    icon: (
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-drops"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M17.637 7.416a7.907 7.907 0 0 1 1.76 8.666a8 8 0 0 1 -7.397 4.918a8 8 0 0 1 -7.396 -4.918a7.907 7.907 0 0 1 1.759 -8.666l5.637 -5.416l5.637 5.416z" />
        <path d="M14.466 10.923a3.595 3.595 0 0 1 .77 3.877a3.5 3.5 0 0 1 -3.236 2.2a3.5 3.5 0 0 1 -3.236 -2.2a3.595 3.595 0 0 1 .77 -3.877l2.466 -2.423l2.466 2.423z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Technical Writing",
    description:
      "Providing detailed and clear technical documentation, user manuals, API documentation, and tutorials for software products and services.",
    icon: (
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-code-circle"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 14l-2 -2l2 -2" />
        <path d="M14 10l2 2l-2 2" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      </svg>
    ),
  },
];
import { BackgroundGradient } from "./ui/background-gradient";
export default function Services() {
  return (
    <>
      <h1 className="relative z-10 text-3xl md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center  font-sans font-bold">
        The Services I Provide
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 my-7 p-5 gap-4">
        {services.map((res) => (
          <BackgroundGradient
            key={res.id}
            className="rounded-[22px] w-full h-full p-4  sm:p-10 bg-white dark:bg-zinc-900"
          >
            <div className="text-white"> {res.icon}</div>

            <p className="text-2xl  text-black mt-4 mb-2 dark:text-neutral-200">
              {res.name}
            </p>

            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              {res.description}
            </p>
          </BackgroundGradient>
        ))}
      </div>
    </>
  );
}
