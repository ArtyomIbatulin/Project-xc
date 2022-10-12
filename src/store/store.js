import { configureStore } from "@reduxjs/toolkit";
import authorSlice from "./features/author/authorSlice";
import bookSlice from "./features/book/bookSlice";
import userSlice from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    book: bookSlice,
    author: authorSlice,
  },
});

export default store;
