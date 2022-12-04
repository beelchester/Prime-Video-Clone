import { useEffect, useState } from "react";

import Card from "../../../common/components/Card/Card";


interface props{
  type: string
  list: any[] 
  text?: string
  channel?:number
}

const CardContainer: React.FC<props> = ({type, list, text="",channel=-1}) => {

 

  
  return (
    <div >
      <div className="font-sans  mt-[1.5rem] ml-[3rem] flex justify-start items-center  ">
        <h1 className="ml-[0.6rem] font-semibold text-[19px]">Watchlist</h1>
  <div className=" max-w-full " >
    {list?.map( movie  => movie?.backdrop_path!==null&&  <Card key={movie.id} movie={movie}/>)}
   </div>
      </div>
    </div>
  );
};

export default CardContainer;
