import { Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

import UserResponse from "../../components/UserResponse/userResponse";
const Details = () => {
  const defaultColor = "#848484";
  const [question, setQuestion] = useState({});

  const QUESTION_API =
    "http://localhost:8080/question/16882055042203bc21046-b1f9-4c1e-bab6-6dcdec80e5df";

  const fetchAllQuestion = async () => {
    try {
      const response = await axios.get(QUESTION_API);
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
      padding={"10px 15px"}
      
    >
      <Grid display={"flex"} flexDirection={"column"} >
        <Typography fontSize={"1.7rem"} textAlign={"left"}>
          {question.questionTitle}
        </Typography>
        <Grid display={"flex"} >
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
        <Divider style={{ backgroundColor: "gray"}}></Divider>
      <UserResponse
        upvotes={question.upvotes}
        downvotes={question.downvotes}
        responseData={question.questionDescription}
        lastModifiedDate={question.lastModifiedDate}
        userName={question.userName}
      />
        <Divider style={{ backgroundColor: "gray"}}></Divider>
      <Grid>
        <Typography textAlign={"left"} fontSize={'20px'}>
          {question.answersCount} Answers
        </Typography>
      </Grid>
      {question.answers.map((answer) => {
        <UserResponse
          upvotes={answer.upvotes}
          downvotes={answer.downvotes}
          responseData={answer.answer}
          lastModifiedDate={answer.lastModifiedDate}
          userName={question.userName}
        />;
          <Divider style={{ backgroundColor: "gray"}}></Divider>
      })}
    </Grid>
  );
};

export default Details;
