import React from "react";
import { NavLink } from "react-router-dom";

const AccountDropDown = ({accountDrop}) => {

  return (
    <>
      <div onClick={accountDrop} className="bg-[#00000098] w-[1000vh] h-[1000vh] fixed top-[4.5rem]"></div>
      <div className=" w-[193px] h-[147px] flex flex-col bg-black fixed top-[3.5rem] left-[70.28rem] z-30">
        <NavLink to={"/signin"}>
        <div className="bg-[#252E39] h-[50px] w-[193px] border-b-[1px] border-[#5757575d] transition hover:ease-in-out  hover:bg-[#566b84] flex items-center pl-5 font-sans text-[#CCCCCC] text-[16.5px] hover:cursor-pointer">
          <h1>Sign In</h1>
        </div>
        </NavLink>
        <div className="bg-[#252E39] h-[50px] w-[193px] border-b-[1px] border-[#5757575d] transition hover:ease-in-out  hover:bg-[#566b84] flex items-center pl-5 font-sans text-[#CCCCCC] text-[16.5px] hover:cursor-pointer">
          <h1>Watch Anywhere</h1>
        </div>
        <div className="bg-[#252E39] h-[50px] w-[193px] border-b-[1px] border-[#5757575d] transition hover:ease-in-out  hover:bg-[#566b84] flex items-center pl-5 font-sans text-[#CCCCCC] text-[16.5px] hover:cursor-pointer">
          <h1>Help</h1>
        </div>
      </div>
    </>
  );
};

export default AccountDropDown;
