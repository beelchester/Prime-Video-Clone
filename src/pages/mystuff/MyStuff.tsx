import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import Navbar from '../../common/components/Navbar/Navbar'
import Watchlist from'./components/Watchlist'
const MyStuff = () => {
  const watchlist = useSelector((state:RootState)=> state.watchlist.value)
  const current = useSelector((state:RootState)=> state.currentUser.value)
console.log(current,watchlist)
  return (
    <>
    <Navbar/>
    <div className='bg-[#0F171E]  pt-[4.5rem] min-h-full'>
      {/* {watchlist.map((i : any)=> */}
      <Watchlist list={watchlist.watchlist} />
        {/* )} */}
    </div>
    </>
  )
}

export default MyStuff