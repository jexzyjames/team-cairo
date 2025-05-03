import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className='flex px-[4%] py-1 items-center justify-between w-full '>
     <div>
        <img className='w-20' src={logo} alt="logo" />
     </div>
     <ul className='md:flex gap-4 hidden border rounded-2xl px-3 border-green-200 text-gray-700'>
        <li><a href="#about">About</a></li>
        <li><a className='text-gray-300 cursor-pointer' href="#">How It Works</a></li>
        <li><a className='text-gray-300 cursor-pointer' href="#features">Features</a></li>
        <li><a className='text-gray-300 cursor-pointer' href="#">Rewards</a></li>
        <li><a className='text-gray-300 cursor-pointer' href="#">FAQ</a></li>
     </ul>
     <div className='rounded-3xl py-2 px-4 text-sm text-white bg-green-400'>
        <button>Get The App</button>
     </div>
    </div>
  )
}

export default Navbar
