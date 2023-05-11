import { useState } from "react";
import "./Register.css";
import { useContext } from "react";
import UserContext from "../../api/contextApi";
import { useEffect } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const Register = () => {
  // const navigate = useNavigate();

  const [isValidUserType, setIsValidUserType] = useState(true);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [password, setPassword] = useState("");

  const [warning, setWarning] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(true);

  const [isNameValid, setIsNameValid] = useState(true);

  const [isAgeValid, setIsAgeValid] = useState(true);

  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const [emailExist, setEmailExist] = useState(false);

  // all form details
  const [formDetails, setFormDetails] = useState({
    userType: "",
    userName: "",
    userAge: "",
    emailAdd: "",
    password: "",
  });
  // api
  const { setIsHome, theme, validateEmail, validatePassword } =
    useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    setIsHome(true);
  }, [setIsHome]);

  // type
  const handleUserType = (e) => {
    const userType = e.target.value;
    if (userType === "") {
      setIsValidUserType(false);
    } else {
      setIsValidUserType(true);
      setFormDetails((prev) => ({
        ...prev,
        userType: userType,
      }));
    }
  };

  // name
  const handleName = (e) => {
    setWarning(false);
    const name = e.target.value;
    setName(name);
    if (name.length >= 3) {
      setIsNameValid(true);
      setFormDetails((prev) => ({
        ...prev,
        userName: name,
      }));
    } else {
      setIsNameValid(false);
    }
  };

  // age
  const handleAge = (e) => {
    setWarning(false);
    const age = e.target.value;
    setAge(age);
    if (age >= 18 && age <= 95) {
      setIsAgeValid(true);
      setFormDetails((prev) => ({
        ...prev,
        userAge: age,
      }));
    } else {
      setIsAgeValid(false);
    }
  };

  // changing Password visibility when someone click on eye icon
  const handlePasswordVisibility = () => {
    setPasswordVisibility((prev) => !prev);
  };

  // password
  const handlePassword = (e) => {
    setWarning(false);
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordValid(validatePassword(newPassword));
    setWarning(false);
    if (setIsPasswordValid) {
      setFormDetails((prev) => ({
        ...prev,
        password: newPassword,
      }));
    }
  };

  // email
  const handleEmail = (e) => {
    setWarning(false);
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
    setWarning(false);
    if (setIsEmailValid) {
      setFormDetails((prev) => ({
        ...prev,
        emailAdd: newEmail,
      }));
    }
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !isEmailValid ||
      !isPasswordValid ||
      !isNameValid ||
      !isAgeValid ||
      email === "" ||
      password === "" ||
      name === "" ||
      age === ""
    ) {
      setWarning(true);
    } else {
      Axios.post("http://localhost:5174/api/checkEmail", {
        userEmail: formDetails.emailAdd,
      })
        .then((response) => {
          console.log(response.data);
          setEmailExist(false);
          // Email does not exist, continue with registration
          Axios.post("http://localhost:5174/api/insert", {
            userType: formDetails.userType,
            userName: formDetails.userName,
            userAge: formDetails.userAge,
            userEmail: formDetails.emailAdd,
            userPassword: formDetails.password,
          })
            .then(() => {
              console.log("successful insert");
            })
            .catch((err) => {
              console.log(err);
            });
          navigate("/login");
        })
        .catch((error) => {
          console.log(error.response.data);
          // Email already exists, show error message
          setEmailExist(true);
        });
    }
  };

  return (
    <div className="login-sec" data-theme={theme}>
      <img src="/wave.svg" alt="wave" className="wave" />
      <div className="login-inner-con">
        <div className="login-form-container">
          <div className="form-img-con-login">
            <img src="/sign1.png" alt="login img" />
          </div>
          <form
            className="form"
            id="login-form"
            onSubmit={handleSubmit}
            action=""
          >
            <h1>SignUp</h1>
            {/* type */}
            <div className="inputDiv">
              <select name="user_type" onChange={handleUserType} required>
                <option value="">I am a</option>
                <option value="tenant">Tentant</option>
                <option value="tenant">Owner</option>
              </select>
              {!isValidUserType && <span>Select a Type</span>}
            </div>
            {/* name */}
            <div className="inputDiv username">
              <input
                type="text"
                placeholder="Name"
                onChange={handleName}
                className="in"
              />
              {!isNameValid && <span>Name Must be 3 Charecter Long</span>}
            </div>
            {/* Age */}
            <div className="inputDiv age">
              <input
                type="number"
                placeholder="Age"
                onChange={handleAge}
                className="in"
                min="18"
                max="95"
              />
              {!isAgeValid && <span>Enter Age Between 18 to 95</span>}
            </div>
            {/* email */}
            <div className="inputDiv email">
              <input
                type="email"
                placeholder="Email Address"
                onChange={handleEmail}
                className="in"
              />
              {!isEmailValid && <span>invalid Email Entered</span>}
            </div>
            {/*  */}
            <div className="inputDiv password">
              <div className="eye">
                <input
                  value={password}
                  type={!passwordVisibility ? "password" : "text"}
                  placeholder="Password"
                  onChange={handlePassword}
                  className="in"
                />

                {!passwordVisibility && (
                  <AiOutlineEye
                    className="ico"
                    onClick={handlePasswordVisibility}
                  />
                )}
                {passwordVisibility && (
                  <AiOutlineEyeInvisible
                    className="ico"
                    onClick={handlePasswordVisibility}
                  />
                )}
              </div>
              {!isPasswordValid && <span>invalid Password Entered</span>}
            </div>

            <input
              type="submit"
              className="login-button btn"
              value="Login"
              id=""
            />
            <div className="form-lower">
              <div className="warning">
                {warning && <p>Enter Appropiate Values</p>}
                {emailExist && <p>Email Already Exists</p>}
              </div>
              <div className="login-redirect">
                Already have an account?{" "}
                <Link to={"/login"} className="link form-link" id="form-link1">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
