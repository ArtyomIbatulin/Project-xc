import { configureStore } from "@reduxjs/toolkit";
import authorSlice from "./features/author/authorSlice";
import bookSlice from "./features/book/bookSlice";
import categorySlice from "./features/category/categorySlice";
import userSlice from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    book: bookSlice,
    author: authorSlice,
    category: categorySlice,
  },
});

export default store;
