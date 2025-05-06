import React from 'react'
import game from '../assets/bro.png'
import Ai from '../assets/amico.png'
import barcode from '../assets/barcode.png'
import wallet from '../assets/rafiki.png'
import business from '../assets/business.png'
const Features = () => { 
  return (
    <div id='features' className='mt-10 grid justify-center mx-auto items-center'>
        <h1  className='text-center font-bold text-2xl mb-7'>Features</h1 >
        <div className='grid grid-cols-2 md:grid-cols-3 gap-9  px-[10%] w-full justify-center items-center'>
            <div className='text-center flex justify-center items-center flex-col'>
                <img  className='flex justify-center items-center' src={Ai} alt="" />
                <h1 className='font-bold text-lg ' >AI Waste Scanner</h1 >
                <p className='text-center mt-2'>Instantly recognizes waste materials using AI image recognition to guide proper sorting.</p>
            </div>

            <div  className='text-center flex justify-center items-center flex-col'>
                <img src={barcode} alt="" />
                <h1 className='font-bold text-lg'  >Barcode Identification</h1 >
                <p className='text-center mt-2'>Scan product barcodes to know how to dispose or recycle them locally.</p>
            </div>

            <div  className='text-center flex justify-center items-center flex-col'>
                <img src={game} alt="" />
                <h1 className='font-bold text-lg' >Gamified Lessons & Eco Quizzes</h1 >
                <p className='text-center mt-2'>Learn about recycling and sustainability through short, interactive, and rewarding lessons.</p>
            </div>

            <div  className='text-center flex justify-center items-center flex-col'>
                <img src={business} alt="" />
                <h1 className='font-bold text-lg' >AI Waste Scanner</h1 >
                <p className='text-center mt-2'>Compete in daily or weekly challenges with friends and the community — climb the ranks and win prizes.</p>
            </div>

            <div  className='text-center flex justify-center items-center flex-col'>
                <img src={wallet} alt="" />
                <h1 className='font-bold text-lg' >Reward Wallet</h1 >
                <p className='text-center mt-2'>Track your coins and redeem them for airtime, data, vouchers, or donate to green causes.</p>
   
            </div>

            
            <div  className='text-center flex justify-center items-center flex-col'>
                <img src={business} alt="" />
                <h1 className='font-bold text-lg' >Reward Wallet</h1 >
                <p className='text-center mt-2'>Get region-specific tips and info about disposal based on your location.</p>
   
            </div>
        </div>

    </div>
  )
}

export default Features