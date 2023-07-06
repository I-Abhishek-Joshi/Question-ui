import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { closeLoginModal } from "../../actions/actions";
import axios from "axios";
import { LOGIN_API, setTokenCookie } from "../../assets/constant/constants";
import { useNavigate } from "react-router-dom";

const LoginModal = () => {
  const dispatch = useDispatch();
  const primary = "#0275FF";
  const textColor = "#636363";
  const primaryDisable = "#B2CFFF";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const navigate = useNavigate();
  const currentLocation = useSelector((state) => state.locationReducer.currentLocation)

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
        setTokenCookie(data.token);
        dispatch(closeLoginModal());
        navigate(currentLocation)
        console.log('location is  : ', currentLocation)
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
    <Grid
      width={"100%"}
      height={"100%"}
      bgcolor={"rgb(255, 255, 255, 0.9)"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid
        display={"flex"}
        flexDirection={"column"}
        width={"25%"}
        bgcolor={"white"}
        borderRadius={"10px"}
        // overflow={"hidden"}
        boxShadow={"0px 2px 6px rgba(0, 0, 0, 0.5)"}
      >
        <Grid
          display={"flex"}
          justifyContent={"center"}
          padding={"20px"}
          position={"relative"}
        >
          <AccountCircleIcon
            style={{
              color: "white",
              fontSize: "80px",
              position: "absolute",
              transform: "translateY(calc(-50% - 20px))",
              backgroundColor: primary,
              borderRadius: "50%",
            }}
          />
          {!isLoggingIn && (
            <CloseOutlinedIcon
              style={{
                position: "absolute",
                right: "20px",
                borderRadius: "50%",
                padding: "5px",
                color: textColor,
                cursor: "pointer",
              }}
              onClick={() => {
                dispatch(closeLoginModal());
                document.body.classList.remove("bodyNoScroll");
              }}
            />
          )}
        </Grid>
        <Grid width={"100%"} padding={"30px"}>
          <Grid>
            <Typography fontSize={"30px"} color={textColor}>
              Member Login
            </Typography>
          </Grid>
          <Grid margin={"15px 0"}>
            <TextField
              fullWidth
              placeholder="Email"
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
          <Grid padding={"0 0 15px"}>
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
    </Grid>
  );
};

export default LoginModal;
