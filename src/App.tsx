import { Banner } from "./components/Banner";
import { NavbarDemo } from "./components/NavbarDemo";

function App() {
  return (
    <div className="bg-[#040D12] min-h-screen">
      {/**navbar */}
      <div className="flex flex-row-reverse ">
        <div>
          {" "}
          <NavbarDemo />
        </div>

        <button className="p-[3px] relative mt-5">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Hire Me!
          </div>
        </button>
      </div>
      {/**Hero section */}
      <div>
        <Banner />
      </div>
    </div>
  );
}

export default App;
