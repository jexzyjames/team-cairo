import React,{useState} from 'react'
import logo from '../assets/logo.png'
import menuIcon from '../assets/menuicon.png'
import closeIcon from '../assets/closeicon.png'
import rewardsIcon from '../assets/rewards.png'
import faqIcon from '../assets/faq.png'
import featureIcon from '../assets/Feature.png'
import aboutIcon from '../assets/about.png'
import workIcon from '../assets/works.png'
const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex h-20  px-[4%] py-2  fixedNav shadow-md   items-center justify-between w-full '>
     <div>
        <a href='#'>
    
        <img className='w-20 cursor-pointer ' src={logo} alt="logo" />
        </a>
        
     </div>
     <ul className='md:flex gap-4 text-xl hidden border rounded-2xl px-3 border-green-200 text-gray-700'>
        <li><a className='text-gray-600' href="#about">About</a></li>
        <li><a className='text-gray-600 cursor-pointer' href="#works">How It Works</a></li>
        <li><a className='text-gray-600 cursor-pointer' href="#features">Features</a></li>
        <li><a className='text-gray-600 cursor-pointer' href="#rewards">Rewards</a></li>
        <li><a className='text-gray-600 cursor-pointer' href="#faq">FAQ</a></li>
     </ul>

    {isOpen && <div className='md:hidden fades text-white absolute right-0 w-full  top-20 z- left-0 bg-[#444444] block'>
      <ul className='mt-20 p-7 flex flex-col fade relative  gap-14 text-white '>
      <img onClick={()=> setIsOpen((prev)=>!prev)} className=' cursor-pointer absolute right-8  top-[-20px] flex justify-end items-end float-right' src={closeIcon} alt="" />
        <li onClick={()=>setIsOpen(false)} className='flex items-center gap-5'><span><img src={aboutIcon} alt="" /></span><a href="#about">About</a></li>
        <li onClick={()=>setIsOpen(false)} className='text-white flex items-center gap-5' ><span><img src={workIcon} alt="" /></span><a className='text-white cursor-pointer' href="#works">How It Works</a></li>
        <li onClick={()=>setIsOpen(false)} className='text-white flex items-center gap-5' ><span><img src={featureIcon} alt="" /></span><a className='text-white cursor-pointer' href="#features">Features</a></li>
        <li onClick={()=>setIsOpen(false)} className='text-white flex items-center gap-5' ><span><img src={rewardsIcon} alt="" /></span><a className='text-white cursor-pointer' href="#rewards">Rewards</a></li>
        <li onClick={()=>setIsOpen(false)} className='text-white flex items-center gap-5' ><span><img src={faqIcon} alt="" /></span><a className='text-white cursor-pointer' href="#faq">FAQ</a></li>
     </ul>

     </div>}

     <div className='rounded-3xl hidden md:block  hover:bg-green-500 hover:font-semibold cursor-pointer py-2 px-4 text-sm text-white bg-green-400'>
        <button className='cursor-pointer' >Get The App</button>
     </div>
     <div className='md:hidden cursor-pointer flex '>
      <img onClick={()=> setIsOpen((prev)=>!prev)} src={menuIcon} alt="" />
     </div>
    </div>
  )
}

export default Navbar