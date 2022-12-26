import React from "react";
import { MyImage } from "../components/image/MyImage";
import { Typography } from "@mui/material";

const book = {
  id: 1,
  author: "Толкиен",
  name: "Rings",
  price: 1000,
  description: "Описание книги",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQ7qVM6wbOh3pQJgnqqJTMXX7QVXqNcC5AA&usqp=CAU",
  category: "Фантастика",
  commentText: "Текст комментария",
  commentDate: "Дата в формате даты",
  rating: "5",
};

export const BookPage = () => {
  return (
    <>
      <br></br>
      <Typography variant="body1">{book.author}</Typography>
      <Typography variant="h4">{book.name}</Typography>
      <MyImage
        sx={{
          mt: 1,
        }}
        alt="image"
        src={book.img}
      />
    </>
  );
};
