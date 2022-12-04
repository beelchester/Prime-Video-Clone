import { Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Signin from "./pages/signin/Signin";
import Channels from "./pages/channels/Channels";
import MovieDetail from "./common/components/MovieDetail/MovieDetail";
import Signup from "./pages/signup/Signup";
import MyStuff from "./pages/mystuff/MyStuff";
const App = () => {

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