/* eslint-disable react/prop-types */
import { MdFlashOn } from "react-icons/md";
import headingImg from "../../../assets/musk.webp";
import worldNews2 from "../../../assets/world-news-02.jpg";
import image2 from "../../../assets/world-news-03.jpg";

import HeadingTitle from "./../../mainBody/headingTitle/HeadingTitle";
import "./styleTwoOne.scss";

const StyleTwoOne = ({ Finance }) => {
  return (
    <>
      <div className="styleOne">
        <HeadingTitle category={Finance.category} />

        <div className="top">
          <img src={headingImg} alt="headingImg" />
          <a className="cat">{Finance.title}</a>
          <a className="icon">
            <MdFlashOn style={{ fontSize: "20px" }} />
          </a>
          <div className="postInfo">
            <ul className="nav">
              <li>{Finance.headingAuthor}</li>
              <li>{Finance.headingDate}</li>
            </ul>
            <h3>{Finance.headingExcept}</h3>
          </div>
        </div>
        <div className="bottom">
          <div className="item">
            <div className="left">
              <a className="thumb">
                <img src={worldNews2} />
                <ul className="nav">
                  <li>{Finance.image1Author}</li>
                  <li>{Finance.image1Date}</li>
                </ul>
                <h3>{Finance.image1Except}</h3>
              </a>
            </div>
            <div className="right">
              <a className="thumb">
                <img src={image2} />
                <ul className="nav">
                  <li>{Finance.image1Author}</li>
                  <li>{Finance.image1Date}</li>
                </ul>
                <h3>{Finance.image1Except}</h3>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="left">
              <a className="thumb">
                <img src={worldNews2} />
                <ul className="nav">
                  <li>{Finance.image1Author}</li>
                  <li>{Finance.image1Date}</li>
                </ul>
                <h3>{Finance.image1Except}</h3>
              </a>
            </div>
            <div className="right">
              <a className="thumb">
                <img src={image2} />
                <ul className="nav">
                  <li>{Finance.image1Author}</li>
                  <li>{Finance.image1Date}</li>
                </ul>
                <h3>{Finance.image1Except}</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StyleTwoOne;
