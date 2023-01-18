// eslint-disable-next-line
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import logoBlack from "../images/logo-black.svg";
import { getValue } from "@testing-library/user-event/dist/utils";

const Navbar = () => {
  const [showIcon, setShowIcon] = useState(false);
  const handleClick = () => {
    setShowIcon(!showIcon);
  };

  return (
    <nav>
      <div className="website-logo">
        <img src={logoBlack} alt="logo" className="logoTop" />
      </div>

      <div className="search-bar">
        <form action="#" className="search">
          <input type="search" placeholder="search..." name="q" />
          <button type="submit">
            <BiSearchAlt />
          </button>
        </form>
      </div>

      <div className={showIcon ? "nav_link nav-active" : "nav_link"}>
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
        <NavLink
          exact={getValue.toString()}
          to="/link"
          onClick={handleClick}
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          LINKS
        </NavLink>
        <NavLink
          exact={getValue.toString()}
          to="/project"
          onClick={handleClick}
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          PROJECTS
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
