import React from "react";
import { useState } from "react";

function ExploreOurPersonal() {
  const [solution, setSolution] = useState([
    {
      title: " Business Growth",
      Description: " Sed perspiciatis unde omnis natus error voluptatem",
      id: 1,
      img: " /assets/WeHaveMoreBg-Pc.svg",
    },
    {
      title: " User Research",
      Description: " Sed perspiciatis unde omnis natus error voluptatem",
      id: 2,
      img: " /assets/userResearch.svg",
    },
    {
      title: "Big Data Solution",
      Description: " Sed perspiciatis unde omnis natus error voluptatem",
      id: 3,
      img: " /assets/bigdataSolution.svg",
    },
    {
      title: " Product Design",
      Description: " Sed perspiciatis unde omnis natus error voluptatem",
      id: 3,
      img: "/assets/productDesign.svg",
    },
  ]);

  return (
    <div className="bg-[#000A1F] max-w-[1920px] w-full  mx-auto pt-[117px]  ">
      <div className="flex  items-center   max-w-[1430px] w-full mx-auto gap-[16px]   ">
        {/* Icons-And-Img-left */}
        <div className="flex justify-center items-center gap-[21px] ">
          <div>
            <img src="/assets/explore_our-sideImg.svg" alt="" />
          </div>
          <div>
            <img src="/assets/explore_our-centerImg.svg" alt="" />
          </div>
        </div>
        {/* Right-Logo */}
        <div className="flex flex-col gap-[72px] justify-start mt-[35px] max-w-[786px] w-full">
          <div className="max-w-[507px] w-full text-[42px] font-Jost absolute ml-[38px] pt-[65px] font-[600] leading-[53px] text-[white]  mt-[57px] ">
            <p>Explore Our Professional Business Solutions</p>
          </div>

          <div className="max-w-[772px]  w-full relative  ">
            <div className="relative top-[93px]  left-10  max-w-[84px] w-full">
              <img className="" src="/assets/pseudo.svg" alt="" />
            </div>
            
            <div className="max-w-[772px] w-full relative font-[900]  text-transparent border-[#FFFFFF26] text-[150px] font-outline-2 hover:font-outline-4   font-kumbh uppercase ">
            features
            </div>
           
          </div>

          {/* bussiness Growth,user Research ,big data  options */}
          <div className="grid grid-cols-2 mt-[72px] ml-[99px] max-w-[688px] w-full gap-y-[80px] gap-x-[107px] pb-[62px]">
            {solution.map((solutions, id) => {
              return (
                <>
                  <div
                    className="max-w-[290px] w-full flex gap-[25px] "
                    key={id}
                  >
                    {" "}
                    <div className="">
                      <img src={solutions.img} alt="" />
                    </div>
                    <div>
                      <div className="max-w-[205px] w-full text-[24px] font-Jost text-[#FFF]">
                        {solutions.title}
                      </div>

                      <div className="w-[210px]  text-[#67687A]  font-kumbh">
                        {solutions.Description}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreOurPersonal;
