import { useState } from "react";
import "./HomeForm.css";
import { BiRupee } from "react-icons/bi";
import Axios from "axios";
import { useContext } from "react";
import UserContext from "../../api/contextApi";

const HomeForm = () => {
  const { user, handleAddHomeFormBtn, setShowHomeFromBtn, setshowHomeForm } =
    useContext(UserContext);
  const [formData, setFormData] = useState({
    bhkNo: "",
    bedroom: "",
    bathroom: "",
    kitchen: "",
    carpetArea: "",
    balconies: "",
    furnishing: "",
    rent: "",
    houseno: "",
    floor: "",
    flatname: "",
    city: "",
    address: "",
    wheelchair: "",
    pet: "",
    wifi: "",
    lift: "",
    eletricCharge: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const combinedLocation = [
      formData.houseno,
      formData.floor,
      formData.flatname,
      formData.city,
    ].join(", ");

    const updatedFormData = {
      ...formData,
      houseno: "",
      floor: "",
      flatname: "",
      city: "",
      state: "",
      address: combinedLocation,
      ownerName: user.userName,
      age: user.userAge,
      gender: "female",
    };

    console.log(updatedFormData);
    // Send form data to the backend
    Axios.post("http://localhost:5174/api/homeDataInsert", updatedFormData)
      .then((response) => {
        console.log(response.data);
        // Handle success response
      })
      .catch((error) => {
        console.error(error);
        // Handle error response
      });

    // Reset form fields
    setFormData({
      bhkNo: "",
      bedroom: "",
      bathroom: "",
      kitchen: "",
      carpetArea: "",
      balconies: "",
      furnishing: "",
      rent: "",
      houseno: "",
      floor: "",
      flatname: "",
      city: "",
      state: "",
      wheelchair: "",
      pet: "",
      wifi: "",
      lift: "",
    });
    setShowHomeFromBtn((prev) => !prev);
    setshowHomeForm((prev) => !prev);
  };
  return (
    <div className="homeFormCon">
      {/* <div classNameName="secHeading">Home Basic Details</div> */}

      <form onSubmit={handleSubmit}>
        <h1>Rental Home Details</h1>
        <h2>Resident Details:</h2>
        <div className="formdesign">
          BHK No:-
          <input
            type="number"
            name="bhkNo"
            value={formData.bhkNo}
            onChange={handleInputChange}
          />
        </div>
        <div className="formdesign">
          Bedroom(s) :-
          <input
            type="number"
            name="bedroom"
            value={formData.bedroom}
            onChange={handleInputChange}
          />
        </div>
        <div className="formdesign">
          Bathroom(s) :-
          <input
            type="number"
            name="bathroom"
            value={formData.bathroom}
            onChange={handleInputChange}
          />
        </div>
        <div className="formdesign">
          Kitchen :-
          <input
            type="number"
            name="kitchen"
            value={formData.kitchen}
            onChange={handleInputChange}
          />
        </div>
        <div className="formdesign">
          Carpet Area :-
          <input
            type="number"
            name="carpetArea"
            value={formData.carpetArea}
            onChange={handleInputChange}
          />
          Sq.ft.
        </div>
        <div className="formdesign">
          Ballcony :-
          <input
            type="number"
            name="balconies"
            value={formData.balconies}
            onChange={handleInputChange}
          />
        </div>
        <div className="formdesign">
          Furnshing :- Full Furnshied
          <input
            type="radio"
            name="furnishing"
            value="Full Furnished"
            checked={formData.furnishing === "Full Furnished"}
            onChange={handleInputChange}
          />
          Semi Furnished
          <input
            type="radio"
            name="furnishing"
            value="Semi Furnished"
            checked={formData.furnishing === "Semi Furnished"}
            onChange={handleInputChange}
          />
          Non Furnished
          <input
            type="radio"
            name="furnishing"
            value="Non Furnished"
            checked={formData.furnishing === "Non Furnished"}
            onChange={handleInputChange}
          />
        </div>
        <div className="formdesign">
          Rent :- <BiRupee />
          <input
            type="number"
            name="rent"
            value={formData.rent}
            onChange={handleInputChange}
          />
          /per Month
        </div>
        <h2>Location Details:</h2>
        <div className="formdesign">
          House No :-{" "}
          <input
            type="number"
            name="houseno"
            value={formData.houseno}
            onChange={handleInputChange}
          />
        </div>
        <div className="formdesign">
          Floor :-{" "}
          <input
            type="number"
            name="floor"
            value={formData.floor}
            onChange={handleInputChange}
          />
        </div>
        <div className="formdesign">
          Flat Name :-{" "}
          <input
            type="text"
            name="flatname"
            value={formData.flatname}
            onChange={handleInputChange}
          />
        </div>
        <div className="formdesign">
          City :-{" "}
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>

        <div className="formdesign">
          State :-{" "}
          <input
            type="text"
            name="state"
            value={formData.pinNo}
            onChange={handleInputChange}
          />
        </div>
        <h2>Others:</h2>
        <div className="formdesign">
          Wheelchair Accessibility :- Yes
          <input
            type="radio"
            name="wheelchair"
            value="yes"
            checked={formData.wheelchair === "yes"}
            onChange={handleInputChange}
          />
          No
          <input
            type="radio"
            name="wheelchair"
            value="no"
            checked={formData.wheelchair === "no"}
            onChange={handleInputChange}
          />
        </div>
        <div className="formdesign">
          Pet Friendly :- Yes
          <input
            type="radio"
            name="pet"
            value="yes"
            checked={formData.pet === "yes"}
            onChange={handleInputChange}
          />
          No
          <input
            type="radio"
            name="pet"
            value="no"
            checked={formData.pet === "no"}
            onChange={handleInputChange}
          />
        </div>
        <div className="formdesign">
          Wifi Service :- Yes
          <input
            type="radio"
            name="wifi"
            value="yes"
            checked={formData.wifi === "yes"}
            onChange={handleInputChange}
          />
          No
          <input
            type="radio"
            name="wifi"
            value="no"
            checked={formData.wifi === "no"}
            onChange={handleInputChange}
          />
        </div>
        <div className="formdesign">
          Lift Service :- Yes
          <input
            type="radio"
            name="lift"
            value="yes"
            checked={formData.lift === "yes"}
            onChange={handleInputChange}
          />
          No
          <input
            type="radio"
            name="lift"
            value="no"
            checked={formData.lift === "no"}
            onChange={handleInputChange}
          />
        </div>
        <div className="formdesign">
          Electric Charge :- Included
          <input
            type="radio"
            name="eletricCharge"
            value="Included"
            checked={formData.eletricCharge === "Included"}
            onChange={handleInputChange}
          />
          Excluded
          <input
            type="radio"
            name="eletricCharge"
            value="Excluded"
            checked={formData.eletricCharge === "Excluded"}
            onChange={handleInputChange}
          />
        </div>
        <input className="button" type="submit" value="submit" />
        <input
          className="button"
          type="reset"
          onClick={handleAddHomeFormBtn}
          value="Cancel"
        />
      </form>
    </div>
  );
};

export default HomeForm;
