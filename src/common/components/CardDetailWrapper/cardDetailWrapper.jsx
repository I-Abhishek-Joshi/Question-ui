import React from "react";
import CardDetails from "../CardDetails/cardDetails";
import { Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CardDetailWrapper = () => {
  const primary = "#0275FF";
  return (
    <Grid
      container
      spacing={3.5}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      md={12}
    >
      <Grid item>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          style={{
            backgroundColor: primary,
            textTransform: "none",
            fontWeight: "600",
            fontSize: "15px",
            borderRadius: "10px",
          }}
        >
          New Post
        </Button>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          style={{
            backgroundColor: primary,
            textTransform: "none",
            fontWeight: "600",
            fontSize: "15px",
            marginLeft: "12px",
            borderRadius: "10px",
          }}
        >
          Post to thread
        </Button>
      </Grid>
      <Grid item md={12}>
        <CardDetails />
      </Grid>
      <Grid item md={12}>
        <CardDetails />
      </Grid>
      <Grid item md={12}>
        <CardDetails />
      </Grid>
    </Grid>
  );
};

export default CardDetailWrapper;
