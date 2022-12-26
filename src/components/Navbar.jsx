import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isAuth } from "../store/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTE } from "../utils/consts";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Navbar = () => {
  const auth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => navigate(MAIN_ROUTE)}
            >
              {""}
              Bookstore
            </span>
          </Typography>
          {auth ? (
            <>
              <Button color="inherit">Order</Button>
              <Button color="inherit">Wishlist</Button>
              <Button color="inherit">Profile</Button>
              <Button color="inherit" onClick={() => dispatch(isAuth())}>
                Logout
              </Button>
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
