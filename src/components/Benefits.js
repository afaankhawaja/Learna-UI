import React from "react";
import Image from "next/image";
import StartLearning from '../images/StartLearning.svg'
import Vector from "../images/Vector.svg";
import Learner1 from '../images/Learner1.svg'
import Instructor from './Instructor'
const Benefits = () => {
  return (
    <div className="w-screen">
      <div className="pt-20 px-6 text-[32px] font-raleway md:font-semibold text-center">Who Benefits from Learna</div>

      {/* Learner */}
<div className="w-screen">
      <div className="my-8 ">
        <div className="w-90 ml-4 md:w-[85%] md:mx-auto rounded-lg md:flex justify-between bg-[#FFFFFF] shadow-[0_2px_20px_0_rgba(0,0,0,0.15)] px-4">
         <div className="md:pl-6">
          <div className="font-normal pt-4 mb-4 text-5xl md:text-7xl">Learner</div>
          <div className="flex items-baseline gap-2 py-2">
            <Image src={Vector} alt="vector" className="" />
            <p className="font-bold font-raleway ">
              Empowering the pursuing of learning goals to achieve potential
            </p>
          </div>

          <div className="flex items-baseline  gap-2 pb-2">
            <Image src={Vector} alt="vector" />
            <p className="font-bold font-raleway">
              Empowering the pursuing of learning goals to achieve potential
            </p>
          </div>

          <div className="flex items-baseline  gap-2">
            <Image src={Vector} alt="vector" />
            <p className="font-bold font-raleway">
              Empowering the pursuing of learning goals to achieve potential
            </p>
          </div>
        
        <div className="mt-5 md:mb-9">
            <Image
            src={StartLearning}
            alt=""
            />
        </div>
        </div>
        <div className="pt-8 pb-4 flex items-center px-8">
            <Image
            src={Learner1}
            alt=""

            />
        </div>
        </div>
        
      </div>
      <Instructor/>
      </div>
    </div>
  );
};

export default Benefits;
