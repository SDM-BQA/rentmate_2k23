import Rent_Card from "../Rent_Card/Rent_Card";
import "./Rent_Section.css";
import { BsSearchHeart } from "react-icons/bs";
import { useContext } from "react";
import UserContext from "../../api/contextApi";
import { Houses } from "./HouseList.js";

const Rent_Section = () => {
  const { theme } = useContext(UserContext);

  // console.log(Houses.house1);
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
          <div className="rentSectionHeading">Top Places To Watch</div>
          {/* house list */}
          <div className="houseList">
            {Houses.map((house) => (
              <Rent_Card key={house.id} house={house} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rent_Section;
