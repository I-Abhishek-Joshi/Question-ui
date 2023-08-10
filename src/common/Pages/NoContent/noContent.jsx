import { Grid, Typography } from "@mui/material";
import React from "react";
import no_content from "../../assets/images/no_content.png";
const NoContent = () => {
  return (
    <Grid>
      <Grid
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "50%",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
          borderRadius: "5px",
          margin: "0 auto",
        }}
      >
        <img src={no_content} alt="No Content found" width={"50%"} />
        <Typography
          style={{
            fontSize: "30px",
            color: "gray",
            fontWeight: 600,
            fontFamily: "monospace, sans-sarif",
            padding:"0 0 20px 0"
          }}
        >
          No Result Found!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NoContent;
