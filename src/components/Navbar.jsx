import React from "react";
import { skinscanLogo } from "../assets";

const Navbar = () => {
  return (
    <div>
      <header className="w-full p-2 ">
        <nav className="w-[80%]  p-4 m-auto">
          <div className="">
            <img src={skinscanLogo} alt="" className="w-[150px]"/>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
