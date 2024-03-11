/* eslint-disable react/prop-types */
import { MdFlashOn } from "react-icons/md";
import headingImg from "../../../assets/russia2.jpg";
import worldNews2 from "../../../assets/world-news-02.jpg";
import image2 from "../../../assets/world-news-03.jpg";
import HeadingTitle from "./../headingTitle/HeadingTitle";
import "./styleOne.scss";

const StyleOne = ({ WorldNews }) => {
  return (
    <>
      <div className="styleOne">
        <HeadingTitle category={WorldNews.category} />

        <div className="top">
          <img src={headingImg} alt="headingImg" />
          <a className="cat">{WorldNews.title}</a>
          <a className="icon">
            <MdFlashOn style={{ fontSize: "20px" }} />
          </a>
          <div className="postInfo">
            <ul className="nav">
              <li>{WorldNews.headingAuthor}</li>
              <li>{WorldNews.headingDate}</li>
            </ul>
            <h3>{WorldNews.headingExcept}</h3>
          </div>
        </div>
        <div className="bottom">
          <div className="item">
            <div className="left">
              <a className="thumb">
                <img src={worldNews2} />
                <ul className="nav">
                  <li>{WorldNews.image1Author}</li>
                  <li>{WorldNews.image1Date}</li>
                </ul>
                <h3>{WorldNews.image1Except}</h3>
              </a>
            </div>
            <div className="right">
              <a className="thumb">
                <img src={image2} />
                <ul className="nav">
                  <li>{WorldNews.image1Author}</li>
                  <li>{WorldNews.image1Date}</li>
                </ul>
                <h3>{WorldNews.image1Except}</h3>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="left">
              <a className="thumb">
                <img src={worldNews2} />
                <ul className="nav">
                  <li>{WorldNews.image1Author}</li>
                  <li>{WorldNews.image1Date}</li>
                </ul>
                <h3>{WorldNews.image1Except}</h3>
              </a>
            </div>
            <div className="right">
              <a className="thumb">
                <img src={image2} />
                <ul className="nav">
                  <li>{WorldNews.image1Author}</li>
                  <li>{WorldNews.image1Date}</li>
                </ul>
                <h3>{WorldNews.image1Except}</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StyleOne;
