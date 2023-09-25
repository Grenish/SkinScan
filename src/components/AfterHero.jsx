import React, { useState, useEffect, useRef } from 'react';
import { Transition } from '@headlessui/react';
import { skinscan2 } from '../assets';

const AfterHero = () => {
  const [show, setShow] = useState({0: false, 1: false, 2: false});
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting){
        const durations = [500, 1000, 1500]; //delay in milliseconds
        durations.forEach((duration, i) => {
          setTimeout(() => {
            setShow(prevState => ({ ...prevState, [i]: true}))
          }, duration)
        });
      } 
    });
    if(ref.current){
      observer.observe(ref.current);
    }
    return () => {
      if(ref.current){
        observer.unobserve(ref.current);
      }
    };
  }, [])

  const contents = [
    { text: "Explore your skin in a click", className: "sm:bottom-[10rem] xl:bottom-[9rem] bottom-[9rem] md:bottom-[20rem]" },
    { text: "It's FREE", className: "sm:bottom-[20rem] xl:bottom-[18rem] bottom-[17rem] md:bottom-[30rem]" },
    { text: "Recommend someone you care", className: "sm:bottom-[30rem] xl:bottom-[27rem] bottom-[25rem] md:bottom-[40rem]" },
  ]

  return (
    <div className="sm:mt-0 mt-[-150px] relative" ref={ref}>
      <img
        src={skinscan2}
        alt="A brief description of the image here"
        className="w-full sm:h-auto h-[90vh] md:h-[120vh] object-cover"
      />
      {contents.map((item, i) => (
        <Transition
          key={i}
          show={show[i]}
          enter="transform transition duration-[500ms]"  
          enterFrom="opacity-0 translate-y-[20px]"
          enterTo="opacity-100 translate-y-0"
        >
          <div className={`border-[1px] absolute ${item.className} xl:right-[35rem] right-3 sm:right-[35rem] md:right-[10rem] border-difBlack w-[120px] h-[120px] p-2 rounded-full flex justify-center items-center`}>
            <span className="p-2 text-sm text-center font-colorFont">{item.text}</span>
          </div>
        </Transition>
      ))}
    </div>
  );
};

export default AfterHero;