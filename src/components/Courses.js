import Image from "next/image"
import Cources1 from '../images/Cources1.svg'
const Cources = () => {
  return (
    <div id='clubs' className='w-full'>
        <div className='border-t-2 w-auto border-mercury my-8'>
        </div>

        <div className="flex justify-center mb-6">
        <Image
        src={Cources1}
        alt='club'
        />
        </div>

        <div className="text-center mb-8 text-2xl font-semibold font-raleway ">
        Cources
        </div>

        <div className="px-5">
            <div className="font-semibold font-raleway">Feature</div>
            <p className="font-medium font-raleway">
              Lorem ipsum dolor sit amet consectetur. In eu blandit sed nulla in
              viverra.
            </p>
          </div>

          <div className="px-5 py-3">
            <div className="font-semibold font-raleway">Feature</div>
            <p className="font-medium font-raleway">
              Lorem ipsum dolor sit amet consectetur. In eu blandit sed nulla in
              viverra.
            </p>
          </div>

          <div className="px-5 py-3">
            <div className="font-semibold font-raleway">Feature</div>
            <p  className="font-medium font-raleway">
              Lorem ipsum dolor sit amet consectetur. In eu blandit sed nulla in
              viverra.
            </p>
          </div>


          <div className="flex justify-center gap-2 mt-8">
            <span className="bg-[#208077] text-white px-3 py-2 rounded-lg">
            View all Cources
            </span>
        </div>


    </div>
  )
}

export default Cources