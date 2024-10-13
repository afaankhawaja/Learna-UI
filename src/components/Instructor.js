import Image from 'next/image'
import Vector from '../images/Vector.svg'
import StartLearning from '../images/StartLearning.svg'
import Instructor1 from '../images/Instructor1.svg'
const Instructor = () => {
  return (
    <div>
        <div className="my-8">
        <div className="w-90 ml-4 rounded-lg bg-[#FFFFFF] shadow-[0_2px_20px_0_rgba(0,0,0,0.15)] px-4">
          <div className="font-normal pt-4 mb-4 text-5xl">Instructor</div>
         
          <div className="flex items-baseline gap-2 py-2">
            <Image src={Vector} alt="vector" className="" />
            <p className="font-bold font-raleway ">
            Motivated to increase their
            social & teaching skills            </p>
          </div>

          <div className="flex items-baseline gap-2 py-2">
            <Image src={Vector} alt="vector" className="" />
            <p className="font-bold font-raleway ">
            Additional income            </p>
          </div>
        <div className="mt-5">
            <Image
            src={StartLearning}
            alt=""
            />
        </div>

        <div className="pt-8 pb-4 flex items-center px-8">
            <Image
            src={Instructor1}
            alt=""

            />
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Instructor