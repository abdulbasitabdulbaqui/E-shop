import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./productdetail.css";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const dataFetch = async () => {
    try {
      const respo = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(respo?.data);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    dataFetch();
  }, [id]);
  if (error) return <h2 className="text-center">Error: {error}</h2>;
  if (!product) return <h2 className="text-center">Loading...</h2>;

  const handleCart = (product) => {
    const cardItems = JSON.parse(localStorage.getItem("cardItems")) || [];
    localStorage.setItem("cardItems", JSON.stringify([...cardItems, product]));
    toast.success("Product Added");
  };
  
  const handleButton = () => {
    navigate("/products");
  };
  return (
    <>
      <div className="container product-detail-wrapper">
        <div className="row align-items-center product-card">
          {/* Left Side - Image */}
          <div className="col-12 col-md-6 text-center">
            <img
              className="img-fluid custom-img"
              src={product?.images[0]}
              alt={product?.title}
            />
          </div>

          {/* Right Side - Details */}
          <div className="col-12 col-md-6 product-info">
            <h2 className="product-title">{product?.title}</h2>

            <div className="rating">⭐ {product?.rating}</div>

            <p className="description">{product?.description}</p>

            <h3 className="price">₹ {product?.price}</h3>

            <Button
              onClick={() => handleCart(product)}
              variant="danger"
              className="cart-btn"
            >
              Add to Cart
            </Button>
          </div>
        </div>
        <div className="col-6 col-md-2 mt-4 w-10">
          <Button onClick={handleButton} className="cart-btn">
            Back to products
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
