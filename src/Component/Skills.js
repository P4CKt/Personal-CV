import React from "react";

function Skills() {
  return (
    <div className=" mt-[1rem] sm:mt-[4rem] md:mt-32 mx-[2rem] md:mx-[5rem] lg:mx-[25.92rem] mb-[5rem] lg:mb-[12.96rem] ">
      <div>
        <h1 className="font-[500] font-['Inter'] text-[#0A0A14] mt-0 mb-[2rem] md:mb-[5.6rem] text-[2.4rem] sm:text-[4.8rem] tracking-[.01em] ">
          Skills
        </h1>
        <div className="flex text-[10px] md:text-[20px] rounded-[6px]  justify-around text-[#777777] font-[500] font-['Inter'] ">
          <div className=" xl:w-[12rem] ">
            <img
              className="w-[6.2rem] sm:w-[9rem] md:w-[12rem]"
              alt="JS"
              src="./img/js-logo 1.png"
            ></img>
            <p className="tracking-normal m-0 mt-[0.8rem] ">JAVASCRIPT</p>
          </div>
          <div>
            <img
              className="w-[6.2rem] sm:w-[9rem] md:w-[12rem]"
              alt="react"
              src="./img/Rectangle 35.png"
            ></img>
            <p className="tracking-normal m-0 mt-[0.8rem]">REACT</p>
          </div>
          <div>
            <img
              className="w-[6.2rem] sm:w-[9rem] md:w-[12rem]"
              alt="redux"
              src="./img/Group 101.png"
            ></img>
            <p className="tracking-normal m-0 mt-[0.8rem]">REDUX</p>
          </div>
          <div>
            <img
              className="w-[6.2rem] sm:w-[9rem] md:w-[12rem]"
              alt="node"
              src="./img/node-logo 1.png"
            ></img>
            <p className="tracking-normal m-0 mt-[0.8rem]">NODE</p>
          </div>
          <div>
            <img
              className="w-[6.2rem] sm:w-[9rem] md:w-[12rem]"
              alt="vscode"
              src="./img/Vs-logo.png"
            ></img>
            <p className="tracking-normal m-0 mt-[0.8rem]">VS CODE</p>
          </div>
          <div>
            <img
              className="w-[6.2rem] sm:w-[9rem] md:w-[12rem]"
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
