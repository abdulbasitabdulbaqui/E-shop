import React from "react";
import shoot from "../assets/shoot.jpeg";
import last from "../assets/last.jpg";
import "./about.css";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation time (1 second)
      // animation happens only once
    });
     AOS.refresh();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-12 col-md-6">
            <h2 data-aos="fade-down">Welcome to Your Store:</h2>
            <p data-aos="fade-down">
              Welcome to E-shop your trusted destination for quality products at
              unbeatable prices. We are a modern e-commerce platform built with
              a passion for delivering the best online shopping experience. Our
              goal is simple: to provide high-quality products, smooth browsing,
              and secure checkout — all in one place.
            </p>
            <h2 data-aos="fade-up">🌟 Our Mission:</h2>
            <p data-aos="fade-up">
              Our mission is to make online shopping: <br />✔ Simple <br />✔
              Secure <br /> ✔ Affordable Affordable <br /> ✔Fast <br />
              We focus on customer satisfaction and continuously improve our
              platform to give you the best shopping experience possible.
            </p>
            <p data-aos="fade-up">
              At E-shop, we carefully select our products to ensure quality,
              affordability, and customer satisfaction. Whether you're shopping
              for fashion, accessories, electronics, or daily essentials, we aim
              to make your experience easy and enjoyable.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img data-aos="fade-left" className="img-fluid" src={shoot} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <img data-aos="fade-right" className="img-fluid mt-4" src={last} alt="" />
          </div>
          <div className="col-12 col-md-6 mt-4">
            <h2 data-aos="fade-left">🚀 Why Choose E-Shope?</h2>
            <p data-aos="fade-left" className="mt-4 p-3">
              At E-Shope, we believe shopping should be simple, secure, and
              enjoyable. We carefully select quality products across fashion,
              electronics, and lifestyle categories to ensure you always get the
              best value for your money. Our platform is designed to provide a
              smooth browsing experience, fast delivery, and reliable customer
              support. Your trust is our priority, and we are committed to
              delivering excellence in every order you place with us.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
