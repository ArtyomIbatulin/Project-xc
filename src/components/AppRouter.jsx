import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { useSelector } from "react-redux";

export const AppRouter = () => {
  const auth = useSelector((state) => state.user.isAuth);

  return (
    <Routes>
      {auth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      {<Route path="*" element={<Navigate to="/" replace />} />}
    </Routes>
  );
};
