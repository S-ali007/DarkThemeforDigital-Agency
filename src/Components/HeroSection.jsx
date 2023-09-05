import React from "react";

function HeroSection({ extraClasses }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center relative ">
        <div className="flex justify-between mx-auto px-[50px] absolute top-0 max-w-[1422px] w-full ">
          <div className="pt-[50px]">
            <img src="/assets/bg-cloud-left.svg" alt="" />
          </div>

          <div className="pt-[3px] pr-[40px]">
            <img src="/assets/Image3.svg" alt="" />
          </div>
        </div>
        <div className="relative top-[405px] left-[50px]  ">
          <img src="/assets/bg-cloud-left.svg " alt="" />
        </div>

        <div className="flex gap-[170px] relative mt-[41px]   justify-between ">
          <div className="text-[#ffffff] relative   font-Jost mt-[110px] left-[200px] max-w-[720px] w-full ">
            <div className=" tracking-[-0.75px] leading-[75px] flex">
              <div className=" font-[600] max-w-[500px] w-full  font-Jost  text-clamp">
                <h1 className="  ">We Provide Smart Business Solutions</h1>
              </div>
              <div className="absolute top-[-65px] left-[340px] ">
                {" "}
                <img src="/assets/bulb.svg" alt="" />
              </div>
            </div>
            <div className="mt-[8px] text-[20px] font-[400] font-Jost leading-[30px]">
              {" "}
              <h1>Grow your Business With Us Best Business Solutions</h1>
            </div>
          </div>
          <div className="text-[#ffffff]  max-w-[718px] w-full  relative z-10  ">
            <img src="/assets/man and a rocket.svg" alt="" />
          </div>
        </div>
      </div>
        <div className="mt-[-170px]">
      <div className="relative   ">
        {/* background hill image */}
        <div className="flex justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1930"
            height="740"
            fill="none"
          >
            <path
              d="M0 740.189L1920 739.689L1920 81.6885C1878 61.6885 1822 50.1885 1744.5 50.1885C1510 64.1885 1386.12 93.7072 1188.5 233.188C1098.5 301.688 976.5 276.835 933 233.188C785 84.6885 668.5 82.6885 581 111.688C241 262.688 70.3608 -24.3967 0 1.68833C0.000102997 138.188 0 740.189 0 740.189Z"
              fill="#000A1F"
            />
          </svg>
        </div>
        <div className=" absolute top-[441px] mx-auto inset-x-0 text-[white] flex justify-center items-center">
          <div className="   2xl:max-w-[1170px]  ">
            {/* logo-BRAND */}
            <div className="flex gap-[91px] max-w-[1170px] w-full pl-[30px]  pr-[9px]">
              <div className="">
                <div className="max-w-[465px] w-full text-[42px] font-Jost absolute pl-[33px] pt-[53px] font-[600px] leading-[53px] tracking-[0.42px]">
                  <h1> We’ve More Then 254+ Global Partners</h1>
                </div>
                <div className="max-w-[555px]  w-full">
                  <img src="/assets/Brand-Logo.svg" alt="" />
                </div>
              </div>

              <div className="">
                <h1 className="max-w-[483px] w-full text-[#A8ADB3]  text-[16px] font-kumbh text-[#A8ADB3]flex flex-col  justify-end leading-[32px] mt-[54px]">
                  Sed ut perspiciatis unde omnis natus error voluptatem santium
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  nllo inventore veritatis quasi architecto beatae vitae
                </h1>
              </div>
            </div>
            <div className="max-w-[1147px] w-full  mt-[60px] pt-[16px] pb-[3px]  border-t-[#464548] border-t flex justify-between ">
              <button>
                <img src="assets/Button-logo-Brand.svg" alt="" />
              </button>
              <div className="flex gap-[64px] px-[24px]">
                <div className="max-w-[146px] w-full">
                  {" "}
                  <img src="/assets/movenpick.svg" alt="" />
                </div>
                <div className="max-w-[146px] w-full">
                  {" "}
                  <img src="/assets/razamwal.svg" alt="" />
                </div>
                <div className="max-w-[146px] w-full">
                  {" "}
                  <img src="/assets/rozegal.svg" alt="" />
                </div>
                <div className="max-w-[146px] w-full">
                  {" "}
                  <img src="/assets/eyab.svg" alt="" />
                </div>
                <div className="max-w-[146px] w-full">
                  {" "}
                  <img src="/assets/concile-of -health.svg" alt="" />
                </div>
              </div>
              <button>
                <img src="assets/Button-right.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default HeroSection;
