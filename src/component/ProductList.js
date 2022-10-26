import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProducts } from "../action/ProductAction";
import "../component/style.css";

export default function ProductList() {
  const navigate = useNavigate();
  const [productList1, setProductList1] = useState([]);
  const { productList, searchText, category } = useSelector((state) => {
    return state.products;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")?.then(async (response) => {
      const data = await response.json();

      dispatch(setProducts(data));
    });
  }, []);

  useEffect(() => {
    setProductList1(productList);
  }, [productList]);

  useEffect(() => {
    if (searchText) {
      const filteredProds = productList?.filter((prod) => {
        return (
          prod.title?.toLowerCase().indexOf(searchText?.toLowerCase()) > -1
        );
      });
      setProductList1(filteredProds);
    }
  }, [searchText]);

  useEffect(() => {
    if (category) {
      const filteredCategory = productList?.filter((catgry) => {
        return catgry.category === category;
      });
      setProductList1(filteredCategory);
    }
  }, [category]);

  return (
    <>
      <div style={{ marginBottom: "50px" }} className="d-flex flex-wrap">
        {productList1?.map((product, index) => {
          return (
            <div className="shadowcard ">
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
        })}
      </div>
    </>
  );
}
