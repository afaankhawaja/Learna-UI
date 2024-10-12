import Image from "next/image"
import ScrollButtonR from '../images/ScrollButtonR.svg'
import ScrollButtonL from '../images/ScrollButtonL.svg'
import Testimonial1 from '../images/Testimonial1.svg'
const Testimonials = () => {
  return (
    <div className='mt-20'>

        <div className='flex items-center justify-between px-7'>
            <Image
            src={ScrollButtonL}
            alt=""
            />
            <div className="font-normal text-3xl">
                Testimonials
            </div>

            <Image
            src={ScrollButtonR}
            alt=""
            />

        </div>

        <div className="w-90 mx-4 my-2 p-5 mt-5 rounded-lg bg-[#FFFFFF] shadow-[0_2px_20px_0_rgba(0,0,0,0.15)] px-4">
        <Image
        src={Testimonial1}
        alt=""
        />
        </div>

    
    </div>
  )
}

export default Testimonials