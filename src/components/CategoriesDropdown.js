'use client'
import { useState } from 'react';
import CatogeriesData from './CatogeriesData.json';
import ScrollButtonR from '../images/ScrollButtonR.svg';
import Image from 'next/image';
import Link from 'next/link';

const CategoriesDropdown = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    setActiveSubcategory(subcategory);
  };
  
  return (
    <div className="w-full absolute left-36 md:w-[75%] mx-auto bg-white shadow-lg transition-all shadow-slate-400 mt-1 rounded-xl p-4 max-h-[390px] overflow-auto">
      <div className="grid grid-cols-3 gap-4">
        {/* Category Column */}
        <div>
          {CatogeriesData.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={`p-2  rounded-lg flex font-raleway justify-between items-center ${
                activeCategory === category ? 'text-[#208077]' : ''
              }`}
            >
              {category.label} <span className="mx-2">{<Image src={ScrollButtonR} className='mr-2' alt=''/>}</span>
            </div>
          ))}
        </div>

        {/* Subcategory Column */}
        <div>
         
          {activeCategory &&
            activeCategory.subcatogery.map((subcategory, index) => (
              <div
                key={index}
                onClick={() => handleSubcategoryClick(subcategory)}
                className={`p-2 rounded-lg font-raleway flex justify-between items-center ${
                  activeSubcategory === subcategory ? 'text-[#208077]' : ''
                }`}
              >
                {subcategory.label} <span className="mx-2">{<Image src={ScrollButtonR} alt=''/>}</span>
              </div>
            ))}
        </div>

        {/* Subsubcategory Column */}
        <div>
          {activeSubcategory &&
            activeSubcategory.subsubcatoery.map((subsubcategory, index) => (
              <div key={index}  className="p-2 font-raleway pt-4 rounded-lg hover:text-[#208077]">
               <Link href={`/catogeries/${subsubcategory.label.split(' ').join('')}`}> {subsubcategory.label} </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
};

export default CategoriesDropdown;
