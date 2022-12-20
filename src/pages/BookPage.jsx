import React from "react";
import { MyImage } from "../components/Image/MyImage";

export const BookPage = () => {
  return (
    <>
      <MyImage
        sx={{
          mt: 1,
          // height: 200,
          // width: 400,
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
        }}
        alt="image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQ7qVM6wbOh3pQJgnqqJTMXX7QVXqNcC5AA&usqp=CAU"
      />
    </>
  );
};
