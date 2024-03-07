import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdLogIn } from "react-icons/io";
import {
  MdLocationPin,
  MdOutlineFacebook,
  MdOutlineLanguage,
} from "react-icons/md";
import { RxCaretDown } from "react-icons/rx";
import { WiDayCloudy } from "react-icons/wi";
import "./navbarTop.scss";

const NavbarTop = () => {
  const [dropDown, setDropDown] = useState(false);
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  function handleDropDown() {
    setDropDown((dropDown) => !dropDown);
  }
  return (
    <div className="navbarTop">
      <div className="navbarContainner">
        <div className="left">
          <div className="item">
            <MdLocationPin style={{ fontSize: "17px" }} />
            <span>Bangladesh</span>
          </div>
          <div className="item">
            <WiDayCloudy style={{ fontSize: "17px" }} />
            <span>31°C</span>
          </div>
          <div className="item">
            <FaRegCalendarAlt />
            <span>{today.toLocaleDateString()}</span>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <IoMdLogIn style={{ fontSize: "18px" }} />
            <span>LogIn/Register</span>
          </div>
          <div className="item" onClick={handleDropDown}>
            <MdOutlineLanguage style={{ fontSize: "18px" }} />
            <span>English</span>
            <RxCaretDown />
          </div>
          <div className="icons">
            <MdOutlineFacebook style={{ fontSize: "17px" }} />
            <FaSquareXTwitter style={{ fontSize: "17px" }} />
          </div>
          {dropDown && (
            <ul className="dropDownMenu">
              <li>
                <a>English</a>
              </li>
              <li>
                <a>Bangla</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
