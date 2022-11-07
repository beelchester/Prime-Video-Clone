import React from "react";

const Card = (props: any) => {
  return (
    <div
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${props.bg}")`,
      }}
      
      className=" bg-cover bg-no-repeat bg-center rounded-sm w-[19.4rem] h-[10.78rem] mt-[0.4rem] mr-[0.5rem]"
    ></div>
  );
};

export default Card;
