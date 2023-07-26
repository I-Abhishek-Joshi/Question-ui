import { Box, Grid, Typography, Avatar } from "@mui/material";
import React, { useEffect } from "react";
import face from "../../assets/images/face.jpg";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import Dropdown from "../Dropdown/dropdown";
import { useDispatch, useSelector } from "react-redux";
import { isUserAuthenticated } from "../../utils/utils";
import { fetchLoggedInUserAction } from "../../actions/actions";
import { getLoggedInUserId } from "../../assets/constant/constants";

const Profile = () => {
  const profileNameColor = "#ee9f27";
  const topDropdownOptions = [
    "Favourite questions",
    "My questions",
    "Upvoted questions",
  ];
  const user = useSelector((state) => state?.user?.user) || null;
  const dispatch = useDispatch();
  useEffect(() => {
    if(isUserAuthenticated() && !user) {
      dispatch(fetchLoggedInUserAction(getLoggedInUserId()))
    }
  })

  

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
      p={2}
    >
      <Box display={"flex"} flexDirection={"column"} width={"100%"}>
        {user && (
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            width={"100%"}
          >
            <Avatar
              alt="Remy Sharp"
              src={face}
              sx={{ width: 70, height: 70 }}
            />
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
                {user.medals.toFixed(1)}
              </Typography>
            </Box>
            <Typography
              variant="body1"
              style={{ fontSize: "18px" }}
              fontWeight={600}
              color={profileNameColor}
              width={"100%"}
            >
              {`${user.firstName} ${user.lastName}`}
            </Typography>
            <Typography
              variant="body1"
              style={{ fontSize: "12px" }}
              width={"100%"}
            >
              {`${user.city} ${user.state}`}
            </Typography>
          </Grid>
        )}
      </Box>
      <Box style={{ margin: "10px auto 5px" }} width={"100%"}>
        <Dropdown heading={"Channel"} options={topDropdownOptions} dispatch={dispatch} />
      </Box>
      {/* <Box style={{ margin: "10px auto 5px" }} width={"100%"}>
        <Dropdown heading={"Channel"} options={topDropdownOptions} />
      </Box> */}
    </Grid>
  );
};

export default Profile;
