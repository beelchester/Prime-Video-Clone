import Slider from "react-slick";
import { bannerSliderSettings } from "../../sliderSettings";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import"../../slider.css"
import { storeBanners } from "../../storeBanners";
import ImageContainer from "./ImageContainer";

interface props {
  list: string[]
}
const Banner: React.FC<props> = ({list}) => {
  // console.log(list)



  return (
    <div className='h-[273px] w-full 2xl:w-[120rem] banner 2xl:mb-[5.5rem]'>
      <Slider {...bannerSliderSettings} >
  {list?.map( image  =>  <ImageContainer key={list.indexOf(image)} image={image}/>

  )
      }
    </Slider> 
    </div>
  )
}

export default Banner