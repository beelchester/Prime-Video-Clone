import React, { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { TfiAlert } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import logo from "../../assets/logos/primevideoblack.png";
import {currentUser} from "../../features/currentUserSlice";
import {signedIn} from "../../features/signedInSlice";
import SigninFooter from "./components/SigninFooter";
export default function Signin  ()  {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [validEmail, setValidEmail] = useState(true)
  const [validData, setValidData] = useState(true)
  const [validPassword, setValidPassword] = useState(true)
  
  const User = useSelector((state:RootState)=> state.addUser.value)
  const current = useSelector((state:RootState)=> state.currentUser.value)
  const signedInDisp = useSelector((state:RootState)=> state.signedIn.value)
  console.log(signedInDisp)

  const dispatch = useDispatch()
  console.log(User)
  console.log(current)
  let userDetail

// useEffect(() => {
//   dispatch(currentUser([]))
//   dispatch(signedIn(false))
// }, [])
const navigate= useNavigate()


  function signUpHandler(){
    if(email===''||password===''){
    setValidData(false) 
    return}
    else{setValidData(true)}

    userDetail={email,password}
    for (var i = 0; i < User.length; i++) {
      if(userDetail.email===User[i].email){
        setValidEmail(true)
        console.log('email exist')
        break
      }
      else{
        setValidEmail(false)
        console.log('email dont exist')
      }
    }
      for (var i = 0; i < User.length; i++) {
      if(userDetail.email===User[i].email&&userDetail.password===User[i].password){
        setValidPassword(true)
        console.log('password exist')
        break
      }
      else{
        setValidPassword(false)
        console.log('password dont exist')
      }
    }
    User.map(e=>{  
    if(userDetail.email===e.email&&userDetail.password===e.password){
    dispatch(currentUser(e))
    dispatch(signedIn(true))
    setEmail('')
    setPassword('')
    navigate('/store')
  }
    })
    
  }

  return (
    <div>
      <div className="shadow text-black">
        <div className="flex justify-center pt-[0.85rem]">
          <img src={logo} />
        </div>
        <div className="flex justify-center items-center w-full min-h-[30.2rem] flex-col">
        {!validEmail||!validPassword||!validData? <div className="min-h-[4.65rem] w-[21.9rem] flex mt-5 mb-[14px] border border-[#c40000] rounded pb-[0.95rem]">
            <TfiAlert color="#c40000" size={'30px'} className="mt-[9px] ml-[18px]"/>
             <div className="ml-4">
              <h1 className="text-[#c40000] font-sans mt-[12px] text-[17px] font-[500]">There was a problem</h1>
              <ul>
              {!validEmail&&validData&&<li className="text-[12px] font-[500] mt-[2.5px]">We cannot find an account with that email address </li>}
              {validEmail&&!validPassword&&validData&&<li className="text-[12px] font-[500] mt-[2.5px]">Your password is incorrect </li>}
              {!validData&&<li className="text-[12px] font-[500] mt-[2.5px]">Please enter the data</li>}
              </ul>
            </div>
          </div>:''}
          <div className={` flex justify-center items-center rounded-[4px] w-[21.9rem] h-[27.4rem] ${!validEmail||!validPassword||!validData?'mb-[2rem]':'mb-[0.5rem]'}  border-[0.1px] border-[#b9b9b97c]`}>
            <div className="p-0 w-[18.5rem] h-full ">
              <h1 className="font-ptSans  mt-[0.95rem] text-[1.8rem] ">
                Sign in
              </h1>
              <h1 className="mt-[0.55rem] ml-[0.12rem] font-bold tracking-[-0.02em] text-[0.8rem]">
                Email or mobile phone number{" "}
              </h1>
              <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className={`border-[0.1px] rounded-[0.13rem] border-[#808080af]  mt-[0.15rem] w-full h-[1.95rem] focus:outline-none  focus:border-[rgb(236,109,4)] focus:border-[1.5px] focus:shadow-inputField text-[0.8rem] pl-[6px]`}
              />
              <div className="mt-[0.85rem] ml-[0.12rem] flex justify-between">
                <h1 className="font-bold tracking-[-0.5px] text-[0.8rem]">
                  Password
                </h1>
                <h1 className="tracking-[-0.1px] text-[0.8rem] text-[#0066C0] hover:text-[rgb(194,102,26)] hover:cursor-pointer hover:underline">
                  Forgot your password?
                </h1>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className={`border-[0.1px] rounded-[0.13rem] border-[#808080af]  mt-[0.15rem] w-full h-[1.95rem]  focus:outline-none focus:border-[rgb(236,109,4)] focus:border-[1.5px] focus:shadow-inputField text-[0.8rem] pl-[6px]`}
              />
              <button onClick={signUpHandler} className="border-[1px] border-[#30303085] rounded-[3px] mt-[1.35rem] font-ptSans text-[0.85rem] w-full h-[1.95rem] bg-yellowGradient1 hover:bg-yellowGradient2">
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
              <NavLink to={"/signup"}>
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

