import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/primevideoblack.png";
import SigninFooter from "../signin/components/SigninFooter";
const Signin: React.FC = () => {
  return (
    <div>
      <div className="shadow text-black">
        <div className="flex justify-center pt-[0.85rem]">
          <img src={logo} />
        </div>
        <div className="flex justify-center items-center w-full h-[30.2rem]">
          <div className=" flex justify-center items-center rounded-[4px] w-[21.9rem] h-[27.4rem] mb-[0.5rem] border-[0.1px] border-[#b9b9b97c]">
            <div className=" w-[19.5rem] h-full ">
              <h1 className="font-ptSans  mt-[0.5rem] text-[1.8rem] ">
              Create account
              </h1>
              <h1 className="mt-[0.55rem] ml-[0.12rem] font-bold tracking-[-0.02em] text-[0.8rem]">
                Your name{" "}
              </h1>
              <input
                type="text"
                className="border-[0.1px] rounded-[0.13rem] border-[#808080af]  mt-[0.15rem] w-full h-[1.95rem]
                focus:outline-none focus:border-[rgb(236,109,4)] focus:border-[1.5px] focus:shadow-inputField
                "
              />
              <div className="mt-[0.85rem] ml-[0.12rem] flex justify-between">
                <h1 className="font-bold tracking-[-0.5px] text-[0.8rem]">
                  Email
                </h1>
              </div>
              <input
                type="text"
                className="border-[0.1px] rounded-[0.13rem] border-[#808080af]  mt-[0.15rem] w-full h-[1.95rem]
                focus:outline-none focus:border-[rgb(236,109,4)] focus:border-[1.5px] focus:shadow-inputField
                
                "
              />
              <div className="mt-[0.85rem] ml-[0.12rem] flex justify-between">
                <h1 className="font-bold tracking-[-0.5px] text-[0.8rem]">
                  Password
                </h1>
              </div>
              <input
                type="text"
                className="border-[0.1px] rounded-[0.13rem] border-[#808080af]  mt-[0.15rem] w-full h-[1.95rem]
                focus:outline-none focus:border-[rgb(236,109,4)] focus:border-[1.5px] focus:shadow-inputField
                
                "
              />
              <div className="mt-[0.85rem] ml-[0.12rem] flex justify-between">
                <h1 className="font-bold tracking-[-0.5px] text-[0.8rem]">
                  Re-enter Password
                </h1>
              </div>
              <input
                type="text"
                className="border-[0.1px] rounded-[0.13rem] border-[#808080af]  mt-[0.15rem] w-full h-[1.95rem]
                focus:outline-none focus:border-[rgb(236,109,4)] focus:border-[1.5px] focus:shadow-inputField
                
                "
              />
              <button className="border-[1px] border-[#30303085] rounded-[3px] mt-[1.35rem] font-ptSans text-[0.85rem] w-full h-[1.95rem] bg-yellowGradient1 hover:bg-yellowGradient2">
                Sign in
              </button>

              <div className="text-[0.75rem]  mt-[1.1rem] font-ptSans ">
                <p className="inline tracking-[0.03em]">
                  By continuing, you agree to the Amazon{" "}
                </p>
                <p className="inline text-[#0066C0] tracking-[0.03em] hover:text-[rgb(194,102,26)] hover:cursor-pointer hover:underline">
                  {" "}
                  Conditions of Use and Privacy Notice
                </p>
                <p className="inline">.</p>
              </div>
              <div className="mt-[12.65px] ml-[0.3rem]">
                <label>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="w-[13px] border-[#808080da] mr-[0.3rem]"
                  />
                  <p className="inline text-[0.8rem]">Keep me signed in. </p>
                </label>
                <div className="group inline cursor-pointer">
                <p className="inline text-[0.8rem] text-[#0066C0] group-hover:text-[rgb(194,102,26)] group-hover:underline">
                  Details
                </p>
                <MdArrowDropDown size={"17px"} color={'#5a5a5a'} className=" ml-[0.1rem] mb-[0.15rem]   inline"/>
                </div>
                
              </div>
              <div className=" h-10 flex items-center mt-[16px]">
                <div className="w-full h-[1px] bg-[#b6b6b685]"></div>
                <div className="w-full h-5 bg-[white] flex items-end justify-center mx-1">
                  <h1 className="text-[11.5px] mb-[0.5px] text-[#464646da]">
                    New to Amazon?
                  </h1>
                </div>
                <div className="w-full h-[1px] bg-[#b6b6b685]"></div>
              </div>
              <NavLink to={"/signout"}>
              <button className=" w-full h-[31px] border-[#53535385] border-[1px] rounded-[3px] bg-grayGradient hover:bg-none hover:bg-gray-200">
                <h1 className="text-[12.5px] ">Create your Amazon account</h1>
              </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <SigninFooter />
    </div>
  );
};

export default Signin;
