import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const MovieDetail = () => {
  return (
    <>
    <Navbar/>
    <div className='pt-[4.5rem] bg-[#0F171E] h-[100vh] relative cursor-default'>
      <div className='flex justify-end'>
    <div style={{
        backgroundImage: `url("https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f9effd8ac3c55d3ea35ab970673ff1d0454543ec72f3703ce955a5d640f60cdb._V_SX1080_.jpg")`,
      }} className='h-[538px]  bg-cover bg-no-repeat bg-center w-[59.7em] mb-[1.48rem]'>
        </div>
        </div>
        <div className='font-sans w-full h-[538px] flex flex-col text-white absolute top-[4.5rem]  bg-[#0000006b]   pl-[48px]'>
        <h1 className='text-[36px] mt-[40px] mb-[7px]'>Special Operations: India</h1>
        <h1 className='text-[#8197A4] mb-[15px]'>2021</h1>
        <h1 className='text-[17.5px] leading-[1.38] w-[59%]'>Dramatic re-creations and first-hand accounts tell the story of some of the most amazing special operations in Indian military history.</h1>
        <div className='flex items-center mt-[15px]'>
        <button className={`text-white font-[500] text-lg w-[13rem] h-[4.25rem] rounded-[0.15rem] bg-[#0F79AF] hover:bg-[#159ee2] `}>
          Watch Trailer
        </button>
        <button className='h-11 w-11 bg-[#425265] ml-8 rounded-full flex items-center justify-center transition hover:ease-in-out hover:bg-[#536377]'><h1 className='text-[#ced3da] text-[2.7rem] font-[300] mb-[0.4rem]'>+</h1></button>
        </div>
        <div className='h-[5rem] w-[20rem] mt-[0.8rem] text-[#91a7b4] font-ptSans text-[18px]'>
          <div className='w-[15.23rem]   flex justify-between'>
            <h1 className='font-[600]'>Subtitles</h1>
            <h1>English [CC]</h1>
          </div>
          <div className='w-[13rem]  mt-[-5px] flex justify-between'>
            <h1 className='font-[600]'>Audio Languages</h1>
            <h1>English</h1>
          </div>
        </div>
        <div className='font-ptSans mt-[4.05rem] text-[15.8px] flex justify-between '>
          <div>
        <p className='  inline text-[#8197A4]'>By clicking play, you agree to our </p>
        <p className='inline text-[#63acd6] hover:text-[#84d0fc] transition hover:ease-in-out hover:cursor-pointer'>Terms of Use.</p>
          </div>
        <div className='h-[2.5rem] w-[20rem] mr-[2rem] flex bg-black '>
          <h1>Share</h1>
          <h1>Feedback</h1>
          <h1>Get Help</h1>
        </div>
        </div>
      </div>
    <Footer/>
    </div>
    </>
  )
}

export default MovieDetail