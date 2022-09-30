import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuth } from "../store/features/user/userSlice";

export const MainPage = () => {
  const auth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  console.log(auth);

  return (
    <>
      <div>MainPage</div>
      <button onClick={() => dispatch(isAuth())}>Change state</button>
    </>
  );
};
