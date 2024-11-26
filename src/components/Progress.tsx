import ProgressBar from "react-animated-progress-bar";
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
      <h1 className=" p-2 text-3xl lg:text-5xl text-center font-bold bg-gradient-to-r from-green-900 to-green-400 bg-clip-text text-transparent my-6">
        Here is what I am good at
      </h1>

      <div
        data-aos="fade-right"
        className=" flex-col justify-center items-center gap-4"
      >
        {skills.map((res) => (
          <div className="w-96">
            <h1 className="text-lg font-semibold text-white">{res.title}</h1>
            <ProgressBar
              width="400px"
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
    </>
  );
}
