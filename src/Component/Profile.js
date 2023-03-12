import React from "react";

function Profile() {
  return (
    <div className="bg-[#F4F4F4] font-['Inter'] pt-6 xl:pt-12">
      <h1 className="font-[500] font-['Inter'] text-[2.4rem] xl:text-[36px] tracking-[.01em] leading-[2.2rem] xl:leading-[44px]">
        Profile
      </h1>
      <div className="flex flex-col  md:flex-row ">
        <div className=" xl:w-[52%] rounded-[12px] w-[80%] mx-[1rem] max-h-[49.9rem] lg:ml-[19.2rem] mb-[2rem] md:mb-[6.4rem] bg-[#FFFFFF] md:shadow-[9px_9px_0px_rgba(82,82,82,0.5)] ">
          <div className=" font-[400] text-[1rem] sm:text-[1.3rem] xl:text-[18px] mr-36  ml-16">
            <h2 className="font-['Playfair-Display'] mt-[3.6rem] mb-[3.2rem] text-[1.8rem] xl:text-[2.4rem] font-[400] tracking-[.01em] text-left  leading-[1.6rem]  xl:leading-[32px] text-[#EA2678]">
              Basic Information
            </h2>
            <div className="flex text-left ">
              <p className="font-[600] w-[38%] mt-0 my-[1.2rem] ">
                Doğum tarihi
              </p>
              <p className=" mt-0 ml-[2rem] my-[1.2rem] w-[62%]">24.03.1996</p>
            </div>
            <div className="flex text-left ">
              <p className="font-[600]  my-[1.2rem] w-[38%] ">İkamet Şehri</p>
              <p className="  ml-[2rem] my-[1.2rem] w-[62%]">Ankara</p>
            </div>
            <div className="flex text-left  ">
              <p className="font-[600] my-[1.2rem] w-[38%]  ">Eğitim Durumu</p>
              <p className=" my-[1.2rem] ml-[2rem]  w-[62%]">
                Hacettepe Ünv. Biyoloji Lisans, 2016
              </p>
            </div>
            <div className="flex text-left  mb-[2.5rem]">
              <p className="font-[600] my-[1.2rem] w-[38%] ">
                Tercih Ettiği Rol
              </p>
              <p className="  my-[1.2rem] ml-[2rem] w-[62%]">Frontend, UI6</p>
            </div>
          </div>
        </div>
        <div className=" w-[48%] ml-[2rem] md:ml-[5.8rem] text-[1rem] sm:text-[1.3rem] lg:text-[18px] text-left leading-normal mr-[10rem] lg:mr-[21.6rem]">
          <h2 className="font-['Playfair-Display'] tracking-[.01em]   text-[24px] font-[400] md:pt-[1.6rem] leading-[3.2rem]">
            About me{" "}
          </h2>
          <div
            className={
              "xl:w-[14.4rem] w-[7rem] md:w-[9rem] h-[2rem] xl:h-[3.2rem] bg-[#82BBFF] rounded-[4px] ml-[-1rem]  mb-[-2.6rem]  mt-[-3.4rem]"
            }
          ></div>
          <div className="md:mt-[4.2rem] mt-[3.2rem] ">
            <p className="font-[400] font-['Inter']   tracking-[.01em] ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <p className="font-[400] font-['Inter']  tracking-[.01em] ">
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
