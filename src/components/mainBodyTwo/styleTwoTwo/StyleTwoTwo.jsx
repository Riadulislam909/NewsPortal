/* eslint-disable react/prop-types */
import { MdFlashOn } from "react-icons/md";
import headingImg from "../../../assets/ronaldo2.jpg";
import worldNews2 from "../../../assets/world-news-02.jpg";
import image2 from "../../../assets/world-news-03.jpg";
import HeadingTitle from "./../../mainBody/headingTitle/HeadingTitle";
import "./styleTwoTwo.scss";

const StyleTwoTwo = ({ Sports }) => {
  return (
    <>
      <div className="styleOne">
        <HeadingTitle category={Sports.category} />

        <div className="top">
          <img src={headingImg} alt="headingImg" />
          <a className="cat">{Sports.title}</a>
          <a className="icon">
            <MdFlashOn style={{ fontSize: "20px" }} />
          </a>
          <div className="postInfo">
            <ul className="nav">
              <li>{Sports.headingAuthor}</li>
              <li>{Sports.headingDate}</li>
            </ul>
            <h3>{Sports.headingExcept}</h3>
          </div>
        </div>
        <div className="bottom">
          <div className="item">
            <div className="left">
              <a className="thumb">
                <img src={worldNews2} />
                <ul className="nav">
                  <li>{Sports.image1Author}</li>
                  <li>{Sports.image1Date}</li>
                </ul>
                <h3>{Sports.image1Except}</h3>
              </a>
            </div>
            <div className="right">
              <a className="thumb">
                <img src={image2} />
                <ul className="nav">
                  <li>{Sports.image1Author}</li>
                  <li>{Sports.image1Date}</li>
                </ul>
                <h3>{Sports.image1Except}</h3>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="left">
              <a className="thumb">
                <img src={worldNews2} />
                <ul className="nav">
                  <li>{Sports.image1Author}</li>
                  <li>{Sports.image1Date}</li>
                </ul>
                <h3>{Sports.image1Except}</h3>
              </a>
            </div>
            <div className="right">
              <a className="thumb">
                <img src={image2} />
                <ul className="nav">
                  <li>{Sports.image1Author}</li>
                  <li>{Sports.image1Date}</li>
                </ul>
                <h3>{Sports.image1Except}</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StyleTwoTwo;
