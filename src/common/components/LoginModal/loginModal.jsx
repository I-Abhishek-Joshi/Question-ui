import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LinkIcon from "@mui/icons-material/Link";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const LoginModal = () => {
  const primary = "#0275FF";
  const textColor =  "#636363"
  return (
    <Grid
      width={"100vw"}
      height={"100vh"}
      bgcolor={"rgb(255, 255, 255, 0.7)"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={15}
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
          <CloseOutlinedIcon
            style={{
              position: "absolute",
              right: "20px",
              borderRadius: "50%",
              padding: "5px",
              color: textColor,
              cursor: "pointer"
            }}
          />
        </Grid>
        <Grid width={"100%"} padding={"30px"}>
          <Grid>
            <Typography fontSize={"30px"} color={textColor}>Member Login</Typography>
          </Grid>
          <Grid margin={"15px 0"}>
          <TextField fullWidth placeholder="Username"  sx={{
                '& .MuiInputBase-root': {
                    color: textColor
                }}}/>
          </Grid>
          <Grid margin={"15px 0"}>
            <TextField fullWidth placeholder="Password" type="password" 
            sx={{
                '& .MuiInputBase-root': {
                    color: textColor
                }}} />
          </Grid>
          <Box margin={"15px 0"}>
            <Button
              style={{
                backgroundColor: primary,
                width: "100%",
                color: "white",
                fontWeight: "600",
              }}
            >
              Login
            </Button>
          </Box>
        </Grid>
        <Grid padding={"0 0 15px"}>
          <Typography color={textColor}
          
          sx={{
            "&:hover": {
              textDecoration: "underline",
              cursor:"pointer"
            },
          }}>Forgot Password?</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginModal;
