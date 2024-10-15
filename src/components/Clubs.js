import Image from "next/image"
import Club1 from '../images/Club1.svg'
const Clubs = () => {
  return (

<div id="services" className="w-full md:w-[85%] md:mx-auto max-w-6xl mt-8 md:mt-32">
      

      <div className=" mt-8 md:mt-12 flex flex-col md:flex-row-reverse md:justify-between md:items-center justify-center items-center">
        <Image src={Club1} alt="group" className="scale-125" />
        <div className="">
          <div className="font-semibold font-raleway text-center my-8 md:text-start md:px-5  md:mb-4 md:text-4xl text-2xl">Clubs</div>
          <div className="hidden md:flex justify-center md:justify-start md:mx-5 md:mb-4 md:gap-2 md:mt-4 mt-8">
            <span className="bg-[#208077] text-white px-3 py-2 rounded-lg">
            View all Clubs
            </span>
            <span className="border-[#208077] border-2 px-3 py-2 rounded-lg">
            Explore Clubs
            </span>
        </div>
          <div className="px-5">
            <div className="font-semibold font-raleway">Feature</div>
            <p className="font-raleway font-medium">
              Lorem ipsum dolor sit amet consectetur. In eu blandit sed nulla in
              viverra.
            </p>
          </div>

          <div className="px-5 py-3">
            <div className="font-semibold font-raleway">Feature</div>
            <p className="font-raleway font-medium">
              Lorem ipsum dolor sit amet consectetur. In eu blandit sed nulla in
              viverra.
            </p>
          </div>

          <div className="px-5 py-3">
            <div className="font-semibold font-raleway">Feature</div>
            <p className="font-raleway font-medium">
              Lorem ipsum dolor sit amet consectetur. In eu blandit sed nulla in
              viverra.
            </p>
          </div>

        </div>
        <div className="md:hidden flex justify-center gap-2 mt-8">
             <span className="bg-[#208077] text-white px-3 py-2 rounded-lg">
             View all Clubs
             </span>
             <span className="bg-white text-black border-[#208077] border-2 px-3 py-2 rounded-lg">
             Explore Clubs
             </span>
        </div>
      </div>
    </div>
  );
};

export default Clubs