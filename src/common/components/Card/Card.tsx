import React, { useState } from "react";
import { NavLink} from "react-router-dom";

interface props{
  movie:any
}

const Card:React.FC<props> = ({movie}) => {

const [detail, setDetail] = useState(false)
function detailTHandler(){
  setDetail(true)
  console.log(movie)
}
function detailFHandler(){
  setDetail(false)
  console.log(movie)
}

  return (
    <NavLink to={"/detail"}>
    <div
    onMouseEnter={detailTHandler}
    onMouseLeave={detailFHandler}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
      
      className=" bg-cover bg-no-repeat bg-center rounded-sm w-[19.4rem] h-[10.78rem] mt-[0.4rem] mr-[0.5rem]"
    ></div>
    {detail&&(<div onMouseEnter={detailTHandler}
    onMouseLeave={detailFHandler} className=" absolute top-[6px] font-[600]  bg-[#0a0a0a69]  w-[19.4rem] h-[11rem] hover:cursor-pointer flex items-end pb-5 pl-4">{movie.title||movie.name}</div>)}
    </NavLink>
  );
};

export default Card;
