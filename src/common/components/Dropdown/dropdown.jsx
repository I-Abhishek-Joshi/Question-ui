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
      justifyContent={"center"}
      alignItems={"center"}
      // overflow={"hidden"}
    >
      <Box
        bgcolor={primary}
        borderRadius={"10px"}
        style={{ cursor: "pointer" }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        width={"90%"}
      >
        <Typography color={"white"} width={"100%"} padding={0.5}>
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
        <Box display={"flex"} flexDirection={"column"} width={"90%"}>
          {props.options.map((option) => (
            <Box bgcolor={"white"} width={"100%"}>
              <Typography fontSize={"15px"} padding={0.5}>
                {option}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Grid>
  );
};

export default Dropdown;
