import { useState } from "react";
import "./Profile_page_com.css";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

const Profile_page_com = () => {
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

  const handleDetailsClick = (rowNumber) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [rowNumber]: !prevState[rowNumber],
    }));
  };

  return (
    <div className="profile-page-container">
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
      </div>

      {/* Owner Info */}
      <div className="userProfile">
        <h2>User Profile</h2>
        <div className="userImg"></div>
        <div className="user-details">
          <div className="user-key">Owner Name:</div>
          <div className="user-value userName">John Smith</div>
        </div>
        <div className="user-details">
          <div className="user-key">Owner Age:</div>
          <div className="user-value userAge">23</div>
        </div>
        <div className="user-details">
          <div className="user-key">User Type:</div>
          <div className="user-value userName">Owner</div>
        </div>
      </div>
    </div>
  );
};

export default Profile_page_com;
