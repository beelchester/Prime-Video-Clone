import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setMovie } from "../../../features/movieSlice";

interface props {
  movie: any;
}

const Card: React.FC<props> = ({ movie }) => {
  const [detail, setDetail] = useState(false);
  function detailTHandler() {
    setDetail(true);
  }
  function detailFHandler() {
    setDetail(false);
  }

  const dispatch = useDispatch();

  return (
    <NavLink to={"/detail"}>
      <div
        onMouseEnter={detailTHandler}
        onMouseLeave={detailFHandler}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
        className=" bg-cover bg-no-repeat bg-center rounded-sm w-[19.4rem] h-[10.78rem] mt-[0.4rem] mr-[0.5rem] relative"
      >
      {detail && (
        <div
          onMouseEnter={detailTHandler}
          onMouseLeave={detailFHandler}
          onClick={() => dispatch(setMovie(movie))}
          className=" font-[600]  bg-[#0a0a0a69]  w-[19.4rem] h-[11rem] hover:cursor-pointer flex items-end pb-5 pl-4 absolute top-0"
        >
          {movie.title || movie.name}
        </div>
      )}</div>
    </NavLink>
  );
};

export default Card;
