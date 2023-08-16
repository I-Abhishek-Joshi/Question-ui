import React from "react";
import { Divider, Grid, Skeleton } from "@mui/material";

const DetailsLoader = () => {
  return (
    <Grid
      container
      bgcolor={"white"}
      color={"black"}
      overflow={"hidden"}
      style={{
        borderRadius: "10px",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
      }}
      width={"65%"}
      margin={"auto"}
      display={"flex"}
      direction={"column"}
      padding={"10px 24px"}
    >
      <Grid m={"16px 0 8px"}>
        <Skeleton animation="wave" variant="rounded" height={"3rem"} />
      </Grid>

      <Grid display={"flex"} mb={"8px"}>
        <Grid m={"8px 4px"} width={"15%"}>
          <Skeleton animation="wave" variant="rounded" height={"1.5rem"} />
        </Grid>
        <Grid m={"8px 4px"} width={"15%"}>
          <Skeleton animation="wave" variant="rounded" height={"1.5rem"} />
        </Grid>
      </Grid>

      <Divider style={{ backgroundColor: "gray" }}></Divider>

      <Grid>
        <Grid m={"16px 0"}>
          <Skeleton animation="wave" variant="rounded" height={"10rem"} />
        </Grid>
        <Grid display={"flex"} mb={"8px"} justifyContent={"flex-end"}>
          <Grid m={"8px 4px"} width={"20%"}>
            <Skeleton animation="wave" variant="rounded" bgcolor={"red"} height={"3rem"} />
          </Grid>
        </Grid>
      </Grid>

      <Divider style={{ backgroundColor: "gray" }}></Divider>

      <Grid m={"13px 0"} width={"15%"}>
        <Skeleton animation="wave" variant="rounded" height={"2rem"} />
      </Grid>

      <Grid m={"10px 0"} width={"20%"}>
        <Skeleton animation="wave" variant="rounded" height={"2rem"} />
      </Grid>

      <Grid m={"10px 0"}>
        <Skeleton animation="wave" variant="rounded" height={"10rem"} />
      </Grid>
      <Grid m={"10px 0"} width={"15%"}>
        <Skeleton animation="wave" variant="rounded" height={"2rem"} />
      </Grid>
    </Grid>
  );
};

export default DetailsLoader;
