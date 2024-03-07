import ad1 from "../../assets/advertttt.gif";
import "./advertTop.scss";

const AdvertTop = () => {
  return (
    <div className="advertTop">
      <div className="advertTopContainer">
        <div className="left">
          <a>Daily News</a>
        </div>
        <div className="right">
          <a>
            <img src={ad1} alt="Advertisment" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdvertTop;
