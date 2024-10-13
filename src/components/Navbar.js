// import {Logo} from '../assets/images/Group-444.svg'
import Image from 'next/image';
import GroupLogo from '../images/Group-444.svg'
import Login from '../images/Login.svg'
import Menu from '../images/Menu.svg'

const Navbar = () => {
  return (
    <div className="w-90 bg-[#FFFFFF] h-10 mt-8 flex justify-between items-center px-4">
       <div>
        <Image 
        src={GroupLogo}
        alt="icon"
        className='w-[90px] h-[28px]'
      />
      </div>
      <div className='w-[141px] h-[40px] gap-[20px] flex items-center'>
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
  )
}

export default Navbar