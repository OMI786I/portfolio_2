import { useEffect } from "react";
import { Banner } from "./components/Banner";
import { NavbarDemo } from "./components/NavbarDemo";
import Progress from "./components/Progress";

function App() {
  return (
    <div className="bg-[#040D12] min-h-screen">
      {/**navbar */}
      <div className=" flex  ">
        <div className=" w-full">
          <NavbarDemo />
          <button className="px-8 mt-5 py-2 rounded-md bg-[#5C8374] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
            Hire Me
          </button>
        </div>
      </div>

      {/**Hero section */}
      <div>
        <Banner />
      </div>
      {/**skill section */}
      <div>
        <Progress />
      </div>
    </div>
  );
}

export default App;
