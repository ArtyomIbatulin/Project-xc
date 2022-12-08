import React from "react";
import { useSelector } from "react-redux";
import { BookItem } from "./BookItem";
import Stack from "@mui/material/Stack";

export const BookList = () => {
  const book = useSelector((state) => state.book);

  return (
    <Stack direction="row" spacing={1} mt={1}>
      {book.map((item) => (
        <BookItem key={item.id} item={item} />
      ))}
    </Stack>
  );
};
