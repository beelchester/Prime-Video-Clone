import Navbar from "./common/components/Navbar/Navbar"
import { Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
const App = () => {

  return (
    <div className=' font-openSans h-[100vh] text-white '>
      <Navbar/>

      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>

    </div>
  )
}

export default App