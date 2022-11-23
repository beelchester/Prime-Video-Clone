import { useState, useEffect } from 'react'
import instance from '../../API/axios'
import requests from '../../API/request'
import { channelBanners } from '../../common/channelBanners'
import Banner from '../../common/components/Banner/Banner'
import CardContainer from '../../common/components/Card/CardContainer'
import Footer from '../../common/components/Footer/Footer'
import Navbar from '../../common/components/Navbar/Navbar'

const Channels: React.FC = () => {
  const [discoveryList, setDiscoveryList] = useState([])
  useEffect(() => {
    async function fetchData(){
      const request = await  instance.get(requests.fetchDiscovery)
      setDiscoveryList(
        request.data.results
      )
      return request
    }
    fetchData()
  }, [])

  const [erosList, setErosList] = useState([])
  useEffect(() => {
    async function fetchData(){
      const request = await  instance.get(requests.fetchEros)
      setErosList(
        request.data.results
      )
      return request
    }
    fetchData()
  }, [])

  const [hoichoiList, setHoichoiList] = useState([])
  useEffect(() => {
    async function fetchData(){
      const request = await  instance.get(requests.fetchHoichoi)
      setHoichoiList(
        request.data.results
      )
      return request
    }
    fetchData()
  }, [])
  const [lionsList, setLionsList] = useState([])
  useEffect(() => {
    async function fetchData(){
      const request = await  instance.get(requests.fetchLions)
      setLionsList(
        request.data.results
      )
      return request
    }
    fetchData()
  }, [])
  const [manoramaList, setManoramaList] = useState([])
  useEffect(() => {
    async function fetchData(){
      const request = await  instance.get(requests.fetchManorama)
      setManoramaList(
        request.data.results
      )
      return request
    }
    fetchData()
  }, [])
  const [mubiList, setMubiList] = useState([])
  useEffect(() => {
    async function fetchData(){
      const request = await  instance.get(requests.fetchMubi)
      setMubiList(
        request.data.results
      )
      return request
    }
    fetchData()
  }, [])
  const [shortstvList, setShortstvList] = useState([])
  useEffect(() => {
    async function fetchData(){
      const request = await  instance.get(requests.fetchShortstv)
      setShortstvList(
        request.data.results
      )
      return request
    }
    fetchData()
  }, [])


  return (
    <>
    <Navbar/>
    <div className='bg-[#0F171E]  pt-[4.5rem] '>
    <Banner list={channelBanners}/>
    <CardContainer type="channel" channel={0} list={discoveryList}/>
    <CardContainer type="channel" channel={1} list={erosList}/>
    <CardContainer type="channel" channel={2} list={hoichoiList}/>
    <CardContainer type="channel" channel={3} list={lionsList}/>
    <CardContainer type="channel" channel={4} list={manoramaList}/>
    <CardContainer type="channel" channel={5} list={mubiList}/>
    <CardContainer type="channel" channel={6} list={shortstvList}/>
    <Footer/>
    </div>
    </>
  )
}

export default Channels