import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { MdKeyboardArrowDown, MdNavigateNext } from "react-icons/md";
import "./navbarBottom.scss";

const NavbarBottom = () => {
  const [dropDownOne, setDropDownOne] = useState(false);

  return (
    <div className="navbarBottom">
      <div className="navbarBottomWrapper">
        <div
          className="item"
          onClick={() => setDropDownOne((dropDownOne) => !dropDownOne)}
        >
          <span>Home</span>
          <MdKeyboardArrowDown style={{ fontSize: "18px" }} />
          {dropDownOne && (
            <div className="droprDownMenu1">
              <span>
                <a>Home Default</a>
              </span>
              <span className="active">
                <a>Home Boxed</a>
              </span>
              <span>
                <a>Home RTL Boxed</a>
              </span>
              <span>
                <a>
                  Home Versions
                  <MdNavigateNext
                    className="arrow"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </a>
              </span>
            </div>
          )}
        </div>
        <div className="item">
          <span>World News</span>
        </div>
        <div className="item">
          <span>National</span>
        </div>
        <div className="item">
          <span>Financial</span>
        </div>
        <div className="item">
          <span>Entertainment</span>
        </div>
        <div className="item">
          <span>Lifestyle</span>
        </div>
        <div className="item">
          <span>Technology</span>
        </div>
        <div className="item">
          <span>Travel</span>
        </div>
        <div className="item">
          <span>Sports</span>
        </div>
        <div className="item">
          <span>Category</span>
        </div>
        <div className="item">
          <span>Pages</span>
        </div>
        <div className="item">
          <IoMdSearch style={{ fontSize: "20px" }} />
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
