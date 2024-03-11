import { WorldNews } from "../../category.js";
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
            <StyleTwo />
          </div>
          <div className="item">
            <Widget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
