import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuth } from "../store/features/user/userSlice";

export const MainPage = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  return (
    <>
      <div>MainPage</div>
      <h2>State - {isAuth}</h2>
      <button onClick={() => dispatch(isAuth())}>Change state</button>
    </>
  );
};
