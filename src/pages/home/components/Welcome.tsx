import React from 'react'
import banner1 from "../../../assets/images/Home/banner1.jpg";
import banner2 from "../../../assets/images/Home/banner2.jpg";
const Welcome = () => {
  return (
    <div className=" h-[976px] font-openSans ">
        <div className="h-[4.5rem]"></div>
        <img src={banner1} />
        <img src={banner2} className={"absolute top-[38.1rem]"} />
        <div className="absolute top-[0rem] h-[70rem] w-[31.2rem] shadow-black shadow-banner  bg-[#000000]"></div>
        <div className=" absolute top-[4.5rem] pt-[105px] pl-[4.25rem]  w-[41rem] ">
          <h1 className="   font-[300]  text-[2.7rem]">
            Welcome to Prime Video
          </h1>
          <h1 className=" font-sans font-[300] mt-[0.9rem] text-[1.6rem] tracking-tight leading-[29px]">
            Join Prime to watch the latest movies, TV shows and award-winning
            Amazon Originals
          </h1>
          <button className="text-white font-ptSans font-[500] text-[18.2px] h-12 mt-[17px] w-[17.5rem]  rounded-[0.15rem] bg-[#0F79AF]">
        Start your 30-day free trial
      </button>
      <p className="text-[0.9rem] font-[300] mt-[0.63rem] ml-5">With select credit, debit card, or UPI ID</p>
      <h1 className=" font-sans font-[400] mt-[21.17rem] text-[2.57rem]">Movie rentals on Prime Video</h1>
          <h1 className=" font-sans  font-[300] mt-[1.05rem] text-[1.4rem] tracking-tight leading-[29px]">
          Early Access to new movies, before digital subscription
          </h1>
          <button className="text-white font-ptSans font-[500] text-[18.2px] h-[3.4rem] mt-[2.9rem] w-[17.5rem]  rounded-[0.15rem] bg-[#0F79AF]">
        Rent now
      </button>
        </div>
      </div>
  )
}

export default Welcome