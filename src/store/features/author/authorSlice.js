import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  name: "Имя автора",
};

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {},
});

export default authorSlice.reducer;
