import { Box, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Dropdown = (props) => {
  const primary = "#0275FF";
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      overflow={"hidden"}
    >
      <Box
        bgcolor={primary}
        padding={"5px"}
        borderRadius={"10px"}
        style={{ cursor: "pointer" }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        width={"100%"}
      >
        <Typography color={"white"} ml={"12px"} width={"100%"}>
          {props.heading}
        </Typography>
      </Box>
      {isOpen && (
        <Box display={"flex"} flexDirection={"column"} width={"100%"}>
          {props.options.map((option) => (
            <Box bgcolor={"white"} padding={"5px"} width={"100%"}>
              <Typography fontSize={"15px"}>{option}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Grid>
  );
};

export default Dropdown;
