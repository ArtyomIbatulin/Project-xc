import React from "react";
import { useSelector } from "react-redux";
import { BookItem } from "./BookItem";

export const BookList = () => {
  const book = useSelector((state) => state.book);

  return (
    <div>
      {book.map((item) => (
        <BookItem key={item.id} item={item} />
      ))}
    </div>
  );
};
