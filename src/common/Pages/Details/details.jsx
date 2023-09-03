import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ANSWER_API,
  getLoggedInUserId,
  getTokenCookie,
} from "../../assets/constant/constants";

import UserResponse from "../../components/UserResponse/userResponse";
import { useParams } from "react-router-dom";
import {
  fetchQuestionAction,
  updateQuestionAction,
} from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import Error from "../Error/error";
import DetailsLoader from "../DetailsLoader/detailsLoader";

const Details = () => {
  const { questionId } = useParams();
  const dispatch = useDispatch();

  const defaultColor = "#848484";
  const primary = "#0275FF";
  const primaryDisable = "#B2CFFF";

  const [answer, setAnswer] = useState("");
  const [isPostingAnswer, setIsPostingAnswer] = useState(false);
  const [triggerFetchQuestion, setTriggerFetchQuestion] = useState(false)

  const detailsLoader = useSelector((state) => state?.loader?.detailsLoader);

  const question = useSelector((state) => state.question?.questionDetail);
  const favourite = question?.favouriteAddedUsers?.includes(
    getLoggedInUserId()
  );

  const fetchQuestion = async () => {
    dispatch(fetchQuestionAction({ questionId }));
  };

  const toggleFavouriteQuestion = ({ userId, questionId }) => {
    dispatch(updateQuestionAction({ userId, questionId, favourite: true }));
  };

  const postAnswerApi = () => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          ANSWER_API,
          {
            questionId: question.questionId,
            answer: answer.trim().replace(/\n/g, "%n%"),
            askedUserId: question.userId
          },
          {
            headers: {
              Authorization: `Bearer ${getTokenCookie()}`,
            },
          }
        )
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        })
        .then(() => {
          setTriggerFetchQuestion(!triggerFetchQuestion);
          setAnswer("")
          setIsPostingAnswer(false)
        });
    });
  };

  const handlePostAnswer = () => {
    setIsPostingAnswer(true);
    postAnswerApi()
      .then((data) => {
        // refresh();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchQuestion();
    // eslint-disable-next-line
  }, [triggerFetchQuestion]);
  if(!question) {
    return <Error/>
  }
  return detailsLoader? (<DetailsLoader/>) : (
    <Grid
      container
      bgcolor={"white"}
      color={"black"}
      overflow={"hidden"}
      style={{
        borderRadius: "10px",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
      }}
      width={"65%"}
      margin={"auto"}
      display={"flex"}
      direction={"column"}
      padding={"10px 24px"}
    >
      <Grid display={"flex"} alignItems={"center"}>
        <Grid
          display={"flex"}
          flexDirection={"column"}
          margin={"10px 0"}
          flexGrow={1}
        >
          <Typography fontSize={"1.7rem"} textAlign={"left"}>
            {question.questionTitle}
          </Typography>
          <Grid display={"flex"}>
            <Typography fontSize={"14px"} color={defaultColor}>
              Asked {question.lastModifiedDate}
            </Typography>
            <Typography
              fontSize={"14px"}
              marginLeft={"14px"}
              color={defaultColor}
            >
              Viewed {question.views} times
            </Typography>
          </Grid>
        </Grid>
        <Grid>
          {!favourite && (
            <StarBorderIcon
              style={{ fontSize: "30px", color: "orange", cursor: "pointer" }}
              onClick={() => toggleFavouriteQuestion({userId : getLoggedInUserId(), questionId: question.questionId})}
            />
          )}
          {favourite && (
            <StarOutlinedIcon
              style={{ fontSize: "30px", color: "orange", cursor: "pointer" }}
              onClick={() => toggleFavouriteQuestion({userId : getLoggedInUserId(), questionId: question.questionId})}
            />
          )}
        </Grid>
      </Grid>
      <Divider style={{ backgroundColor: "gray" }}></Divider>
      <UserResponse
        questionTitle={question.questionTitle}
        upvotes={question.upvotes}
        downvotes={question.downvotes}
        responseData={question?.questionDescription?.replace(/%n%/g, "\n")}
        lastModifiedDate={question.lastModifiedDate}
        userName={question.userName}
        tags={question.tags}
        type={"question"}
        userId={question.userId}
        questionId={question.questionId}
        triggerFetchQuestion={triggerFetchQuestion}
        setTriggerFetchQuestion={setTriggerFetchQuestion}
      />
      <Divider style={{ backgroundColor: "gray" }}></Divider>
      <Grid margin={"10px 0"}>
        <Typography textAlign={"left"} fontSize={"20px"}>
          {question.answersCount} Answers
        </Typography>
      </Grid>
      {question.answers?.length !== 0 && (
        <Divider style={{ backgroundColor: "gray" }}></Divider>
      )}
      {question.answers?.map((answer) => {
        return (
          <>
            <UserResponse
              upvotes={answer.upvotes}
              downvotes={answer.downvotes}
              responseData={answer.answer.replace(/%n%/g, "\n")}
              lastModifiedDate={answer.lastModifiedDate}
              userName={answer.userName}
              type={"answer"}
              userId={answer.userId}
              answerId={answer.answerId}
              questionId={question.questionId}
              triggerFetchQuestion={triggerFetchQuestion}
              setTriggerFetchQuestion={setTriggerFetchQuestion}
            />
            <Divider style={{ backgroundColor: "gray" }}></Divider>
          </>
        );
      })}

      <Grid margin={"10px 0"}>
        <Typography textAlign={"left"} fontSize={"20px"}>
          Your Answers
        </Typography>
      </Grid>
      <Grid width={"100%"} margin={"5px 0"}>
        <TextField
          placeholder="Enter text here"
          multiline
          rows={6}
          variant="outlined"
          fullWidth
          value={answer}
          style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={isPostingAnswer}
        />
      </Grid>
      <Grid
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
      >
        <Button
          style={{
            backgroundColor:
              answer.trim().length === 0 || isPostingAnswer
                ? primaryDisable
                : primary,
            color: "white",
            width: "20%",
          }}
          onClick={handlePostAnswer}
          disabled={answer.trim().length === 0}
        >
          Post Answer
        </Button>
      </Grid>
    </Grid>
  );
};

export default Details;
