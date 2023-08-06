import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import "../../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { closeLoginModal, fetchLoggedInUserAction, fetchNotificationsAction } from "../../actions/actions";
import axios from "axios";
import { LOGIN_API, fetchLoggedInUser, setTokenCookie } from "../../assets/constant/constants";
import { useNavigate } from "react-router-dom";

const LoginInputs = () => {
  const dispatch = useDispatch();
  const primary = "#0275FF";
  const textColor = "#636363";
  const primaryDisable = "#B2CFFF";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const navigate = useNavigate();
  const currentLocation = useSelector((state) => state.location.currentLocation) || "/";

  const disableLoginButton = () => {
    return email.length === 0 || password.length === 0;
  };

  const callLoginApi = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios
          .post(LOGIN_API, {
            email: email,
            password: password,
          })
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      }, 1500);
    });
  };

  const handleLoginCLick = () => {
    setIsLoggingIn(true);

    callLoginApi()
      .then((data) => {
        dispatch(fetchLoggedInUserAction(data.userId))
        setTokenCookie(data);
        dispatch(fetchNotificationsAction(data.userId))
        dispatch(closeLoginModal());
        navigate(currentLocation);
        document.body.classList.remove("bodyNoScroll");
      })
      .catch((error) => {
        console.log("error", error);
        setEmail("");
        setPassword("");
        setIsLoggingIn(false);
      });
  };

  return (
    <Grid>
      <Grid width={"100%"} padding={"0 30px"}>
        <Grid margin={"15px 0"}>
          <TextField
            fullWidth
            placeholder="Email Address"
            sx={{
              "& .MuiInputBase-root": {
                color: textColor,
              },
            }}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoggingIn}
          />
        </Grid>
        <Grid margin={"15px 0"}>
          <TextField
            fullWidth
            placeholder="Password"
            type="password"
            sx={{
              "& .MuiInputBase-root": {
                color: textColor,
              },
            }}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            disabled={isLoggingIn}
          />
        </Grid>
        <Box margin={"15px 0"}>
          <Button
            style={{
              backgroundColor: isLoggingIn
                ? primaryDisable
                : disableLoginButton()
                ? primaryDisable
                : primary,
              width: "100%",
              color: "white",
              fontWeight: "600",
            }}
            disabled={disableLoginButton()}
            onClick={handleLoginCLick}
            startIcon={
              isLoggingIn ? (
                <CircularProgress size={20} color="inherit" />
              ) : null
            }
          >
            {isLoggingIn ? "Logging In" : "Login"}
          </Button>
        </Box>
      </Grid>
      {!isLoggingIn && (
        <Grid padding={"0 0 20px"}>
          <Typography
            color={textColor}
            sx={{
              "&:hover": {
                textDecoration: "underline",
                cursor: "pointer",
              },
            }}
          >
            Forgot Password?
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default LoginInputs;
