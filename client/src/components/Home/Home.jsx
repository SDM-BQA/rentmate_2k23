import "./Home.css";
import { useContext } from "react";
import UserContext from "../../api/contextApi";
import { Link } from "react-router-dom";

const Home = () => {
  const { theme, user } = useContext(UserContext);

  return (
    <div className="home" data-theme={theme} id="home">
      <div className="hero_inner_con">
        <div className="hero-left">
          <h1 className="hero-heading">
            Elevate Your Living: Your Destination for Quality Rentals
          </h1>
          <hr />
          <p className="hero-para">
            Elevate your lifestyle with our carefully curated, thoughtfully
            designed rentals in prime locations. Enjoy unmatched quality,
            comfort, and dedicated service from our expert team. Your dream home
            awaits with us.
          </p>
          <Link className="link" to={user ? "/rentSection" : "/login"}>
            <button className="hero-btn">Get Started</button>
          </Link>
        </div>
        <div className="hero-right">
          <img src="/desk-hero.png" alt="hero img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
