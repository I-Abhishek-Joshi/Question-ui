import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Grid, Typography } from "@mui/material";

const UserResponse = ({
  upvotes,
  downvotes,
  responseData,
  lastModifiedDate,
  userName,
}) => {
  const defaultColor = "#848484";
  const userColor = "#D9E9F7";
  const primary = "#0275FF";
  return (
    <Grid display={"flex"} >
      <Grid justifyContent={'center'} display={'flex'} padding={'10px'} marginLeft={'16px'}>
        <Grid display={"flex"} flexDirection={"column"} alignItems={'center'} style={{width: 'fit-content'}}>
          <ArrowDropUpIcon
            style={{ border: "0.5px solid", borderRadius: "50%", fontSize: '30px', cursor: 'pointer' }}
          />
          <Typography textAlign={'left'} fontSize={'20px'}>{upvotes - downvotes}</Typography>
          <ArrowDropDownIcon
            style={{ border: "0.5px solid", borderRadius: "50%", fontSize: '30px' , cursor: 'pointer'}}
          />
        </Grid>
      </Grid>
      <Grid padding={'10px'}>
        <Typography textAlign={'left'} >{responseData}</Typography>
        <Grid display={"flex"} justifyContent={"flex-end"}>
          <Grid
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-end"}
            bgcolor={userColor}
            style={{ width: "fit-content", borderRadius: "5px" }}
            p={0.8}
          >
            <Typography fontSize={"12px"}>Asked {lastModifiedDate}</Typography>
            <Typography fontSize={"12px"} color={primary}>
              {userName}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserResponse;
