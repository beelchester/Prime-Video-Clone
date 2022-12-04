import Navbar from '../../common/components/Navbar/Navbar'
import Watchlist from'./components/Watchlist'
const MyStuff = () => {
  return (
    <>
    <Navbar/>
    <div className='bg-[#0F171E]  pt-[4.5rem] h-full'>
      <Watchlist/>
    </div>
    </>
  )
}

export default MyStuff