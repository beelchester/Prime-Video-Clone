import { useEffect, useState } from "react";
import instance from "../../../API/axios";
import requests from "../../../API/request";
import Card from "./Card";
import Slider from "react-slick";
import { movieSliderSettings } from "../../sliderSettings";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import"../../slider.css"

import { channelLogos } from "../../channelBanners";

const CardContainer = ({type, list, text="",channel}) => {

 

  
  return (
    <>
      <div className="font-sans  mt-[1.5rem] ml-[3rem] flex justify-start items-center  ">
        {type=="rent"&&<h1 className="text-lg">RENT</h1>}
        {type=="channel"&&<img src={channelLogos[channel]} className="max-w-[170px]"/>}
        {<h1 className="ml-[0.6rem] font-semibold text-[19px]">{type=="rent"?text:"Most popular"}</h1>}
        <h1 className="ml-[0.6rem] text-[0.82rem] text-[#74ccff] hover:cursor-pointer hover:text-[#99d8fd] transition hover:ease-in">See more</h1>
      </div>
{/* <div className="grid grid-flow-col overflow-scroll ml-[3.1rem]" >
  {list?.map( movie  => movie?.backdrop_path!==null&& movie?.adult===false&& <Card bg={movie?.backdrop_path}/>)}
</div> */}
{/* ml-[3.1rem] */}
<div className="card-slider">
<div className=" max-w-full relative " >
  <Slider {...movieSliderSettings} >

  {list?.map( movie  => movie?.backdrop_path!==null&&  <Card bg={movie?.backdrop_path}/>)}
  </Slider> 
</div>
   </div>
  
    </>
  );
};

export default CardContainer;
