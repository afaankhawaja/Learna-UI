
import React from "react";
import Image from "next/image";
import PlayStore from '../images/PlayStore.svg'
import AppStore from '../images/AppStore.svg'
import Man from '../images/Man.svg'
import Woman from '../images/Woman.svg'

const BottomMobile = () => {
  return (
    <div className="md:hidden">
      <div className="px-4 pt-8 flex flex-col items-center">
        <div className="text-3xl font-normal">Start Your Journey</div>
        <p className="mt-4 text-center">
          Lorem ipsum dolor sit amet consectetur. In eu blandit sed nulla in
          viverra. Ornare tincidunt vulputate
        </p>
        <span className="mt-7 text-center bg-[#018076] text-white rounded-lg px-5 py-3">
        Get Started
        </span>
      </div>


      <div className="mt-14">
    <div>
        <div className="text-2xl font-normal text-center">
        Download our App!
        </div>
        <p className="mt-2 mb-6 text-center">
        Lorem ipsum dolor sit amet consectetur. 
        </p>
        <div className="flex justify-evenly">
        <Image
        src={PlayStore}
        alt=""
        />
        <Image
        src={AppStore}
        alt=""
        />
        </div>
    </div>

    <div className="mt-16 pb-16 flex justify-evenly">

    <Image
        src={Man}
        alt=""
        />
        <Image
        src={Woman}
        alt=""
        />
    </div>
      </div>
      </div>
  )
}

export default BottomMobile