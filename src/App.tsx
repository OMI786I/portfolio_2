import { useEffect } from "react";
import { Banner } from "./components/Banner";
import { NavbarDemo } from "./components/NavbarDemo";
import Progress from "./components/Progress";
import Services from "./components/Services";

function App() {
  return (
    <div className="bg-[#040D12] min-h-screen">
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
    </div>
  );
}

export default App;
