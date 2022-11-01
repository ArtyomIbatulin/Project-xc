import React from "react";
import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export const CategoryBar = () => {
  const category = useSelector((state) => state.category);

  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <List component="div" aria-label="categoryBar">
      {category.map((category) => (
        <ListItemButton
          key={category.id}
          selected={selectedIndex === category.id}
          onClick={(event) => handleListItemClick(event, category.id)}
        >
          <ListItemText primary={category.name} />
        </ListItemButton>
      ))}
    </List>
  );
};
