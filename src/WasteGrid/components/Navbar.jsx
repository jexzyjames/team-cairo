import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className='flex h-20  px-[4%] py-2  fixedNav shadow-md   items-center justify-between w-full '>
     <div>
        <a href='#'>

        <img className='w-20 cursor-pointer ' src={logo} alt="logo" />
        </a>
        
     </div>
     <ul className='md:flex gap-4 text-xl hidden border rounded-2xl px-3 border-green-200 text-gray-700'>
        <li><a href="#about">About</a></li>
        <li><a className='text-gray-300 cursor-pointer' href="#works">How It Works</a></li>
        <li><a className='text-gray-300 cursor-pointer' href="#features">Features</a></li>
        <li><a className='text-gray-300 cursor-pointer' href="#">Rewards</a></li>
        <li><a className='text-gray-300 cursor-pointer' href="#">FAQ</a></li>
     </ul>
     <div className='rounded-3xl  hover:bg-green-500 hover:font-semibold cursor-pointer py-2 px-4 text-sm text-white bg-green-400'>
        <button className='cursor-pointer' >Get The App</button>
     </div>
    </div>
  )
}

export default Navbar