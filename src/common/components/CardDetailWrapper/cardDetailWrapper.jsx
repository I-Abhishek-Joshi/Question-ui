import React, { useEffect, useState } from "react";
import CardDetails from "../CardDetails/cardDetails";
import { Box, Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreatePostModal from "../CreatePostModal/createPostModal";
import "../../../App.css";
import { isUserAuthenticated } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  currentLocation,
  fetchQuestionListAction,
  openLoginModal,
  setFilterAction,
} from "../../actions/actions";
import { getLoggedInUserId } from "../../assets/constant/constants";
import { useLocation, useSearchParams } from "react-router-dom";

const CardDetailWrapper = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const questionList =
    useSelector((state) => state?.questionList?.questionList) || [];

  const filter = useSelector((state) => state?.filter?.filter) || {};
  const value = useSelector((state) => state?.filter?.filter?.value) || "";
  const searchTerm =
    useSelector((state) => state?.filter?.filter?.searchTerm) || "";
  const [loading, setLoading] = useState(true);
  const [initialLoad, setInitialLoad] = useState(true);

  const queryParams = new URLSearchParams(location.search);
  const searchTermURL = queryParams.get("searchTerm") || "";
  const valueURL = queryParams.get("value") || "";

  const toggleScroll = () => {
    document.body.classList.toggle("bodyNoScroll");
  };
  useEffect(() => {
    setLoading(true);
    if (initialLoad) {
      dispatch(setFilterAction({ searchTerm: searchTermURL, value: valueURL }));
    }
    const fetchData = () => {
      dispatch(
        fetchQuestionListAction({
          searchTerm: initialLoad ? searchTermURL : filter?.searchTerm || "",
          userId: getLoggedInUserId(),
          filters: initialLoad
            ? valueURL.length > 0
              ? [valueURL]
              : []
            : filter?.value?.length > 0
            ? [filter?.value]
            : [],
        })
      ).then(() => {
        setLoading(false);
        setInitialLoad(false);
      });
    };
    fetchData();
  }, [searchTerm, value]);

  const primary = "#0275FF";
  const [isOpen, setIsOpen] = useState(false);

  const handleCreatePost = () => {
    if (isUserAuthenticated()) {
      toggleScroll();
      setIsOpen(true);
    } else {
      dispatch(currentLocation("/"));
      dispatch(openLoginModal());
    }
  };
  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"flex-start"}
      width={"100%"}
      rowSpacing={3.5}
    >
      <Grid item width={"100%"} display={"flex"} justifyContent={"flex-start"}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          style={{
            backgroundColor: primary,
            textTransform: "none",
            fontWeight: "600",
            fontSize: "15px",
            borderRadius: "10px",
          }}
          onClick={handleCreatePost}
        >
          New Post
        </Button>
      </Grid>
      {loading && <p>Loading...</p>}
      {!loading &&
        questionList.map((question) => (
          <Grid item width={"100%"}>
            <CardDetails question={question} />
          </Grid>
        ))}
      {isOpen && (
        <Box
          style={{ position: "absolute", left: 0, top: 0 }}
          zIndex={20}
          width={"100vw"}
          height={"100vh"}
        >
          <CreatePostModal closeModal={setIsOpen} toggleScroll={toggleScroll} />
        </Box>
      )}
    </Grid>
  );
};

export default CardDetailWrapper;
