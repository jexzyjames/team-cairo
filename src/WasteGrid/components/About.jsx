import React, { useState, useRef, useEffect } from "react";
import aboutImg from "../assets/aboutImg.png";
import appImg from "../assets/appImg.png";
import dollarImg from "../assets/dollar.png";
import Features from "./Features";
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
       
       <div className="flex bg-green-50 xs:flex-col flex-col mx-[3%] sm:flex-col md:flex-row-reverse sm:gap-3  md:gap-0 w-full px-[1px]  justify-between rounded-2xl  ">
       
        <div className="flex bg-white  w-full max-w-[1150px]  flex-col"> 
          <img src={aboutImg} className="h-full   " alt="" />
        </div>

        <div className="bg-white pb-4  flex mx-1 px-6 py-5  flex-col justify-center   relative text-left   gap-5   ">
          <h2 className="font-bold sm:text-sm md:text-2xl lg:text-4xl">
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

        {/* <div className="flex feature gap-10 xs:flex-col    sm:flex-col md:flex-row flex-col relative lg:mx-[3%] sm:mx-7 sm:overflow-x-hidden  w-full justify-between ">
          <div className="flex sm:w-[99%] w-full max-w-[1050px]   relative justify-center items-center rounded-xl bg-gray-300   py-6  ">
            <img className="m-auto  " src={appImg} alt="" />
          </div>

          <div className="flex flex-col  w-full  px-5">
            <h1 className="sm:text-sm text-left md:text-2xl w-full lg:text-4xl font-bold">
              {" "}
              Get Familiarized with some can do on the WasteGrid app
            </h1>

            <div className="mt-6 flex gap-4">
              <div className="flex flex-col rounded-lg bg-gray-300   w-3">
                <span
                  ref={arrow}
                  className={`rounded-lg h-22 block w-3 fade bg-green-400`}
                ></span>
              </div>

              <div className="flex sm:w-[99%] w-full flex-col gap-8 ">
                {icons.map((icon, index) => {
                  return (
                    <div
                      key={icon.id}
                      onClick={() => {
                        if (index === 0) {
                          setCurrentIcon(0);
                          arrow.current.style.marginTop = "0px";
                        } else if (index === 1) {
                          setCurrentIcon(1);
                          arrow.current.style.marginTop = "125px";
                        } else if (index === 2) {
                          setCurrentIcon(2);
                          arrow.current.style.marginTop = "235px";
                        } else {
                          setCurrentIcon(3);
                          arrow.current.style.marginTop = "364px";
                        }
                      }}
                      className={` ${
                        currentIcon === index && "bg-green-200 fade border-0"
                      } border border-gray-300 cursor-pointer rounded-lg p-4`}
                    >
                      <div className="flex gap-2 items-center">
                        <img src={icon.img} alt="" />
                        <h2 className="text-left font-bold text-xl">
                          {icon.title}
                        </h2>
                      </div>
                      <p className="text-lg text-left">{icon.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>


        </div> */}
        <Features/>

      </div>
    </div>
  );
};

export default About;
