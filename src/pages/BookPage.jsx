import React from "react";
import { MyImage } from "../components/Image/MyImage";

const book = {
  id: 1,
  author: "Толкиен",
  name: "Rings",
  price: 1000,
  description: "Описание книги",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQ7qVM6wbOh3pQJgnqqJTMXX7QVXqNcC5AA&usqp=CAU",
  category: "Фантастика",
  commentText: "Текст комментария",
  date: "Дата в формате даты",
  rating: "5",
};

export const BookPage = () => {
  return (
    <>
      <MyImage
        sx={{
          mt: 1,
        }}
        alt="image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQ7qVM6wbOh3pQJgnqqJTMXX7QVXqNcC5AA&usqp=CAU"
      />
    </>
  );
};
