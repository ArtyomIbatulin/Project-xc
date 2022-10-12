import React from "react";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Navbar = () => {
  const auth = useSelector((state) => state.user.isAuth);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bookstore
          </Typography>
          {auth ? (
            <>
              <Button color="inherit">Order</Button>
              <Button color="inherit">Wishlist</Button>
              <Button color="inherit">Profile</Button>
              <Button color="inherit">Logout</Button>
            </>
          ) : (
            <>
              <Button color="inherit">Wishlist</Button>
              <Button color="inherit">Login</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
