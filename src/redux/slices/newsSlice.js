import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, API_KEY } from "../api";

const initialState = {
  status: "idle",
  error: "",
  news: [],
};

export const fetchAllNews = createAsyncThunk("news/fetchAllNews", async () => {
  try {
    const response = await axios(`${BASE_URL}${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    error = error.message;
  }
});

const getNewsPerCategory = createAsyncThunk(
  "categories/getNewsPerCategory",
  async (category) => {
    try {
      const response = await axios.get("");
    } catch (error) {
      error = error.message;
    }
  }
);


const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllNews.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAllNews.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.error.message);
      })
      .addCase(fetchAllNews.fulfilled, (state, action) => {
        state.status = " succeeded";
        state.news = state.news.concat(action.payload);
      });
  },
});

export const selectAllNews = (state) => state.news.news;
export const selectNewsById = (state, newsId) =>
  state.news.news.find((n) => n.id === newsId);
export const SelectNewsStatus = (state) => state.news.status;
export const SelectNewsError = (state) => state.news.error;

export default newsSlice.reducer;
