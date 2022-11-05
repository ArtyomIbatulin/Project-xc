import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Толкиен" },
  { id: 2, name: "Другой автор" },
  { id: 3, name: "Другой автор 2" },
  { id: 4, name: "Другой автор 3" },
  { id: 5, name: "Другой автор 3" },
  { id: 6, name: "Другой автор 3" },
  { id: 7, name: "Другой автор 3" },
  { id: 8, name: "Другой автор 3" },
  { id: 9, name: "Другой автор 3" },
  { id: 10, name: "Другой автор 3" },
  { id: 11, name: "Другой автор 3" },
  { id: 12, name: "Другой автор 3" },
  { id: 13, name: "Другой автор 3" },
  { id: 14, name: "Другой автор 3" },
  { id: 15, name: "Другой автор 3" },
  { id: 16, name: "Другой автор 3" },
  { id: 17, name: "Другой автор 3" },
  { id: 18, name: "Другой автор 3" },
];

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {},
});

export default authorSlice.reducer;
