import lionsgate from "../../../assets/images/Home/lionsgate.png";
import discovery from "../../../assets/images/Home/discovery.png";
import docubay from "../../../assets/images/Home/docubay.png";
import eros from "../../../assets/images/Home/eros.png";
import hayu from "../../../assets/images/Home/hayu.png";
import hoichoi from "../../../assets/images/Home/hoichoi.png";
import manorama from "../../../assets/images/Home/manorama.png";
import mubi from "../../../assets/images/Home/mubi.png";
import shorts from "../../../assets/images/Home/shorts.png";

const FavChannels: React.FC = () => {
  return (
    <div className="absolute h-[537px] 2xl:mt-[31rem] text-black w-full flex bg-[white] mt-[10.7rem]">
      <div className="h-full w-[50%] ">
        <div className="mt-[80px] pl-[70px] pr-[50px] leading-[50px] ">
          <h1 className="text-[2.57rem] font-sans font-[400] tracking-wide">
            Your favorite channels all in one place
          </h1>
          <h1 className="font-openSans  font-[300] mt-[1.3rem] text-[1.51rem] leading-7 tracking-[-0.015em]">
            With Prime Video Channels, find shows and movies from your favorite
            channels all in one place. Enjoy with an add-on subscription to
            Channels of your choice
          </h1>
        </div>
      </div>
      <div className="h-full w-[50%] ">
        <div className="mt-[55px] ml-[3px] 2xl:px-[7rem] h-[80%] grid grid-cols-3 w-[90%]">
          <button>
            <div className="hover:shadow-favChannel w-[12.5rem]">
              <img src={lionsgate} className="w-[12.5rem] " />
            </div>
          </button>
          <button>
            <div className="hover:shadow-favChannel w-[12.5rem]">
              <img src={discovery} className="w-[12.5rem] " />
            </div>
          </button>
          <button>
            <div className="hover:shadow-favChannel w-[12.5rem]">
              <img src={eros} className="w-[12.5rem]" />
            </div>
          </button>
          <button>
            <div className="hover:shadow-favChannel w-[12.5rem]">
              <img src={hoichoi} className="w-[12.5rem]" />
            </div>
          </button>
          <button>
            <div className="hover:shadow-favChannel w-[12.5rem]">
              <img src={docubay} className="w-[12.5rem]" />
            </div>
          </button>
          <button>
            <div className="hover:shadow-favChannel w-[12.5rem]">
              <img src={shorts} className="w-[12.5rem]" />
            </div>
          </button>
          <button>
            <div className="hover:shadow-favChannel w-[12.5rem]">
              <img src={mubi} className="w-[12.5rem]" />
            </div>
          </button>
          <button>
            <div className="hover:shadow-favChannel w-[12.5rem]">
              <img src={manorama} className="w-[12.5rem]" />
            </div>
          </button>
          <button>
            <div className="hover:shadow-favChannel w-[12.5rem]">
              <img src={hayu} className="w-[12.5rem]" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavChannels;
