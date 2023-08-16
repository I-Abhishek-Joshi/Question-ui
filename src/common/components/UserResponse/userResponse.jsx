import React, { useState } from "react";
import "../../../App.css"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Chip, Grid, Typography } from "@mui/material";
import {
  DELETE_ANSWER_API,
  DELETE_QUESTION_API,
  getLoggedInUserId,
  getTokenCookie,
} from "../../assets/constant/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateQuestionAction } from "../../actions/actions";
import { useNavigate } from "react-router-dom";
import CreatePostModal from "../CreatePostModal/createPostModal";

const UserResponse = ({
  questionTitle,
  upvotes,
  downvotes,
  responseData,
  lastModifiedDate,
  userName,
  tags,
  type,
  userId,
  answerId,
  questionId,
  triggerFetchQuestion,
  setTriggerFetchQuestion
}) => {
  const userColor = "#D9E9F7";
  const primary = "#0275FF";
  const success = "#4BB543";
  const danger = "#DC4C64";
  const iconBorderColor = "#afb1ae";

  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const upvote = useSelector((state) =>
    state.question?.questionDetail?.upvotedUsers?.includes(getLoggedInUserId())
  );
  const downvote = useSelector((state) =>
    state.question?.questionDetail?.downvotedUsers?.includes(
      getLoggedInUserId()
    )
  );
  const toggleScroll = () => {
    document.body.classList.toggle("bodyNoScroll");
  };

  const deleteAnswerApi = (answer) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(DELETE_ANSWER_API, {
          data: {
            answerId: answerId || "",
            questionId: questionId || "",
          },
          headers: {
            Authorization: `Bearer ${getTokenCookie()}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const deleteQuestionApi = (questionId) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(DELETE_QUESTION_API + questionId, {
          headers: {
            Authorization: `Bearer ${getTokenCookie()}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const handleDeleteAnswer = () => {
    deleteAnswerApi(answerId, questionId)
      .then((response) => {
        setTriggerFetchQuestion(!triggerFetchQuestion)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteQuestion = () => {
    deleteQuestionApi(questionId)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateQuestion = ({ questionTitle, questionDescription, voteType }) => {
    const userId = getLoggedInUserId();
    dispatch(
      updateQuestionAction({
        userId,
        questionId,
        questionTitle,
        questionDescription,
        voteType,
      })
    );
  };

  return (
    <Grid display={"flex"}>
      <Grid justifyContent={"center"} display={"flex"} margin={"15px 0"}>
        <Grid
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          style={{ width: "fit-content" }}
        >
          <ArrowDropUpIcon
            style={{
              border: `0.5px solid ${
                upvote && type === "question" ? success : iconBorderColor
              }`,
              borderRadius: "50%",
              fontSize: "35px",
              cursor: "pointer",
              color: upvote && type === "question" ? success : null,
            }}
            onClick={() => updateQuestion({ voteType: "UPVOTE" })}
          />
          <Typography textAlign={"left"} fontSize={"20px"}>
            {upvotes - downvotes}
          </Typography>
          <ArrowDropDownIcon
            style={{
              border: `0.5px solid ${
                downvote && type === "question" ? danger : iconBorderColor
              }`,
              borderRadius: "50%",
              fontSize: "35px",
              cursor: "pointer",
              color: downvote && type === "question" ? danger : null,
            }}
            onClick={() => updateQuestion({ voteType: "DOWNVOTE" })}
          />
        </Grid>
      </Grid>
      <Grid padding={"10px"} flexGrow={1}>
        <Grid mt={1}>
          <Typography textAlign={"left"} whiteSpace={"pre-line"}>
            {responseData}
          </Typography>
        </Grid>
        <Grid mt={"10px"} display={"flex"} justifyContent={"flex-start"}>
          {tags?.map((tag) => (
            <Chip
              label={tag}
              size="small"
              style={{
                padding: "0 20px",
                margin: "5px",
                fontSize: "12px",
                backgroundColor: userColor,
              }}
            />
          ))}
        </Grid>
        <Grid mt={"10px"} display={"flex"} justifyContent={"flex-start"}>
          {getLoggedInUserId() === userId && (
            <Grid display={"flex"}>
              <Grid>
                <Typography
                  fontSize={"14px"}
                  color={iconBorderColor}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if(type === "question" ) {
                      toggleScroll();
                      setIsOpen(true);
                    }
                  }}
                >
                  edit
                </Typography>
              </Grid>
              <Grid ml={"8px"}>
                <Typography
                  fontSize={"14px"}
                  color={iconBorderColor}
                  style={{ cursor: "pointer" }}
                  onClick={
                    type === "answer"
                      ? handleDeleteAnswer
                      : handleDeleteQuestion
                  }
                >
                  delete
                </Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
        <Grid
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Grid
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-end"}
            bgcolor={userColor}
            style={{ width: "fit-content", borderRadius: "5px" }}
            p={0.8}
          >
            <Typography fontSize={"12px"}>
              {type === "question" ? "Asked" : "Answered"} {lastModifiedDate}
            </Typography>
            <Typography fontSize={"12px"} color={primary}>
              {userName}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {isOpen && (
        <Box
          style={{ position: "absolute", left: 0, top: 0 }}
          zIndex={20}
          width={"100vw"}
          height={"100vh"}
        >
          <CreatePostModal
            closeModal={setIsOpen}
            questionTitle={questionTitle}
            questionDescription={responseData}
            tags={tags}
            questionId={questionId}
            type={"UPDATE"}
          />
        </Box>
      )}
    </Grid>
  );
};

export default UserResponse;
