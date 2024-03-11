import { Finance, Sports } from "../../category";
import "./mainBodyTwo.scss";
import StyleTwoOne from "./styleTwoOne/StyleTwoOne";
import StyleTwoTwo from "./styleTwoTwo/StyleTwoTwo";

const MainBodyTwo = () => {
  return (
    <div className="mainBody">
      <div className="mainBodywrapper">
        <div className="item">
          <StyleTwoOne Finance={Finance} />
        </div>
        <div className="item">
          <StyleTwoTwo Sports={Sports} />
        </div>
      </div>
    </div>
  );
};

export default MainBodyTwo;
