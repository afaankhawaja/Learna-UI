'use client'
import { useState } from 'react';
import CatogeriesData from './CatogeriesData.json';
import ScrollButtonR from '../images/ScrollButtonR.svg';
import Image from 'next/image';

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
    <div className="w-full md:w-[85%] mx-auto bg-white shadow-lg mt-2 rounded-xl p-4 max-h-[380px] overflow-auto">
      <div className="grid grid-cols-3 gap-4">
        {/* Category Column */}
        <div>
          {CatogeriesData.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={`p-2  rounded-lg flex justify-between items-center ${
                activeCategory === category ? 'text-[#208077]' : ''
              }`}
            >
              {category.label} <span className="mx-2">{<Image src={ScrollButtonR} alt=''/>}</span>
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
                className={`p-2 rounded-lg flex justify-between items-center ${
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
              <div key={index}  className="p-2 rounded-lg hover:text-[#208077]">
                {subsubcategory.label}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
};

export default CategoriesDropdown;
