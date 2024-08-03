import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./slices/newsSlice";
import categoryReduder from "./slices/categorySlice";

const store = configureStore({
  reducer: {
    news: newsReducer,
    categories:categoryReduder
  },
});

export { store };
