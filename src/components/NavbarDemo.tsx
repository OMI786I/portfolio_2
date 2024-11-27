import { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import { Link } from "react-scroll";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 " />
      <p className="text-black dark:text-white"></p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        " my-2 md:fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link
          to="servicesSection"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          {" "}
          <MenuItem
            setActive={setActive}
            active={active}
            item="Services"
          ></MenuItem>
        </Link>
        <Link
          to="techSection"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          {" "}
          <MenuItem
            setActive={setActive}
            active={active}
            item="Skills"
          ></MenuItem>
        </Link>

        <Link
          to="projectsSection"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          {" "}
          <MenuItem
            setActive={setActive}
            active={active}
            item="Projects"
          ></MenuItem>
        </Link>

        <Link
          to="contactsSection"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          {" "}
          <MenuItem
            setActive={setActive}
            active={active}
            item="Hire Me!"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
