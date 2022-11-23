import { NavLink } from "react-router-dom";
import LogoWhite from "../../../assets/logos/primevideowhite.png";

import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";
import { useEffect, useState, useRef} from "react";
import AccountDropDown from "./AccountDropDown";
import CategDropDown from "./CategDropDown";

const Navbar: React.FC = () => {
  const [accountDrop, setAccountDrop] = useState<boolean>(false);
  function accountDropHandler() {
    setAccountDrop((prev) => !prev);
  }
  function accountDropHandlerF() {
    setAccountDrop(false);
  }

  const [searchField, setSearchField] = useState<boolean>(false);
  function searchFieldTHandler() {
    setSearchField(true);
  }
  const searchRef = useRef<HTMLButtonElement>(null)
  const searchRef2 = useRef<HTMLDivElement>(null)
  useEffect(() => {
    function searchFieldFHandler(e:Event) {
      if(e.composedPath()[1] !== searchRef.current && e.composedPath()[2] !== searchRef.current && e.composedPath()[1] !== searchRef2.current)
      setSearchField(false);
      console.log(e.composedPath()[1])
      console.log(searchRef.current)
    }
    document.body.addEventListener('click',searchFieldFHandler)
    return() => document.body.removeEventListener('click',searchFieldFHandler)
  }, [])
  
  const [categFont, setCategFont] = useState<number>(300)
  const [categDrop, setCategDrop] = useState<boolean>(false)

  function categDropHandler() {
    setCategFont(400)
    setCategDrop(true)
  }

  useEffect(() => {
    categDropHandler()
  
    
  }, [])
  

  

  return (
    <div  className="bg-[#1B242F] text-[#DDE0E3] h-[4.5rem] w-[100%] flex items-center fixed z-50">
      <NavLink to={"/"}>
        <img
          src={LogoWhite}
          className={" w-[7.2rem] h-[39px] mb-[0.009px]  ml-[46.4px]"}
        />
      </NavLink>
      <NavLink
        to={"/"}
        className={"font-[300] text-[1.05rem] ml-[1.4rem] mr-[0.49rem]"}
      >
        Home
      </NavLink>
      <NavLink
        to={"/store"}
        className={"font-[300] text-[1.05rem] mx-[0.485rem]"}
      >
        Store
      </NavLink>
      <NavLink
        to={"/channels"}
        className={"font-[300] text-[1.05rem] mx-[0.47rem]"}
      >
        Channels
      </NavLink>
      <button className={`flex items-center mt-[0.1rem] font-[${categFont}]  font-sans  text-[1.05rem] ml-[0.47rem]`}>
        Categories
        <MdArrowDropDown
          size={"19px"}
          color={"#8197A4"}
          className=" ml-[0.1rem] mb-[0.1rem]  mr-[0.47rem] "
        />
      </button>
      {categDrop&&<CategDropDown/>}
      <NavLink
        to={"/signin"}
        className={"font-[300] text-[1.05rem] ml-[0.6rem]"}
      >
        My Stuff
      </NavLink>
      <NavLink to={"/signin"} className="ml-[26.55rem]">
        <button className="text-white font-[350] text-[1.05rem]  w-[7.7rem] h-[36px] rounded-[0.15rem] bg-[#0F79AF]">
          Try for free
        </button>
      </NavLink>
      {searchField && (
        <div ref={searchRef2}  id="search" className=" transition ease-in-out pl-1 flex items-center w-[15.5rem] rounded-[3px] border-[#ccccccbb] bg-[#1B242F] border-[1px] h-[40px] fixed top-[1rem] left-[57.4rem]">
        <AiOutlineSearch color={"white"} size={"26px"} />
        <input type="text" placeholder="Search" className="ml-1 placeholder:text-[#cccccc52] focus:outline-none text-white bg-[#1B242F]"/>
        </div>
      )}
      {/* <div onClick={searchFieldTHandler} className="w-[26px] h-[26px] bg-black fixed left-[71rem]"></div> */}
      <button ref={searchRef} className="ml-5" onClick={searchFieldTHandler} >
        <AiOutlineSearch color={"#BBBEC1"} size={"26px"} />
      </button>
      <button className="flex items-end ml-[1.18rem]">
        <IoIosGlobe color={"#CCCCCC"} size={"24px"} />
        <h1 className="ml-[0.3rem]  font-[600] text-[15.3px] text-[#CCCCCC] ">
          EN
        </h1>
        <MdArrowDropDown
          size={"19px"}
          color={"#8197A4"}
          className=" ml-[0.1rem] mb-[0.1rem] mr-[0.47rem] "
        />
      </button>
      {accountDrop && <AccountDropDown accountDrop={accountDropHandlerF} />}
      <div
        onClick={accountDropHandler}
        className="flex items-end ml-3 hover:cursor-pointer"
      >
        <IoPersonOutline color={"#BBBEC1"} size={"24px"} />
        <MdArrowDropDown
          size={"19px"}
          color={"#8197A4"}
          className=" ml-[0.1rem] mb-[0.1rem] mr-[0.47rem] "
        />
      </div>
    </div>
  );
};

export default Navbar;
