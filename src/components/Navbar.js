"use client";
import { useState } from "react";
import Image from "next/image";
import GroupLogo from "../images/Group-444.svg";
import Login from "../images/Login.svg";
import Menu from "../images/Menu.svg";
import downArrow from "../images/downArrow.svg";
import World from "../images/World.svg";
import LearnaWeb from "../images/LearnaWeb.svg";
import CategoriesDropdown from "./CategoriesDropdown";
import MobileMenu from "./MobileMenu";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleCategories = () => {
    if (isCategoriesVisible) {
      setTimeout(() => setIsCategoriesVisible(false), 200);
    } else {
      setIsCategoriesVisible(true);
    }
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div>
      {/* Mobile View */}
      <div className="md:hidden  w-90 bg-[#FFFFFF] h-11 mt-8 flex justify-between items-center px-4">
        <div className="h-11">
          <Image src={GroupLogo} alt="icon" className="" />
        </div>
        <div className="md:hidden w-[141px] h-[40px] gap-[20px] flex items-center">
          <button id="login">
            <Image src={Login} alt="icon" className="" />
          </button>
          <button onClick={toggleMenu} id="menu" className="">
            {isMenuVisible ? (
              <ImCross style={{ scale: "1.5" }} />
            ) : (
              <Image src={Menu} alt="menu" className="" />
            )}
            {/* <Image src={Menu} alt="menu" className="" /> */}
          </button>
        </div>
      </div>
      <div
        id="menu-dropdown"
        className={`transition-transform delay-75 duration-500 ease-in ${
          isMenuVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {isMenuVisible && <MobileMenu />}
      </div>
      {/* Web View */}
      <div className="hidden bg-[#FFFFFF] h-11 mt-4 md:flex justify-between items-center px-5">
        <div className="flex items-center">
          <div>
            <Image src={LearnaWeb} alt="icon" className="" />
          </div>
          <div
            className="hidden md:flex mt-1 font-medium text-sm font-raleway mx-4 cursor-pointer"
            onClick={toggleCategories}
            onMouseEnter={toggleCategories}
          >
            <span className="mr-2">Categories</span>
            <div>
              {isCategoriesVisible ? (
                <Image
                  src={downArrow}
                  alt="downArrow"
                  className="rotate-180 scale-105"
                />
              ) : (
                <Image src={downArrow} alt="downArrow" className="" />
              )}
            </div>
          </div>
        </div>

        <div className="md:flex justify-evenly gap-4">
          <Image src={World} alt="" />
          <div className="bg-slate-300 border-l-2 m-1"></div>

          <div id="Nav-Buttons" className="p-2 space-x-1">
            <span className="border-[#018076] border-2 rounded-lg text-center px-2 py-2.5">
              Start Learning
            </span>
            <span className="border-[#018076] border-2 rounded-lg text-center px-2 py-2.5">
              Teach on Learna
            </span>
          </div>
          <div className="bg-slate-300 border-l-2 m-1"></div>

          <button id="login">
            <Image src={Login} alt="icon" className="" />
          </button>
        </div>
      </div>

      {/* Categories Dropdown */}
      <div
        onMouseLeave={toggleCategories}
        id="dropdown"
        className={`transition-opacity duration-300 linear ${
          isCategoriesVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {isCategoriesVisible && <CategoriesDropdown />}
      </div>
    </div>
  );
};

export default Navbar;
