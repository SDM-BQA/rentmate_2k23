import "./Rent_Card.css";
import { TbGenderDemigirl, TbGenderDemiboy } from "react-icons/tb";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import roomImg from "/room1.jpg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Rent_Card = ({ house }) => {
  return (
    <>
      <div className="houseCard">
        <div className="innerHouseCard">
          <Link className="link_card" to={`/rentSection/:${house.id}`}>
            {/* head */}
            <div className="cardHead">
              <div className="ownerName">{house.owner_name}</div>
              <div className="ownerInfo">
                {house.gender === "female" ? (
                  <TbGenderDemigirl className="gender" />
                ) : (
                  <TbGenderDemiboy className="gender" />
                )}
                <span>{house.age}</span>
                <span>•</span>
                <span>Landlord</span>
              </div>
            </div>
            {/* img */}
            <div className="houseCardImg">
              <img src={roomImg} alt="" />
            </div>
          </Link>
          {/* room info 1 */}
          <div className="homeInfo1">
            <MdOutlineVerifiedUser className="verified-ico" />
            <span>Verified</span>
            <span>•</span>
            <span>
              <span className="beds-no">2 </span>Beds
            </span>
            <span>•</span>
            <span>
              <span className="house-area">{house.home_size}</span>sq ft.
            </span>
          </div>
          <div className="homeInfo2">
            <span className="bhk_no">{house.bhk_no}</span> BHK,
            <span>{house.address}</span>
          </div>
          <div className="rentInRupee">
            <div className="">
              <BiRupee />
              <span className="money">{house.rent}</span> / month
            </div>
            <Link className="link_card" to="/rentSection/:12">
              <button>Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

Rent_Card.propTypes = {
  house: PropTypes.object.isRequired,
};
export default Rent_Card;
