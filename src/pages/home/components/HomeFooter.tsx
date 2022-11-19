import footerlogo from "../../../assets/logos/primevideofooter.png";

const HomeFooter = () => {
  return (
    <div className="w-full h-[135px] text-[0.87rem] flex flex-col items-center justify-center">
      <img src={footerlogo} />
      <div className="flex mt-[0.2rem] text-[#106b99] ">
        <h1 className="mx-3 hover:cursor-pointer hover:text-[#84d0fc] transition hover:ease-in">Terms and Privacy Notice</h1>
        <h1 className="mx-2 hover:cursor-pointer hover:text-[#84d0fc] transition hover:ease-in">Send us feedback</h1>
        <h1 className="mx-3 hover:cursor-pointer hover:text-[#84d0fc] transition hover:ease-in">Help</h1>
      </div>
      <h1 className="mt-[0.55rem] text-[0.95rem] text-[#818181]">© 2022, Prime Video Clone by @sahil46y</h1>
    </div>
  )
}

export default HomeFooter