

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import React from "react";



import { Swiper, SwiperSlide } from "swiper/react";
import TypeWriterComponent from "./TypeWriterComponent"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

function HeroSection({ extraClasses }) {

  const swiperRef = useRef();
  let animationCompleted = false;


  const divRef = React.useRef([]);
  React.useEffect(() => {
    const div2 = divRef.current;

    // For multiple div to animate adjusted Version Of The Code
    div2.forEach((divElement, index) => {
      gsap.to(divElement, {
        width: "100%",
        height:"100%",
        
        
        scrollTrigger: {
          trigger: divElement,
          start: "0%", // Animation starts when the element is in the middle of the viewport
          end: "200% 80%", // Animation ends when the element is in the middle of the viewport
          scrub: 2,
          
         
         
          markers: true,
          onEnter: () => {
            if (!animationCompleted) {
              gsap.set(divElement, { width: "100%", height: "100%" });
            }
          },
          onLeaveBack: () => {
            animationCompleted = true; // Set animationCompleted to true once the animation leaves the viewport
          },
        },
      });
    });
  }, []);

  return (
    <div div className="" id="home">
      <div className="flex flex-col justify-center items-center relative pr-[90px] " >
        <div className="flex justify-between mx-auto px-[50px] absolute top-0 max-w-[1422px] w-full ">
          <div className="pt-[50px]" ref={(el) => (divRef.current[1] = el)}>
            <img src="/assets/bg-cloud-left.svg" alt=""  />
          </div>

          <div className="pt-[8px] ">
            <div className="" ref={(el) => (divRef.current[2] = el)}>
              <img src="/assets/Image3.svg" alt="" />
            </div>
            <div className="" ref={(el) => (divRef.current[3] = el)}>
              <img
                className="relative left-[95%] bottom-[4rem]  z-10 m-0"
                src="/assets/moon.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="relative top-[309px] left-[50px]  ">
          <img src="/assets/bg-cloud-left.svg " alt="" />
        </div>

        <div className="flex gap-[179px] relative  justify-between ">
          <div className="text-[#ffffff] relative   font-Jost mt-[60px] left-[200px] max-w-[720px] w-full ">
            <div className=" tracking-[-0.75px] leading-[75px] flex">
              <div className=" font-[600] max-w-[500px] w-full  font-Jost  text-clamp  min-h-[258px] h-full ">
                <h1 className="  ">
                <TypeWriterComponent
            text={"We Provide Smart Business Solutions"}
          /></h1>
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
          <div className="text-[#ffffff] max-w-[718px] w-0  relative z-10 mt-[-40px] pr-[35px] min-h-[550px] h-0" ref={(el) => (divRef.current[0] = el)}>
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
          <div className=" absolute top-[356px] mx-auto inset-x-0 text-[white] flex justify-center items-center">
            <div className="   2xl:max-w-[1170px]  ">
              {/* logo-BRAND */}
              <div className="flex   justify-between max-w-[1170px] w-full  ">
                <div>
                  <div className="max-w-[465.53px] w-full text-[42px] font-Jost absolute ml-[40px] mt-[49px] font-[600] leading-[53px] text-[white] tracking-[0.42px]">
                    We’ve More Then 254+ Global Partners
                  </div>

                  
                  
            <div className="relative bottom-[-19px]  left-10  max-w-[84px] w-full">
              <img className="" src="/assets/pseudo.svg" alt="" />
            </div>
            
            <div className="max-w-[555px] w-full relative font-[900]  text-transparent border-[#FFFFFF26] text-[150px] font-outline-2 hover:font-outline-4   font-kumbh uppercase mt-[-70px]">
            brand
            </div>
           
         
                 
                </div>

                <div className="">
                  <h1 className="max-w-[483px] w-full text-[#A8ADB3]  text-[16px] font-kumbh text-[#A8ADB3]flex flex-col  justify-end leading-[32px] mt-[54px]">
                    Sed ut perspiciatis unde omnis natus error voluptatem
                    santium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae ab nllo inventore veritatis quasi architecto beatae
                    vitae
                  </h1>
                </div>
              </div>

              <div className="max-w-[1147px] w-full  mt-[60px] pt-[16px]   border-t-[#464548] border-t flex justify-between    ">
        

                <button onClick={() => swiperRef.current?.slidePrev()}>
                  <img src="assets/Button-logo-Brand.svg" alt="" />
                </button>
                <Swiper
                  className="my-swiper"
                  // install Swiper modules
                  modules={[Navigation]}
                  onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  spaceBetween={50}
                  slidesPerView={5}
                  // navigation
                  // Other Swiper props
                  // pagination={{ clickable: true }}
                  // scrollbar={{ draggable: false }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <img src="/assets/movenpick.svg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <img src="/assets/razamwal.svg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/rozegal.svg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/eyab.svg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <img src="/assets/concile-of -health.svg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/movenpick.svg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <img src="/assets/razamwal.svg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/rozegal.svg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src="/assets/eyab.svg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <img src="/assets/concile-of -health.svg" alt="" />
                  </SwiperSlide>
                </Swiper>
                <button className="" onClick={() => swiperRef.current?.slideNext()}>
                  <img src="assets/Button-right.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
