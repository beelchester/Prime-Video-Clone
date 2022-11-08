import Slider from "react-slick";
import { bannerSliderSettings } from "../../sliderSettings";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import"../../slider.css"
import { storeBanners } from "../../storeBanners";

const Banner = ({list}) => {
  console.log(list)
  return (
    <div className='h-[273px] w-full banner'>
      <Slider {...bannerSliderSettings} >
  {list?.map( image  => 
<div  className=" h-[273px] w-full  "> 
<img src={image} />
</div>
  )
      }
    </Slider> 
    </div>
  )
}

export default Banner