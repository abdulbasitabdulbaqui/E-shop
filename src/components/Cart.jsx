import React from "react";
import { useState, useEffect } from "react";
import "./productdetail.css";
import Button from "react-bootstrap/Button";
import "./cart.css"
import { toast } from "react-toastify";

const Cart = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("cardItems")) || [],
  );
  const [counter, setcounter] = useState(1);
  const [error, setError] = useState("");

  const handleDecrement = () => {
    setcounter(counter - 1);
  };

  const handleIncrement = () => {
    setcounter(counter + 1);
  };

  const handleDelete = (id) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem("cardItems", JSON.stringify(updated));
    toast.error("product Delete")
  };
  useEffect(() => {
    if (items.length === 0) {
      setError("Opps! Add Products");
    } else {
      setError(""); 
    }
  }, [items]);
  return (
    <>
      {error && <h2 className="text-danger text-center mt-5">{error}</h2>}

<div className="container cart-wrapper">
  <div className="row justify-content-center">
    <div className="col-12 col-md-8">

      {items.map((product) => (
        <div key={product.id} className="cart-card">

          <div className="cart-img">
            <img
              className="img-fluid"
              src={product?.images[0]}
              alt={product?.title}
            />
          </div>

          <div className="cart-info">
            <h5>{product?.title}</h5>

            <div className="quantity-box">
              <Button
                disabled={counter === 1}
                onClick={handleDecrement}
                size="sm"
              >
                -
              </Button>

              <span className="qty-number">{counter}</span>

              <Button
                disabled={counter === 5}
                onClick={handleIncrement}
                size="sm"
              >
                +
              </Button>
            </div>

            <Button
              onClick={() => handleDelete(product?.id)}
              variant="outline-danger"
              size="sm"
              className="delete-btn"
            >
              Delete
            </Button>

          </div>
        </div>
      ))}

    </div>
  </div>
</div>
    </>
  );
};

export default Cart;
