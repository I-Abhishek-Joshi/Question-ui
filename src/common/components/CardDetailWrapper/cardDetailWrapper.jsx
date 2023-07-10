import React, { useEffect, useState } from "react";
import CardDetails from "../CardDetails/cardDetails";
import { Box, Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreatePostModal from "../CreatePostModal/createPostModal";
import axios from "axios";
import '../../../App.css'
import {
  ALL_QUESTIONS_API,
} from "../../assets/constant/constants";
import { isUserAuthenticated } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { currentLocation, openLoginModal } from "../../actions/actions";

const CardDetailWrapper = () => {
  const dispatch = useDispatch()
  const [questions, setQuestions] = useState([]);

  const fetchAllQuestion = async () => {
    try {
      const response = await axios.get(ALL_QUESTIONS_API);
      setQuestions(response.data);
    } catch (error) {
      console.log("ERROR ", error);
    }
  };

  const toggleScroll = () => {
    document.body.classList.toggle('bodyNoScroll')
  }

  useEffect(() => {
    fetchAllQuestion();
  }, []);

  const primary = "#0275FF";
  const [isOpen, setIsOpen] = useState(false);

  const handleCreatePost = () => {
    if(isUserAuthenticated()) {
      toggleScroll()
      setIsOpen(true)
    } else {
      dispatch(currentLocation("/"))
      dispatch(openLoginModal())
    }
  }
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
          onClick={ handleCreatePost } 
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
      {questions.map((question) => (
        <Grid item width={"100%"}>
          <CardDetails question={question} />
        </Grid>
      ))}
      {isOpen && (
        <Box style={{ position: "absolute", left: 0, top: 0 }} zIndex={20} width={"100vw"} height={"100vh"}>
          <CreatePostModal closeModal={setIsOpen} toggleScroll = {toggleScroll}/>
        </Box>
      )}
    </Grid>
  );
};

export default CardDetailWrapper;
