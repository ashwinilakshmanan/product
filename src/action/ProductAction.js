import { ActionTypes } from "./actionTypes";

const{SET_PRODUCTS,SET_PROD_SEARCH_TEXT,SELECTED_PRODUCT,CATEGORY_FILTERATION}=ActionTypes

export const setProducts = (products) => {
 
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const setProdSearchText = (searchText) => {

  return {
    type: SET_PROD_SEARCH_TEXT,
    payload: searchText,
  };
};

export const setSelectedProduct = (productId) => {
  return {
    type: SELECTED_PRODUCT,
    payload: productId,
  };
};
export const filterByCategory=(category)=>{
  return{
    type:CATEGORY_FILTERATION,
    payload:category,
  }
}