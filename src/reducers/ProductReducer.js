import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  product: [],
  selectedProduct: {},
  loading: false,
  errorMessage: undefined,
};

export const fetchAllProducts = createAsyncThunk(
  "products/fetAllProducts",
  async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    return data.json();
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (productId) => {
    const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
    return data.json();
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
        state.errorMessage = undefined;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.product = action.payload;
        state.loading = false;
        state.errorMessage = undefined;
      })
      .addCase(fetchAllProducts.pending, (state, action) => {
        state.loading = true;
        state.errorMessage = undefined;
      })
      .addCase(fetchProductById.pending, (state, action) => {
        state.loading = true;
        state.errorMessage = undefined;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
