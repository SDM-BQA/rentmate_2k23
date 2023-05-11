import Login from "../../components/login/Login";
import { useContext } from "react";
import UserContext from "../../api/contextApi";
import { useEffect } from "react";

const Login_page = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default Login_page;
