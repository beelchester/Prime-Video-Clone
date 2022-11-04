import { useEffect, useState } from "react";
import instance from "../../../API/axios";
import requests from "../../../API/request";
import Card from "./Card";


const CardContainer = () => {
  const [trendingList, setTrendingList] = useState()
  useEffect(() => {
    async function fetchData(){
      const request = await  instance.get(requests.fetchTrending)
      setTrendingList(
        request.data.results
      )
      return request
    }
    fetchData()
  }, [])
  
  console.log(trendingList)
  return (
    <>
      <div className="font-sans  mt-[1.5rem] ml-[3rem] flex justify-start items-center  ">
        <h1 className="text-lg">RENT</h1>
        <h1 className="ml-[0.6rem] font-semibold text-[19px]">New release movies</h1>
        <h1 className="ml-[0.6rem] text-[0.82rem] text-[#74ccff]">See more</h1>
      </div>
<div className="grid grid-flow-col overflow-scroll ml-[3.1rem]" >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
</div>
    </>
  );
};

export default CardContainer;
