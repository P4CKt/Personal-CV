import React from "react";

function Skills() {
  return (
    <div className=" mt-[1rem] sm:mt-[4rem] lg:mt-32 mx-[2rem] md:mx-[5rem] xl:mx-[25.92rem] mb-[5rem] xl:mb-[12.96rem] ">
      <div>
        <h1 className="font-[500] font-['Inter'] text-[#0A0A14] mt-0 mb-[2rem] md:mb-[5.6rem] text-[2.4rem] xl:text-[36px] tracking-[.01em] ">
          Skills
        </h1>
        <div className="flex text-[10px] flex-wrap md:text-[20px] rounded-[6px] justify-center text-[#777777] font-[500] font-['Inter'] ">
          <div className=" mx-[1.75rem] mb-[1rem]">
            <img
              className="w-[9rem]  md:w-[12rem]"
              alt="JS"
              src="./img/js-logo 1.png"
            ></img>
            <p className="tracking-normal m-0 mt-[0.8rem] ">JAVASCRIPT</p>
          </div>
          <div className="mx-[1.75rem] mb-[1rem] ">
            <img
              className="w-[9rem]  md:w-[12rem]"
              alt="react"
              src="./img/Rectangle 35.png"
            ></img>
            <p className="tracking-normal m-0 mt-[0.8rem]">REACT</p>
          </div>
          <div className="mx-[1.75rem] mb-[1rem] ">
            <img
              className="w-[9rem]  md:w-[12rem]"
              alt="redux"
              src="./img/Group 101.png"
            ></img>
            <p className="tracking-normal m-0 mt-[0.8rem]">REDUX</p>
          </div>
          <div className=" mx-[1.75rem] mb-[1rem]">
            <img
              className="w-[9rem]  md:w-[12rem]"
              alt="node"
              src="./img/node-logo 1.png"
            ></img>
            <p className="tracking-normal m-0 mt-[0.8rem]">NODE</p>
          </div>
          <div className="mx-[1.75rem] mb-[1rem] ">
            <img
              className="w-[9rem] md:w-[12rem]"
              alt="vscode"
              src="./img/Vs-logo.png"
            ></img>
            <p className="tracking-normal m-0 mt-[0.8rem]">VS CODE</p>
          </div>
          <div className="mx-[1.75rem] mb-[1rem] ">
            <img
              className="w-[9rem]  md:w-[12rem]"
              alt="figma"
              src="./img/figma-logo 1.png"
            ></img>
            <p className="tracking-normal m-0 mt-[0.8rem]">FIGMA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
