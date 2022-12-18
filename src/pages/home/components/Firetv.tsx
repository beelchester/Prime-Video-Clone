import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../../app/store";
import firetv from "../../../assets/images/Home/firetv.jpg";

const Firetv: React.FC = () => {
  const signedInDisp = useSelector((state:RootState)=> state.signedIn.value)
  return (
    <div className="mt-[708px] 2xl:mt-[1000px]  text-white" >
      <img src={firetv} className={"2xl:w-[120rem]"} />
      <div className="absolute top-[104rem] mt-[5.6rem] 2xl:mt-[32rem] ml-[46.5rem] 2xl:ml-[62rem] pr-[88px] ">
      <h1 className="text-[2.57rem] font-sans font-[400]  ">Even better with Fire TV Stick</h1>
      <h1 className="font-sans  font-[300] mt-[1.2rem] text-[1.3rem] leading-[1.6rem] ">The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.</h1>
      <NavLink to={`${!signedInDisp?'/signin':'/store'}`}>
      <button className="text-white font-ptSans font-[500] text-[18.2px] h-[3.3rem] mt-[55px] w-[17.5rem]  rounded-[0.15rem] bg-[#0F79AF]">
        Get started
      </button>
      </NavLink>
      </div>
    </div>
  )
}

export default Firetv