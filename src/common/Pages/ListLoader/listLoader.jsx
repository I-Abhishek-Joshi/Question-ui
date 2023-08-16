import { Grid, Skeleton } from "@mui/material";
import React from "react";

const ListLoader = () => {
  return (
    <Grid container columnSpacing={6} padding={"0 20px"}>
      <Grid item md={2.5}>
        <Skeleton animation="wave" variant="rounded" height={"20rem"} />
      </Grid>
      <Grid item md={7}>
        <Grid
          container
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          width={"100%"}
          rowSpacing={3.5}
        >
          <Grid
            item
            width={"100%"}
            display={"flex"}
            justifyContent={"flex-start"}
          >
            <Skeleton animation="wave" variant="rounded" height={"38px"} width={"127px"} />
          </Grid>
          {[1, 2, 3].map((question) => (
            <Grid item width={"100%"}>
              <Skeleton animation="wave" variant="rounded" height={"12rem"} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item md={2.5}>
        <Skeleton animation="wave" variant="rounded" height={"40rem"} />
      </Grid>
    </Grid>
  );
};

export default ListLoader;
