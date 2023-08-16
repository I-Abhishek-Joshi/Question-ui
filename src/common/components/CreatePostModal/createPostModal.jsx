import React, { useEffect, useState } from "react";
import "../../../App.css"
import { Box, Button, Chip, Grid, TextField, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LinkIcon from "@mui/icons-material/Link";
import axios from "axios";
import {
  ADD_QUESTION_API,
  getLoggedInUserId,
  getTokenCookie,
} from "../../assets/constant/constants";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { updateQuestionAction } from "../../actions/actions";
import { useLocation, useNavigate } from "react-router-dom";

const CreatePostModal = (props) => {

  const dispatch = useDispatch()
  const name = useSelector((state) => state?.user?.user?.firstName) || "buddy";
  const textPlaceHolder = `Whats in your mind, ${name}`;
  const filterHelperText = "*Required exact 3 unique filters of max length 15";
  const uniqueFilterErrorText = "Enter unique filter of max 15 character";

  const primary = "#0275FF";
  const primaryDisable = "#B2CFFF";
  const textColor = "#636363";

  const questionId = props.questionId
  const [questionTitle, setQuestionTitle] = useState(props.questionTitle || "");
  const [questionDesc, setQuestionDesc] = useState(props.questionDescription || "");

  const [isPosting, setIsPosting] = useState(false);
  const [filterHelperTextOn, setFilterHelperTextOn] = useState(true);

  const [tagValue, setTagValue] = useState("");
  const [tagList, setTagList] = useState(props.tags || []);

  const toggleScroll = () => {
    document.body.classList.toggle("bodyNoScroll");
  };

  const updateQuestion = () => {
    console.log("updating question detail dispatching")
    const userId = getLoggedInUserId();
    dispatch(
      updateQuestionAction({
        userId,
        questionId,
        questionTitle,
        questionDescription : questionDesc,
        tagList
      })
    );
    toggleScroll()
    props.closeModal(false);
  };
  const QuestionPostApi = () => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          ADD_QUESTION_API,
          {
            questionTitle: questionTitle.trim(),
            questionDescription: questionDesc.trim().replace(/\n/g, "%n%"),
            tagList: tagList
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
      questionTitle.trim().length === 0 ||
      questionDesc.trim().length === 0 ||
      tagList.length < 3
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

  const handleDelete = (tag) => {
    const indexToRemove = tagList.indexOf(tag);
    const newTagList = tagList.filter((_, index) => index !== indexToRemove);
    setTagList(newTagList);
  };

  const addTagToTagList = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (tagList.length === 3) {
        return;
      }
      if (
        tagValue.trim().length > 0 &&
        tagList.indexOf(tagValue.trim()) === -1 &&
        tagValue.trim().length <= 15
      ) {
        setTagList([...tagList, tagValue.trim()]);
        setTagValue("");
      } else {
        setFilterHelperTextOn(false);
      }
    } else if (event.key === "Backspace") {
      if (tagList.length > 0 && tagValue.length === 0) {
        handleDelete(tagList[tagList.length - 1]);
      }
    }
  };

  useEffect(() => {}, [tagList]);
  return (
    <Grid
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
          display={"flex"}
          justifyContent={"center"}
          position={"relative"}
          alignItems={"center"}
          bgcolor={primary}
          padding={"10px"}
        >
          <Box>
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
              toggleScroll();
              props.closeModal(false);
            }}
          />
        </Grid>
        <Grid padding={"10px 20px 20px"}>
          <Grid>
            <TextField
              placeholder={textPlaceHolder}
              multiline
              rows={1}
              variant="outlined"
              fullWidth
              helperText={
                "Be specific and imagine you're asking a question to another person."
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
          <Grid margin={"20px 0"}>
            <TextField
              placeholder={
                tagList.length === 3
                  ? ""
                  : `Add ${3 - tagList.length} ${
                      tagList.length ? "more " : ""
                    }filter${tagList.length == 2 ? "" : "s"}`
              }
              multiline
              rows={1}
              variant="outlined"
              fullWidth
              size="small"
              onKeyDown={addTagToTagList}
              value={tagValue}
              onChange={(e) => {
                if (tagList.length === 3) {
                  setTagValue("");
                } else {
                  setTagValue(e.target.value);
                  setFilterHelperTextOn(true);
                }
              }}
              InputProps={{
                startAdornment: tagList.map((tag) => {
                  return (
                    <Grid margin={"0 5px"}>
                      <Chip
                        label={tag}
                        onDelete={() => handleDelete(tag)}
                        deleteIcon={<DeleteIcon />}
                        variant="outlined"
                        sx={{ padding: 0, fontSize: "12px" }}
                      />
                    </Grid>
                  );
                }),
              }}
            />
            {tagList.length < 3 && (
              <Typography
                style={{
                  fontSize: "0.7rem",
                  textAlign: "left",
                  color: filterHelperTextOn? textColor : "red",
                }}
              >
                {filterHelperTextOn ? filterHelperText : uniqueFilterErrorText}
              </Typography>
            )}
          </Grid>
          <Grid
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
                backgroundColor:
                  disablePosting() || isPosting ? primaryDisable : primary,
                width: "100%",
                color: "white",
                fontWeight: "600",
              }}
              disabled={disablePosting()}
              onClick={props.type === "UPDATE" ? updateQuestion : handleQuestionPostClick}
            >
              {props.type === "UPDATE" ? "Update" : "Post"}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreatePostModal;
