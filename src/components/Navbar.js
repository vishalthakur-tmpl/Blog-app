import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import logoBlack from "../images/logo-black.svg";
import { getValue } from "@testing-library/user-event/dist/utils";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [showIcon, setShowIcon] = useState(false);
  const handleClick = () => {
    setShowIcon(!showIcon);
  };

  return (
    <nav>
      <div className="website-logo">
        <Link to="/">
          <img src={logoBlack} alt="logo" className="logoTop" />
        </Link>
      </div>

      <div className={showIcon ? "nav_link nav-active" : "nav_link"}>
        <SearchBar />
        <NavLink
          exact={getValue.toString()}
          to="/"
          onClick={handleClick}
          className={({ isActive }) => (isActive ? "active" : "inactive ")}
        >
          BLOG
        </NavLink>
        <NavLink
          exact={getValue.toString()}
          to="/about"
          onClick={handleClick}
          className={({ isActive }) => (isActive ? "active" : "inactive ")}
        >
          ABOUT
        </NavLink>
      </div>

      <div className="hamburger">
        <button
          style={{
            border: "none",
            background: "none",
            outline: "none",
            cursor: "pointer",
          }}
          onClick={() => setShowIcon(!showIcon)}
        >
          {showIcon ? (
            <RxCross2 className="cross" />
          ) : (
            <FiAlignJustify className="bar" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
