import React, {useState} from "react";
import { skinscan1 } from "../assets";
import { Transition } from "@headlessui/react";

const Hero = () => {
  return (
    <div className="mt-11">
      <div className="w-full sm:h-auto h-screen flex justify-center flex-col items-center text-difBlack px-4 md:px-0">
        <h1 className="text-3xl md:text-5xl lg:text-[64px] font-extrabold text-center">
          Explore Your Skin,
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-[84px] font-extrabold text-center">
          Let {" "}
          <span className="text-transparent bg-gradient-to-r from-difPink to-difGreen font-kenwave bg-clip-text">
            SkinScan
          </span>{" "}
          Begin
        </h1>
        <p className="md:w-2/6 w-full mt-3 text-center text-gray-500 text-xl">
            SkinScan is a mobile application that allows you to scan your skin and get a quick analysis of your skin condition.
        </p>
        <img
          src={skinscan1}
          alt="SkinScan Image"
          className="w-full md:w-3/4 lg:w-[900px] mt-5"
        />
      </div>
    </div>
  );
};

export default Hero;
