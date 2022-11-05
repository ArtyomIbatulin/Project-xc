import React from "react";
import { useSelector } from "react-redux";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export const AuthorChips = () => {
  const author = useSelector((state) => state.author);

  const handleClick = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <Stack direction="row" spacing={1} mt={1}>
      {author.map((author) => (
        <Chip key={author.id} label={author.name} onClick={handleClick} />
      ))}
    </Stack>
  );
};

// Scroller chips
