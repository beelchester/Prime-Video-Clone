import {IoIosArrowBack} from 'react-icons/io'
import"./slider.css"
function SampleNextArrow(props:any) {
      const { className, style, onClick } = props;
      return (
            <div
          className={`${className} hover:bg-[#00000079] bg-[#00000042] h-[173.8px] mt-[3.4px] w-[4rem] absolute right-[0px] z-20 `}
          style={{ ...style}}
          onClick={onClick}
          
          ></div>
      );
    }
    
    function SamplePrevArrow(props:any) {
      const { className, style, onClick } = props;
      return (
        <div
          className={`${className} hover:bg-[#00000079] bg-[#00000042] h-[173.8px] mt-[3.4px] w-[4rem] absolute left-[0px] z-20 `}
          style={{ ...style }}
          onClick={onClick} >
            <IoIosArrowBack size={"50px"}/>
          </div>
      );
    }

export const movieSliderSettings = {
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 5,
      infinite: true,
      speed: 300,
      lazyload: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      centerMode : true,
      centerPadding: "205px",
   
      
}