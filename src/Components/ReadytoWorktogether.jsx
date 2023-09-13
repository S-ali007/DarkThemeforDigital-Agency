import React from "react";

function ReadytoWorktogether() {
  return (
    <div className="bg-[#000A1F] max-w-[1920px] w-full flex justify-center mx-auto  " id="contact" >
      {/* main-div */}
      <div className="flex items-center max-w-[1194px] w-full   justify-between " >
        {/* img-left */}
        <div className="flex max-w-[540px] w-full mt-[90px] ">
          <div className=" w-full "><img src="/assets/readyto work -Home5-12-7.svg" alt="" /></div>
        </div>
        {/* right-content */}

        {/* heading-logo-div */}
        <div className="max-w-[490px] w-full">
          <div className="max-w-[470px] w-full text-[42px] font-Jost absolute ml-[50px] mt-[120px] font-[600] leading-[53px] text-[white] ">
            Ready to Work Together In News Projects ?
          </div>

          <div className="max-w-[399px] w-full relative flex flex-col   ">
                <div className="relative top-[89px]  justify-center  flex  w-full left-[50px]">
                  <img className="" src="/assets/pseudo.svg" alt="" />
                </div>
                <div className="font-[700]    text-[150px] text-[#FFFFFF26]  cursor-pointer font-Jost uppercase flex justify-center items-center">
                CALL
                </div>
              </div>
          {/* input-section-left*/}
          <div className="mt-[28px]  text-[#A8ADB3]    max-w-[530px] w-full flex flex-col  ml-[45px] gap-[12px]">
            <div className="max-w-[485px] w-full pl-[16px]   py-[16px] bg-[#FAFAFA] rounded-[4px]  ">
              <input
                type="text"
                className="w-full text-[16px]  text-[#A8ADB3] font-Nunito   outline-none  "
                placeholder="Your Name*"
              />
            </div>
            {/* input-2 */}
            <div className="max-w-[485px] w-full pl-[16px]   py-[16px] bg-[#FAFAFA] rounded-[4px] ">
              <input
                type="text"
                className="w-full text-[16px]  text-[#A8ADB3] font-Nunito   outline-none   "
                placeholder="Your Email*"
              />
            </div>
            {/* input-3 */}
            <div className="max-w-[485px] w-full pl-[16px]   pt-[16px] pb-[82px] bg-[#FAFAFA] rounded-[4px] ">
              <textarea
                type="text"
                className="w-full text-[16px]  text-[#A8ADB3] font-Nunito   outline-none   "
                placeholder="Your Message*"
              />
            </div>

            <button className="max-w-[180px]  rounded-[4px] items-center flex justify-center h-[54px] bg-gradient-to-r from-[#6D18EF] to-[#186EF2]  w-full px-[33px]    ">
          <div className="max-w-[113px] w-full  font-Nunito text-[17px] font-[600]   text-[#FFF] text-center">Send Message</div>
          </button>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default ReadytoWorktogether;
