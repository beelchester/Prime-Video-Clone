function SampleNextArrow(props:any) {
      const { className, style, onClick } = props;
      return (
            <div
          className={`${className} hover:bg-[#0000006b] h-[11rem] mt-1 w-[4rem] absolute right-[19px] z-20 pt-[4.8rem] pl-[1.3rem]`}
          style={{ ...style}}
          onClick={onClick}
          
          ></div>
      );
    }
    
    function SamplePrevArrow(props:any) {
      const { className, style, onClick } = props;
      return (
        <div
          className={`${className} hover:bg-[#0000006b] h-[11rem] mt-1 w-[4rem] absolute left-[0px] z-20 pt-[4.8rem] pl-[1.3rem]`}
          style={{ ...style }}
          onClick={onClick} >
          </div>
      );
    }

export const movieSliderSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      speed: 500,
      lazyload: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      centerMode : true,
      centerPadding: "205px",
      
}