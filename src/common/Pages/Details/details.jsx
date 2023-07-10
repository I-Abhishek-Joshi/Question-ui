import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ANSWER_API,
  DELETE_ANSWER_API,
  QUESTION_API,
  getTokenCookie,
} from "../../assets/constant/constants";

import UserResponse from "../../components/UserResponse/userResponse";
import { useParams } from "react-router-dom";
const Details = () => {
  const { questionId } = useParams();
  const defaultColor = "#848484";
  const primary = "#0275FF";
  const primaryDisable = "#B2CFFF";

  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState("");
  const [isPostingAnswer, setIsPostingAnswer] = useState(false);

  const refresh = () => {
    window.location.reload();
  };
  const fetchQuestion = async () => {
    try {
      const url = QUESTION_API + questionId;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${getTokenCookie()}`,
        },
      });
      setQuestion(response.data);
    } catch (error) {
      console.log("ERROR ", error);
    }
  };

  const postAnswerApi = () => {
    return new Promise((resolve, reject) => {
      axios
        .post(
          ANSWER_API,
          {
            questionId: question.questionId,
            answer: answer.trim().replace(/\n/g, "%n%"),
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
        });
    });
  };

  const handlePostAnswer = () => {
    setIsPostingAnswer(true);
    postAnswerApi()
      .then((data) => {
        refresh();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchQuestion();
  }, []);
  return (
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
      <Grid display={"flex"} flexDirection={"column"} margin={"10px 0"}>
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
      <Divider style={{ backgroundColor: "gray" }}></Divider>
      <UserResponse
        upvotes={question.upvotes}
        downvotes={question.downvotes}
        responseData={question?.questionDescription?.replace(/%n%/g, "\n")}
        lastModifiedDate={question.lastModifiedDate}
        userName={question.userName}
        tags={question.tags}
        type={"question"}
        refresh={refresh}
      />
      <Divider style={{ backgroundColor: "gray" }}></Divider>
      <Grid margin={"10px 0"}>
        <Typography textAlign={"left"} fontSize={"20px"}>
          {question.answersCount} Answers
        </Typography>
      </Grid>
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
              refresh = {refresh}
              answerId = {answer.answerId}
              questionId = {answer.questionId}
              
            />
            <Divider style={{ backgroundColor: "gray" }}></Divider>
          </>
        );
      })}
      {question.answers?.length === 0 && (
        <Divider style={{ backgroundColor: "gray" }}></Divider>
      )}
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
          style={{whiteSpace: "pre-wrap", overflowWrap: "break-word"}}
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
