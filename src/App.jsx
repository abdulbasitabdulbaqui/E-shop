import React from "react";
import NavBar from "./components/Navbar";
import Discover from "./components/Discover";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import About from "./components/About";
import SignUp from "./components/Signup";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      {location.pathname !== "/signup" && <NavBar />}
      {/* {location.pathname !== "/login" && <NavBar />} */}

      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Discover />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
