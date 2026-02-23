import Carousel from "react-bootstrap/Carousel";
import images from "../assets/images.jpeg";
import shirt from "../assets/shirt.jpg";
import shoes from "../assets/shoes.jpeg";
import "./Carousell.css";

function Carousell() {
  return (
    <div className="container">
      <Carousel indicators={false} data-bs-theme="dark" className="m-4 mb-4 ">
        <Carousel.Item>
          <img className="d-block mx-auto" src={images} alt="First slide" />
          <div className="text-center">
            <h5>VAIGSHA'S Long Skirts for Women</h5>
            <p>Graceful style for every occasion.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block mx-auto" src={shirt} alt="Second slide" />
          <div className="text-center">
            <h5>Premium Cotton T-Shirts</h5>
            <p>Comfort that fits your everyday style.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block mx-auto" src={shoes} alt="Third slide" />
          <div className="text-center">
            <h5>Refined. Reliable. Remarkable.</h5>
            <p>Designed for Confidence & Class</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousell;
