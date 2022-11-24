import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { CategoryBar } from "../components/CategoryBar";
import { AuthorChips } from "../components/AuthorChips";
import { BookList } from "../components/BookList";

export const MainPage = () => {
  const auth = useSelector((state) => state.user.isAuth);
  const count = useSelector((state) => state.user.count);
  const author = useSelector((state) => state.author.name);
  const book = useSelector((state) => state.book.name);

  const dispatch = useDispatch();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <CategoryBar />
        </Grid>
        <Grid item md={9}>
          <AuthorChips />
          <BookList />
        </Grid>
      </Grid>
    </>
  );
};
