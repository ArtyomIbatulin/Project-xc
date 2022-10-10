import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  count: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    isAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
    inc: (state) => {
      state.count += 1;
    },
  },
});

export default userSlice.reducer;
export const { isAuth } = userSlice.actions;
export const { inc } = userSlice.actions;
