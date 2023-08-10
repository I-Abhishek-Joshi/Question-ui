import { Grid, Typography } from "@mui/material";
import React from "react";
import noPage from "../../assets/images/404.png";
const NoPage = () => {
  return (
    <Grid>
      <Grid
        style={{
          backgroundColor: "white",
          width: "80%",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
          borderRadius: "5px",
          margin: "0 auto",
        }}
      >
        <img src={noPage} alt="No Content found" width={"50%"} />
      </Grid>
    </Grid>
  );
};

export default NoPage;
