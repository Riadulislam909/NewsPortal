import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import "./headingTitle.scss";

const HeadingTitle = ({ category }) => {
  return (
    <div className="headingTitle">
      <div className="heading">
        <span className="title">{category}</span>
        <div className="icon">
          <FaLongArrowAltLeft className="left" style={{ fontSize: "25px" }} />
          <span className="divider">/</span>
          <FaArrowRightLong className="right" style={{ fontSize: "20px" }} />
        </div>
      </div>
    </div>
  );
};

export default HeadingTitle;
