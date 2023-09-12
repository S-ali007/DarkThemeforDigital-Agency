import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function CheckOutOurRecentProject() {
  const paginationStyle = {
    color: "purple", // Set your desired color here
  };

  return (
    <div
      className=" bg-[#000A1F] max-w-[1920px] w-full  mx-auto pt-[128px] "
      id="Projects"
    >
      {/* main heading */}
      <div className=" max-w-[1364px] w-full mx-auto">
        <div className="flex  items-center    pr-[20px] justify-center ">
          <div className="max-w-[437px] w-full text-[42px] tracking-[0.42px] font-Jost absolute  font-[600] leading-[53px] text-[white]  pt-[83px] mt-[10px] align-middle justify-center text-center ">
            <p>Checkout our Recently Completed Projects</p>
          </div>
          <div className="max-w-[732px] w-full relative flex flex-col  items-center ">
            <div className="relative top-[89px]  justify-center  flex  max-w-[84px] w-full ">
              <img className="" src="/assets/pseudo.svg" alt="" />
            </div>
            <div className="font-[900]  text-transparent border-[#FFFFFF26] text-[150px] font-outline-2 hover:font-outline-4   font-kumbh uppercase flex justify-center items-center">
              Projects
            </div>
          </div>
        </div>

        {/* Cards-div */}
        <div className=" mt-[70px] mx-auto  max-w-[1170px] w-full">
          <Swiper
            className="my-swiper"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            // navigation

            // Other Swiper props
            pagination={{ bulletClass: "bg-red-500", clickable: true }}
            // scrollbar={{ draggable: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <img src="/assets/checkout our card-1.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="/assets/checkout our card-2.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/checkout our card-3.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/checkout our card-1.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="/assets/checkout our card-2.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/checkout our card-3.svg" alt="" />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <img src="/assets/checkout our card-1.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="/assets/checkout our card-2.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/assets/checkout our card-3.svg" alt="" />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default CheckOutOurRecentProject;
