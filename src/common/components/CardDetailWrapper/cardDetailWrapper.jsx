import React, { useState } from "react";
import "../../../App.css"
import CardDetails from "../CardDetails/cardDetails";
import { Box, Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreatePostModal from "../CreatePostModal/createPostModal";
import { isUserAuthenticated } from "../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  currentLocation,
  openLoginModal,
} from "../../actions/actions";
import NoContent from "../../Pages/NoContent/noContent";

const CardDetailWrapper = () => {
  const dispatch = useDispatch();
  const questionList =
    useSelector((state) => state?.questionList?.questionList) || [];

  const toggleScroll = () => {
    document.body.classList.toggle("bodyNoScroll");
  };
  const primary = "#0275FF";
  const [isOpen, setIsOpen] = useState(false);

  const handleCreatePost = () => {
    toggleScroll();
    if (isUserAuthenticated()) {
      setIsOpen(true);
    } else {
      dispatch(currentLocation("/"));
      dispatch(openLoginModal());
    }
  };

  return (
    <Grid>
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
      {questionList.length === 0 && (
        <Grid mt={2}>
          <NoContent />
        </Grid>
      )}
      {questionList.length !== 0 && (
        <Grid
          container
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          width={"100%"}
          rowSpacing={3.5}
          mt={"0px"}
        >
          {questionList &&
            questionList.length > 0 &&
            questionList.map((question) => (
              <Grid item width={"100%"}>
                <CardDetails question={question} />
              </Grid>
            ))}
        </Grid>
      )}
      {isOpen && (
        <Box
          style={{ position: "absolute", left: 0, top: 0 }}
          zIndex={20}
          width={"100vw"}
          height={"100vh"}
        >
          <CreatePostModal closeModal={setIsOpen} />
        </Box>
      )}
    </Grid>
  );
};

export default CardDetailWrapper;
