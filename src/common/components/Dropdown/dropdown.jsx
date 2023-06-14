import { Box, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Dropdown = (props) => {
  const primary = "#0275FF";
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Grid display={"flex"} flexDirection={"column"} md={12}>
      <Box
        bgcolor={primary}
        borderRadius={"10px"}
        padding={"5px"}
        style={{ cursor: "pointer" }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Typography color={"white"} ml={"12px"}>
          {props.heading}
        </Typography>
        {isOpen && (
          <ExpandLessIcon style={{ color: "white", marginRight: "12px" }} />
        )}
        {!isOpen && (
          <ExpandMoreIcon style={{ color: "white", marginRight: "12px" }} />
        )}
      </Box>
      {isOpen && (
        <Box display={"flex"} flexDirection={"column"}>
          {props.options.map((option) => (
            <Box bgcolor={"white"} padding={"5px"}>
              <Typography fontSize={"15px"}>{option}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Grid>
  );
};

export default Dropdown;
