import { Box, Grid, Typography, Avatar, Accordion } from "@mui/material";
import React from "react";
import face from "../../assets/images/face.jpg";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

const Profile = () => {
  const profileNameColor = "#ee9f27";
  return (
    <Grid
      container
      bgcolor={"white"}
      maxWidth={300}
      overflow={"hidden"}
      style={{
        borderRadius: "10px",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
      }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box display={"flex"} flexDirection={"column"}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar alt="Remy Sharp" src={face} sx={{ width: 70, height: 70 }} />
          <Box display={"flex"} alignItems={"center"}>
            <MilitaryTechIcon
              style={{ fontSize: "15px", color: profileNameColor }}
            />
            <Typography fontSize={"12px"} ml={0.5} color={profileNameColor}>
              4.2
            </Typography>
          </Box>
          <Typography
            variant="body1"
            style={{ fontSize: "16px" }}
            fontWeight={600}
            color={profileNameColor}
          >
            Abhishek Joshi
          </Typography>
          <Typography variant="body1" style={{ fontSize: "11px" }}>
            Lucknow, Uttar Pradesh
          </Typography>
          <Typography variant="body1" style={{ fontSize: "9px" }}>
            Associate Software Engineer
          </Typography>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Profile;