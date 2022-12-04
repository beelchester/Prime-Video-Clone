import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import instance from "../../API/axios"
import requests from "../../API/request"
import { RootState } from "../../app/store"
import Banner from "../../common/components/Banner/Banner"
import CardContainer from "../../common/components/Card/CardContainer"
import Footer from "../../common/components/Footer/Footer"
import Navbar from "../../common/components/Navbar/Navbar"
import { storeBanners } from "../../common/storeBanners"
import {addwatchlist} from "../../features/watchlistSlice";

const Store: React.FC = () => {

  const [trendingList, setTrendingList] = useState([])
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
  
  const [actionList, setActionList] = useState([])
  useEffect(() => {
    async function fetchData(){
      const request = await  instance.get(requests.fetchAction)
      setActionList(
        request.data.results
      )
      return request
    }
    fetchData()
  }, [])

  // const [romanceList, setRomanceList] = useState([])
  // useEffect(() => {
  //   async function fetchData(){
  //     const request = await  instance.get(requests.fetchRomance)
  //     setRomanceList(
  //       request.data.results
  //     )
  //     return request
  //   }
  //   fetchData()
  // }, [])

  const [comedyList, setComedyList] = useState([])
  useEffect(() => {
    async function fetchData(){
      const request = await  instance.get(requests.fetchComedy)
      setComedyList(
        request.data.results
      )
      return request
    }
    fetchData()
  }, [])

  const [popularList, setPopularList] = useState([])
  useEffect(() => {
    async function fetchData(){
      const request = await  instance.get(requests.fetchPopular)
      setPopularList(
        request.data.results
      )
      return request
    }
    fetchData()
  }, [])

  const [horrorList, setHorrorList] = useState([])
  useEffect(() => {
    async function fetchData(){
      const request = await  instance.get(requests.fetchHorror)
      setHorrorList(
        request.data.results
      )
      return request
    }
    fetchData()
  }, [])

  const [familyList, setFamilyList] = useState([])
  useEffect(() => {
    async function fetchData(){
      const request = await  instance.get(requests.fetchFamily)
      setFamilyList(
        request.data.results
      )
      return request
    }
    fetchData()
  }, [])

  const [SFList, setSFList] = useState([])
  useEffect(() => {
    async function fetchData(){
      const request = await  instance.get(requests.fetchSF)
      setSFList(
        request.data.results
      )
      return request
    }
    fetchData()
  }, [])

  const [dramaList, setDramaList] = useState([])
  useEffect(() => {
    async function fetchData(){
      const request = await  instance.get(requests.fetchDrama)
      setDramaList(
        request.data.results
      )
      return request
    }
    fetchData()
  }, [])

  const [animationList, setAnimationList] = useState([])
  useEffect(() => {
    async function fetchData(){
      const request = await  instance.get(requests.fetchAnimation)
      setAnimationList(
        request.data.results
      )
      return request
    }
    fetchData()
  }, [])

  const [documentaryList, setDocumentaryList] = useState([])
  useEffect(() => {
    async function fetchData(){
      const request = await  instance.get(requests.fetchDocumentary)
      setDocumentaryList(
        request.data.results
      )
      return request
    }
    fetchData()
  }, [])
  const watchlist = useSelector((state:RootState)=> state.watchlist.value)
  console.log(watchlist)

  
  return (
    <>
    <Navbar/>
    <div className='bg-[#0F171E]  pt-[4.5rem] '>
    <Banner list={storeBanners}/>
    <CardContainer type="rent" list={trendingList} text="New release movies"/>
    <CardContainer type="rent" list={actionList} text="Action and adventure movies"/>
    {/* <CardContainer type="rent" list={romanceList} text="Romance movies"/> */}
    <CardContainer type="rent" list={familyList} text="Kids and family movies"/>
    <CardContainer type="rent" list={dramaList} text="Drama movies"/>
    <CardContainer type="rent" list={SFList} text="Science fiction movies"/>
    <CardContainer type="rent" list={comedyList} text="Comedy movies"/>
    <CardContainer type="rent" list={popularList} text="Most popular"/>
    <CardContainer type="rent" list={horrorList} text="Horror movies"/>
    <CardContainer type="rent" list={animationList} text="Animated movies"/>
    <CardContainer type="rent" list={documentaryList} text="Documentary movies"/>
    <Footer/>
    </div>
    </>
  )
}

export default Store