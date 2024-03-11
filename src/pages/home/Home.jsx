import MainBody from "../../components/mainBody/MainBody";
import MainBodyTwo from "../../components/mainBodyTwo/MainBodyTwo";
import NavbarTop from "../../components/navbar/NavbarTop";
import NavbarBottom from "../../components/navbarBottom/NavbarBottom";
import AudioVideo from "./../../components/AudioVideo/AudioVideo";
import AdvertTop from "./../../components/advertTop/AdvertTop";
import BreakingNews from "./../../components/breakingNews/BreakingNews";
import MainContent from "./../../components/mainContent/MainContent";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="homeWrapper">
          <NavbarTop />
          <AdvertTop />
          <NavbarBottom />
          <BreakingNews />
          <MainContent />
          <MainBody />
          <MainBodyTwo />
          <AudioVideo />
        </div>
      </div>
    </>
  );
};

export default Home;
