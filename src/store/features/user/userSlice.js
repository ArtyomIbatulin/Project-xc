import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    isAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
});

export default userSlice.reducer;
export const { isAuth } = userSlice.actions;
