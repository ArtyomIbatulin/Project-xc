import React from "react";
import { useSelector } from "react-redux";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export const AuthorChips = () => {
  const author = useSelector((state) => state.author);

  const handleClick = (e) => {
    console.log(e.target.innerText);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Stack direction="row" spacing={1} mt={1}>
        {author.map((author) => (
          <Chip key={author.id} label={author.name} onClick={handleClick} />
        ))}
      </Stack>

      <div>
        <Slider {...settings}>
          {author.map((author) => (
            <Chip key={author.id} label={author.name} onClick={handleClick} />
          ))}
        </Slider>
      </div>
    </>
  );
};
