import React, { useState, useRef, useEffect } from "react";
import aboutImg from "../assets/aboutImg.png";
import appImg from "../assets/appImg.png";
import dollarImg from "../assets/dollar.png";
import WhatYouCanDo from "./WhatYoucanDo";
const About = () => {
  const [currentIcon, setCurrentIcon] = useState(0);
  const arrow = useRef(null);
  const icons = [
    {
      id: 0,
      img: dollarImg,
      title: "Scan Waste",
      text: "Use Ai or barcode to identify and sort properly",
    },

    {
      id: 1,
      img: dollarImg,
      title: "Learn",
      text: "Take short lessons and quizzes on recycling",
    },

    {
      id: 2,
      img: dollarImg,
      title: "Earn",
      text: "Use Ai or barcode to identify and sort  properly",
    },

    {
      id: 3,
      img: dollarImg,
      title: "Redeem",
      text: "Exchange points for airitme, vouchers or donate",
    },
  ];
  useEffect(() => {}, [arrow, currentIcon]);
  return (
    <div id='about' className="py-10 m-auto text-center ">
      <h1 className="font-bold text-2xl">About Us</h1>
      <p className="font-semibold">Built for Africa, Powered by Purpose</p>

      <div className="flex flex-col  mt-9  relative  mx-[3%]   ">
       
       <div className="flex md:bg-green-50 xs:flex-col-reverse flex-col-reverse mx-[1%] sm:flex-col md:flex-row-reverse sm:gap-3  md:gap-0 w-full px-[1px]  justify-between rounded-2xl  ">
       
        <div className="flex bg-white px-1 rounded-2xl  w-full md:max-w-[1150px]  flex-col"> 
          <img src={aboutImg} className="h-full   " alt="" />
        </div>

        <div className="bg-white pb-4  flex mx-1 px-6 py-5  flex-col justify-center   relative text-left   gap-5   ">
          <h2 className="font-bold sm:text-xl text-lg md:text-2xl lg:text-4xl">
            WasteGrid is tackling one of Africa's biggest challenges - waste.
          </h2>
          <p className="sm:text-sm md:text-md lg:text-3xl w-[100%]">
            Through smart tech and gamified learning, we help people like you
            scan, sort and recycle smarter - and get rewarded for it. <br />{" "}
            It's eco-education made simple,social and impactful.{" "}
          </p>
        </div>
       </div>
      {/* </div> */}

        <h2 className="text-left mx-[3%] mt-9 text-lg md:text-2xl font-bold mb-5">
          What you can do with WasteGrid
        </h2>

    
        <WhatYouCanDo/>

      </div>
    </div>
  );
};

export default About;
