import { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  Box,
  CircularProgress,
} from "@mui/material";
import AppTagline from "../../components/AppTagline/appTagline";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { REGISTER_API, setTokenCookie } from "../../assets/constant/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchLoggedInUserAction } from "../../actions/actions";

const Register = () => {
  const textColor = "#636363";
  const primary = "#0275FF";
  const dividerColor = "#dddddd";
  const primaryDisable = "#B2CFFF";

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleEyeClick = () => {
    setShowPassword(!showPassword)
  }

  const disableRegisterButton = () => {
    return firstName.length === 0 || email.length === 0 || password.length < 8;
  };


  const callRegisterApi = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        axios.post(REGISTER_API, {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
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

  const handleRegisterClick = () => {
    setIsRegistering(true);

    callRegisterApi()
      .then((data) => {
        dispatch(fetchLoggedInUserAction(data.userId))
        setTokenCookie(data);
        navigate("/");
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setFirstName("")
        setLastName("")
        
      }).then(() => setIsRegistering(false));
  };

  return (
    <Grid container padding={"100px 0 100px"}>
      <Grid xs={12} md={6} lg={6} display={"flex"} justifyContent={"center"}>
        <AppTagline />
      </Grid>
      <Grid xs={12} md={6} lg={6}>
        <Grid
          width={"60%"}
          display={"flex"}
          flexDirection={"column"}
          bgcolor={"white"}
          borderRadius={"10px"}
          padding={"16px 0 8px"}
          boxShadow={"0px 2px 6px rgba(0, 0, 0, 0.5)"}
          margin={"0 auto"}
        >
          <Grid width={"100%"} padding={"0 30px"}>
            <Grid margin={"15px 0"}>
              <TextField
                fullWidth
                placeholder="First Name"
                sx={{
                  "& .MuiInputBase-root": {
                    color: textColor,
                  },
                }}
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                disabled={isRegistering}
              />
              <Typography style={{textAlign: "left", fontSize: "0.7rem", color: textColor, marginTop: "2px"}}>* Required</Typography>
            </Grid>
            <Grid margin={"15px 0"}>
              <TextField
                fullWidth
                placeholder="Last Name"
                sx={{
                  "& .MuiInputBase-root": {
                    color: textColor,
                  },
                }}
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                disabled={isRegistering}
              />
            </Grid>
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
                disabled={isRegistering}
              />
              <Typography style={{textAlign: "left", fontSize: "0.7rem", color: textColor, marginTop: "2px"}}>* Required</Typography>
            </Grid>
            <Grid margin={"15px 0"}>
              <TextField
                fullWidth
                placeholder="Password"
                sx={{
                  "& .MuiInputBase-root": {
                    color: textColor,
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <>
                      {!showPassword && (
                        <VisibilityIcon
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={ handleEyeClick }
                        />
                      )}

                      {showPassword && (
                        <VisibilityOffIcon
                          style={{
                            cursor: "pointer",
                          }}
                          onClick={ handleEyeClick }
                        />
                      )}
                    </>
                  ),
                }}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isRegistering}
                type= {showPassword? "text" : "password"}
              />
              <Typography style={{textAlign: "left", fontSize: "0.7rem", color: textColor, marginTop: "2px"}}>* Required minimum 8 characters</Typography>
            </Grid>
            <Box margin={"15px 0"}>
              <Button
                style={{
                  backgroundColor: isRegistering
                    ? primaryDisable
                    : disableRegisterButton()
                    ? primaryDisable
                    : primary,
                  width: "100%",
                  color: "white",
                  fontWeight: "600",
                }}
                disabled={disableRegisterButton()}
                onClick={handleRegisterClick}
                startIcon={
                  isRegistering ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : null
                }
              >
                {isRegistering ? "Registering..." : "Register"}
              </Button>
            </Box>
          </Grid>
          <Divider
            style={{
              backgroundColor: dividerColor,
              width: "calc(100% - 60px)",
              margin: "auto",
            }}
          ></Divider>
          <Grid>
            <Link to={"/login"}>
              <Button
                style={{
                  color: "white",
                  backgroundColor: primary,
                  margin: "20px 0",
                  width: "25%",
                  maxWidth: "50%",
                }}
              >
                Login
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Register;
