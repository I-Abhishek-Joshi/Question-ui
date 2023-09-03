import React from "react";
import { Button, Grid, Divider } from "@mui/material";
import LoginInputs from "../../components/LoginInputs/loginInputs";
import AppTagline from "../../components/AppTagline/appTagline";
import { Link } from "react-router-dom";

const Login = () => {
  const dividerColor = "#dddddd";
  const success = "#4BB543";
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
          <LoginInputs />
          <Divider
            style={{
              backgroundColor: dividerColor,
              width: "calc(100% - 60px)",
              margin: "auto",
            }}
          ></Divider>
          <Grid>
            <Link to={"/register"}>
              <Button
                style={{
                  color: "white",
                  backgroundColor: success,
                  margin: "20px 0",
                  maxWidth: "50%",
                }}
              >
                Create new Account
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
