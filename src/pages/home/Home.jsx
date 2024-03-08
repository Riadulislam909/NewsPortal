import NavbarTop from "../../components/navbar/NavbarTop";
import NavbarBottom from "../../components/navbarBottom/NavbarBottom";
import AdvertTop from "./../../components/advertTop/AdvertTop";
import BreakingNews from "./../../components/breakingNews/BreakingNews";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="homeWrapper">
        <NavbarTop />
        <AdvertTop />
        <NavbarBottom />
        <BreakingNews />
      </div>
    </div>
  );
};

export default Home;
