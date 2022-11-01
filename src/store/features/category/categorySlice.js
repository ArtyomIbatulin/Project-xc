import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Все" },
  { id: 2, name: "Фантастика" },
  { id: 3, name: "Научное" },
  { id: 4, name: "Финансы" },
];

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
