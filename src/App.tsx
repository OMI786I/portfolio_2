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
      <div id="skillSection" className="">
        <Progress />
      </div>
      {/**Services section */}
      <div id="servicesSection" className="">
        <Services />
      </div>
      {/**Projects section */}
      <div id="projectsSection" className="">
        <Projects />
      </div>
      {/**Mission & Vision section */}
      <div id="missionVisionSection" className="">
        <MissionVision />
      </div>
      {/**Contacts section */}
      <div id="contactsSection" className="">
        <Contact />
      </div>
    </div>
  );
}

export default App;
