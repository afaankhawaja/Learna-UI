import React from "react";
import BottomWeb from './BottomWeb'
import BottomMobile from "./BottomMobile";


const Bottom = () => {
  return (
    <div className="mt-20 ml-4 mr-2 px-1 md:max-w-5xl md:w-[85%] md:mx-auto rounded-lg bg-[#FFFFFF] shadow-[0_2px_20px_0_rgba(0,0,0,0.15)] ">
          
      <BottomMobile/>
      <BottomWeb/>
      
    </div>
  );
};

export default Bottom;
