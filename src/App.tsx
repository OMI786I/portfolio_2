import { useEffect } from "react";
import { Banner } from "./components/Banner";
import { NavbarDemo } from "./components/NavbarDemo";
import Progress from "./components/Progress";
import Services from "./components/Services";
import Projects from "./components/Projects";
import MissionVision from "./components/MissonVision";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-[#040D12] min-h-screen">
      <Toaster />
      {/**navbar */}
      <div className=" flex  ">
        <div className=" w-full">
          <NavbarDemo />
        </div>
      </div>

      {/**Hero section */}
      <div>
        <Banner />
      </div>
      {/**skill section */}
      <div className="">
        <Progress />
      </div>
      {/**Services section */}
      <div className="">
        <Services />
      </div>
      {/**Projects section */}
      <div className="">
        <Projects />
      </div>
      {/**Mission & Vision section */}
      <div className="">
        <MissionVision />
      </div>
      {/**Contacts section */}
      <div className="">
        <Contact />
      </div>
    </div>
  );
}

export default App;
