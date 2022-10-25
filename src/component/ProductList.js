import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllProducts } from "../reducers/ProductReducer";
import "../component/style.css"

export default function ProductList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  const prodList = useSelector((state) => {
    return state.products.products;
  });
  console.log("product", prodList);
  const dataLoading = useSelector((state) => {
    return state.products.loading;
  });
  return (
    <>
   
      <div style={{ marginBottom: "50px" }} className="d-flex flex-wrap">
        {dataLoading ? (
          <h1>Loading....</h1>
        ) : (
          prodList.map((product, index) => {
            return (
              <div  className="shadowcard ">
              <Card
                key={product.id}
                className="card h-100 text-center p-3 m-2"
                style={{ width: "18rem" }}
                onClick={() => {
                  navigate("/products/" + product.id);
                }}
              >
                <Card.Img
                  variant="top"
                  className="cardimg"
                  src={product.image}
                  height250px
                />
                <Card.Body className="card-body">
                  <div className=" text-center cardtxt">
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Title>{product.category}</Card.Title>
                    <Card.Text className="card-text lead fw-bold">
                      {product.price}
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
              </div>
            );
          })
        )}
      </div>
      
    </>
  );
}
