import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [isHome, setIsHome] = useState(false);
  const [user, setUser] = useState(false);
  const [houseList, setHouseList] = useState([]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  // Email Checker
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };
  //password
  const validatePassword = (password) => {
    return password.length >= 8;
  };
  // handle log out
  const handleLogOut = () => {
    setUser(false);
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
    setIsHome,
    isHome,
    user,
    validateEmail,
    validatePassword,
    setUser,
    handleLogOut,
    setHouseList,
    houseList,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContext;
