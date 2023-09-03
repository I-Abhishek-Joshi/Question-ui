import { Box, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { setFilterAction } from "../../actions/actions";
import { useSelector } from "react-redux";
import { buildParams, isUserAuthenticated } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
const Dropdown = (props) => {
  const primary = "#0275FF";
  const hoverColor = "#80C4FF";
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();

  const filter = useSelector((state) => state?.filter?.filter) || null;
  const value = useSelector((state) => state?.filter?.filter?.value) || "";

  const handleFilterClick = (option) => {
    if (isUserAuthenticated()) {
      if(filter.value === option){
        filter.value = "";
      } else{
        filter.value = option;
      }
      
      props.dispatch(setFilterAction(filter));
      const newUrl = `${window.location.pathname}?${buildParams(filter)}`;
      window.history.pushState({}, "", newUrl);

    } else {
      navigate("/login");
    }
  };

  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
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
        width={"100%"}
      >
        <Typography
          color={"white"}
          width={"100%"}
          padding={1}
          fontSize={"15px"}
          align="left"
          pl={2}
        >
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
        <Box
          display={"flex"}
          flexDirection={"column"}
          width={"100%"}
          padding={0.5}
          borderRadius={"10px"}
        >
          {props.options.map((option) => (
            <Box
              bgcolor={value === option ? hoverColor : "white"}
              color={value === option ? "white" : "black"}
              width={"100%"}
              borderRadius={"10px"}
              overflow={"hidden"}
              onClick={() => handleFilterClick(option)}
            >
              <Typography
                fontSize={"14px"}
                align="left"
                style={{ cursor: "pointer" }}
                sx={{
                  "&:hover": {
                    bgcolor: hoverColor,
                    color: "white",
                  },
                }}
                padding={"8px 16px"}
              >
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
