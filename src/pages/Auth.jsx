import React from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from "../utils/consts";

export const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 10,
      }}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          border: "1px solid gray",
          borderRadius: 5,
          padding: 5,
        }}
      >
        <Typography variant="h6">
          {isLogin ? "Авторизация" : "Регистрация"}
        </Typography>

        <Stack spacing={2} direction="column">
          <TextField
            id="login"
            placeholder="Введите ваш login"
            variant="outlined"
          />

          <OutlinedInput
            id="input-password"
            placeholder="Введите ваш пароль"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Stack>

        {isLogin ? (
          <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
        ) : (
          <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
        )}

        <Button variant="outlined">{isLogin ? "Войти" : "Регистрация"}</Button>
      </Box>
    </Container>
  );
};
