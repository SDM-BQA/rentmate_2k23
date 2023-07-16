import Slider from "../Slider/Silder";
import "./Rent_Card_info.css";
import Carousel from "react-elastic-carousel";
// import PropTypes from "prop-types";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { useContext } from "react";
import UserContext from "../../api/contextApi";
import { useParams } from "react-router-dom";

const Rent_Card_info = () => {
  const { theme, houseList } = useContext(UserContext);
  const { id } = useParams();
  const numericId = id.replace(":", "");
  console.log(numericId);

  // select the selected house
  const selectedHouse = houseList.find((house) => {
    return house.id == numericId;
  });

  const breakPoints = [
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <div className="rent_card_info" data-theme={theme}>
      {/* Header Section */}
      <div className="header-section">
        {/* left */}
        <div className="rent-rupee">
          <div>
            <span className="rupee">₹</span>
            <p>{selectedHouse.rent}</p>
          </div>
          <div>per month</div>
        </div>
        {/*Right*/}
        <div className="rent-spec">
          <p className="bigPara">
            {selectedHouse.bedroom}BHK {selectedHouse.bathroom}Baths
          </p>
          <p className="midPara">Flat/Apartment for Rent</p>
          <p className="smallPara">{selectedHouse.address}</p>
        </div>
      </div>

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
                {selectedHouse.bedroom} Bedrooms , {selectedHouse.bathroom}{" "}
                Bathrooms, {selectedHouse.balconies} Balconies
              </div>
            </div>
            <div className="spec-col">
              <div className="spec-ico">
                <MdOutlineMapsHomeWork className="spec-i" />
                <span>Area</span>
              </div>
              <div className="spec-attribute">
                Built Up area: {selectedHouse.carpetArea}
              </div>
            </div>
            <div className="spec-col">
              <div className="spec-ico">
                <MdOutlineMapsHomeWork className="spec-i" />
                <span>Furnishing</span>
              </div>
              <div className="spec-attribute">{selectedHouse.furnishing}</div>
            </div>
          </div>

          {/* row-2 */}
          <div className="spec-row row2">
            <div className="spec-col">
              <div className="spec-ico">
                <MdOutlineMapsHomeWork className="spec-i" />
                <span>Rent</span>
              </div>
              <div className="spec-attribute">₹{selectedHouse.rent}</div>
            </div>
            <div className="spec-col">
              <div className="spec-ico">
                <MdOutlineMapsHomeWork className="spec-i" />
                <span>Address</span>
              </div>
              <div className="spec-attribute">{selectedHouse.address}</div>
            </div>
            <div className="spec-col">
              <div className="spec-ico">
                <MdOutlineMapsHomeWork className="spec-i" />
                <span>Pet Friendly</span>
              </div>
              <div className="spec-attribute">{selectedHouse.PetFriendly}</div>
            </div>
          </div>
          {/* row-3 */}
          <div className="spec-row row3">
            <div className="spec-col">
              <div className="spec-ico">
                <MdOutlineMapsHomeWork className="spec-i" />
                <span>Wheel Chair Friendly</span>
              </div>
              <div className="spec-attribute">
                {selectedHouse.WheelChairFriendly}
              </div>
            </div>
            <div className="spec-col">
              <div className="spec-ico">
                <MdOutlineMapsHomeWork className="spec-i" />
                <span>Kitchen</span>
              </div>
              <div className="spec-attribute">{selectedHouse.kitchen}</div>
            </div>
            <div className="spec-col">
              <div className="spec-ico">
                <MdOutlineMapsHomeWork className="spec-i" />
                <span>Available From</span>
              </div>
              <div className="spec-attribute">Immediate</div>
            </div>
          </div>
          {/* row-4 */}
          <div className="spec-row row3">
            <div className="spec-col">
              <div className="spec-ico">
                <MdOutlineMapsHomeWork className="spec-i" />
                <span>Wifi Available</span>
              </div>
              <div className="spec-attribute">{selectedHouse.wifi}</div>
            </div>
            <div className="spec-col">
              <div className="spec-ico">
                <MdOutlineMapsHomeWork className="spec-i" />
                <span>Lifi Service</span>
              </div>
              <div className="spec-attribute">{selectedHouse.lift}</div>
            </div>
            <div className="spec-col">
              <div className="spec-ico">
                <MdOutlineMapsHomeWork className="spec-i" />
                <span>Electrtic Supply</span>
              </div>
              <div className="spec-attribute">
                {selectedHouse.ElectricityWaterCharges}
              </div>
            </div>
          </div>
        </div>

        {/* seller info */}
        <div className="sellerSection">
          <p className="sellerHead">Seller Details</p>
          <div className="sellerBasicDetails">
            <div className="sellerImg"></div>
            <div className="sellerDetails">
              <div className="sellerName">{selectedHouse.ownerName}</div>
              <div className="sellerVerify">Featured Seller</div>
            </div>
            <a href={`mailto: sdmbqa420@gmail.com`}>
              <button className="sellerContactBtn">Contact Seller</button>
            </a>
          </div>
          {/* additional */}
          <hr />
          <div className="sellerAddDetails">
            <p className="addHead">Additional Details</p>
            <span>
              About: A home owner enjoys the benefits of stability, financial
              investment, creative freedom, personalization, and the pride of
              homeownership in creating a place they can call their own.
            </span>
            <span>{selectedHouse.address}</span>
          </div>
        </div>
      </div>

      {/* review section */}
      <div className="carousel-container">
        <h2 className="mapHead">Reviews We Get</h2>
        <Carousel breakPoints={breakPoints}>
          <div className="reviews-card">
            <div className="review-img"></div>
            <div className="review-name">Virat Dey</div>
            <div className="review-para">
              The house was a hidden gem, boasting modern amenities, stylish
              decor, and breathtaking views. A true paradise for nature
              enthusiasts and a peaceful escape from the hustle and bustle of
              city life.
            </div>
          </div>
          <div className="reviews-card">
            <div className="review-img"></div>
            <div className="review-name">Rahul Nair</div>
            <div className="review-para">
              We were impressed by the spaciousness and comfort of the house,
              providing ample room for relaxation and quality time with loved
              ones. The well-appointed kitchen and cozy bedrooms made our stay
              delightful.
            </div>
          </div>
          <div className="reviews-card">
            <div className="review-img"></div>
            <div className="review-name">Shiva Ray</div>
            <div className="review-para">
              From the moment we stepped inside, the house exuded warmth and
              charm. The carefully curated furnishings and serene ambiance
              created an inviting and cozy atmosphere, making us feel right at
              home.
            </div>
          </div>
          <div className="reviews-card">
            <div className="review-img"></div>
            <div className="review-name">satish Sharma</div>
            <div className="review-para">
              The house's location was perfect, offering both convenience and
              serenity. We enjoyed easy access to local attractions while being
              able to retreat to the peaceful oasis of the house after a day of
              exploration.
            </div>
          </div>
          <div className="reviews-card">
            <div className="review-img"></div>
            <div className="review-name">Rakesh Saha</div>
            <div className="review-para">
              The attention to detail in the house was remarkable. Every aspect,
              from the well-manicured garden to the thoughtfully decorated
              living spaces, contributed to a truly exceptional and memorable
              stay.
            </div>
          </div>
          <div className="reviews-card">
            <div className="review-img"></div>
            <div className="review-name">Rohit Das</div>
            <div className="review-para">
              Our stay at the house was nothing short of exceptional. The
              seamless blend of modern amenities and traditional touches
              provided a unique and unforgettable experience.
            </div>
          </div>
          <div className="reviews-card">
            <div className="review-img"></div>
            <div className="review-name">Harish Patel</div>
            <div className="review-para">
              Our stay at the house surpassed all expectations. The picturesque
              surroundings, coupled with the comfortable and well-appointed
              interiors, created an idyllic retreat.truly magical experience
              that left us longing to return.
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Rent_Card_info;
