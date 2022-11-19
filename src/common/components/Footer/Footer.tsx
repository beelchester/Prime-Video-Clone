import footerlogo from "../../../assets/logos/primevideowhite.png";

const Footer = () => {
  return (
    <div className="w-full mt-[1.4rem] pb-[1.8rem] pt-[1.6rem] text-[0.93rem] flex flex-col items-center justify-center">
      <img src={footerlogo} className="w-[6.7rem] ml-[-3px]" />
      <div className="flex  text-[#79bfee] items-center  ml-[-45px]">
        <h1 className="ml-3 hover:cursor-pointer hover:text-[#99d8fd] transition hover:ease-in">Terms and Privacy Notice</h1>
        <h1 className="mx-4 hover:cursor-pointer hover:text-[#99d8fd] transition hover:ease-in">Send us feedback</h1>
        <h1 className=" mr-4 hover:cursor-pointer hover:text-[#99d8fd] transition hover:ease-in">Help</h1>
      <h1 className=" text-[0.9rem] font-semibold text-[#718292]">© 2022, Prime Video Clone by @sahil46y</h1>
      </div>
    </div>
  )
}

export default Footer