import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import Profile from "../../components/Profile/profile";
import CardDetailWrapper from "../../components/CardDetailWrapper/cardDetailWrapper";
import FilterTab from "../../components/FilterTab/filterTab";

const Home = () => {
  useEffect(() => {
    
  });
  return (
    <Grid container columnSpacing={6} padding={"0 20px"}>
      <Grid
        item
        md={2.5}
        style={{ position: "sticky", top: "100px", height: "fit-content" }}
      >
        <Profile />
      </Grid>
      <Grid item md={7}>
        <CardDetailWrapper />
      </Grid>
      <Grid
        item
        md={2.5}
        style={{ position: "sticky", top: "100px", height: "fit-content" }}
      >
        <FilterTab />
      </Grid>
    </Grid>
  );
};
export default Home;
