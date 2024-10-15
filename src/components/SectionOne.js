import React from "react";
import Image from "next/image";
import Section1 from "../images/section1.svg";
import getStarted from "../images/getStarted.svg";
import ExploreCources from "../images/ExploreCources.svg";
import Text1 from "../images/text1.svg";

const SectionOne = () => {
  return (
    <div className="w-full md:w-[85%] mx-auto md:mx-20 px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      <div className="flex flex-col lg:flex-row-reverse md:justify-between gap-8 lg:gap-24">
        <div className="w-full lg:w-2/5">
          <div className="w-full">
            <Image 
              src={Section1} 
              alt="svg"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start mt-8 lg:mt-0">
          <div className="w-full md: max-w-md lg:max-w-lg xl:max-w-xl">
            <Image 
              src={Text1} 
              alt="text"
              className="w-full h-auto mb-8 lg:mb-12"
            />
            <div className="flex justify-center lg:justify-start space-x-4 lg:space-x-6">
              <button id="getStarted" className="transform hover:scale-105 transition-transform duration-200">
                <Image src={getStarted} alt="get Started" className="w-auto h-12 lg:h-14" />
              </button>
              <button id="explore" className="transform hover:scale-105 transition-transform duration-200">
                <Image src={ExploreCources} alt="explore" className="w-auto h-12 lg:h-14" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;