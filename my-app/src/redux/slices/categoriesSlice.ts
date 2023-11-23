import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk<CategoryData>(
  "category/fetchCategories",
  async () => {
    try {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      return data;
    } catch (e) {
      console.log("error", e);
      throw e; //exception
    }
  }
);

type CategoryData = string[]

type TInitialState = {
  items: CategoryData,
  selectedCategory: string
}


const initialState: TInitialState = {
  items: [],
  selectedCategory: 'all'
}

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});
export const { setSelectedCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;

