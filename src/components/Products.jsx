import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Loader from "./Loader";
import "./products.css";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const [itemPerPage, setItemPerPage] = useState(8);
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const pages = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemPerPage);
  const safeCurrentPage =
    currentPage > totalPages && totalPages !== 0 ? totalPages : currentPage;

  const groupSize = 5;

  const currentGroup = Math.ceil(safeCurrentPage / groupSize);
  const startPage = (currentGroup - 1) * groupSize + 1;
  const endPage = Math.min(startPage + groupSize - 1, totalPages);
  const visibleButtons = endPage >= startPage ? endPage - startPage + 1 : 0;

  const fetchData = async () => {
    setisLoading(true);
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=0");
      setProducts(res.data.products);
      console.log(res.data.products);
    } catch (error) {
      setError(error.message);
    }
    setisLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (error) return <div className="alert alert-danger">{error}</div>;
  if (isLoading) return <div className="mt-5">{<Loader />}</div>;

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {pages.map((item) => (
            <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex" key={item.id}>
              <Card
                className="w-100 h-80 d-flex flex-column shadow-sm liftCard"
                style={{ cursor: "pointer" }}
              >
                <Card.Img
                  variant="top"
                  src={item?.images[0]}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{item?.title}</Card.Title>
                  <Card.Text>{item?.description}</Card.Text>
                  <Button className="mt-auto" variant="outline-danger">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
          {visibleButtons > 0 && (
            <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
              <Button
                disabled={currentPage === 1}
                onClick={() => setSearchParams({ page: currentPage - 1 })}
                className="me-2 "
                variant="outline-danger"
              >
                Previous
              </Button>
              <div>
                {[...Array(endPage - startPage + 1)].map((_, index) => {
                  const pageNumber = startPage + index;

                  return (
                    <Button
                      key={pageNumber}
                      className="mx-1"
                      variant={
                        currentPage === pageNumber ? "dark" : "outline-dark"
                      }
                      onClick={() => setSearchParams({ page: pageNumber })}
                    >
                      {pageNumber}
                    </Button>
                  );
                })}
              </div>
              <Button
                disabled={currentPage === totalPages}
                onClick={() => setSearchParams({ page: currentPage + 1 })}
                className="me-2"
                variant="outline-success"
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
