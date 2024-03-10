import { MdFlashOn } from "react-icons/md";
import banner2 from "../../assets/banner-02.jpg";
import banner3 from "../../assets/banner-03.jpg";
import banner4 from "../../assets/banner-04.jpg";
import usUkraine from "../../assets/usUkraine.jpg";
import "./mainContent.scss";

const MainContent = () => (
  <div className="mainContent">
    <div className="col">
      <div className="row">
        <img src={usUkraine} alt="news-image" />
        <a className="cat">Politics</a>
        <a className="icon">
          <MdFlashOn style={{ fontSize: "16px" }} />
        </a>
        <div className="postinfo">
          <ul className="nav">
            <li>Shown Khan</li>
            <li>10 Jan 2024</li>
          </ul>
          <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis obcaecati, molestias nisi ipsa labore laborum.
          </h3>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="row">
        <div className="col">
          <div className="row">
            <img src={banner2} alt="banner" />
            <a className="cat">Travel</a>
            <a className="icon">
              <MdFlashOn />
            </a>
            <div className="postinfo">
              <ul className="nav">
                <li>Shown Khan</li>
                <li>10 Jan 2024</li>
              </ul>
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <img src={banner3} alt="banner" />
            <a className="cat">Education</a>
            <a className="icon">
              <MdFlashOn />
            </a>
            <div className="postinfo">
              <ul className="nav">
                <li>Shown Khan</li>
                <li>10 Jan 2024</li>
              </ul>
              <h3>Lorem ipsum dolor sit amet.</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <img src={banner4} alt="banner" />
        <a className="cat">Election</a>
        <a className="icon">
          <MdFlashOn style={{ fontSize: "16px" }} />
        </a>
        <div className="postinfo">
          <ul className="nav">
            <li>Shown Khan</li>
            <li>10 Jan 2024</li>
          </ul>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        </div>
      </div>
    </div>
  </div>
);

export default MainContent;
