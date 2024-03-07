import NavbarTop from "../../components/navbar/NavbarTop";
import AdvertTop from "./../../components/advertTop/AdvertTop";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="homeWrapper">
        <NavbarTop />
        <AdvertTop />
      </div>
    </div>
  );
};

export default Home;
