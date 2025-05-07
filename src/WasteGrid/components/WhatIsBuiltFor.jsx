import React from 'react'
import urban from '../assets/urban.png'
import students from '../assets/student.png'
import youngAdults from '../assets/youngAdults.png'
import property from '../assets/property.png'
import clockwise from '../assets/clockwise.png'
import anticlockwise from '../assets/anticlockwise.png'

const WhatIsBuiltFor = () => {
  return (
    <div className='px-[5%] md:px-0'>
          <div className='bg-green-300   mt-12  md:mt-[-37px] py-2 md:w-full  md:left-0 md:right-0'>

<div className='m-auto px-[6%]  relative '> 

<h1 className='text-xl md:mt-4 md:px-[6%] md:relative absolute left-0 font-semibold  md:top-0  top-[-80px] z-[-40px]  md:font-bold text-left'>WasteGrid Built for</h1>
<div className=" mt-6 mb-3 relative md:justify-between lg:px-[6%] gap-3  grid grid-cols-3  md:gap-2 md:flex md:flex-row  lg:grid-cols-4">
  <div>
    <img src={urban} alt="" />
  </div>
  <div className='flex   items-center justify-center'>
    <img src={clockwise} alt="" />
  </div>
  <div className='relative'>
    <img className=' rounded-b-2xl z-1000' src={students} alt="" />
   
  </div>
  <div className='hidden md:flex   items-center justify-center'>
    <img src={anticlockwise} alt="" />
  </div>
  <div>
    <img src={youngAdults} alt="" />
  </div>
  <div className='flex    items-center justify-center'>
    <img src={clockwise} alt="" />
  </div>
  <div className=''> 
    <img src={property} alt="" />
  </div>
</div>
</div>
</div>
    </div>
  )
}

export default WhatIsBuiltFor