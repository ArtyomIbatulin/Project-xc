import React from "react";
import { useSelector } from "react-redux";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export const AuthorDeletableChips = () => {
  const author = useSelector((state) => state.author);

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <Stack direction="row" spacing={1} mt={1}>
      {author.map((author) => (
        <Chip
          key={author.id}
          label={author.name}
          onClick={handleClick}
          onDelete={handleDelete}
        />
      ))}
    </Stack>
  );
};
