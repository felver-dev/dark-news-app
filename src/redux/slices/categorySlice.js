import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Top Headlines",
    category: "general",
  },
  {
    id: 5,
    name: "Sports",
    category: "sports",
  },
  {
    id: 2,
    name: "Business",
    category: "business",
  },
  {
    id: 3,
    name: "Entertainment",
    category: "entertainment",
  },
  {
    id: 4,
    name: "Health",
    category: "health",
  },
  {
    id: 6,
    name: "Science",
    category: "science",
  },
  {
    id: 7,
    name: "Technology",
    category: "technology",
  },
];


const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
});

export const SelectAllCategories = (state) => state.categories;
export default categorySlice.reducer;
