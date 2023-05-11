import Slider from "../Slider/Silder";
import "./Rent_Card_info.css";
import Carousel from "react-elastic-carousel";
// import PropTypes from "prop-types";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { useContext } from "react";
import UserContext from "../../api/contextApi";

const Rent_Card_info = () => {
  const { theme } = useContext(UserContext);

  const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];

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

      {/* review section */}
      <div className="carousel-container">
        <h2 className="mapHead">Reviews We Get</h2>
        <Carousel breakPoints={breakPoints}>
          <div className="reviews-card">
            <div className="review-img"></div>
            <div className="review-name">Virat Dey</div>
            <div className="review-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum
              laudantium ab illo unde deserunt voluptates dolore quia
              consectetur et?
            </div>
          </div>
          <div className="reviews-card">
            <div className="review-img"></div>
            <div className="review-name">Virat Dey</div>
            <div className="review-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum
              laudantium ab illo unde deserunt voluptates dolore quia
              consectetur et?
            </div>
          </div>
          <div className="reviews-card">
            <div className="review-img"></div>
            <div className="review-name">Virat Dey</div>
            <div className="review-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum
              laudantium ab illo unde deserunt voluptates dolore quia
              consectetur et?
            </div>
          </div>
          <div className="reviews-card">
            <div className="review-img"></div>
            <div className="review-name">Virat Dey</div>
            <div className="review-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum
              laudantium ab illo unde deserunt voluptates dolore quia
              consectetur et?
            </div>
          </div>
          <div className="reviews-card">
            <div className="review-img"></div>
            <div className="review-name">Virat Dey</div>
            <div className="review-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum
              laudantium ab illo unde deserunt voluptates dolore quia
              consectetur et?
            </div>
          </div>
          <div className="reviews-card">
            <div className="review-img"></div>
            <div className="review-name">Rohit Das</div>
            <div className="review-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum
              laudantium ab illo unde deserunt voluptates dolore quia
              consectetur et?
            </div>
          </div>
          <div className="reviews-card">
            <div className="review-img"></div>
            <div className="review-name">Harish Pal</div>
            <div className="review-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum
              laudantium ab illo unde deserunt voluptates dolore quia
              consectetur et?
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Rent_Card_info;
