import { Box, Grid, TextField, Button, IconButton } from "@mui/material";
import React from "react";
import logo from "../../assets/images/logo.jpg";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
    const primary = "#0175FF"
  return (
    <Grid
      width={"100%"}
      alignContent={"center"}
      display={"flex"}
      alignItems={"center"}
      bgcolor={"white"}
      padding={"10px 0"}
    >
      <Grid md={3}>
        <img src={logo} height={"40px"}></img>
      </Grid>
      <Grid md={6}>
        <TextField
        placeholder="Search Question Bank"
          fullWidth
          variant="outlined"
          sx={{
            '& .MuiInputBase-root': {
              height: '40px',
              width: "100%"
            },
          }}
          InputProps={{
            startAdornment: (
              <IconButton disabled>
                <SearchIcon />
              </IconButton>
            ),
            endAdornment: <Button variant="contained" style={{height:"30px", backgroundColor: primary}}>Search</Button>,
          }}
        />
      </Grid>
      <Grid md={3}>
        <Button variant="contained" height={"40px"} style={{backgroundColor: primary}}>Login/Register</Button>
      </Grid>
    </Grid>
  );
};

export default Header;
