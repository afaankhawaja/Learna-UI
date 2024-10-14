// import {Logo} from '../assets/images/Group-444.svg'
import Image from 'next/image';
import GroupLogo from '../images/Group-444.svg'
import Login from '../images/Login.svg'
import Menu from '../images/Menu.svg'
import downArrow from '../images/downArrow.svg'
import World from '../images/World.svg'
import LearnaWeb from '../images/LearnaWeb.svg'

const Navbar = () => {
  return (
    <>
    <div className="md:hidden w-90 bg-[#FFFFFF] h-11 mt-8 flex justify-between items-center px-4">
       
       <div className='h-11'>
        <Image 
        src={GroupLogo}
        alt="icon"
        className=''
      />
      </div>

<div className='md:hidden w-[141px] h-[40px] gap-[20px] flex items-center'>
        <button id='login'>
           <Image
           src={Login} 
           alt='icon'
           className=''
           />
            </button>
        <button id='menu' className=''>
            <Image 
            src={Menu}
            alt='menu'
            className=''
            />
        </button>

      </div>
      </div>
      
      

      {/* web view */}
      <div className="hidden w-90 bg-[#FFFFFF] h-11 mt-4 md:flex justify-between items-center px-4">
      <div className='flex items-center'>
       <div className=''>
        <Image 
        src={LearnaWeb}
        alt="icon"
        className=''
      />
      </div>
      <div className="hidden md:flex mt-1 font-medium text-sm font-raleway mx-4">
  <span className="mr-2">Categories</span>
  <div className="">
    <Image
      src={downArrow}
      alt="downArrow"
      className="" // 
    />
  </div>
</div>
</div>


      <div className=' md:flex justify-evenly gap-4'>
        <Image
        src={World}
        alt=''
        />
        <div className='bg-slate-300 border-2 m-1'>
        </div>

        <div id="Nav-Buttons" className='p-2 space-x-1'>
          <span className='border-[#018076] border-2 rounded-lg text-center px-2 py-2.5'>
          Start Learning
          </span>
          <span className='border-[#018076] border-2 rounded-lg text-center px-2 py-2.5'>
          Teach on Learna
          </span>
        </div>
        <div className='bg-slate-300 border-2 m-1'>
        </div>

        <button id='login'>
           <Image
           src={Login} 
           alt='icon'
           className=''
           />
           </button>
      </div>
      {/* Mobile view */}
      
       
    </div>
    </>
  )
}

export default Navbar