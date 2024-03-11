import { FaRegEnvelope } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import AD from "../../assets//advertttt.gif";
import { Technology, WorldNews } from "../../category.js";
import "./mainBody.scss";
import StyleOne from "./styleOne/StyleOne";
import StyleTwo from "./styleTwo/StyleTwo";
import Widget from "./widget/Widget";
const MainBody = () => {
  return (
    <div>
      <div className="mainBody">
        <div className="mainBodywrapper">
          <div className="item">
            <StyleOne WorldNews={WorldNews} />
          </div>
          <div className="item">
            <StyleTwo Technology={Technology} />
          </div>
          <div className="item">
            <Widget />
          </div>
        </div>
        <div className="advertMiddleWrapper">
          <div className="advert">
            <a>
              <img src={AD} alt="ad" />
            </a>
          </div>
          <div className="newsLetter">
            <div className="top">
              <h2>Get NewsLetter</h2>
              <FaRegEnvelope className="icon" />
            </div>
            <div className="bottom">
              <div className="bottomWrapper">
                <div className="content">
                  <p>Subscribe to our NewsLetter to get lattest News</p>
                </div>
                <form>
                  <div className="formInput">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      autoComplete="off"
                      required
                      className="formControl"
                    />
                    <button type="submit" className="button">
                      <RiSendPlaneFill />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
