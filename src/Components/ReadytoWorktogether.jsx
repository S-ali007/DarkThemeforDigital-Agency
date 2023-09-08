import React from "react";

function ReadytoWorktogether() {
  return (
    <div className="bg-[#000A1F] max-w-[1920px] w-full  mx-auto   pl-[321px] pr-[404px] pb-[168px]">
      {/* main-div */}
      <div className="flex items-center max-w-[1194px] w-full   justify-between ">
        {/* img-left */}
        <div className="flex max-w-[540px] w-full mt-[90px] ">
          <div className=" w-full "><img src="/assets/readyto work -Home5-12-7.svg" alt="" /></div>
        </div>
        {/* right-content */}

        {/* heading-logo-div */}
        <div className="max-w-[530px] w-full">
          <div className="max-w-[530px] w-full text-[42px] font-Jost absolute pl-[40px] pt-[65px] font-[600] leading-[53px] text-[white] tracking-[0.42px]">
            Ready to Work Together In News Projects ?
          </div>

          <div className="max-w-[401px]  w-full relative  ">
            <div className="relative top-[40px] left-7  max-w-[84px] w-full ">
              <img className="" src="/assets/pseudo.svg" alt="" />
            </div>
            <div className="max-w-[363px] w-full ">
              <svg
                width="367"
                height="115"
                viewBox="0 0 367 115"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.7 59.5C27.7 65.9 29.15 71.45 32.05 76.15C34.95 80.75 38.75 84.25 43.45 86.65C48.25 89.05 53.5 90.25 59.2 90.25C64.2 90.25 68.6 89.6 72.4 88.3C76.2 87 79.6 85.3 82.6 83.2C85.6 81.1 88.25 78.85 90.55 76.45V103.75C86.35 107.05 81.75 109.65 76.75 111.55C71.75 113.45 65.4 114.4 57.7 114.4C49.3 114.4 41.55 113.1 34.45 110.5C27.35 107.9 21.25 104.15 16.15 99.25C11.05 94.35 7.1 88.55 4.3 81.85C1.5 75.15 0.1 67.7 0.1 59.5C0.1 51.3 1.5 43.85 4.3 37.15C7.1 30.45 11.05 24.65 16.15 19.75C21.25 14.85 27.35 11.1 34.45 8.49999C41.55 5.9 49.3 4.6 57.7 4.6C65.4 4.6 71.75 5.55 76.75 7.45C81.75 9.35 86.35 11.95 90.55 15.25V42.55C88.25 40.15 85.6 37.9 82.6 35.8C79.6 33.6 76.2 31.9 72.4 30.7C68.6 29.4 64.2 28.75 59.2 28.75C53.5 28.75 48.25 29.95 43.45 32.35C38.75 34.75 34.95 38.25 32.05 42.85C29.15 47.45 27.7 53 27.7 59.5ZM125.579 91.75L127.379 72.4H179.429L181.079 91.75H125.579ZM153.029 45.55L138.329 79.45L139.529 85L126.479 112H97.8285L153.029 0.399997L208.379 112H179.579L166.979 86.05L167.879 79.6L153.029 45.55ZM219.381 6.99999H244.731V90.25H286.881V112H219.381V6.99999ZM298.629 6.99999H323.979V90.25H366.129V112H298.629V6.99999Z"
                  fill="white"
                  fill-opacity="0.15"
                />
              </svg>
            </div>
          </div>
          {/* input-section-left*/}
          <div className="mt-[72px]  text-[#A8ADB3]    max-w-[530px] w-full flex flex-col  ml-[45px] gap-[12px]">
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
                placeholder="Your Massage*"
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
