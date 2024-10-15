
import Image from "next/image";
import Group2 from "../images/Group2.svg";
import PersonalDevelopment from "../images/PersonalDevelopment.svg";
import BusinessSoftSkill from "../images/BusinessSoftSkills.svg";
import Languages from "../images/Languages.svg";
import Academics from "../images/Academics.svg";
import DesignCreativity from "../images/DesignCreativity.svg";
import Music from "../images/Music.svg";
import HealthFitness from "../images/HealthFitness.svg";
import LifestyleHobbies from "../images/LifeStyleHobbies.svg";
import Development from "../images/Development.svg";
import FinanceAccounting from "../images/FinanceAccounting.svg";

const Catogeries = () => {
  return (
    <div className="w-full md:w-[85%] md:mx-auto mt-20 md:mt-40 ml-2">
      <div id="title" className="flex flex-col justify-center items-center">
        <div className="font-raleway text-3xl md:text-5xl mb-3 ">Categories</div>
        <Image src={Group2} alt="group" className="md:scale-150" />
      </div>

      <div id="catogeries-item" className="mt-8 md:pt-8 flex flex-wrap justify-evenly md:justify-normal gap-2 md:gap-4 pr-2 md:pr-10 md:px-auto md:mx-auto">
        <div className="w-28 md:w-48 text-center">
          <div className="bg-[#F5F5F5] rounded-lg w-28 h-28 md:w-48 md:h-48 flex justify-center items-center">
            <Image
              src={PersonalDevelopment}
              alt=""
              className="flex justify-center items-center"
            />
          </div>
          <p className="font-semibold text-sm mt-2">Personal Development</p>
        </div>

        <div className="w-28 md:w-48 text-center">
          <div className="bg-[#F5F5F5] rounded-lg w-28 h-28 md:w-48 md:h-48 flex justify-center items-center">
            <Image
              src={BusinessSoftSkill}
              alt=""
              className="flex justify-center items-center"
            />
          </div>
          <p className="font-semibold text-sm mt-2">Business & Soft Skills</p>
        </div>

        <div className="w-28 md:w-48 text-center">
          <div className="bg-[#F5F5F5] rounded-lg w-28 h-28 md:w-48 md:h-48 flex justify-center items-center">
            <Image
              src={Languages}
              alt=""
              className="flex justify-center items-center"
            />
          </div>
          <p className="font-semibold text-sm mt-2">Languages</p>
        </div>

        <div className="w-28 md:w-48 text-center">
          <div className="bg-[#F5F5F5] rounded-lg w-28 h-28 md:w-48 md:h-48 flex justify-center items-center">
            <Image
              src={Academics}
              alt=""
              className="flex justify-center items-center"
            />
          </div>
          <p className="font-semibold text-sm mt-2">Academics</p>
        </div>

        <div className="w-28 md:w-48 text-center">
          <div className="bg-[#F5F5F5] rounded-lg w-28 h-28 md:w-48 md:h-48 flex justify-center items-center">
            <Image
              src={DesignCreativity}
              alt=""
              className="flex justify-center items-center"
            />
          </div>
          <p className="font-semibold text-sm mt-2">Design & Creativity</p>
        </div>

        <div className="w-28 md:w-48 text-center">
          <div className="bg-[#F5F5F5] rounded-lg w-28 h-28 md:w-48 md:h-48 flex justify-center items-center">
            <Image
              src={Music}
              alt=""
              className="flex justify-center items-center"
            />
          </div>
          <p className="font-semibold text-sm mt-2">Music</p>
        </div>

        <div className="w-28 md:w-48 text-center">
          <div className="bg-[#F5F5F5] rounded-lg w-28 h-28 md:w-48 md:h-48 flex justify-center items-center">
            <Image
              src={HealthFitness}
              alt=""
              className="flex justify-center items-center"
            />
          </div>
          <p className="font-semibold text-sm mt-2">Health & Fitness</p>
        </div>

        <div className="w-28 md:w-48 text-center">
          <div className="bg-[#F5F5F5] rounded-lg w-28 h-28 md:w-48 md:h-48 flex justify-center items-center">
            <Image
              src={LifestyleHobbies}
              alt=""
              className="flex justify-center items-center"
            />
          </div>
          <p className="font-semibold text-sm mt-2">Lifestyle & Hobbies</p>
        </div>

        <div className="w-28 md:w-48 text-center">
          <div className="bg-[#F5F5F5] rounded-lg w-28 h-28 md:w-48 md:h-48 flex justify-center items-center">
            <Image
              src={Development}
              alt=""
              className="flex justify-center items-center"
            />
          </div>
          <p className="font-semibold text-sm mt-2">Development</p>
        </div>

        <div className="w-28 md:w-48 flex-grow text-center">
          <div className="bg-[#F5F5F5] rounded-lg h-28 md:w-48 md:h-48 flex grow justify-center items-center">
            <Image
              src={FinanceAccounting}
              alt=""
              className="flex justify-center items-center"
            />
          </div>
          <p className="font-semibold text-sm mt-2">Investing Finance & Accounting</p>
        </div>
      </div>
    </div>
  );
};

export default Catogeries;