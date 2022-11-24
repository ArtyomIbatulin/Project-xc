import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Rings",
    price: 1000,
    description: "Описание книги",
    img: "Адрес картинки",
  },
  {
    id: 2,
    name: "Wilds",
    price: 500,
    description: "Описание книги",
    img: "Адрес картинки",
  },
  {
    id: 3,
    name: "Roots",
    price: 123,
    description: "Описание книги",
    img: "Адрес картинки",
  },
  {
    id: 4,
    name: "Books",
    price: 345,
    description: "Описание книги",
    img: "Адрес картинки",
  },
];

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
});

export default bookSlice.reducer;
