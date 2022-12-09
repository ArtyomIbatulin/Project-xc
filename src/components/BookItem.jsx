import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const BookItem = ({ item }) => {
  return (
    <>
      <Grid container>
        <Grid item lg={4} md={3}>
          <Card sx={{ maxWidth: 345 }}>
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
            <CardActions>
              <Button size="small">Like it</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
