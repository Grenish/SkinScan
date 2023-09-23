import React from "react";
import { skinscanLogo, googlePlay, appStore } from "../assets";

const Navbar = () => {
  return (
    <div>
      <header className="w-full md:p-4 ">
        <nav className="w-11/12 md:w-4/5 p-4 sm:mt-0 mt-5 m-auto flex justify-between">
          <div className="">
            <img
              src={skinscanLogo}
              alt="Skinscan logo"
              className="w-36 md:w-[150px] mx-auto md:mx-0"
            />
          </div>
          <div className="flex space-x-2">
            <span className="bg-difBlack p-2 rounded-full flex items-center">
              <img
                src={googlePlay}
                alt="Google Play logo"
                className="w-[20px]"
              />
              <h1 className="text-gray-200 ml-2 hidden md:inline-block">
                Google Play
              </h1>
            </span>
            <span className="bg-difBlack p-2 rounded-full flex items-center">
              <img src={appStore} alt="App Store logo" className="w-[20px]" />
              <h1 className="text-gray-200 ml-2 hidden md:inline-block">
                App Store
              </h1>
            </span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
