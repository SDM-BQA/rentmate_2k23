import { useEffect, useState } from "react";
import "./Profile_page_com.css";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { AiOutlinePlus } from "react-icons/ai";
import { useContext } from "react";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import UserContext from "../../api/contextApi";
import HomeForm from "../homeForm/HomeForm";
import Axios from "axios";
import { Link } from "react-router-dom";

const Profile_page_com = () => {
  const { theme, user, showHomeFormBtn, showHomeForm, handleAddHomeFormBtn } =
    useContext(UserContext);

  // Accordian
  const [showDetails, setShowDetails] = useState(false);
  const [houseData, setHouseData] = useState([]);

  // ---------------------------------------//
  const fetchHouseData = () => {
    Axios.get(`http://localhost:5174/api/houseData`, {
      params: {
        userName: user.userName.toLowerCase(),
      },
    })
      .then((response) => {
        setHouseData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching house data:", error);
      });
  };

  useEffect(() => {
    fetchHouseData();
  }, []);

  const handleDetailsClick = (rowNumber) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [rowNumber]: !prevState[rowNumber],
    }));
  };

  return (
    <div className="profile-page-container" data-theme={theme}>
      {/* If User is a Owner */}
      <div className="houseListedCon">
        <h2>Your {user.userType === "owner" ? "Listed" : "Liked"} Property</h2>
        {houseData.length === 0 && (
          <h3 className="noPro">
            {user.userType === "owner"
              ? "No Property is Listed"
              : "No Property is Liked"}
          </h3>
        )}
        {/* house */}
        {houseData.map((row) => (
          <div className="houseRow" key={row.id}>
            <div
              className="houseSmallDesc"
              onClick={() => handleDetailsClick(row.id)}
            >
              <div>
                <span className="smallSpec">BHK No: </span> {row.bedroom}BHK{" "}
                {row.bathroom}Baths
              </div>
              <div className="mainAdd">
                <span className="smallSpec">Address: </span>
                {row.address}
              </div>{" "}
              <div>
                <span className="smallSpec">Rent: </span>
                {row.rent}
              </div>
              <span>
                {showDetails[row.id] ? <SlArrowUp /> : <SlArrowDown />}
              </span>
            </div>
            {showDetails[row.id] && <hr className="line" />}
            {/* house full details */}
            {showDetails[row.id] && (
              <div className="houseFullDetails">
                <div className="specSection houserow">
                  <div className="spec-row row1">
                    <div className="spec-col">
                      <div className="spec-ico">
                        <MdOutlineMapsHomeWork className="spec-i" />
                        <span>Configuration</span>
                      </div>
                      <div className="spec-attribute">
                        {row.bedroom} Bedrooms , {row.bathroom} Bathrooms,{" "}
                        {row.balconies} Balconies
                      </div>
                    </div>
                    <div className="spec-col">
                      <div className="spec-ico">
                        <MdOutlineMapsHomeWork className="spec-i" />
                        <span>Area</span>
                      </div>
                      <div className="spec-attribute">
                        Built Up area: {row.carpetArea}
                      </div>
                    </div>
                    <div className="spec-col">
                      <div className="spec-ico">
                        <MdOutlineMapsHomeWork className="spec-i" />
                        <span>Furnishing</span>
                      </div>
                      <div className="spec-attribute">{row.furnishing}</div>
                    </div>
                  </div>

                  {/* row-2 */}
                  <div className="spec-row row2">
                    <div className="spec-col">
                      <div className="spec-ico">
                        <MdOutlineMapsHomeWork className="spec-i" />
                        <span>Rent</span>
                      </div>
                      <div className="spec-attribute">₹{row.rent}</div>
                    </div>
                    <div className="spec-col">
                      <div className="spec-ico">
                        <MdOutlineMapsHomeWork className="spec-i" />
                        <span>Address</span>
                      </div>
                      <div className="spec-attribute">{row.address}</div>
                    </div>
                    <div className="spec-col">
                      <div className="spec-ico">
                        <MdOutlineMapsHomeWork className="spec-i" />
                        <span>Pet Friendly</span>
                      </div>
                      <div className="spec-attribute">{row.PetFriendly}</div>
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
                        {row.WheelChairFriendly}
                      </div>
                    </div>
                    <div className="spec-col">
                      <div className="spec-ico">
                        <MdOutlineMapsHomeWork className="spec-i" />
                        <span>Kitchen</span>
                      </div>
                      <div className="spec-attribute">{row.kitchen}</div>
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
                      <div className="spec-attribute">{row.wifi}</div>
                    </div>
                    <div className="spec-col">
                      <div className="spec-ico">
                        <MdOutlineMapsHomeWork className="spec-i" />
                        <span>Lifi Service</span>
                      </div>
                      <div className="spec-attribute">{row.lift}</div>
                    </div>
                    <div className="spec-col">
                      <div className="spec-ico">
                        <MdOutlineMapsHomeWork className="spec-i" />
                        <span>Electrtic Supply</span>
                      </div>
                      <div className="spec-attribute">
                        {row.ElectricityWaterCharges}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* house row add icon */}
        {user.userType === "owner" ? (
          // Render this block if userType is 'owner'
          <>
            {showHomeFormBtn && (
              <div className="houseAddBtn" onClick={handleAddHomeFormBtn}>
                <span>Add New Home</span>
                <AiOutlinePlus />
              </div>
            )}
            {/* home form btn */}
            {showHomeForm && (
              <div className="homeForm">
                <HomeForm />
              </div>
            )}
          </>
        ) : (
          <Link className="link" to="/rentSection">
            <div className="houseAddBtn">
              <span>Visit New Home</span>
              <AiOutlinePlus />
            </div>
          </Link>
        )}
      </div>

      {/* Owner Info */}
      <div className="userProfile">
        <h2>Your Profile</h2>
        <div className="userImg"></div>
        <div className="user-details">
          <div className="user-key">Your Name:</div>
          <div className="user-value userName">
            {user.userName
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </div>
        </div>
        <div className="user-details">
          <div className="user-key">Your Age:</div>
          <div className="user-value userAge">{user.userAge}</div>
        </div>
        <div className="user-details">
          <div className="user-key">You are a :</div>
          <div className="user-value userName">
            {user.userType.charAt(0).toUpperCase() + user.userType.slice(1)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile_page_com;
