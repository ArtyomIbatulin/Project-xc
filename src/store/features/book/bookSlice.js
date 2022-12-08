import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Rings",
    price: 1000,
    description: "Описание книги",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvGw-65vEUR3k8s60dEUFY_lHgAKxXMd-3uA&usqp=CAU",
  },
  {
    id: 2,
    name: "Wilds",
    price: 500,
    description: "Описание книги",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQ7qVM6wbOh3pQJgnqqJTMXX7QVXqNcC5AA&usqp=CAU",
  },
  {
    id: 3,
    name: "Roots",
    price: 123,
    description: "Описание книги",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQMvZzDKnX9uOHpx-p7FKdanWrFZHqhb4_Q&usqp=CAU",
  },
  {
    id: 4,
    name: "Books",
    price: 345,
    description: "Описание книги",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQowfeOqvEj637A_kAqJ54B8zGtseM9uCOOvt8Rz8mE2JwGcNYWcXLDI4Xs79_Z8RGRIDc&usqp=CAU",
  },
];

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
});

export default bookSlice.reducer;
