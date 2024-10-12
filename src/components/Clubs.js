import Image from "next/image"
import Club1 from '../images/Club1.svg'
const Clubs = () => {
  return (
    <div id='clubs' className='w-full'>
        <div className='border-t-2 w-auto border-mercury my-8'>
        </div>

        <div className="flex justify-center mb-6">
        <Image
        src={Club1}
        alt='club'
        />
        </div>

        <div className="text-center mb-8 font-bold text-2xl ">
        Clubs
        </div>

        <div className="px-5">
            <div className="font-medium">Feature</div>
            <p>
              Lorem ipsum dolor sit amet consectetur. In eu blandit sed nulla in
              viverra.
            </p>
          </div>

          <div className="px-5 py-3">
            <div className="font-medium">Feature</div>
            <p>
              Lorem ipsum dolor sit amet consectetur. In eu blandit sed nulla in
              viverra.
            </p>
          </div>

          <div className="px-5 py-3">
            <div className="font-medium">Feature</div>
            <p>
              Lorem ipsum dolor sit amet consectetur. In eu blandit sed nulla in
              viverra.
            </p>
          </div>


          <div className="flex justify-center gap-2 mt-8">
            <span className="bg-[#208077] text-white px-3 py-2 rounded-lg">
            View all Clubs
            </span>
            <span className="bg-white text-black border-[#208077] border-2 px-3 py-2 rounded-lg">
            Explore Clubs
            </span>
        </div>


    </div>
  )
}

export default Clubs