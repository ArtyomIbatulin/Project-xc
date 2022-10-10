import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuth } from "../store/features/user/userSlice";
import { inc } from "../store/features/user/userSlice";

export const MainPage = () => {
  const auth = useSelector((state) => state.user.isAuth);
  const count = useSelector((state) => state.user.count);
  const dispatch = useDispatch();

  return (
    <>
      <div>MainPage</div>
      <h2>Auth - {JSON.stringify(auth, null, 2)}</h2>
      <h2>Count - {count}</h2>
      <button onClick={() => dispatch(isAuth())}>Change state</button>
      <button onClick={() => dispatch(inc())}>Count</button>
    </>
  );
};
