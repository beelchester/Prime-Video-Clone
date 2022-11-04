
import Navbar from "../../common/components/Navbar/Navbar";
import FamilyFriendly from "./components/FamilyFriendly";
import FavChannels from "./components/FavChannels";
import Firetv from "./components/Firetv";
import HomeFooter from "./components/HomeFooter";
import Welcome from "./components/Welcome";
const Home = () => {
  return (
    <div className="h-[180rem] bg-[#222222]">
      <Navbar/>
      <Welcome/>
      <FavChannels/>
      <Firetv/>
      <FamilyFriendly/>
      <HomeFooter/>
    </div>
  );
};

export default Home;
