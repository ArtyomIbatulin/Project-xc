import React from "react";
import { useNavigate } from "react-router-dom";
import { BOOK_ROUTE } from "../utils/consts";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const BookItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <>
      <Grid item>
        <Card sx={{ maxWidth: 350 }}>
          <CardActionArea onClick={() => navigate(BOOK_ROUTE + "/" + item.id)}>
            <CardMedia
              component="img"
              height="140"
              image={item.img}
              alt="book img"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {item.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small">Like it</Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};
