import React from 'react'

const SectionTwo = () => {
  return (
    <div className='w-full ml-1 md:w-[85%] md:mx-auto bg-[#F3F3F3] mt-20 rounded-lg font-raleway font-semibold'>
        <div className='py-8 flex flex-wrap justify-center'>
        
            <div className='w-44 h-24 bg-white flex flex-col  items-center pt-2 m-2 rounded-lg'>
                courses
                <span className='text-4xl font-normal'>100</span>
            </div>
            <div className='w-44 h-24 bg-white flex flex-col items-center pt-2 m-2 rounded-lg'>
                Enrolled
                <span className='text-4xl font-normal'>5.5k</span>
            </div>
            <div className='w-44 h-24 bg-white flex flex-col items-center pt-2 m-2 rounded-lg'>
                Instructors
                <span className='text-4xl font-normal'>1.5k</span>
            </div>
            <div className='w-44 h-24 bg-white flex flex-col items-center pt-2 m-2 rounded-lg'>
                Instructors
                <span className='text-4xl font-normal'>5.5k</span>
            </div>

        </div>

    </div>
  )
}

export default SectionTwo