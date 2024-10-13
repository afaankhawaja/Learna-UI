import React from 'react'
import Image from 'next/image'
import Group from '../images/Group.svg'

const SectionThree = () => {
  return (
    <div className='mt-20 mx-4 h-[462px] w-90'>
    
    <div className='flex justify-center font-mono text-3xl font-normal'>
        Meet Learna
    </div>
    <div className='mt-4 text-center w-90'>
     <p className='font-raleway font-semibold text-lg text-[#545F71]'>
     Learna is an advanced interactive online platform that connects instructors
with learners, offering a wide range of solutions to enhance:

     </p>
    </div>

    <div className='mx-2 my-8'>

     <div className='flex justify-center'>
        <div className='w-52 h-16 font-raleway font-semibold rounded-lg border-2 border-slate-400 flex justify-center items-center'>
            Hobbies & Talents
        </div>
        </div> 


        <div id="group" className='mt-4 flex justify-around items-center '>
        <div className='w-28 h-16 font-raleway font-semibold rounded-lg border-2 border-slate-400 flex justify-center items-center'>
            Academics
        </div>
        <Image
        src={Group}
        alt=''
        />
        <div className='w-28 h-16 font-raleway font-semibold rounded-lg border-2 border-slate-400 flex justify-center items-center'>
            Languages
        </div>
        </div>

         <div className='flex justify-center'>
        <div className='w-52 h-16 font-raleway font-semibold rounded-lg border-2 border-slate-400 flex justify-center items-center'>
            Profession and soft skills
        </div>
        </div>  

    </div>
    </div>
  )
}

export default SectionThree