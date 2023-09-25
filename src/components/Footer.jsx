import React from "react";
import { skinscanLogo, googlePlay, appStore } from "../assets";

const Footer = () => {
  return (
    <div className="w-full">
      <footer className="border-t-[1px] bg-gray-100">
        <div className="mx-auto max-w-5xl pt-12 pb-12">
          <div className="flex justify-center text-teal-600">
            <img src={skinscanLogo} alt="SkinScan Logo" className="w-[200px]" />
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
            "Be the change that you wish to see in the world" - Mahatma Gandhi
          </p>

          <div className="flex justify-center space-x-2 flex-wrap">
            <span className="bg-difBlack p-2 rounded-full flex items-center mt-4">
              <img
                src={googlePlay}
                alt="Google Play logo"
                className="w-[20px]"
              />
              <span className="text-gray-200 ml-2 hidden md:inline-block">
                Google Play
              </span>
            </span>
            <span className="bg-difBlack p-2 rounded-full flex items-center mt-4">
              <img src={appStore} alt="App Store logo" className="w-[20px]" />
              <span className="text-gray-200 ml-2 hidden md:inline-block">
                App Store
              </span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="m-auto p-5 ">
            <p className="text-center text-gray-500">
              © 2021 SkinScan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
