import { MdFlashOn } from "react-icons/md";
import usUkraine from "../../assets/usUkraine.jpg";
import "./mainContent.scss";

const MainContent = () => {
  return (
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
      <div className="col"></div>
    </div>
  );
};

export default MainContent;
