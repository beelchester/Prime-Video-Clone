import Navbar from "./common/components/Navbar/Navbar"
import { Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Signin from "./pages/signin/Signin";
import Channels from "./pages/channels/Channels";
const App = () => {

  return (
    <div className=' font-openSans h-[100vh] text-white '>
      {/* <Navbar/> */}

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/channels" element={<Channels />} />
      <Route path="/signin" element={<Signin />} />
      </Routes>

    </div>
  )
}

export default App