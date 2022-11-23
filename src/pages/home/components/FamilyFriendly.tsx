import { NavLink } from "react-router-dom";
import familyfriendly from "../../../assets/images/Home/familyfriendly.jpg";

const FamilyFriendly: React.FC = () => {
  return (
    <div>
      <img src={familyfriendly} />
      <div className="absolute top-[139rem] mt-[5.4rem] ml-[4.3rem] w-[36rem] ">
        <h1 className="text-[2.57rem] font-sans font-[400]  ">
          Family Friendly
        </h1>
        <h1 className="font-sans  font-[300] mt-[1.2rem] text-[1.35rem]  leading-[1.6rem] ">
          With easy to use Parental Controls and a dedicated kids page, enjoy
          secure, ad-free kids entertainment. Kids can enjoy popular TV shows
          like Peppa Pig, Powerpuff Girls, and Chhota Bheem.
        </h1>
        <NavLink to={"/signin"}>
        <button className="text-white font-ptSans font-[500] text-[18.2px] h-[3.4rem] mt-[53px] w-[17.5rem]  rounded-[0.15rem] bg-[#0F79AF]">
          Get started
        </button>
        </NavLink>
      </div>
    </div>
  );
};

export default FamilyFriendly;
