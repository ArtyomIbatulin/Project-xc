import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  text: "Текст комментария",
  date: "Дата в формате даты",
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
});

export default commentSlice.reducer;
