import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Толкиен" },
  { id: 2, name: "Другой автор" },
  { id: 3, name: "Другой автор 2" },
  { id: 4, name: "Другой автор 3" },
  { id: 5, name: "Другой автор 4" },
  { id: 6, name: "Другой автор 5" },
  { id: 7, name: "Другой автор 6" },
  { id: 8, name: "Другой автор 7" },
  { id: 9, name: "Другой автор 8" },
  { id: 10, name: "Другой автор 9" },
  { id: 11, name: "Другой автор 10" },
  { id: 12, name: "Другой автор 11" },
  { id: 13, name: "Другой автор 12" },
  { id: 14, name: "Другой автор 13" },
  { id: 15, name: "Другой автор 14" },
  { id: 16, name: "Другой автор 15" },
  { id: 17, name: "Другой автор 16" },
  { id: 18, name: "Другой автор 17" },
];

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {},
});

export default authorSlice.reducer;
