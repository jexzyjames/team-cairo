import React from 'react'
import urban from '../assets/urban.png'
import students from '../assets/student.png'
import youngAdults from '../assets/youngAdults.png'
import property from '../assets/property.png'
import clockwise from '../assets/clockwise.png'
import anticlockwise from '../assets/anticlockwise.png'

const WhatIsBuiltFor = () => {
  return (
    <div>
          <div className='bg-green-300 mt-[-37px] py-2 w-full  left-0 right-0'>

<div className='m-auto px-[6%]  '> 

<h1 className='text-xl mt-4 px-[1%] font-bold text-left'>WasteGrid built for</h1>
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