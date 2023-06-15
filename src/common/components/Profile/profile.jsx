import { Box, Grid, Typography, Avatar } from "@mui/material";
import React from "react";
import face from "../../assets/images/face.jpg";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import Dropdown from "../Dropdown/dropdown";

const Profile = () => {
  const profileNameColor = "#ee9f27";
  const topDropdownOptions = [
    "Office",
    "Shema Websites",
    "Jensera project",
    "Elementary School Friends",
    "Trip Wandeears",
  ];
  return (
    <Grid
      container
      bgcolor={"white"}
      overflow={"hidden"}
      style={{
        borderRadius: "10px",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
      }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
    >
      <Box display={"flex"} flexDirection={"column"} width={"100%"}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          width={"100%"}
        >
          <Avatar alt="Remy Sharp" src={face} sx={{ width: 70, height: 70 }} />
          <Box display={"flex"} alignItems={"center"}>
            <MilitaryTechIcon
              style={{ fontSize: "15px", color: profileNameColor }}
            />
            <Typography
              fontSize={"12px"}
              ml={0.5}
              color={profileNameColor}
              width={"100%"}
            >
              4.2
            </Typography>
          </Box>
          <Typography
            variant="body1"
            style={{ fontSize: "16px" }}
            fontWeight={600}
            color={profileNameColor}
            width={"100%"}
          >
            Abhishek Joshi
          </Typography>
          <Typography
            variant="body1"
            style={{ fontSize: "11px" }}
            width={"100%"}
          >
            Lucknow, Uttar Pradesh
          </Typography>
          <Typography
            variant="body1"
            style={{ fontSize: "9px" }}
            width={"100%"}
          >
            Associate Software Engineer
          </Typography>
        </Grid>
      </Box>
      <Box style={{ margin: "40px auto 5px" }} width={"100%"}>
        <Dropdown heading={"Channel"} options={topDropdownOptions} />
      </Box>
      <Box style={{ margin: "10px auto 5px" }} width={"100%"}>
        <Dropdown heading={"Channel"} options={topDropdownOptions} />
      </Box>
    </Grid>
  );
};

export default Profile;
