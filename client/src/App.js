import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.css";
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AppNavbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import SearchEngine from "./Components/SearchEngine/Search";

function App() {
  const location = useLocation();

  useEffect(() => {
    let title = "African Biodiversity Alliance";
    if (location.pathname === "/") {
      title = "Home - ABA";
    } else if (location.pathname === "/about") {
      title = "About - ABA";
    }
    document.title = title;
  }, [location]);

  return (
    <div>
      <AppNavbar />
      <SearchEngine />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
