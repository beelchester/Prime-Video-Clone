import Navbar from "./common/components/Navbar/Navbar"
import { Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
const App = () => {

  return (
    <div className=' font-openSans h-[100vh] text-white '>
      {/* <Navbar/> */}

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      </Routes>

    </div>
  )
}

export default App