import { NavLink, useLocation } from "react-router-dom";
import LogoWhite from "../../../assets/logos/primevideowhite.png";

import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";
import { useEffect, useState, useRef } from "react";
import AccountDropDown from "./AccountDropDown";
import CategDropDown from "./CategDropDown";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

const Navbar: React.FC = () => {
  const [accountDrop, setAccountDrop] = useState<boolean>(false);
  function accountDropHandler() {
    setAccountDrop((prev) => !prev);
  }

  const [searchField, setSearchField] = useState<boolean>(false);
  function searchFieldTHandler() {
    setSearchField(true);
  }
  const searchRef = useRef<HTMLButtonElement>(null);
  const searchRef2 = useRef<HTMLDivElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);

  const current = useSelector((state:RootState)=> state.currentUser.value)
  const signedInDisp = useSelector((state:RootState)=> state.signedIn.value)

console.log(current,signedInDisp)
  useEffect(() => {
    function refHandler(e: Event) {
      if (
        e.composedPath()[1] !== searchRef.current &&
        e.composedPath()[2] !== searchRef.current &&
        e.composedPath()[1] !== searchRef2.current
      )
        setSearchField(false);
      if (
        e.composedPath()[1] !== accountRef.current &&
        e.composedPath()[2] !== accountRef.current &&
        e.composedPath()[0] !== accountRef.current
      )
        setAccountDrop(false);

      // console.log(e.composedPath())
      // console.log(searchRef.current)
      // console.log(accountRef.current)
    }
    document.body.addEventListener("click", refHandler);
    return () => document.body.removeEventListener("click", refHandler);
  }, []);

  const [categColor, setCategColor] = useState<string>("text-[#DDE0E3]");
  const [categDrop, setCategDrop] = useState<boolean>(false);
  const [fontWeight, setFontWeight] = useState<number>(500);
  const location = useLocation();

  function categDropTHandler() {
    setCategColor("text-[white]");
    setCategDrop(true);
  }
  function categDropFHandler() {
    setCategColor("text-[#DDE0E3]");
    setCategDrop(false);
  }

  useEffect(() => {
    if (location.pathname === "/") {
      setFontWeight(() => 300);
    }
  }, []);

  return (
    <div
      className={`bg-[#1B242F] font-[${fontWeight}]  ${
        location.pathname === "/" ? "text-[1.05rem]" : "text-[1.03rem]"
      }  text-[#DDE0E3] h-[4.5rem] w-[100%] flex items-center fixed z-50 justify-between`}
    >
      <div className="flex items-center">
        <NavLink to={"/"}>
          <img
            src={LogoWhite}
            className={" w-[7.2rem] h-[39px] mb-[0.009px]  ml-[46.4px]"}
          />
        </NavLink>
        <NavLink to={"/"} className={"  ml-[1.4rem] mr-[0.49rem]"}>
          Home
        </NavLink>
        <NavLink
          to={"/store"}
          className={` mx-[0.485rem] ${
            location.pathname === "/store"
              ? "underline underline-offset-[5px] text-white font-[600]"
              : ""
          }`}
        >
          Store
        </NavLink>
        <NavLink
          to={"/channels"}
          className={`  mx-[0.47rem] ${
            location.pathname === "/channels"
              ? "underline underline-offset-[5px] text-white font-[600]"
              : ""
          }`}
        >
          Channels
        </NavLink>
        <button
          onMouseEnter={categDropTHandler}
          onMouseLeave={categDropFHandler}
          className={`  flex items-center mt-[0.1rem] ${categColor}   ml-[0.47rem]`}
        >
          <div className="h-[3rem] mt-[1.35rem] flex justify-start">
            Categories
          </div>
          <MdArrowDropDown
            size={"19px"}
            color={"#8197A4"}
            className=" ml-[0.1rem] mb-[0.1rem]  mr-[0.47rem] "
          />
        </button>
        {categDrop && (
          <CategDropDown
            categDropT={categDropTHandler}
            categDropF={categDropFHandler}
          />
        )}
        <NavLink to={`${!signedInDisp?'/signin':'/mystuff'}`} className={`ml-[0.6rem] ${
            location.pathname === "/mystuff"
              ? "underline underline-offset-[5px] text-white font-[600]"
              : null
          }`}>
          My Stuff
        </NavLink>
      </div>

      <div className="flex items-center mr-[2.75rem]">
        {!signedInDisp&&<NavLink to={"/signin"}>
          <button
            className={`text-white font-[${
              fontWeight === 500 ? 400 : 350
            }]  w-[${fontWeight === 500 ? 400 : 350}]   ${
              fontWeight === 500 ? "w-[7.9rem]" : "w-[7.7rem]"
            } h-[36px] rounded-[0.15rem] bg-[#0F79AF] hover:bg-[#159ee2] transition hover:ease-in-out`}
          >
            Try for free
          </button>
        </NavLink>}

        <div
          ref={searchRef2}
          id="search"
          className={` ${
            searchField ? "flex" : "hidden"
          }  pl-1 items-center w-[15.5rem] rounded-[3px] border-[#ccccccbb] bg-[#1B242F] border-[1px] h-[40px] fixed top-[1rem] ${!signedInDisp?'left-[57.4rem]':'left-[54rem]'}`}
        >
          <div style={{
              backgroundImage:
                "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxjaXJjbGUgaWQ9ImEiIGN4PSI4IiBjeT0iOCIgcj0iOCIvPjxtYXNrIGlkPSJiIiBtYXNrQ29udGVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCIgeT0iMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjx1c2Ugc3Ryb2tlPSIjRkZGIiBtYXNrPSJ1cmwoI2IpIiBzdHJva2Utd2lkdGg9IjQiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTEzLjQxNCAxMSA2LjM2NyA2LjM2N2EuOTk1Ljk5NSAwIDAgMS0uMDAzIDEuNDExYy0uMzkuMzktMS4wMy4zODUtMS40MS4wMDNMMTIgMTIuNDE0IDEzLjQxNCAxMVoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+)",
            }} className='text-white'></div>
          <input
            type="text"
            placeholder="Search"
            className="ml-1 placeholder:text-[#cccccc52] focus:outline-none text-white bg-[#1B242F]"
          />
        </div>

        {/* <div onClick={searchFieldTHandler} className="w-[26px] h-[26px] bg-black fixed left-[71rem]"></div> */}
        <button ref={searchRef} className="ml-5" onClick={searchFieldTHandler}>
          <AiOutlineSearch color={"#BBBEC1"} size={"26px"} />
        </button>
        <button className="flex  ml-[1.18rem] group">
          <div  style={{
              backgroundImage:
                "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjQ0NDIiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI5LjEiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0xMC41IDEuOHYxOC40TTEuOCAxMWgxOC40TTQuNiA0LjZjMCAxIDIuOSAxLjggNi40IDEuOCAzLjUgMCA2LjQtLjggNi40LTEuOE00LjYgMTcuNGMwLTEgMi45LTEuOCA2LjQtMS44IDMuNSAwIDYuNC44IDYuNCAxLjgiLz48ZWxsaXBzZSB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMTEgMCkiIHJ4PSI5LjIiIHJ5PSI0LjYiLz48L2c+PC9zdmc+)",
            }} className='h-[24px] w-[24px] bg-center bg-no-repeat  mt-[0.3rem]'></div>
          {/* <IoIosGlobe color={"#CCCCCC"} className="mt-[0.3rem]" size={"24px"}/> */}
          <h1 className="ml-[0.3rem] mt-[0.5rem] font-[500] text-[15.8px] text-[#CCCCCC] group-hover:text-white">
            EN
          </h1>
          <MdArrowDropDown
            size={"19px"}
            color={"#8197A4"}
            className=" ml-[0.25rem] mt-[0.55rem] mr-[0.22rem] "
          />
        </button>
        {accountDrop && <AccountDropDown accountDrop={accountDropHandler} />}
        <div
          ref={accountRef}
          onClick={accountDropHandler}
          className="flex items-end ml-3 hover:cursor-pointer group"
        >
          {/* <IoPersonOutline color={"#BBBEC1"} size={"24px"} /> */}
          <div
            style={{
              backgroundImage:
                "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIyMCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxjaXJjbGUgaWQ9ImEiIGN4PSI3LjUiIGN5PSI2IiByPSI2Ii8+PG1hc2sgaWQ9ImIiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgeD0iMCIgeT0iMCIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiNGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEpIj48cGF0aCBzdHJva2Utd2lkdGg9IjIiIGQ9Ik0xNC45NyAxOS4yNGMwLTQuNDc3LTMuMzUtOC4xMDctNy40ODUtOC4xMDdTMCAxNC43NjMgMCAxOS4yNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHVzZSBzdHJva2Utd2lkdGg9IjQiIG1hc2s9InVybCgjYikiIHhsaW5rOmhyZWY9IiNhIi8+PC9nPjwvc3ZnPg==)",
            }}
            className="h-[24px] w-[24px] bg-center bg-no-repeat opacity-[0.7] group-hover:opacity-[1] "
          ></div>
          {signedInDisp&& <h1 className="mx-2 font-[500]">{current.name}</h1>}
          <MdArrowDropDown
            size={"19px"}
            color={"#8197A4"}
            className=" ml-[0.1rem] mb-[0.1rem] mr-[0.47rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
