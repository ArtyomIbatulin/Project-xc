import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./features/book/bookSlice";
import userSlice from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    book: bookSlice,
  },
});

export default store;
