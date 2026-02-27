import React from "react";
import NavBar from "./components/NavBar";
import Discover from "./components/Discover";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import About from "./components/About";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { useLocation } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";


const App = () => {
  const location = useLocation()
  return (
    <>
      {location.pathname !== "/signup" && location.pathname !== "/login" && (
        <NavBar />
      )}

      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/" element={<Discover />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
