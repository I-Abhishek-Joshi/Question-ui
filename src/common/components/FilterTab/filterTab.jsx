import { Box, Divider, Typography, Chip, Grid } from "@mui/material";
import React, { useState } from "react";

const FilterTab = () => {
  const items = [
    "Personal",
    "Work",
    "Friends",
    "Family",
    "Movies",
    "item6",
    "item7",
    "item8",
    "item9",
    "item10",
  ];

  const chips = [
    "api",
    "design",
    "long text spring boot",
    "java",
    "spring boot",
    "long text spring boot",
    "react",
    "api",
    "design",
    "java",
    "spring boot",
    "long text spring boot",
    "react",
  ];
  const [expanded, setExpanded] = useState(false);
  const renderedItems = expanded ? items : items.slice(0, 5);
  const categoryHeaderColor = "#E7FCEE";
  const success = "#4BB543";
  const primary = "#0000FF";
  const chipColor = "#4C67FD";
  return (
    <Grid
      container
      bgcolor={"white"}
      color={"black"}
      overflow={"hidden"}
      display={"flex"}
      direction={"column"}
      style={{
        borderRadius: "10px",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
      }}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          justifyItems={"flex-start"}
        >
          <Typography
            bgcolor={categoryHeaderColor}
            style={{ padding: "5px 30px"}}
            color={success}
            fontWeight={600}
            fontSize={15}
          >
            Category
          </Typography>
          

          {renderedItems.map((item) => (
            <Typography
              key={item}
              color={"black"}
              style={{ padding: "5px 30px"}}
              fontSize={15}
            >
              {item}
            </Typography>
          ))}
          {!expanded && (
            <Typography
              style={{ padding: "5px 30px", cursor: "pointer" }}
              color={"primary"}
              onClick={() => setExpanded(true)}
              fontSize={14}
            >
              more +
            </Typography>
          )}
          {expanded && (
            <Typography
              style={{ padding: "5px 30px", cursor: "pointer" }}
              color={"primary"}
              onClick={() => setExpanded(false)}
              fontSize={14}
            >
              less -
            </Typography>
          )}
        </Box>
        <Divider style={{ backgroundColor: "gray" }}></Divider>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
        >
          <Typography
            bgcolor={categoryHeaderColor}
            style={{ padding: "5px 30px" }}
            color={success}
            fontWeight={600}
            fontSize={15}
          >
            Tags
          </Typography>
          <Box display={"flex"} flexWrap={"wrap"} pl={"20px"}>
            {chips.map((chip) => (
              <Chip
                label={chip}
                size="small"
                style={{
                  color: "white",
                  backgroundColor: chipColor,
                  margin: "4px 6px",
                }}
              />
            ))}
          </Box>
        </Box>
    </Grid>
  );
};
export default FilterTab;
