import { useContext } from "react";
import UserContext from "../../api/contextApi";
import { AiFillCaretDown } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import ReactSwitch from "react-switch";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const { theme, toggleTheme, isHome, user } = useContext(UserContext);

  return (
    <div className="navCon" data-theme={theme}>
      <div className="navbar" id="nav">
        <div className="navlogo">
          <img src="./l2.png" alt="Nav Logo" />
        </div>
        <ul ref={navRef} className="navMenu">
          <Link className="link" to="/" onClick={showNavbar}>
            <li>Home</li>
          </Link>
          {!isHome && (
            <Link to="/rentSection" className="link" onClick={showNavbar}>
              <li>Rent a Home</li>
            </Link>
          )}
          {!isHome && (
            <HashLink className="link" to="#about" smooth onClick={showNavbar}>
              <li>About Us</li>
            </HashLink>
          )}{" "}
          {!isHome && (
            <HashLink
              className="link"
              to="#contact"
              smooth
              onClick={showNavbar}
            >
              <li>Contact Us</li>
            </HashLink>
          )}
          {!user && (
            <Link to="/login" className="link" onClick={showNavbar}>
              <li className="auth">Login/ Signup</li>
            </Link>
          )}
          {user && (
            <li className="navUser">
              <div className="userPic"></div>
              <div className="userName">{user.userName}</div>
              <AiFillCaretDown className="downIco" />
            </li>
          )}
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </ul>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
