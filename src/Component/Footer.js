import React from "react";

function Footer() {
  return (
    <div className="flex font-['Inter'] justify-items-center">
      <div className="flex   ml-[24.1rem]">
        <h1 className=" my-0 font-[500] text-right text-[4.2rem] leading-normal tracking-[.01em] ">
          Let’s
          <span className="">work together</span>
          on your next product.
        </h1>
      </div>
      <div className="flex ml-[5.92rem] whitespace-nowrap	 text-left text-[24px] mr-[34.1rem] font-[500] flex-col">
        <p className="text-[#1769FF]  	 my-0">Github</p>
        <p className="my-0 	 ">Personal Blog</p>
        <p className="text-[#0077B5] my-0">Linkedin</p>
        <p className="text-[#AF0C48] my-0">Email</p>
      </div>
    </div>
  );
}

export default Footer;
