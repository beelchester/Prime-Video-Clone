import {IoIosArrowBack} from 'react-icons/io'
import"./slider.css"
function MovieNextArrow(props:any) {
      const { className, style, onClick } = props;
      return (
            <div
          className={`${className}   hover:bg-[#00000079] bg-[#00000042] h-[173.8px] mt-[3.4px] w-[3rem] absolute right-[0px] z-20 `}
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
          className={`${className} 2xl:bg-transparent 2xl:hover:bg-transparent 2xl:h-[50px] 2xl:w-[4rem] hover:bg-[#00000079] bg-[#00000042] h-[280px] mt-[-4px] w-[3rem] absolute right-[0px] z-20 `}
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
          className={`${className} 2xl:bg-transparent 2xl:hover:bg-transparent 2xl:h-[50px] 2xl:w-[4rem] hover:bg-[#00000079] bg-[#00000042] h-[280px] mt-[-4px] w-[3rem] absolute left-[0px] z-20 `}
          style={{ ...style }}
          onClick={onClick} >
            <IoIosArrowBack size={"50px"}/>
          </div>}
            </>
      );
    }

export const movieSliderSettings = {
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      speed: 300,
      lazyload: true,
      nextArrow: <MovieNextArrow />,
      prevArrow: <MoviePrevArrow />,
      centerMode : true,
      centerPadding: "310px",
      // centerPadding: "205px",
      
      // responsive:[{breakpoint:1700,
      //   settings:{
      //   slidesToShow:1,
      //   slidesToScroll: 1,
      // infinite: true,
      // speed: 300,
      // centerPadding: "100px",

      // }
      // }]
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
   
      
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