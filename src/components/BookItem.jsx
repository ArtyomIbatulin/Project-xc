import React from "react";

export const BookItem = ({ item }) => {
  return (
    <>
      {item.id}
      {item.name}
      {item.price}
      {item.description}
      {item.img}
    </>
  );
};
