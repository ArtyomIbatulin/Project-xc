import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { CategoryBar } from "../components/CategoryBar";
import { AuthorDeletableChips } from "../components/AuthorDeletableChips";

export const MainPage = () => {
  const auth = useSelector((state) => state.user.isAuth);
  const count = useSelector((state) => state.user.count);
  const author = useSelector((state) => state.author.name);
  const book = useSelector((state) => state.book.name);

  const dispatch = useDispatch();

  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item md={3}>
            <CategoryBar />
          </Grid>
          <Grid item md={9}>
            <AuthorDeletableChips />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
