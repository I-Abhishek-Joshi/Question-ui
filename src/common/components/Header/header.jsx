import {
  Grid,
  TextField,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import { buildParams, isUserAuthenticated } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  currentLocation,
  fetchNotificationsAction,
  removeLoggedInUser,
  setFilterAction,
} from "../../actions/actions";
import {
  deleteTokenCookie,
  getLoggedInUserId,
} from "../../assets/constant/constants";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationBox from "../NotificationBox/notificationBox";

const Header = () => {
  const primary = "#0175FF";
  const queryParams = new URLSearchParams(window.location.search);
  const [searchText, setSearchText] = useState(
    queryParams.get("searchTerm") || ""
  );
  const [openNotification, setOpenNotification] = useState(false);
  const filter = useSelector((state) => state?.filter?.filter) || null;
  const currentSearchText =
    useSelector((state) => state?.filter?.filter?.searchTerm) || "";
  const searchInputRef = useRef(null);
  const notificationRef = useRef(null);

  const notification =
    useSelector((state) => state?.notification?.notification) || null;
  const notificationNumber = notification
    ? notification.notificationComments.length +
      notification.notificationVotes.length
    : 0;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnLoginRegisterClick = () => {
    dispatch(currentLocation("/"));
    navigate("/login");
  };

  const handleLogout = () => {
    deleteTokenCookie();
    dispatch(removeLoggedInUser());
    dispatch(currentLocation("/"));
    navigate("/login");
  };

  const handleSearch = () => {
    if (isUserAuthenticated()) {
      filter.searchTerm = searchText.trim();
      dispatch(setFilterAction(filter));

      const newUrl = `${window.location.pathname}?${buildParams(filter)}`;
      window.history.pushState({}, "", newUrl);
    } else if (
      searchText.trim().length > 0 ||
      searchText.trim() !== currentSearchText
    ) {
      navigate("/login");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && searchText.trim() !== currentSearchText) {
      searchInputRef.current.blur();
      handleSearch();
    }
  };

  const handleClickOutside = (event) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
      setOpenNotification(false);
    }
  };

  const handleLogoClick = () => {
    setSearchText("");
    dispatch(setFilterAction({ value: "", searchTerm: "" }));
    navigate("/");
  };

  useEffect(() => {
    if (isUserAuthenticated() && !notification) {
      dispatch(fetchNotificationsAction(getLoggedInUserId()));
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
    // eslint-disable-next-line
  }, [notification?.notificationComments, notification?.notificationVotes, notificationNumber]);

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
      <Grid md={3} onClick={handleLogoClick}>
        <img src={logo}  alt="logo" height={"40px"} style={{ cursor: "pointer" }}></img>
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
        <Grid
          md={3}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
        >
          <Grid
            position={"relative"}
            margin={"0 20px"}
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.stopPropagation();
              setOpenNotification(!openNotification);
            }}
          >
            {notificationNumber > 0 && (
              <Grid
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  transform: "translateY(-10%) translateX(20%)",
                  backgroundColor: "red",
                  color: "white",
                  padding: "0 5px",
                  borderRadius: "10px",
                }}
              >
                <Typography fontSize={"10px"}>{notificationNumber}</Typography>
              </Grid>
            )}

            <NotificationsIcon style={{ color: primary, fontSize: "30px" }} />
          </Grid>
          <Grid>
            <Button
              variant="contained"
              height={"40px"}
              style={{ backgroundColor: primary }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Grid>
          {openNotification && (
            <Grid
              style={{ position: "absolute", top: 40, left: 0, right: 0 }}
              ref={notificationRef}
            >
              <NotificationBox
                notification={notification}
                setOpenNotification={setOpenNotification}
              />
            </Grid>
          )}
        </Grid>
      )}
    </Grid>
  );
};

export default Header;
