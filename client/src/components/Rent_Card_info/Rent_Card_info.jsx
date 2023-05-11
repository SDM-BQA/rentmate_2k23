import Slider from "../Slider/Silder";
import "./Rent_Card_info.css";
// import PropTypes from "prop-types";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { useContext } from "react";
import UserContext from "../../api/contextApi";

const Rent_Card_info = () => {
  const { theme } = useContext(UserContext);
  return (
    <div className="rent_card_info" data-theme={theme}>
      {/* gallery map section */}
      <div className="gallery-map">
        <div className="gallery">
          <h2 className="mapHead">House Images</h2>
          <Slider />
        </div>
        <div className="map">
          <h2 className="mapHead">Location on Map</h2>
          <img
            src="https://images.hindustantimes.com/tech/img/2022/02/21/1600x900/Google_Maps_1622729698070_1645410301658.JPG"
            alt="google map"
          />
        </div>
      </div>
      {/* specification - Contact Seller Section */}
      <div className="spec-seller-con">
        <div className="specSection">
          <div className="spec-row row1">
            <div className="spec-col">
              <div className="spec-ico">
                <MdOutlineMapsHomeWork className="spec-i" />
                <span>Configuration</span>
              </div>
              <div className="spec-attribute">
                4 Bedrooms , 5 Bathrooms, 2 Balconies
              </div>
            </div>
            <div className="spec-col">
              <div className="spec-ico">
                <MdOutlineMapsHomeWork className="spec-i" />
                <span>Area</span>
              </div>
              <div className="spec-attribute">Built Up area: 37.91</div>
            </div>
            <div className="spec-col">
              <div className="spec-ico">
                <MdOutlineMapsHomeWork className="spec-i" />
                <span>Furnishing</span>
              </div>
              <div className="spec-attribute">Semifurnished</div>
            </div>
          </div>

          {/* row-2 */}
          <div className="spec-row row2">
            <div className="spec-col">
              <div className="spec-ico">
                <MdOutlineMapsHomeWork className="spec-i" />
                <span>Configuration</span>
              </div>
              <div className="spec-attribute">
                4 Bedrooms , 5 Bathrooms, 2 Balconies
              </div>
            </div>
            <div className="spec-col">
              <div className="spec-ico">
                <MdOutlineMapsHomeWork className="spec-i" />
                <span>Area</span>
              </div>
              <div className="spec-attribute">Built Up area: 37.91</div>
            </div>
            <div className="spec-col">
              <div className="spec-ico">
                <MdOutlineMapsHomeWork className="spec-i" />
                <span>Furnishing</span>
              </div>
              <div className="spec-attribute">Semifurnished</div>
            </div>
          </div>
          {/* row-3 */}
          <div className="spec-row row3">
            <div className="spec-col">
              <div className="spec-ico">
                <MdOutlineMapsHomeWork className="spec-i" />
                <span>Configuration</span>
              </div>
              <div className="spec-attribute">
                4 Bedrooms , 5 Bathrooms, 2 Balconies
              </div>
            </div>
            <div className="spec-col">
              <div className="spec-ico">
                <MdOutlineMapsHomeWork className="spec-i" />
                <span>Area</span>
              </div>
              <div className="spec-attribute">Built Up area: 37.91</div>
            </div>
            <div className="spec-col">
              <div className="spec-ico">
                <MdOutlineMapsHomeWork className="spec-i" />
                <span>Furnishing</span>
              </div>
              <div className="spec-attribute">Semifurnished</div>
            </div>
          </div>
        </div>

        {/* seller info */}
        <div className="sellerSection"></div>
      </div>
    </div>
  );
};

export default Rent_Card_info;
