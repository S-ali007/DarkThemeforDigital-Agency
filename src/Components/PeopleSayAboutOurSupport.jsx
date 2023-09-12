import React from "react";
import { useState } from "react";

function PeopleSayAboutOurSupport() {
  const [cards, setCards] = useState([
    {
      username: " Business Growth",
      text: "Sed ut perspiciatis unde natus error sitwa voluptatemaccusantium laudant totames aperiam eaque abillo beatae vitae  ",
      id: 1,
      img: "/assets/comma for people suport card1.svg",
      designation: " CEO & Founder",
    },
    {
      username: "Gars G. Bernhardt",
      text: "Sed ut perspiciatis unde natus error sitwa voluptatemaccusantium laudant totames aperiam eaque abillo beatae vitae  ",
      id: 2,
      img: "/assets/comma for people suport card1.svg",
      designation: " CEO & Founder",
    },
  ]);
  return (
    <div
      className="bg-[#000A1F] max-w-[1920px] w-full  mx-auto  pt-[153px] pl-[106px] pr-[118px]"
      id="Clients"
    >
      {/* main heading */}
      <div className="   relative z-10">
        <div className="flex  items-center    pr-[20px] justify-center ">
          <div className="max-w-[461px] w-full text-[42px] tracking-[0.42px] font-Jost absolute  font-[600px] leading-[53px] text-[white]  pt-[83px] mt-[10px] align-middle justify-center text-center ">
            <p>People’s Say About Our Support & Services</p>
          </div>

          <div className="max-w-[732px] w-full relative flex flex-col  items-center ">
            <div className="relative top-[89px]  justify-center  flex  max-w-[84px] w-full ">
              <img className="" src="/assets/pseudo.svg" alt="" />
            </div>
            <div className="font-[900]  text-transparent border-[#FFFFFF26] text-[150px] font-outline-2 hover:font-outline-4   font-kumbh uppercase flex justify-center items-center">
              say’s
            </div>
          </div>
        </div>
      </div>

      <div className="  bg-[#000A1F] max-w-[1110px] w-full mx-auto ">
        {/* cards */}
        <div className="flex mt-[56px] absolute  gap-[30px] items-center justify-center ">
          {" "}
          {/* card-1 */}
          {cards.map((card, id) => {
            return (
              <>
                <div
                  className="max-w-[555px] w-full bg-[#292738] py-[50px] pl-[70px] pr-[50px]  "
                  key={id}
                >
                  <div className="max-w-[66px] w-full">
                    <img src={card.img} alt="" />
                  </div>
                  {/* card-text */}
                  <div className="mt-[23px] max-w-[425px] w-full pt-[3px] pr-[1.33px] pb-[35px] border-b-[1px] border-[#464548]">
                    <div className="text-[22px]   font-kumbh text-[#67687A] ">
                      {card.text}
                    </div>
                  </div>
                  {/*info-box-richards s.books  */}
                  <div className="flex max-w-[425px] w-full justify-between items-center mt-[40px]">
                    <div className=" flex flex-col gap-[4.8px]">
                      <div className="text-[24px] font-Jost font-[600] text-[#FFF]">
                        {card.username}
                      </div>
                      <div className="text-[16px]   font-kumbh text-[#67687A]  ">
                        {card.designation}
                      </div>
                    </div>
                    <div className="max-w-[101px] w-full">
                      <img src="/assets/icon-chat-cards.svg" alt="" />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="flex    justify-between relative mt-[-190px]">
        {/* left-bg img */}
        <div className=" relative   ">
          <img
            className=""
            src="/assets/peoplesayAbout Our Support -left bg.svg"
            alt=""
          />
        </div>

        {/* right-bg img */}
        <div className="relative ">
          <img
            className=""
            src="/assets/peoplesayAbout Our Support -right bg.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default PeopleSayAboutOurSupport;
