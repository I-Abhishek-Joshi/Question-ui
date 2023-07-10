import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LinkIcon from "@mui/icons-material/Link";
import axios from "axios";
import {
  ADD_QUESTION_API,
  getTokenCookie,
} from "../../assets/constant/constants";

const CreatePostModal = (props) => {
  const name = "Abhishek";
  const textPlaceHolder = `Whats in your mind, ${name}`;
  const primary = "#0275FF";
  const primaryDisable = "#B2CFFF";

  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDesc, setQuestionDesc] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const QuestionPostApi = () => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          ADD_QUESTION_API,
          {
            questionTitle: questionTitle.trim(),
            questionDescription: questionDesc.trim().replace(/\n/g, "%n%"),
          },
          {
            headers: {
              Authorization: `Bearer ${getTokenCookie()}`,
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => reject(error));
    });
  };

  const refresh = () => {
    window.location.reload();
  };

  const disablePosting = () => {
    return (
      questionTitle.trim().length === 0 || questionDesc.trim().length === 0
    );
  };
  const handleQuestionPostClick = () => {
    setIsPosting(true);
    QuestionPostApi()
      .then((data) => {
        refresh();
      })
      .catch((error) => {
        console.log("error : ", error);
      });
  };
  return (
    <Grid
      width={"100%"}
      height={"100%"}
      bgcolor={"rgb(255, 255, 255, 0.9)"}
      display={"flex"}
      justifyContent={"center"}
      zIndex={20}
    >
      <Grid
        display={"flex"}
        flexDirection={"column"}
        width={"45%"}
        height={"fit-content"}
        borderRadius={"10px"}
        overflow={"hidden"}
        boxShadow={"0px 2px 6px rgba(0, 0, 0, 0.5)"}
        mt={"8rem"}
        bgcolor={"white"}
      >
        <Grid
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          position={"relative"}
          alignItems={"center"}
          bgcolor={primary}
          padding={"10px"}
        >
          <Box width={"100%"}>
            <Typography color={"white"} fontWeight={600} fontSize={18}>
              Create Post
            </Typography>
          </Box>
          <CancelIcon
            style={{
              position: "absolute",
              right: "20px",
              color: "white",
              cursor: "pointer",
              fontSize: "30px",
            }}
            onClick={() => {
              props.toggleScroll();
              props.closeModal(false);
            }}
          />
        </Grid>
        <Grid padding={"10px 20px 20px"}>
          <Grid width={"100%"}>
            <TextField
              placeholder={textPlaceHolder}
              multiline
              rows={1}
              variant="outlined"
              fullWidth
              helperText={
                "Be specific and imagine you’re asking a question to another person."
              }
              size="small"
              value={questionTitle}
              onChange={(e) => setQuestionTitle(e.target.value)}
            />
          </Grid>
          <Grid width={"100%"} mt={2}>
            <TextField
              placeholder="What are the details of your problem"
              multiline
              rows={5}
              variant="outlined"
              fullWidth
              value={questionDesc}
              onChange={(e) => setQuestionDesc(e.target.value)}
            />
          </Grid>
          <Grid
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
            borderRadius={"5px"}
            margin={"20px 0"}
            padding={"10px 0"}
            border={"1px solid"}
            borderColor={primary}
          >
            <Box flex={1}>
              <Typography color={primary}>Add to your post</Typography>
            </Box>
            <Box flex={1}>
              <Box display={"flex"} justifyContent={"center"}>
                <PhotoLibraryIcon
                  style={{
                    margin: "0 20px",
                    color: primary,
                    cursor: "pointer",
                  }}
                />
                <LinkIcon
                  style={{
                    margin: "0 20px",
                    color: primary,
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid>
            <Button
              style={{
                backgroundColor: "red",
                backgroundColor:
                  disablePosting() || isPosting ? primaryDisable : primary,
                width: "100%",
                color: "white",
                fontWeight: "600",
              }}
              disabled={disablePosting()}
              onClick={handleQuestionPostClick}
            >
              Post
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreatePostModal;
