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
import Cources from './Courses'


const Main = () => {
  return (
    <div id='main' className='w-full mt-16 py-[8px]'>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <Catogeries/>
      <Services/>
      <Cources/>
      <Clubs/>
      <Benefits/>
      <Testimonials/>
      <Bottom/>
      <Footer/>

    </div>
  )
}

export default Main