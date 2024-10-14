import Image from "next/image";
import GroupService from "../images/GroupServices.svg";
import ServiceOne from "../images/Service_one.svg";
const Services = () => {
  return (
    <div id="services" className="w-full max-w-6xl mt-8 md:px-16 md:mt-32">
      <div id="title" className="flex flex-col justify-center items-center">
        <div className="font-raleway text-3xl md:text-5xl mb-3">Our Services</div>
        <Image src={GroupService} alt="group" className="md:max-w-md lg:max-w-xl" />
      </div>

      <div className=" mt-8 md:mt-12 flex flex-col md:flex-row-reverse md:justify-between md:items-center justify-center items-center">
        <Image src={ServiceOne} alt="group" className="md:scale-125" />
        <div className="">
          <div className="font-semibold font-raleway text-center my-8 md:text-start md:px-5  md:mb-4 md:text-4xl text-2xl">Private classes</div>
          <div className="flex justify-center md:justify-start md:mx-5 md:mb-4 md:mt-4 mt-8">
            <span className="hidden bg-[#208077] text-white px-3 py-2 rounded-lg">
            View all Private Classes
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

        <div className="md:hidden flex justify-center mt-8">
            <span className="bg-[#208077] text-white px-3 py-2 rounded-lg">
            View all Private Classes
            </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
