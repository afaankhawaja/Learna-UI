import Image from "next/image";
import World from "../images/World.svg";
import downArrow from "../images/downArrow.svg";
import CatogeriesData from "./CatogeriesData.json";
import ScrollButtonR from "../images/ScrollButtonR.svg";
import { useState } from "react";

const MobileMenu = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    setActiveSubcategory(subcategory);
  };
  const handleSubcategoryBack=()=>{
    setActiveCategory(null);
    setActiveSubcategory(null);
  }
  const handleSubSubcategoryBack=()=>{
    setActiveSubcategory(null);
  }

  return (
    <div className="border-b-[1.5px] w-full h-auto mt-2 shadow-[#495f5d] shadow-lg absolute bg-slate-50 right-0 border-[#018076]">
              <div className="border-t-2 border-slate-200"></div>

      <div className="mx-auto w-[80%] border-[#018076] border-2 p-2 mt-7 rounded-lg text-center">
        start learning
      </div>
      <div className="mx-auto mt-2 w-[80%] border-[#018076] border-2 p-2 rounded-lg mb-7 text-center">
        Teach on learna
      </div>

      <div className="border-t-2 border-slate-200"></div>

      <div className="flex justify-between p-4 mx-2 gap-2">
        <span className="flex gap-3 ">
          <Image src={World} alt="world" />
          <span>Engilsh</span>
        </span>
        <span>
          <Image src={downArrow} alt="" />
        </span>
      </div>
      <div className="border-t-2 border-slate-200"></div>
      <div className="px-2 my-5">
        <div className="p-2 mb-2 text-2xl font-raleway">Catogeries</div>

{activeCategory == null && activeSubcategory == null?
        <div>
          {CatogeriesData.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category)}
              className="p-2  rounded-lg flex justify-between items-center text-[#208077] "
            >
              {category.label}{" "}
              <span className="mx-2">
                {<Image src={ScrollButtonR} alt="" />}
              </span>
            </div>
          ))}
        </div>
        : activeCategory && activeSubcategory== null?

       <div>
         <div className='mx-2 mb-2 px-2 py-1 w-16 text-center rounded-lg bg-black text-white' onClick={handleSubcategoryBack}>back</div>
          {activeCategory &&
            activeCategory.subcatogery.map((subcategory, index) => (
              <div
                key={index}
                onClick={() => handleSubcategoryClick(subcategory)}
                className={`p-2 rounded-lg flex justify-between items-center ${
                  activeSubcategory === subcategory ? 'text-[#208077]' : ''
                }`}
              >
                {subcategory.label} <span className="mx-2">{<Image src={ScrollButtonR} alt=''/>}</span>
              </div>
            ))}
        </div>
        :
        <div>
                     <div className='mx-2 mb-2 px-2 py-1 w-16 text-center rounded-lg bg-black text-white' onClick={handleSubSubcategoryBack}>back</div>

          {activeSubcategory &&
            activeSubcategory.subsubcatoery.map((subsubcategory, index) => (
              <div key={index}  className="p-2 rounded-lg hover:text-[#208077]">
                {subsubcategory.label}
              </div>
            ))}
        </div>
       
       }
      </div>
    </div>
  );
};

export default MobileMenu;
