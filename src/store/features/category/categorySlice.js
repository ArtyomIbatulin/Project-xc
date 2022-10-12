import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  name: "Название категории",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
