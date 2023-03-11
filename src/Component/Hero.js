import React from "react";

function Hero() {
  return (
    <div className="flex  box-border h-[738px] bg-[#F4F4F4] pl-[17.6rem] font-['Inter'] ">
      <div className=" w-[53%] mr-16 mt-[151px] text-left flex-col  box-border  ">
        <p className="font-[400] tracking-widest text-[30px] leading-[36px] m-0 mb-[2.1rem]">
          Hi! 👋
        </p>
        <p className="font-[500] box-border m-0 tracking-[.01em] leading-[64px] text-[42px] text-left ">
          <span>I’m Almila.</span> I’m a full-stack developer. I can craft solid
          and scalable frontend products. Let’s meet!
        </p>
        <div className="mb-[1.6rem] mt-[54px]">
          <img className="mr-8" src="./img/LinkedIn.png"></img>
          <img src="./img/github.png"></img>
        </div>
        <div className="my-[2.4rem]">
          <p className="mr-8 leading-[32px] font-[400] tracking-wider pr-[6.4rem] text-[18px]">
            Currently <span className="text-[#AF0C48]">Freelancing</span> for
            <span className="text-[#AF0C48]"> UX, UI, & Web Design </span>
            Project . Invite me to join your team →
            <span className="text-[#AF0C48] underline underline-offset-4 ">
              {" "}
              pratamaiosi@gmail.com
            </span>
          </p>
        </div>
      </div>
      <div className=" w-[47%] mt-[0.8rem] flex items-center">
        <div className="h-[350px] mb-[4rem] ml-[3.2rem]">
          <div className="p-[172px]  relative w-0 rounded-[22px] bg-[#E92577]"></div>
          <img
            className="w-[341px]  relative bottom-[323px] left-[20px] rounded-[22px] "
            src="./img/P4CK.png"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Hero;
