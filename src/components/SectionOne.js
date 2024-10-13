import React from "react";
import Image from "next/image";
import Section1 from "../images/section1.svg";
import getStarted from "../images/getStarted.svg";
import ExploreCources from "../images/ExploreCources.svg";
import Text1 from "../images/text1.svg";

const SectionOne = () => {
  return (
    <div className="w-90 h-[514px] gap-8 pt-2">
      <div className="flex justify-center">
        <Image 
        src={Section1} 
        alt="svg" />
      </div>


      <div id="text" className="w-screen h-56 p-2">
        <div className="gap-[32px] flex flex-col justify-center items-center">

        {/* text */}
<div className="gap-2 mt-6 mx-3 "> 
            <Image src={Text1} alt="text" className="" />
            </div>
        {/* get started */}

        <div className="w-full h-10 mt-8 flex items-center px-2 ">
          <button id="getStarted" className="mr-7">

            <Image src={getStarted} alt="get Started" />
          </button>

          <button id="explore" className="px-4 mb-2">
            <Image src={ExploreCources} alt="explore" />
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SectionOne;



