import Rent_Card from "../Rent_Card/Rent_Card";
import "./Rent_Section.css";
import { BsSearchHeart } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../api/contextApi";
import { AiOutlinePlus } from "react-icons/ai";
// import { Houses } from "./HouseList.js";
import Axios from "axios";
import { Link } from "react-router-dom";

const Rent_Section = () => {
  const { theme, setHouseList, user } = useContext(UserContext);

  // console.log(Houses.house1);
  const [data, setData] = useState([]);
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

  const fetchData = async () => {
    try {
      const response = await Axios.get("http://localhost:5174/api/houseList");
      setData(response.data);
      setHouseList(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchHouseData();
  }, []);

  return (
    <div className="rentSecCon" data-theme={theme}>
      {/* Search Bar Portion */}
      <div className="rentSecSearchCon">
        <div className="rentSearchBar">
          <div className="rentSearchbox">
            <div className="rentSerachMain">
              <BsSearchHeart className="heartSearchIco" />
              <input type="text" placeholder="Search Your New Home" />
            </div>
            <div className="rentSearchButton">Search</div>
          </div>
        </div>
      </div>

      {/* Main house listing portion */}
      <div className="houseListSection">
        <div className="houseListSectionInnerCon">
          <div className="rentSectionHeading">
            {user.userType === "tenant"
              ? "Top Places To Watch"
              : "Your Listed Properties"}
          </div>
          {/* house list */}
          <div className="houseList">
            {user.userName === "owner" && houseData.length === 0 && (
              <p className="noProPara">No Property Listed</p>
            )}
            {user.userType === "tenant"
              ? // Render this block if userType is "tenant"
                data.map((house) => <Rent_Card key={house.id} house={house} />)
              : // Render this block if userType is not "tenant"
                houseData.map((house) => (
                  <Rent_Card key={house.id} house={house} />
                ))}
            {user.userType === "owner" && (
              <Link className="link" to="/myProfile">
                <div className="houseAddBtn rentSecAddBtn">
                  <span>Add New Home</span>
                  <AiOutlinePlus />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rent_Section;
