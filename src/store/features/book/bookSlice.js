import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Название",
  price: 1000,
  description: "Описание книги",
  img: "Адрес картинки",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    isAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
});

export default bookSlice.reducer;
export const { isAuth } = bookSlice.actions;
