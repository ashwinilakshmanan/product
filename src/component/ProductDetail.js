import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import  "../component/style.css";
import { setSelectedProduct } from "../action/ProductAction";

export default function ProductDetail() {
  const [productDetail, setProductDetail] = useState();
  let params = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => {
    return state.products.productList;
  });

  const productId = params.productId;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`).then(
      async (response) => {
        const data = await response.json();
        setProductDetail(data);
        dispatch(setSelectedProduct(data));
      }
    );
  }, [productId]);

  const filteredProd = product?.filter((p) => {
    return p.id == productId;
  });

  return filteredProd.map((prod) => {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={prod.image}
                alt={prod.title}
                height="400px"
                width="400px"
              />
            </div>
            <div className="col-md-6">
              <h4 className="text=uppercase text-black-50">{prod.category}</h4>
              <h1 className="display-5">{prod.title}</h1>
              <p className="lead fw-bolder">
                Rating{prod.rating && prod.rating.rate}
                <i className=" fa fa-star"></i>
              </p>
              <h3 className="display-6 fw-bold my-4">${prod.price}</h3>
              <p className=" lead">{prod.description}</p>
            </div>
          </div>
        </div>
      </>
    );
  });
}
