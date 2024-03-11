import { BsVimeo } from "react-icons/bs";
import {
  FaFacebook,
  FaGooglePlusG,
  FaShareAlt,
  FaTwitter,
} from "react-icons/fa";
import { GiRss } from "react-icons/gi";
import { TfiYoutube } from "react-icons/tfi";
import ad from "../../../assets/ad-300x250-1.jpg";
import "./widget.scss";

const Widget = () => {
  return (
    <div className="widget">
      <div className="top">
        <a>
          <img src={ad} alt="ad" />
        </a>
      </div>
      <div className="center">
        <h2>Stay Connected</h2>
        <FaShareAlt className="icon" />
      </div>
      <div className="bottom">
        <ul className="nav">
          <li className="facebook">
            <a>
              <span className="icon">
                <FaFacebook
                  className="facebookicon"
                  style={{ fontSize: "25px" }}
                />
              </span>
              <span className="count">527</span>
              <span className="title">Likes</span>
            </a>
          </li>
          <li className="twitter">
            <a>
              <span className="icon">
                <FaTwitter
                  className="twittericon"
                  style={{ fontSize: "25px" }}
                />
              </span>
              <span className="count">854</span>
              <span className="title">Followers</span>
            </a>
          </li>
          <li className="googleplus">
            <a>
              <span className="icon">
                <FaGooglePlusG
                  className="googleplusicon"
                  style={{ fontSize: "25px" }}
                />
              </span>
              <span className="count">845457</span>
              <span className="title">Followers</span>
            </a>
          </li>
          <li className="rss">
            <a>
              <span className="icon">
                <GiRss className="rssicon" style={{ fontSize: "25px" }} />
              </span>
              <span className="count">845457</span>
              <span className="title">Followers</span>
            </a>
          </li>

          <li className="vimeo">
            <a>
              <span className="icon">
                <BsVimeo className="vimeoicon" style={{ fontSize: "25px" }} />
              </span>
              <span className="count">845457</span>
              <span className="title">Followers</span>
            </a>
          </li>
          <li className="vimeo">
            <a>
              <span className="icon">
                <BsVimeo className="vimeoicon" style={{ fontSize: "25px" }} />
              </span>
              <span className="count">845457</span>
              <span className="title">Followers</span>
            </a>
          </li>

          <li className="youtube">
            <a>
              <span className="icon">
                <TfiYoutube
                  className="youtubeicon"
                  style={{ fontSize: "25px" }}
                />
              </span>
              <span className="count">845457</span>
              <span className="title">Followers</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Widget;
