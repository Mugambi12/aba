import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/index.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import AppNavbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import SearchEngine from "./Components/SearchEngine/Search";

function App() {
  return (
    <div>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<SearchEngine />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
