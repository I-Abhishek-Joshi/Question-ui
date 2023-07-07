import React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Chip, Grid, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { DELETE_ANSWER_API, getLoggedInUserId, getTokenCookie } from "../../assets/constant/constants";
import axios from "axios";

const UserResponse = ({
  upvotes,
  downvotes,
  responseData,
  lastModifiedDate,
  userName,
  tags,
  type,
  userId,
  refresh,
  answerId,
  questionId
}) => {
  const userColor = "#D9E9F7";
  const primary = "#0275FF";

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
        .then(response => {
          if (response.status === 200) {
            resolve(response);
          } else {
            reject(response);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  
  const handleDeleteAnswer = () => {
    deleteAnswerApi(answerId, questionId)
    .then((response) => {
      refresh()
    }).catch((error) => {
      console.log(error)
    })
  }

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
              border: "0.5px solid",
              borderRadius: "50%",
              fontSize: "30px",
              cursor: "pointer",
            }}
          />
          <Typography textAlign={"left"} fontSize={"20px"}>
            {upvotes - downvotes}
          </Typography>
          <ArrowDropDownIcon
            style={{
              border: "0.5px solid",
              borderRadius: "50%",
              fontSize: "30px",
              cursor: "pointer",
            }}
          />
        </Grid>
      </Grid>
      <Grid padding={"10px"} flexGrow={1}>
        <Typography textAlign={"left"} whiteSpace={"pre-line"}>{responseData}</Typography>
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
        <Grid
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          {(type === "answer" && getLoggedInUserId() == userId) && (
            <Grid marginRight={"10px"}>
              <DeleteIcon
                style={{
                  color: "#940000",
                  cursor: "pointer",
                }}
                onClick = { handleDeleteAnswer }
              />
            </Grid>
          )}
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
    </Grid>
  );
};

export default UserResponse;
