import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-light pt-5 pb-3 mt-5">
        <div className="container">
          <div className="row">
            
            <div className="col-md-3">
              <h5 className="fw-bold">E-shop</h5>
              <p>
                Your one-stop destination for stylish clothing and premium
                footwear. Quality fashion at affordable prices.
              </p>
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light text-decoration-none">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          
            <div className="col-md-3">
              <h5 className="fw-bold">Categories</h5>
              <ul className="list-unstyled">
                <li>Skirts</li>
                <li>T-Shirts</li>
                <li>Formal Shoes</li>
                <li>Casual Wear</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold">Contact Us</h5>
              <p>Email: support@e-shop.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Location: India</p>
            </div>
          </div>

          <hr className="border-light" />

          <div className="text-center">
            <p className="mb-0">
              © {new Date().getFullYear()} E-shop. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
