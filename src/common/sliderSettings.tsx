import {IoIosArrowBack} from 'react-icons/io'
import"./slider.css"
function MovieNextArrow(props:any) {
      const { className, style, onClick } = props;
      return (
            <div
          className={`${className} hover:bg-[#00000079] bg-[#00000042] h-[173.8px] mt-[3.4px] w-[3rem] absolute right-[0px] z-20 `}
          style={{ ...style}}
          onClick={onClick}
          
          ></div>
      );
    }
    
    function MoviePrevArrow(props:any) {
      const { className, style, onClick } = props;
      return (
        <div
          className={`${className} hover:bg-[#00000079] bg-[#00000042] h-[173.8px] mt-[3.4px] w-[3rem] absolute left-[0px] z-20 `}
          style={{ ...style }}
          onClick={onClick} >
            <IoIosArrowBack size={"50px"}/>
          </div>
      );
    }

function BannerNextArrow(props:any) {
      const { className, style, onClick,currentSlide, slideCount } = props;
      // console.log(slideCount)
      return (
        <>
        {currentSlide!==slideCount-1 &&
            <div
          className={`${className} hover:bg-[#00000079] bg-[#00000042] h-[273px] mt-[-4px] w-[3rem] absolute right-[0px] z-20 `}
          style={{ ...style}}
          onClick={onClick}
          ></div>}
          </>
      );
    }
    
    function BannerPrevArrow(props:any) {
      const { className, style, onClick, currentSlide } = props;
      return (
        <>{currentSlide!==0&&
        <div
          className={`${className} hover:bg-[#00000079] bg-[#00000042] h-[273px] mt-[-4px] w-[3rem] absolute left-[0px] z-20 `}
          style={{ ...style }}
          onClick={onClick} >
            <IoIosArrowBack size={"50px"}/>
          </div>}
            </>
      );
    }

export const movieSliderSettings = {
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      speed: 300,
      lazyload: true,
      nextArrow: <MovieNextArrow />,
      prevArrow: <MoviePrevArrow />,
      centerMode : true,
      centerPadding: "205px",
   
      
}
export const bannerSliderSettings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      speed: 300,
      lazyload: true,
      nextArrow: <BannerNextArrow />,
      prevArrow: <BannerPrevArrow />,
     
}