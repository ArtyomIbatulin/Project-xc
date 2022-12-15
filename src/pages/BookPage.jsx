import React from "react";
import Box from "@mui/material/Box";

export const BookPage = () => {
  return (
    <>
      <Box
        component="img"
        sx={{
          mt: 1,
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQ7qVM6wbOh3pQJgnqqJTMXX7QVXqNcC5AA&usqp=CAU"
      />
    </>
  );
};
