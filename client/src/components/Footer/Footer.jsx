import "./Footer.css";
import { Link } from "react-router-dom";
import companyLogo from "/l2.png";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { useContext } from "react";
import UserContext from "../../api/contextApi";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="footer-con">
      <div className="footer-inner-con">
        <div className="upper-div">
          <div className="left-footer">
            <ul className="footer-list">
              <Link className="link footer-link" to="/">
                <li>Home</li>
              </Link>
              <Link
                className="link footer-link"
                to={`/${user ? "about" : "login"}`}
              >
                <li>About us</li>
              </Link>
              <Link
                className="link footer-link"
                to={`/${user ? "contact" : "login"}`}
              >
                <li>Contact us</li>
              </Link>
              <Link
                className="link footer-link"
                to={`/${user ? "rentSection" : "login"}`}
              >
                <li>Rent a House</li>
              </Link>
            </ul>
          </div>
          <div className="center-footer">
            <img src={companyLogo} alt="" />
            <p>
              RentMate is a prototype website made for Bankura Sammilani
              College, Computer Department 3rd year final project, made with{" "}
              <span>♥</span> by Prachurya, Moulisa, Manami, Bhagyashree, Yubraj,
              Gopal and Sundaram
            </p>
          </div>
          <div className="right-footer">
            <ul className="footer-list">
              <li className="no-hover">
                <span className="orange">Made</span> <span>In</span>{" "}
                <span className="green">India</span>
              </li>
              <li>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
                  alt="india"
                  className="indiaImg"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="lower-div">
          <div className="link-social">
            <Link to="https://www.facebook.com" target="blank">
              {" "}
              <BsFacebook className="footer-ico" />
            </Link>
            <Link to="https://www.twitter.com" target="blank">
              {" "}
              <BsTwitter className="footer-ico" />
            </Link>
            <Link to="https://www.instagram.com" target="blank">
              {" "}
              <BsInstagram className="footer-ico" />
            </Link>
            <Link to="https://www.youtube.in" target="blank">
              {" "}
              <BsYoutube className="footer-ico" />
            </Link>
          </div>
          <div className="hr"></div>
          <div className="copyright">© 2023 Copyright - RentMate</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
