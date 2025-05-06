import React from 'react'
import frame from '../assets/Frame 6.png'
import heroImg from '../assets/hero-img.png'
import scanImg from '../assets/scan.png'
import earnImg from '../assets/earn.png'
import leftLine from '../assets/Line 1.png'
import rightLine from '../assets/Line 2.png'
import { BiLogoApple, BiLogoPlayStore } from 'react-icons/bi'
const Hero = () => {
  return (
    <div className='text-center mb-0 relative  py-5 bg-green-200 flex justify-center flex-col items-center'>
    <div>
        <img className=' w-50 md:w-90 mb-2' src={frame} alt="" />
    </div>
    <div className='w-full mb-0 relative  max-w-[700px]'>

    <h1 className='md:text-6xl text-3xl text-amber-800 font-bold text'> WasteGrid, <span className='text-black'>Where Trash  <br /> Becomes </span><span className='text-950'>Power.</span></h1>
    <p>Empowering everyday Africans Using AI and gamified learning to transform how Africa recycles - starting with you. </p>

    <div className='flex mt-4 justify-center gap-10 items-center' >
        <div className='flex justify-center items-center rounded-md bg-black text-white px-2 py-1'>
            <BiLogoPlayStore size={35}/>
            <div className='flex flex-col items-start'>
                <p className='text-sm'>Get it on</p>
                <p className='font-bold '>Google Play</p>
            </div>
        </div>

        <div className='flex justify-center items-center rounded-md bg-black text-white px-2 py-1'>
            <BiLogoApple size={35}/>
            <div className='flex flex-col items-start'>
                <p className='text-sm'>Download on</p>
                <p className='font-bold '>App Store</p>
            </div>
        </div>
    </div>
     <div className="md:absolute scanImg md:block hidden left-[-290px] bottom-70 m-auto z-22">
        <img className=' w-65 ' src={scanImg} alt="" />
     </div>
     <div className="md:absolute leftLine md:block hidden md:left-[-60px] bottom-5 m-auto z-22">
        <img className=' w-35 ' src={leftLine} alt="" />
     </div>
     <div className="md:absolute earnImg md:block hidden right-[-250px]  bottom-5  m-auto z-22">
        <img className=' w-65 ' src={earnImg} alt="" />
     </div>
     <div className="md:absolute rightLine md:block hidden right-[-125px] bottom-10 m-auto z-22">
        <img className=' w-45 ' src={rightLine} alt="" />
     </div>
    <img className='mt-10 m-auto w-50  md:w-150' src={heroImg} alt="" />
    </div>
    </div>
  )
}

export default Hero