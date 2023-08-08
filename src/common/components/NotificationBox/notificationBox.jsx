import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteNotificationsAction, fetchQuestionAction } from "../../actions/actions";
import { useNavigate } from "react-router-dom";

const NotificationBox = (props) => {
  const primary = "#0275FF";
  const MAX_WORDS = 8;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const limitValue = (value) => {
    value = value.replaceAll("%", " ");
    const words = value.split(" ");
    if (words.length > MAX_WORDS) {
      return words.slice(0, MAX_WORDS).join(" ") + " ...";
    }
    return value;
  };

  const vote = (countUpvote, countDownVote, questionDescription, questionId) => {
    return (
      <Grid
        bgcolor={"white"}
        m={"8px 0"}
        boxShadow={"0px 2px 6px rgba(0, 0, 0, 0.2)"}
        padding={1}
        sx={{
          "&:hover": {
            bgcolor: "#e5e5e5",
            cursor: "pointer",
          },
          borderRadius: "5px",
        }}
        onClick={() => {
          props.setOpenNotification(false);
          const pathName = window.location.pathname;
          if(pathName === "/") {
            navigate(`/${questionId}`)
          } else {
            dispatch(fetchQuestionAction({ questionId }));
          }
        }}
      >
        <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>{countUpvote? `${countUpvote} ${countUpvote === 1? "person" : "people"} upvoted` : ""} 
        {" "}{countDownVote? `${countDownVote} ${countDownVote === 1? "person" : "people"} downvoted` : ""}{" "}
        <Typography sx={{ display: "inline", textAlign: "left" }}>
        your question
        {" "}{" "}
          <Typography
            sx={{ display: "inline", fontWeight: "bold", textAlign: "left" }}
          >
            your question {limitValue(questionDescription)}
          </Typography>
        </Typography>
        </Typography>
      </Grid>
    );
  };

  const comment = (name, comment, questionId) => {
    return (
      <Grid
        bgcolor={"white"}
        m={"5px 0"}
        boxShadow={"0px 2px 6px rgba(0, 0, 0, 0.2)"}
        textAlign={"left"}
        padding={1}
        sx={{
          "&:hover": {
            bgcolor: "#e5e5e5",
            cursor: "pointer",
          },
          borderRadius: "5px",
        }}
        onClick={() => {
          props.setOpenNotification(false);
          const pathName = window.location.pathname;
          if(pathName === "/") {
            navigate(`/${questionId}`)
          } else {
            dispatch(fetchQuestionAction({ questionId }));
          }
        }}
      >
        <Typography style={{ fontWeight: "bold" }}>{name}
        <Typography style={{ display: "inline", textAlign: "left" }}>
          {" "}
          commented on your question{" "}
          <Typography
            style={{ display: "inline", fontWeight: "bold", textAlign: "left" }}
          >
            {limitValue(comment)}
          </Typography>
        </Typography>
        </Typography>
      </Grid>
    );
  };
  const notification = props.notification;
  const notificationItems = [];

  if (notification && notification.notificationVotes.length > 0) {
    notification.notificationVotes.forEach((e) => {
      if(e.upvotedUsers.length > 0 || e.downvotedUsers.length > 0) {
        notificationItems.push(vote(e.upvotedUsers.length, e.downvotedUsers.length, e.questionDescription, e.questionId));
      }
    });
  }

  if (notification && notification.notificationComments.length > 0) {
    notification.notificationComments.forEach((e) => {
      notificationItems.push(comment(e.userName, e.comment, e.questionId));
    });
  }

  if (notificationItems.length > 0) {
    notificationItems.push(
      <Grid>
        <Typography
          style={{
            cursor: "pointer",
            color: primary,
          }}
          onClick={() =>
            dispatch(deleteNotificationsAction(notification.userId))
          }
        >
          clear all
        </Typography>
      </Grid>
    );
  } else {
    notificationItems.push(
      <Grid>
        <Typography style={{ color: primary }}>
          no active notification
        </Typography>
      </Grid>
    );
  }
  return (
    <Grid
      bgcolor={"white"}
      boxShadow={"0px 2px 6px rgba(0, 0, 0, 0.4)"}
      width={"90%"}
      p={1}
      borderRadius={"5px"}
      maxHeight={"300px"}
      overflow={"scroll"}
    >
      {notificationItems}
    </Grid>
  );
};

export default NotificationBox;
