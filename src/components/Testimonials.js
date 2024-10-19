'use client'
import React, { useRef } from 'react';
import Image from "next/image";
import ScrollButtonR from '../images/ScrollButtonR.svg';
import ScrollButtonL from '../images/ScrollButtonL.svg';
import Testimonial1 from '../images/Testimonial1.svg';

const Testimonials = () => {
  const scrollContainer = useRef(null);

  // Scroll functionality
  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  return (
    <div className='mt-20 w-[85%] mx-auto relative'>
      {/* Heading and Buttons for mobile */}
      <div className='flex items-center justify-between px-7 md:px-0'>
        <Image src={ScrollButtonL} alt="Scroll Left" onClick={scrollLeft} className="md:hidden mb-8 cursor-pointer" />
        <div className="font-normal text-3xl mb-8 mx-auto md:text-5xl">Testimonials</div>
        <Image src={ScrollButtonR} alt="Scroll Right" onClick={scrollRight} className="md:hidden mb-8 cursor-pointer" />
      </div>

      {/* Image Slider Container */}
      <div className="md:flex md:justify-center md:relative">
        {/* Scrollable Container */}
        <div
          ref={scrollContainer}
          className="flex overflow-x-scroll mx-auto space-x-4 scrollbar-hide md:overflow-hidden"
        >
          {/* Image Cards */}
          <div className="min-w-[90%] md:min-w-[45%] ml-4 mr-2 my-2 p-5 rounded-lg bg-[#FFFFFF] shadow-[0_2px_20px_0_rgba(0,0,0,0.15)]">
            <Image src={Testimonial1} alt="Testimonial 1" className="w-full h-auto" />
          </div>
          <div className="min-w-[90%] md:min-w-[45%] ml-4 mr-2 my-2 p-5 rounded-lg bg-[#FFFFFF] shadow-[0_2px_20px_0_rgba(0,0,0,0.15)]">
            <Image src={Testimonial1} alt="Testimonial 2" className="w-full h-auto" />
          </div>
          <div className="min-w-[90%] md:min-w-[45%] ml-4 mr-2 my-2 p-5 rounded-lg bg-[#FFFFFF] shadow-[0_2px_20px_0_rgba(0,0,0,0.15)]">
            <Image src={Testimonial1} alt="Testimonial 3" className="w-full h-auto" />
          </div>
        </div>

        {/* Scroll Buttons for Desktop */}
        <Image
          src={ScrollButtonL}
          alt="Scroll Left"
          onClick={scrollLeft}
          className="hidden hover:pl-1 hover:opacity-75  hover:scale-125 hover:bg-zinc-200 h-[76%] rounded md:block absolute left-1 ml-1 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
        <Image
          src={ScrollButtonR}
          alt="Scroll Right"
          onClick={scrollRight}
          className="hidden hover:pr-1 hover:opacity-75 hover:scale-125 hover:bg-zinc-200 h-[76%] rounded md:block absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Testimonials;
