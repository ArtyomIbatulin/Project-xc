import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  name: "Название",
  price: 1000,
  description: "Описание книги",
  img: "Адрес картинки",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
});

export default bookSlice.reducer;
