
const CategDropDown: React.FC = () => {
  return (
    <div className='w-full h-[21.75rem] text-white bg-categGradient fixed top-[4.5rem] bg-[#0f171e] flex'>
<div className='w-[50%] h-full pl-[8.45rem] pr-[3rem] pt-[1.5rem] '>
    <h1 className='font-semibold font-ptSans text-[18.5px]'>Top categories</h1>
    <div className='w-full h-[70%] mt-3 grid grid-column-2 grid-rows-2 grid-flow-col gap-x-[10px] '>

      <div className="bg-[url('./assets/images/NavBar/bg1.png')] w-[158px] h-[90px] rounded-[4px] bg-no-repeat bg-cover flex justify-center items-center hover:border-2  hover:cursor-pointer">
    <h1 className='font-semibold font-ptSans text-[16.5px] text-center px-3 leading-5'>Included with Prime</h1>

      </div>
      <div className="bg-[url('./assets/images/NavBar/bg2.png')] w-[158px] h-[90px] mt-[-11px] rounded-[4px] bg-no-repeat bg-cover flex justify-center hover:cursor-pointer items-center hover:border-2">
    <h1 className='font-semibold font-ptSans text-[16.5px] text-center px-3 leading-5'>TV</h1>

      </div>
      <div className="bg-[url('./assets/images/NavBar/bg3.png')] w-[158px] h-[90px]  rounded-[4px] bg-no-repeat bg-cover flex justify-center items-center hover:border-2 hover:cursor-pointer">
    <h1 className='font-semibold font-ptSans text-[16.5px] text-center px-5 leading-5'>Amazon Originals</h1>

      </div>
      <div className="bg-[url('./assets/images/NavBar/bg4.png')] w-[158px] h-[90px] mt-[-11px] rounded-[4px] bg-no-repeat bg-cover flex justify-center items-center hover:cursor-pointer hover:border-2">
    <h1 className='font-semibold font-ptSans text-[16.5px] text-center px-3 leading-5'>Kids</h1>

      </div>
      <div className="bg-[url('./assets/images/NavBar/bg5.png')] w-[158px] h-[90px]  rounded-[4px] bg-no-repeat bg-cover flex justify-center items-center hover:cursor-pointer hover:border-2">
    <h1 className='font-semibold font-ptSans text-[16.5px] text-center px-3 leading-5'>Movies</h1>

      </div>
    </div>
</div>
<div className='w-[50%] h-full flex   pl-[3.05rem] pr-[3rem] pt-[1.5rem]'>
  <div className="w-[40%] ">
<h1 className='font-semibold font-ptSans text-[18.5px] '>Audio languages</h1>
<div className="flex ">
<div className="mt-[6px] ml-2  w-full h-[80%] text-[14.5px] text-[#8197A4] font-[500]">
<h1 className="hover:text-white transport hover:ease-in-out hover:cursor-pointer w-[50px]">English</h1>
<h1 className="mt-[10px] hover:text-white transport hover:ease-in-out hover:cursor-pointer w-[40px]">Hindi</h1>
<h1 className="mt-[10px] hover:text-white transport hover:ease-in-out hover:cursor-pointer w-[50px]">Telugu</h1>
<h1 className="mt-[10px] hover:text-white transport hover:ease-in-out hover:cursor-pointer w-[40px]">Tamil</h1>
<h1 className="mt-[10px] hover:text-white transport hover:ease-in-out hover:cursor-pointer w-[65px]">Kannada</h1>
</div>
<div className="mt-[6px] ml-8  w-full h-[80%] text-[14.5px] text-[#8197A4] font-[500]">
<h1 className="hover:cursor-pointer w-[75px] hover:text-white transport hover:ease-in-out">Malayalam</h1>
<h1 className="mt-[10px]  hover:cursor-pointer w-[55px] hover:text-white transport hover:ease-in-out">Punjabi</h1>
<h1 className="mt-[10px] hover:cursor-pointer w-[55px] hover:text-white transport hover:ease-in-out">Marathi</h1>
<h1 className="mt-[10px] hover:cursor-pointer w-[55px] hover:text-white transport hover:ease-in-out">Bengali</h1>
<h1 className="mt-[10px] hover:cursor-pointer w-[60px] hover:text-white transport hover:ease-in-out">Gujarati</h1>
</div>
</div>


  </div>
  <div className=" w-[60%] pl-[25px]">
<h1 className='font-semibold font-ptSans text-[18.5px] '>Other Categories</h1>
<div className="mt-[6px] ml-2 w-full h-[80%] text-[14.5px] text-[#8197A4] font-[500]">
<h1 className="hover:cursor-pointer w-[50px] hover:text-white transport hover:ease-in-out">Drama</h1>
<h1 className="mt-[10px] hover:cursor-pointer w-[150px] hover:text-white transport hover:ease-in-out">Action and adventure</h1>
<h1 className="mt-[10px] hover:cursor-pointer w-[65px] hover:text-white transport hover:ease-in-out">Romance</h1>
<h1 className="mt-[10px] hover:cursor-pointer w-[60px] hover:text-white transport hover:ease-in-out">Comedy</h1>
<h1 className="mt-[10px] hover:cursor-pointer w-[65px] hover:text-white transport hover:ease-in-out">Suspense</h1>
<h1 className="mt-[10px] hover:cursor-pointer w-[50px] hover:text-white transport hover:ease-in-out">Horror</h1>
<h1 className="mt-[10px] hover:cursor-pointer w-[105px] hover:text-white transport hover:ease-in-out">Award winners</h1>
</div>
  </div>

</div>
    </div>
  )
}

export default CategDropDown