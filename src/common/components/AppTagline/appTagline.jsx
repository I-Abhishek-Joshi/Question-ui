import React from "react";
import { Grid, Typography } from "@mui/material";
import logo from "../../assets/images/logo.jpg"

const AppTagline = () => {
    return (
        <Grid
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"80%"}
        >
          <Grid justifyContent={"flex-start"} display={"flex"} width={"100%"}>
            <img src={logo} alt="logo" style={{ cursor: "pointer", height: '60px' }}></img>
          </Grid>
          <Grid>
            <Typography fontFamily={"Helvetica Neue, Arial, sans-sarif"} fontWeight={500} fontSize={'25px'} textAlign={"left"}>
              Discover. Connect. Learn. Your Questions, Our Platform"
            </Typography>
          </Grid>
        </Grid>
    );
}
export default AppTagline;