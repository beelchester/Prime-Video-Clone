import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { RootState } from "../../../app/store";
import familyfriendly from "../../../assets/images/Home/familyfriendly.jpg";

const FamilyFriendly: React.FC = () => {
  const signedInDisp = useSelector((state:RootState)=> state.signedIn.value)
  return (
    <div>
      <img src={familyfriendly} className={"2xl:w-[120rem]"} />
      <div className="absolute top-[139rem] mt-[5.4rem] 2xl:mt-[45rem] ml-[4.3rem] w-[36rem] ">
        <h1 className="text-[2.57rem] font-sans font-[400]  ">
          Family Friendly
        </h1>
        <h1 className="font-sans  font-[300] mt-[1.2rem] text-[1.35rem]  leading-[1.6rem] ">
          With easy to use Parental Controls and a dedicated kids page, enjoy
          secure, ad-free kids entertainment. Kids can enjoy popular TV shows
          like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
        </h1>
        <NavLink to={`${!signedInDisp?'/signin':'/store'}`}>
        <button className="text-white font-ptSans font-[500] text-[18.2px] h-[3.4rem] mt-[53px] w-[17.5rem]  rounded-[0.15rem] bg-[#0F79AF]">
          Get started
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default FamilyFriendly;
