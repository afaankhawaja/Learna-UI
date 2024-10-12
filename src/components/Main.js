import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import Catogeries from './Catogeries'
import Services from './Services'
import Clubs from './Clubs'
import Benefits from './Benefits'
import Testimonials from './Testimonials'
import Bottom from './Bottom'
import Footer from './Footer'



const Main = () => {
  return (
    <div id='main' className='w-[393px] h-[7322.52px] mt-16 py-[8px] gap-20'>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <Catogeries/>
      <Services/>
      <Clubs/>
      <Benefits/>
      <Testimonials/>
      <Bottom/>
      <Footer/>

    </div>
  )
}

export default Main