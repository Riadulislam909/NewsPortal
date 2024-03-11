/* eslint-disable react/prop-types */
import { MdFlashOn } from "react-icons/md";
import headingImg from "../../../assets/twitter.jpg";
import Technology2 from "../../../assets/world-news-02.jpg";
import image2 from "../../../assets/world-news-03.jpg";
import HeadingTitle from "./../headingTitle/HeadingTitle";
import "./styleTwo.scss";

const StyleTwo = ({ Technology }) => {
  return (
    <div className="styleTwo">
      <HeadingTitle category={Technology.category} />

      <div className="top">
        <img src={headingImg} alt="headingImg" />
        <a className="cat">{Technology.title}</a>
        <a className="icon">
          <MdFlashOn style={{ fontSize: "20px" }} />
        </a>
        <div className="postInfo">
          <ul className="nav">
            <li>{Technology.headingAuthor}</li>
            <li>{Technology.headingDate}</li>
          </ul>
          <h3>{Technology.headingExcept}</h3>
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <div className="left">
            <a className="thumb">
              <img src={Technology2} />
              <ul className="nav">
                <li>{Technology.image1Author}</li>
                <li>{Technology.image1Date}</li>
              </ul>
              <h3>{Technology.image1Except}</h3>
            </a>
          </div>
          <div className="right">
            <a className="thumb">
              <img src={image2} />
              <ul className="nav">
                <li>{Technology.image1Author}</li>
                <li>{Technology.image1Date}</li>
              </ul>
              <h3>{Technology.image1Except}</h3>
            </a>
          </div>
        </div>
        <div className="item">
          <div className="left">
            <a className="thumb">
              <img src={Technology2} />
              <ul className="nav">
                <li>{Technology.image1Author}</li>
                <li>{Technology.image1Date}</li>
              </ul>
              <h3>{Technology.image1Except}</h3>
            </a>
          </div>
          <div className="right">
            <a className="thumb">
              <img src={image2} />
              <ul className="nav">
                <li>{Technology.image1Author}</li>
                <li>{Technology.image1Date}</li>
              </ul>
              <h3>{Technology.image1Except}</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleTwo;
