import React from "react";
import { Button, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink, useNavigate } from "react-router-dom";

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
      <div className="row border-bottom p-1 mt-2">
        <div className="col-12 col-md-6">
          <span>Welcome to my E-shop</span>
          <span> OR</span>
          <span>
            <Button
              onClick={handleLogin}
              variant="link"
              className="text-danger"
            >
              Login
            </Button>
          </span>
        </div>
        <div className="col-12 col-md-6">
          <Navbar expand="md">
            <Nav defaultActiveKey="/home" as="ul">
              <Nav.Item as="li">
                <Nav.Link as={NavLink} to="/">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link as={NavLink} to="/products">
                  Products
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link as={NavLink} to="/about">
                  About-us
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link as={NavLink} to="/cart">
                  cart
                </Nav.Link>
              </Nav.Item>
              <Nav.Link
                onClick={handleTitle}
                className="ms-5 text-success"
                as={NavLink}
                to="/"
              >
                <h5>E-shop🛒</h5>
              </Nav.Link>
            </Nav>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
