import { useState } from "react";
import "./Login.css";
import { useContext } from "react";
import UserContext from "../../api/contextApi";
import { useEffect } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const Login = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [warning, setWarning] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(true);

  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const { setIsHome, theme, validateEmail, validatePassword, setUser } =
    useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    setIsHome(true);
  }, [setIsHome]);

  // changing Password visibility when someone click on eye icon
  const handlePasswordVisibility = () => {
    setPasswordVisibility((prev) => !prev);
  };

  // password
  const handlePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordValid(validatePassword(newPassword));
    setWarning(false);
  };

  // email
  const handleEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
    setWarning(false);
  };
  ``;
  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEmailValid || !isPasswordValid || email === "" || password === "") {
      setWarning(true);
    } else {
      Axios.post("http://localhost:5174/api/login", { email, password })
        .then((response) => {
          const userData = response.data;
          if (userData.message) {
            setErrorMsg(userData.message);
          } else {
            setErrorMsg("");
            setUser(userData);
            navigate("/rentSection");
          }
        })
        .catch((error) => {
          console.error(error);
          setErrorMsg("Invalid email or password");
        });
    }
  };

  return (
    <div className="login-sec" data-theme={theme}>
      <img src="/wave.svg" alt="wave" className="wave" />
      <div className="login-inner-con">
        <div className="login-form-container">
          <div className="form-img-con-login">
            <img src="/login.png" alt="login img" />
          </div>
          <form
            className="form"
            id="login-form"
            onSubmit={handleSubmit}
            action=""
          >
            <h1>Login</h1>
            <div className="inputDiv email">
              <input
                type="email"
                placeholder="Email Address"
                onChange={handleEmail}
                className="in"
              />
              {!isEmailValid && <span>invalid Email Entered</span>}
            </div>
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
                {errorMsg && <p>{errorMsg}</p>}
              </div>
              <div className="login-redirect">
                doesn't have an account?{" "}
                <Link
                  to={"/register"}
                  className="link form-link"
                  id="form-link1"
                >
                  Register
                </Link>
              </div>
              <div className="login-redirect forgot-password">
                <Link to={"/"} id="form-link2" className="link form-link">
                  forgot password
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
