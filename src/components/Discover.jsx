import React from "react";
import photo from "../assets/photo.jpg";
import photo2 from "../assets/photo2.jpg";
import "./discover.css";
import Carousell from "../components/Carousell";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Discover = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation time (1 second)
      // animation happens only once
    });
  }, []);
  return (
    <>
      <Carousell />
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-6">
            <h3 data-aos="fade-up">🛍️ Discover Your Style</h3>
            <p data-aos="fade-right" className="p-3">
              Welcome to our fashion store, where style meets comfort. We offer
              a wide range of high-quality clothing and footwear for every
              occasion — from elegant skirts and trendy T-shirts to premium
              formal shoes. Our goal is to provide affordable fashion with the
              latest trends, ensuring a smooth and enjoyable shopping experience
              for everyone.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img data-aos="fade-up" className=" img-fluid" src={photo} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-6">
            <img data-aos="fade-up" className=" img-fluid" src={photo2} />
          </div>
          <div className="col-12 col-md-6">
            <h3 data-aos="fade-up">✨ Style for Every Occasion</h3>
            <p data-aos="fade-right" className="p-3">
              Discover a complete shopping experience with our carefully curated
              collection of fashion and essentials. Whether you're looking for
              elegant outfits, comfortable everyday wear, or premium footwear,
              we have something for everyone. Our focus is on quality,
              affordability, and the latest trends to help you look confident
              and stylish every day.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Discover;
