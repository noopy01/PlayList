import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
    const response = await axios.get("http://localhost:3000/products");
    return response.data;
  }   catch (error) {
    console.log(error);
  }
}
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(productsFetch.rejected, (state) => {
        state.status = "failed";
       
      });
  },
});

export default productsSlice.reducer;
