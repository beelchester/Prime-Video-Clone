import { Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Signin from "./pages/signin/Signin";
import Channels from "./pages/channels/Channels";
import MovieDetail from "./common/components/MovieDetail/MovieDetail";
import Signup from "./pages/signup/Signup";
import MyStuff from "./pages/mystuff/MyStuff";
import { useEffect } from "react";
import { getRefreshToken, getAccessToken, isAuthenticated, refreshToken } from "./API/auth";
import { signedIn } from "./features/signedInSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
const App = () => {
  const signedInDisp = useSelector((state:RootState)=> state.signedIn.value)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(isAuthenticated())
    isAuthenticated()?dispatch(signedIn(true)):dispatch(signedIn(false))
    refreshTokenIfExpired()
    console.log(getRefreshToken())
    console.log(getAccessToken())
  }, [])
  
  
  
  
  async function refreshTokenIfExpired() {
    if (!getRefreshToken()) return
    if(!isAuthenticated()){
    try {
        const newAccessToken = await refreshToken((getRefreshToken() as string))
        localStorage.setItem('accessToken', newAccessToken)
        dispatch(signedIn(true))
      } catch (error) {
        console.log((error as any).response.data.message)
      }
    }}

  return (
    <div className=' font-openSans h-[100vh] text-white '>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/channels" element={<Channels />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/detail" element={<MovieDetail />} />
      <Route path="/mystuff" element={<MyStuff />} />
      </Routes>

    </div>
  )
}

export default App
