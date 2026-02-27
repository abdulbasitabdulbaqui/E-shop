import React from "react";
import { Button, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/signup");
  };

  const handleTitle = () => {
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="container">
      <div className="row border-bottom p-2 mt-2 align-items-center">
        {/* Left Side - Welcome + Login */}
        <div className="col-12 col-md-6 d-flex flex-wrap align-items-center gap-2">
          <span>Welcome to my E-shop</span>
          <Button
            onClick={handleLogin}
            variant="link"
            className="text-danger p-0"
          >
            Login
          </Button>
        </div>

        {/* Right Side - Navbar */}
        <div className="col-12 col-md-6">
          <Navbar expand="md">
            {/* Logo */}
            <Navbar.Brand
              onClick={handleTitle}
              className="fw-bold text-success"
              style={{ cursor: "pointer" }}
            >
              E-shop 🛒
            </Navbar.Brand>

            {/* 3 Lines */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={NavLink} to="/">
                  Home
                </Nav.Link>

                <Nav.Link as={NavLink} to="/products">
                  Products
                </Nav.Link>

                <Nav.Link as={NavLink} to="/about">
                  About-us
                </Nav.Link>

                <Nav.Link as={NavLink} to="/cart">
                  Cart
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
