import React, { useState , useEffect, useRef} from "react";
import {  IoMdArrowDropright } from "react-icons/io";
import {  TfiAlert } from "react-icons/tfi";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logos/primevideoblack.png";
import SigninFooter from "../signin/components/SigninFooter";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../../app/store";
import {signup} from "../../API/auth"
const Signup: React.FC = () => {

  const dispatch = useDispatch()
const navigate= useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const [error, setError] = useState("")
  const [validEmail, setValidEmail] = useState(true)
  const [validPass, setValidPass] = useState(true)
  const [validPassMatch, setValidPassMatch] = useState(true)
  const [validName, setValidName] = useState(true)
let user  
 async function signUpHandler(e:any){
    e.preventDefault()
    if ( !email || !password || !rePassword) {
      return
    }
    if (name!==''){
      setValidName(true)
    }
    else{
      setValidName(false)
      return
    }
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( re.test(email) ) {
        setValidEmail(true)
    }
      else {
        setValidEmail(false)
        return
      }
      
      if(password.length>=6){
      setValidPass(true)
    }
    else{
      setValidPass(false)
      return
    }
      if(password === rePassword){
      setValidPassMatch(true)
    }
    else{
      setValidPassMatch(false)
      return
    }
    try {
      await  signup(name,email,password)
      setName('')
      setEmail('')
      setPassword('')
      setRePassword('')
      alert("Successfully created the account")
      navigate('/signin')
    } catch (error) {
      setError((error as any).response.data.message)
    }
   
      
  }
  const User = useSelector((state:RootState)=> state.addUser.value)


  return (
    <div>
      <div className="shadow text-black">
        <div className="flex justify-center pt-[0.85rem]">
          <img src={logo} />
        </div>
        <div className="flex justify-center items-center flex-col w-full min-h-[35.5rem] mt-[-2px] ">
        {!validName||!validEmail||!validPass||!validPassMatch||error!==''? <div className="min-h-[4.65rem] w-[21.9rem] flex mt-5 mb-[14px] border border-[#c40000] rounded pb-[0.95rem]">
            <TfiAlert color="#c40000" size={'30px'} className="mt-[9px] ml-[18px]"/>
             <div className="ml-4">
              <h1 className="text-[#c40000] font-sans mt-[12px] text-[17px] font-[500]">There was a problem</h1>
              <ul>
              {!validName&&<li className="text-[12px] font-[500] mt-[2.5px]">Enter your name</li>}
              {!validEmail&&<li className="text-[12px] font-[500] ">Enter a valid email address</li>}
              {!validPass&&<li className="text-[12px] font-[500] ">Password must be at least 6 characters</li>}
              {!validPassMatch&&<li className="text-[12px] font-[500] ">Passwords must match</li>}
              {error!==''&&<li className="text-[12px] font-[500] ">{error}</li>}
              </ul>
            </div>
          </div>:''}
          <div className= {`flex justify-center items-center rounded-[4px] w-[21.9rem] h-[32.45rem]  ${!validEmail||!validPass||!validPassMatch?'mb-[1.5rem]':'mb-[0.5rem]'} border-[0.1px] border-[#b9b9b97c]`}>
            <div className=" w-[19.5rem] h-full ">
              <h1 className="font-ptSans  mt-[0.5rem] text-[1.8rem] ">
              Create account
              </h1>
              <h1 className="mt-[0.55rem] ml-[0.12rem] font-bold tracking-[-0.02em] text-[0.8rem]">
                Your name{" "}
              </h1>
              <input
                type="text"
                value={name}
                placeholder={'First and last name'}
                onChange={(e)=>setName(e.target.value.trim())}
                className="border-[0.1px] rounded-[0.13rem] border-[#808080af]  mt-[0.15rem] w-full h-[1.95rem]
                focus:outline-none focus:border-[rgb(236,109,4)] focus:border-[1.5px] focus:shadow-inputField text-[0.8rem] pl-[6px] placeholder:text-[#686868]
                "
              />
              <div className="mt-[0.85rem] ml-[0.12rem] flex justify-between">
                <h1 className="font-bold tracking-[-0.5px] text-[0.8rem]">
                  Email
                </h1>
              </div>
              <input
                type="text"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="border-[0.1px] rounded-[0.13rem] border-[#808080af]  mt-[0.15rem] w-full h-[1.95rem]
                focus:outline-none focus:border-[rgb(236,109,4)] focus:border-[1.5px] focus:shadow-inputField text-[0.8rem] pl-[6px]
                
                "
              />
              <div className="mt-[0.85rem] ml-[0.12rem] flex justify-between">
                <h1 className="font-bold tracking-[-0.5px] text-[0.8rem]">
                  Password
                </h1>
              </div>
              <input
                type="password"
                value={password}
                placeholder={'At least 6 characters'}
                onChange={(e)=>setPassword(e.target.value)}
                className="border-[0.1px] rounded-[0.13rem] border-[#808080af]  mt-[0.15rem] w-full h-[1.95rem]
                focus:outline-none focus:border-[rgb(236,109,4)] focus:border-[1.5px] focus:shadow-inputField text-[0.8rem] pl-[6px] placeholder:text-[#686868]
                
                "
              />
              <div className="mt-[0.85rem] ml-[0.12rem] flex justify-between">
                <h1 className="font-bold tracking-[-0.5px] text-[0.8rem]">
                  Re-enter Password
                </h1>
              </div>
              <input
                type="password"
                value={rePassword}
                onChange={(e)=>setRePassword(e.target.value)}
                className="border-[0.1px] rounded-[0.13rem] border-[#808080af]  mt-[0.15rem] w-full h-[1.95rem]
                focus:outline-none focus:border-[rgb(236,109,4)] focus:border-[1.5px] focus:shadow-inputField text-[0.8rem] pl-[6px]
                
                "
              />
              <button onClick={(e)=>signUpHandler(e)} className="border-[1px] border-[#30303085] rounded-[3px] mt-[1.35rem] font-ptSans text-[0.85rem] w-full h-[1.95rem] bg-yellowGradient1 hover:bg-yellowGradient2">
                Create your Amazon account
              </button>

              <div className="text-[0.75rem]  mt-[1.1rem] font-ptSans ">
                <p className="inline tracking-[0.03em]">
                By creating an account, you agree to the Amazon {" "}
                </p>
                <p className="inline text-[#0066C0] tracking-[0.03em] hover:text-[rgb(194,102,26)] hover:cursor-pointer hover:underline">
                  {" "}
                  Conditions of Use and Privacy Notice
                </p>
                <p className="inline">.</p>
              </div>
            <div className="flex justify-center">
            <div className="border-[0.05px] w-[70%] mt-8 shadow-lg border-[#b9b9b93a]"></div>
            </div>
            <div className="text-[0.74rem] mt-[1.5rem]">
            <p className="inline tracking-[0.03em]">
            Already have an account? {" "}
                </p>
                <NavLink to={"/signin"}>

                <div className="group inline cursor-pointer">
                <p className="inline text-[#0066C0] tracking-[0.03em] hover:text-[rgb(194,102,26)] hover:cursor-pointer hover:underline">
                  {" "}
                  Sign in  
                </p>
                <IoMdArrowDropright size={"12px"} color={'#007ac0'} className=" ml-[0.3rem] mb-[0.15rem]   inline"/>
            </div>
                </NavLink>
                </div>
                
              </div>
          </div>
        </div>
      </div>
      <SigninFooter />
    </div>
  );
};

export default Signup;
