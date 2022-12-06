import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import Navbar from '../../common/components/Navbar/Navbar'
import Watchlist from'./components/Watchlist'
const MyStuff = () => {
  const watchlist = useSelector((state:RootState)=> state.watchlist.value)

  return (
    <>
    <Navbar/>
    <div className='bg-[#0F171E]  pt-[4.5rem] h-full'>
      {watchlist.map(i=>
      <Watchlist list={i.movie} />
        )}
    </div>
    </>
  )
}

export default MyStuff