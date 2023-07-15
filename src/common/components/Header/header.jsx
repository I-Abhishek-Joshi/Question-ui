import {
  Box,
  Grid,
  TextField,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import logo from "../../assets/images/logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { isUserAuthenticated } from "../../utils/utils";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentLocation, setSearchTermAction } from "../../actions/actions";
import { deleteTokenCookie } from "../../assets/constant/constants";

const Header = () => {
  const primary = "#0175FF";

  const [searchText, setSearchText] = useState("");
  const currentSearchText =
    useSelector((state) => state?.search?.searchTerm) || "";
  const searchInputRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnLoginRegisterClick = () => {
    dispatch(currentLocation("/"));
    navigate("/login");
  };

  const handleLogout = () => {
    deleteTokenCookie();
    dispatch(currentLocation("/"));
    navigate("/login");
  };

  const handleSearch = () => {
    dispatch(setSearchTermAction(searchText.trim()));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && searchText.trim() !== currentSearchText) {
      searchInputRef.current.blur();
      handleSearch();
    }
  };

  return (
    <Grid
      width={"100%"}
      alignContent={"center"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor={"white"}
      padding={"10px 0"}
      style={{ position: "sticky", top: 0, width: "100%", zIndex: 10 }}
      container
      marginBottom={"32px"}
    >
      <Grid md={3}>
        <Link to={"/"}>
          <img src={logo} height={"40px"} style={{ cursor: "pointer" }}></img>
        </Link>
      </Grid>
      <Grid md={6}>
        <TextField
          placeholder="Search Question Bank"
          fullWidth
          variant="outlined"
          sx={{
            "& .MuiInputBase-root": {
              height: "40px",
              width: "100%",
            },
          }}
          InputProps={{
            startAdornment: (
              <IconButton disabled>
                <SearchIcon />
              </IconButton>
            ),
            endAdornment: (
              <Button
                variant="contained"
                style={{ height: "30px", backgroundColor: primary }}
                onClick={handleSearch}
              >
                Search
              </Button>
            ),
          }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleKeyPress}
          inputRef={searchInputRef}
        />
      </Grid>
      {!isUserAuthenticated() && (
        <Grid md={3}>
          <Button
            variant="contained"
            height={"40px"}
            style={{ backgroundColor: primary }}
            onClick={handleOnLoginRegisterClick}
          >
            Login/Register
          </Button>
        </Grid>
      )}
      {isUserAuthenticated() && (
        <Grid md={3}>
          <Button
            variant="contained"
            height={"40px"}
            style={{ backgroundColor: primary }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Header;
