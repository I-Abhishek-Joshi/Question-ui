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
} from "../../actions/actions";

const CardDetailWrapper = () => {
  const dispatch = useDispatch();
  const questionList =
    useSelector((state) => state?.questionList?.questionList) || [];

  const searchTerm = useSelector((state) => state?.search?.searchTerm) || "";
  const [loading, setLoading] = useState(true);

  const toggleScroll = () => {
    document.body.classList.toggle("bodyNoScroll");
  };

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchQuestionListAction({ searchTerm })).then(() =>
        setLoading(false)
      );
    };

    fetchData();
  }, [searchTerm]);

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
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          style={{
            backgroundColor: primary,
            textTransform: "none",
            fontWeight: "600",
            fontSize: "15px",
            marginLeft: "12px",
            borderRadius: "10px",
          }}
        >
          Post to thread
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
