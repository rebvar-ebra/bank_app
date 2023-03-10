import React,{useState} from 'react'
import{close,logoR,menu} from '../assets'
import {navLinks} from '../constants'

const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center 
    navbar'>
      {/* <div className='flex justify-start items-center
      text-lg font-semibold tracking-normal uppercase cursor-pointer text-white'>

      Revolut<b className=' text-xl screens-xl text-white'>.</b>
      </div> */}
      <img src={logoR} alt="Revoult" className='w-[124px] h-[32px]' />
      <ul className='list-none sm:flex
      hidden justify-end items-center flex-1'>
        {navLinks.map((nav,index)=>(
          <li key={nav.id} className={`font-poppins font-normal
          cursor-pointer text-[16px] ${index === navLinks.length-1?"mr-0":"mr-10"} text-white`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>

          </li>
        ))}

      </ul>
      <div className='sm:hidden flex flex-1 
      justify-end items-center'>
        <img src={toggle?close:menu} alt="menu"
        className='w-[28px] h-[28px] object-contain'
        onClick={()=>setToggle((prev)=>!prev)} />

        <div className={`${toggle ?'flex':'hidden'} 
        p-6 bg-black-gradient absolute  
        right-0 top-20  mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

<ul className='list-none flex flex-col
       justify-end items-center flex-1'>
        {navLinks.map((nav,index)=>(
          <li key={nav.id} className={`font-poppins font-normal
          cursor-pointer text-[16px] ${index === navLinks.length-1?"mb-0":"mb-4"} text-white`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>

          </li>
        ))}

      </ul>

        </div>

      </div>

    </nav>
  )
}

export default Navbar