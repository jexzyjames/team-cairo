import React from "react";
import rewardImg from "../assets/rewardIcon.png";
import gloImg from "../assets/glo.png";
import airtelImg from "../assets/airtel.png";
import shopriteImg from "../assets/shoprite.png";
import justriteImg from "../assets/justrite.png";
const Rewards = () => {
  return (
    <div
      id="rewards"
      className="md:w-full md:flex mx-[5%] rounded-lg md:rounded-none mt-9 md:mx-auto relative gap-15 justify-between md:px-[3%] py-6   items-center bg-[#99999964] "
    >
      <h1 className="absolute flex pt-6 font-bold mx-auto left-[35%] md:left-[40%]  items-center justify-center text-center text-2xl top-0  ">
        Rewards
      </h1>
      <div className=" px-3 md:mt-0 mt-25 w-full ">
        <h1 className="text-amber-800 text-4xl font-bold">Clean Streets.</h1>
        <h1 className="text-amber-900 text-4xl mb-4 font-bold">
          Full Pockets.
        </h1>
        <p className=" md:text-2xl mb-3">
          WasteGrid turns your recycliing journey into real value. Stack coins,
          unlock perks, and give back to your community - all from the app.
        </p>
        <button className="bg-[#34C759] md:mb-0 mb-10  flex md:justify-start items-start  cursor-pointer px-10 text-2xl py-[5px]    rounded-4xl md:py-1 md:px-5 text-white shadow-sm ">
          Get Started
        </button>
      </div>
      <div className="flex mb-10 flex-col w-full justify-center items-center">
        <img src={rewardImg} alt="Rewards" />
      </div>

      <div className="absolute rounded-xl  bottom-0 px-2 md:px-10 md:max-w-[600px] w-full md:py-2 lg:px-8 mx-auto lg:max-w-[850px]  md:flex lg:justify-between md:mb-[-80px] lg:mb-[-100px]  bg-white md:rounded-4xl shadow-lg md:bottom-0 md:left-0 md:right-0 ">
        <div className="flex  md:gap-10 py-3 lg:px-9 justify-center gap-11 px-2 md:justify-between w-full items-center">
          <img className=" md:w-15 lg:w-25 w-10" src={shopriteImg} alt="" />
          <img className=" md:w-15 lg:w-25 w-10" src={airtelImg} alt="" />
          <img className=" md:w-15 lg:w-25 w-10" src={justriteImg} alt="" />
          <img className=" md:w-15 lg:w-25 w-10" src={gloImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Rewards;
