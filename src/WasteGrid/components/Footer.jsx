import React from 'react'
import logo from '../assets/logo.png'
import facebookIcon from '../assets/fblogo.png'
import pinteerestIcon from '../assets/pinterest.png'
import twitterIcon from '../assets/twitter.png'
import whatsappIcon from '../assets/whatsapplogo.png'
import send from '../assets/subscribeImg.png'
import footerLineImg from '../assets/footerline.png' 
const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div>
        <img className='flex justify-center mt-14  mb-6 items-center mx-auto w-full opacity-35 px-[5%]' src={footerLineImg} alt="" />
        <div className="grid lg:grid-cols-4 grid-cols-2 md:gap-15 gap-10 px-[6%] py-10 ">
            <div className='w-full md:col-span-1 col-span-2'>
                <img className='w-30' src={logo} alt="" />
                <p className='mt-6'>Smart recycling. Real rewards. A cleaner Africa starts with you. <br /> Built for African cities. Powered by purpose.</p>
            </div>
        <div>
            <h1 className='font-bold'>Quick Links</h1>
            <ul className='mt-4 flex flex-col gap-4'>
                <li><a href="#">Download App</a></li>
                <li><a href="#faq">FAQs</a></li>
                <li><a href="#about">About WasteGrid</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#rewards">Rewards</a></li>
            </ul>

        </div>

        <div className='flex md:col-span-1  cursor-pointer flex-col gap-4'>
            <h1 className='font-bold'>Legal</h1>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Cookie Settings</p>
        </div>

        <div className='w-full col-span-2 md:col-span-1  '>
            <h1 className="font-bold">Newsletter</h1>
         <div className='flex mt-4 cursor-pointer border-2 border-gray-300 rounded-lg w-full'>
            <input type="email" placeholder='Newsletter' className= ' px-4 py-2 outline-0 w-full' />
            <button className='bg-amber-800 w-full flex gap-2 items-center cursor-pointer text-white  rounded-r-md  px-3 py-2'> 
                <img className='cursor-pointer' src={send} alt="" />
                <p className='text-sm cursor-pointer'>Subscribe</p>
                </button>
         </div>

         <div className="flex justify-center md:justify-start gap-7 mt-6">    
            <img className='md:w-15 w-10 ' src={pinteerestIcon} alt="" />
            <img className='md:w-15 w-10 ' src={twitterIcon} alt="" />
            <img className='md:w-15 w-10 ' src={facebookIcon} alt="" />
            <img className='md:w-15 w-10 ' src={whatsappIcon} alt="" />
         </div>
        </div>
        </div>
        <div className='flex justify-center items-center mt-1'>
            <p className='text-gray-500 text-center'>Copyright &copy; {year} WasteGrid. All rights reserved. | designed for a greener Africa</p>

            </div>

    </div>
  )
}

export default Footer