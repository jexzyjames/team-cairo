import React,{useState,useEffect,useRef} from 'react'
import appImg from "../assets/appImg.png";
import dollarImg from "../assets/dollar.png";
const Features = () => {
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
      useEffect(() => {}, [arrow,currentIcon ]);
  return (
    <div id='features' className=''>
           <div className="flex feature gap-10 xs:flex-col    sm:flex-col md:flex-row flex-col relative lg:mx-[3%] sm:mx-3 sm:overflow-x-hidden  w-full justify-between ">
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
                          className={`rounded-lg h-22 span block w-3 fade bg-green-400`}
                        ></span>
                      </div>
        
                      <div className="flex sm:text-md  sm:w-[99%] w-full flex-col gap-8 ">
                        {icons.map((icon, index) => {
                          return (
                            <div
                              key={icon.id}
                              onClick={() => {
                                // if (index === 0) {
                                //   setCurrentIcon(0);
                                //   arrow.current.style.marginTop = "0px";
                                //   arrow.current.classList.add('first') 
                                //   return;

                                // } else if (index === 1) {
                                //   setCurrentIcon(1);
                                //   arrow.current.style.marginTop = "125px";
                                //   arrow.current.classList.add('second') 
                                //   return;
                                // } else if (index === 2) {
                                //   setCurrentIcon(2);
                                //   arrow.current.style.marginTop = "235px";
                                //   arrow.current.classList.add('third') 
                                //   return;

                                // } else {
                                //   setCurrentIcon(3);
                                //   arrow.current.style.marginTop = "364px";
                                //   arrow.current.classList.add('fourth') 
                                //   return;

                                // }
                                setCurrentIcon(index)
                                arrow.current.className = `rounded-lg h-22 span block w-3 fade bg-green-400 ${['first', 'second', 'third', 'fourth'][index]}`;

                              }}
                              className={` ${
                                currentIcon === index && "bg-green-200 fade border-0"
                              } border border-gray-300 cursor-pointer rounded-lg p-4`}
                            >
                              <div className="flex gap-2 items-center">
                                <img src={icon.img} alt="" />
                                <h2 className="text-left sm:text-md  font-bold md:text-xl">
                                  {icon.title}
                                </h2>
                              </div>
                              <p className="md:text-lg sm:text-md xs:text-sm text-left">{icon.text}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
        
        
                </div>
    </div>
  )
}

export default Features