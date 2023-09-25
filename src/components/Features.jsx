import React, { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import {
  FaMobileAlt,
  FaHourglassStart,
  FaGlobeAmericas,
  FaCertificate,
} from "react-icons/fa";
import { featureBackground } from "../assets";

const Features = () => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
  }, []);

  const features = [
    {
      title: "Easy to use",
      description:
        "User-friendly interface that is easy to navigate for everyone.",
      icon: <FaMobileAlt className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Instant answers",
      description:
        "Get quick analysis and feedback on every skin scan you perform.",
      icon: <FaHourglassStart className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "No language barrier",
      description:
        "Our app supports many languages to cater to our wide range of users.",
      icon: <FaGlobeAmericas className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Government certified",
      description:
        "Our app is certified by the government to ensure trusted and reliable results.",
      icon: <FaCertificate className="w-6 h-6 text-indigo-500" />,
    },
  ];

  return (
    <div ref={ref} className="w-full  py-16 relative ">
      <img
        src={featureBackground}
        alt=""
        className="absolute z-[-1] top-0 left-0 blur-sm w-full sm:h-auto xl:h-full h-full md:h-[120vh] object-cover"
      />
      <Transition
        show={show}
        appear={true}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <div className="flex justify-center  mb-6">
          <span className="sm:text-[55px] text-[32px] bg-gradient-to-r from-difBlue to-difGreen text-transparent bg-clip-text font-black">
            Why Choose Us?
          </span>
        </div>
        <div className="flex flex-row flex-wrap items-start justify-around max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col w-[350px] h-[240px] bg-[#45CB8550] backdrop-blur-sm items-center mb-6 mx-3 p-5 border-difGreen border rounded-lg transition transform shadow-lg"
            >
              <div className="mb-4 rounded-full bg-indigo-200 h-16 w-16 flex items-center justify-center transition-transform ease-in-out duration-500 transform rotate-0">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </Transition>
    </div>
  );
};

export default Features;
