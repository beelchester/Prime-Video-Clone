import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../../app/store";
import {currentUser} from "../../../features/currentUserSlice";
import {signedIn} from "../../../features/signedInSlice";

interface props{
  accountDrop:() => void
}

const AccountDropDown: React.FC<props> = ({accountDrop}) => {
  const signedInDisp = useSelector((state:RootState)=> state.signedIn.value)
  const dispatch = useDispatch()

function signOutHandler(){
  dispatch(currentUser({}))
  dispatch(signedIn(false))
}
  return (
    <>
      <div onClick={accountDrop} className="bg-[#00000098] w-[1000vh] h-[1000vh] fixed top-[4.5rem] right-[1rem] left-[0px]"></div>
      <div className=" w-[193px] h-[147px] flex flex-col bg-black fixed top-[3.5rem] right-[0.6rem] z-30">
        {!signedInDisp?<NavLink to={"/signin"}>
        <div className="bg-[#252E39] h-[50px] w-[193px] border-b-[1px] border-[#5757575d] transition hover:ease-in-out  hover:bg-[#566b84] flex items-center pl-5 font-sans text-[#CCCCCC] text-[16.5px] hover:cursor-pointer">
          <h1>Sign In</h1>
        </div>
        </NavLink>:
        <div onClick={signOutHandler} className="bg-[#252E39] h-[50px] w-[193px] border-b-[1px] border-[#5757575d] transition hover:ease-in-out  hover:bg-[#566b84] flex items-center pl-5 font-sans text-[#CCCCCC] text-[16.5px] hover:cursor-pointer">
          <h1>Sign Out</h1>
        </div>}
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
