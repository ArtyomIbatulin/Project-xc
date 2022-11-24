import React from "react";
import { useSelector } from "react-redux";

export const BookList = () => {
  const book = useSelector((state) => state.book);

  return <div>{book.name}</div>;
};
