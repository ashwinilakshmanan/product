import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {filterByCategory} from "../action/ProductAction"

export default function CategoryFiltering() {
  
  const dispatch = useDispatch();
  const{productList}=useSelector((state)=>{
    return state.products;
  })
  const[filter,setFilter]=useState(productList)
  const onDeptClick = (event) => {
    dispatch(filterByCategory(event));
  };
  return (
    <>
      <div style={{ marginleft: "50px" }}>
        <b style={{paddingleft:"30px"}}>Category</b>
        <br />
        <div >
          <button
            className="btn btn-link butn "
            onClick={() => {
              onDeptClick("men's clothing");
            }}
          >
            Men's Clothing
          </button>
          </div>
          <div>
          <button
            className="btn btn-link butn"
            onClick={() => {
              onDeptClick("women's clothing");
            }}
          >
            Women's Clothing
          </button>
          </div>
          <div>
          <button
            className="btn btn-link butn"
            onClick={() => {
              onDeptClick("jewelery");
            }}
          >
            Jewelery
          </button>
          </div>
          <div>
          <button
            className="btn btn-link butn"
            onClick={() => {
              onDeptClick("electronics");
            }}
          >
            Electronics
          </button>
        </div>
      </div>
    </>
  );

 
}
