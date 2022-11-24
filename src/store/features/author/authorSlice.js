import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Толкиен" },
  { id: 2, name: "Другой автор" },
  { id: 3, name: "Другой автор 2" },
];

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {},
});

export default authorSlice.reducer;
