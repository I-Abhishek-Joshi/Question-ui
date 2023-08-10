import { Grid, Typography } from "@mui/material";
import React from "react";
import error from "../../assets/images/error.png";
const Error = () => {
  return (
    <Grid>
      <Grid
        style={{
          backgroundColor: "white",
          width: "50%",
          height: "50%",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
          borderRadius: "5px",
          margin: "0 auto",
        }}
      >
        <img src={error} alt="No Content found" width={"70%"} />
        <Typography
          style={{
            fontSize: "30px",
            color: "gray",
            fontWeight: 600,
            fontFamily: "monospace, sans-sarif",
            padding:"0 0 20px 0"
          }}
        >
          Something Broken
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Error;
