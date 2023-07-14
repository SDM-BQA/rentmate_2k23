import { useState } from "react";
import "./Profile_page_com.css";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { AiOutlinePlus } from "react-icons/ai";
import { useContext } from "react";
import UserContext from "../../api/contextApi";
import HomeForm from "../homeForm/HomeForm";

const Profile_page_com = () => {
  const { theme, user } = useContext(UserContext);

  // Accordian
  const [showDetails, setShowDetails] = useState(false);

  const rowList = [
    {
      id: 1,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, nihil.",
    },
    {
      id: 2,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, nihil.",
    },
    {
      id: 3,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, nihil.",
    },
    {
      id: 4,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, nihil.",
    },
    {
      id: 5,
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, nihil.",
    },
  ];

  // home add btn
  const [showHomeFormBtn, setShowHomeFromBtn] = useState(true);

  // home form
  const [showHomeForm, setshowHomeForm] = useState(true);

  // add a form to add home
  const handleAddHomeFormBtn = () => {
    setShowHomeFromBtn((prev) => !prev);
    setshowHomeForm((prev) => !prev);
  };

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
        <h2>Your Listed Property</h2>
        {/* house */}
        {rowList.map((row) => (
          <div className="houseRow" key={row.id}>
            <div
              className="houseSmallDesc"
              onClick={() => handleDetailsClick(row.id)}
            >
              <span>{row.content}</span>
              <span>
                {showDetails[row.id] ? <SlArrowUp /> : <SlArrowDown />}
              </span>
            </div>
            {showDetails[row.id] && <hr className="line" />}
            {/* house full details */}
            {showDetails[row.id] && (
              <div className="houseFullDetails">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                perspiciatis saepe, aut fugiat voluptate aperiam culpa ex?
                Corrupti, aspernatur? Maxime possimus, ab officia minima,
                asperiores culpa sequi, quia dolore quaerat doloremque vel
                consequatur quis mollitia non impedit! Reprehenderit eligendi
                corrupti quia quidem accusantium adipisci labore, officia dolore
                voluptas quam doloremque!
              </div>
            )}
          </div>
        ))}

        {/* house row add icon */}
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
