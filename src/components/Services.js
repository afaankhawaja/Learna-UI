import Image from "next/image";
import GroupService from "../images/GroupServices.svg";
import ServiceOne from "../images/Service_one.svg";
const Services = () => {
  return (
    <div id="services" className="w-full mt-8">
      <div id="title" className="flex flex-col justify-center items-center">
        <div className="font-raleway text-3xl mb-3">Our Services</div>
        <Image src={GroupService} alt="group" />
      </div>

      <div className=" mt-8 flex flex-col justify-center items-center">
        <Image src={ServiceOne} alt="group" />
        <div className="">
          <div className="font-semibold font-raleway text-center my-8 text-2xl">Private classes</div>
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

        <div className="flex justify-center mt-8">
            <span className="bg-[#208077] text-white px-3 py-2 rounded-lg">
            View all Private Classes
            </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
