import React from "react";
import CardDetails from "../CardDetails/cardDetails";
import { Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CardDetailWrapper = () => {
  const primary = "#0275FF";
  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      width={"100%"}
      rowSpacing={3.5}
    >
      <Grid item width={"100%"} display={"flex"} justifyContent={"flex-start"}>
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
      <Grid item width={"100%"}>
        <CardDetails />
      </Grid>
      <Grid item width={"100%"}>
        <CardDetails />
      </Grid>
      <Grid item width={"100%"}>
        <CardDetails />
      </Grid>
    </Grid>
  );
};

export default CardDetailWrapper;
