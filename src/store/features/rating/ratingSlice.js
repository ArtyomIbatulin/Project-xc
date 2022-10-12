import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  rating: 5,
};

const ratingSlice = createSlice({
  name: "rating",
  initialState,
  reducers: {},
});

export default ratingSlice.reducer;
