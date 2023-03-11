import React from "react";

function Profile() {
  return (
    <div className="bg-[#F4F4F4] font-['Inter'] pt-12">
      <h1 className="font-[500] font-['Inter']  text-[36px] tracking-[.01em] leading-[44px]">
        Profile
      </h1>
      <div className="flex ">
        <div className=" w-[52%] rounded-[12px] ml-[19.2rem] mb-[6.4rem] bg-[#FFFFFF] shadow-[9px_9px_0px_rgba(82,82,82,0.5)] ">
          <div className=" font-[400] text-[18px] mr-36  ml-16">
            <h2 className="font-['Playfair-Display'] mt-[3.6rem] mb-[3.2rem] text-[24px] font-[400] tracking-[.01em] text-left leading-[32px] text-[#EA2678]">
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
        <div className=" w-[48%] ml-[6.56rem] mr-[21.6rem]">
          <h2 className="font-['Playfair-Display'] text-left text-[24px] font-[400] pt-[1.6rem] leading-[3.2rem]">
            About Me
          </h2>
          <p className="font-[400] font-['Inter'] leading-normal  text-left text-[18px] tracking-[.01em] ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <p className="font-[400] font-['Inter']  leading-normal text-left text-[18px] tracking-[.01em] ">
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
