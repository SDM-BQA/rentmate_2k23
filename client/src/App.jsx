import "./App.css";
import { UserContextProvider } from "./api/contextApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Rent_Page from "./pages/rent page/Rent_Page";
import Login_page from "./pages/Login_page/Login_page";
import Home_page from "./pages/Home_page/Home_page";
import Resgister_page from "./pages/Register_page/Resgister_page";
import Rent_info_page from "./pages/Rent_Info_Page/Rent_info_page";
import Profile_page from "./pages/Profile_page/Profile_page";
import Contact_page from "./pages/Contact_page/Contact_page";
import About_page from "./pages/About_page/About_page";
import { useEffect, useState } from "react";
import Loder from "./components/loder/Loder";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <UserContextProvider>
      <BrowserRouter>
        {loading ? (
          <Loder />
        ) : (
          <div className="app">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home_page />} />
              <Route path="/login" element={<Login_page />} />
              <Route path="/register" element={<Resgister_page />} />
              <Route path="/rentSection" element={<Rent_Page />} />
              <Route path="/rentSection/:id" element={<Rent_info_page />} />
              <Route path="/myProfile" element={<Profile_page />} />
              <Route path="/contact" element={<Contact_page />} />
              <Route path="/about" element={<About_page />} />
            </Routes>
            <Footer />
          </div>
        )}
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
