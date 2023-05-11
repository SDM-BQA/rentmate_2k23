import "./App.css";
import { UserContextProvider } from "./api/contextApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
// import Contact from "./components/contact/Contact";
// import About from "./components/about/About";
import Rent_Page from "./pages/rent page/Rent_Page";
import Login_page from "./pages/Login_page/Login_page";
import Home_page from "./pages/Home_page/Home_page";
import Resgister_page from "./pages/Register_page/Resgister_page";
import Rent_info_page from "./pages/Rent_Info_Page/Rent_info_page";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home_page />} />
            <Route path="/login" element={<Login_page />} />
            <Route path="/register" element={<Resgister_page />} />
            <Route path="/rentSection" element={<Rent_Page />} />
            <Route path="/rentSection/:id" element={<Rent_info_page />} />
          </Routes>
          {/* <About />
          <Contact />
          <Footer /> */}
        </div>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
