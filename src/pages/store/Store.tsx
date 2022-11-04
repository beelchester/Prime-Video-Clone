import axios from "axios"
import { useEffect, useState } from "react"
import instance from "../../API/axios"
import requests from "../../API/request"
import CardContainer from "../../common/components/Card/CardContainer"
import Navbar from "../../common/components/Navbar/Navbar"
const Store = () => {
  
  
  return (
    <>
    <Navbar/>
    <div className='bg-[#0F171E] h-[180rem] pt-[4.5rem] '>
    <CardContainer/>
    </div>
    </>
  )
}

export default Store