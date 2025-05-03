import React from 'react'

const Navbar = () => {
  return (
    <div className='flex px-[4%] py-1 items-center justify-between w-full '>
     <div>
        <img src="" alt="logo" />
     </div>
     <ul className='md:flex gap-4 hidden border rounded-2xl px-3 border-green-200 text-gray-700'>
        <li>About</li>
        <li>How It Works</li>
        <li>Features</li>
        <li>Rewards</li>
        <li>FAQ</li>
     </ul>
     <div className='rounded-3xl py-2 px-4 text-sm text-white bg-green-400'>
        <button>Get The App</button>
     </div>
    </div>
  )
}

export default Navbar