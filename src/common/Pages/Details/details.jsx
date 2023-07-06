import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { QUESTION_API, getTokenCookie } from "../../assets/constant/constants";

import UserResponse from "../../components/UserResponse/userResponse";
import { useParams } from "react-router-dom";
const Details = () => {
  const { questionId } = useParams();
  const defaultColor = "#848484";
  const primary = "#0275FF";
  const [question, setQuestion] = useState({});

  const fetchAllQuestion = async () => {
    try {
      const url = QUESTION_API + questionId;
      const response = await axios.get(url, {
        headers : {
          Authorization : `Bearer ${getTokenCookie()}`
        }
      });
      setQuestion(response.data);
    } catch (error) {
      console.log("ERROR ", error);
    }
  };

  useEffect(() => {
    fetchAllQuestion();
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
        responseData={question.questionDescription}
        lastModifiedDate={question.lastModifiedDate}
        userName={question.userName}
        tags={question.tags}
        type={'question'}
      />
      <Divider style={{ backgroundColor: "gray" }}></Divider>
      <Grid margin={"10px 0"}>
        <Typography textAlign={"left"} fontSize={"20px"}>
          {question.answersCount} Answers
        </Typography>
      </Grid>
      {question.answers?.map((answer) => {

        return (<>
        <UserResponse
          upvotes={answer.upvotes}
          downvotes={answer.downvotes}
          responseData={answer.answer}
          lastModifiedDate={answer.lastModifiedDate}
          userName={question.userName}
          type={'answer'}
        />
        <Divider style={{ backgroundColor: "gray" }}></Divider></>)
        
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
        />
      </Grid>
      <Grid display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
        <Button
          style={{
            backgroundColor: primary,
            color: "white",
            width: '20%',
          }}
        >
          Post Answer
        </Button>
      </Grid>
    </Grid>
  );
};

export default Details;
