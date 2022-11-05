import React from "react";
import logo from "../../assets/logos/primevideoblack.png";
const Signin = () => {
  return (
    <div>
      <div className="shadow text-black">
        <div className="flex justify-center pt-[0.85rem]">
          <img src={logo} />
        </div>
        <div className="flex justify-center items-center w-full h-[30.2rem]">
          <div className=" flex justify-center items-center rounded-[4px] w-[21.9rem] h-[27.4rem] mb-[0.5rem] border-[0.1px] border-[#b9b9b97c]">
            <div className="p-0 w-[18.5rem] h-full ">
              <h1 className="font-ptSans  mt-[0.95rem] text-[1.8rem] ">
                Sign in
              </h1>
              <h1 className="mt-[0.55rem] ml-[0.12rem] font-bold tracking-[-0.02em] text-[0.8rem]">
                Email or mobile phone number{" "}
              </h1>
              <input
                type="text"
                className="border-[0.1px] rounded-[0.13rem] border-[#808080af]  mt-[0.15rem] w-full h-[1.95rem]"
              />
              <div className="mt-[0.85rem] ml-[0.12rem] flex justify-between">
                <h1 className="font-bold tracking-[-0.5px] text-[0.8rem]">Password</h1>
                <h1 className="tracking-[-0.1px] text-[0.8rem] text-[#0066C0]">Forgot your password?</h1>
              </div>
              <input
                type="text"
                className="border-[0.1px] rounded-[0.13rem] border-[#808080af]  mt-[0.15rem] w-full h-[1.95rem]"
              />
              <button className="border-[0.1px] border-[#808080af] mt-[1.35rem] font-ptSans text-[0.85rem] w-full h-[1.95rem] bg-[gold]">Sign in</button>

              <div className="text-[0.75rem]  mt-[1.1rem] font-ptSans ">
                <p className="inline tracking-[0.03em]">By continuing, you agree to the Amazon </p>
                <p className="inline text-[#0066C0] tracking-[0.03em]"> Conditions of Use and Privacy Notice</p>
                <p className="inline">.</p>
              </div>
              <div className="mt-[12.65px] ml-[0.3rem]">
                <input type="checkbox" name="" id="" className="w-[13px] border-[#808080da] mr-[0.3rem]"/>
                <p className="inline text-[0.8rem]">Keep me signed in.</p>
                <p className="inline text-[0.8rem] text-[#0066C0]">  Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
