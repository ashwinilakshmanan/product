import { ActionTypes } from "../action/actionTypes";

const {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  SET_PROD_SEARCH_TEXT,
  CATEGORY_FILTERATION,
} = ActionTypes;

const initialState = {
  productList: [],
};
export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      const newState = {
        ...state,
        productList: action.payload,
      };

      return newState;

    case SET_PROD_SEARCH_TEXT:
      
      return {
        ...state,
        searchText: action.payload,
      };

    case SELECTED_PRODUCT:
      return {
        ...state,
        productId: action.payload,
      };

    case CATEGORY_FILTERATION:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
      break;
  }
};
