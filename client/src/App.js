import React from "react";
import AppNavbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";

function App() {
  return (
    <div>
      <AppNavbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
