import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteNotificationsAction } from "../../actions/actions";
import { useNavigate } from "react-router-dom";

const NotificationBox = (props) => {
  const primary = "#0275FF";
  const MAX_WORDS = 8;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const limitComment = (comment) => {
    comment = comment.replaceAll("%", " ");
    const words = comment.split(" ");
    if (words.length > MAX_WORDS) {
      return words.slice(0, MAX_WORDS).join(" ") + " ...";
    }
    return comment;
  };

  const vote = (count, voteType) => {
    return (
      <Grid
        bgcolor={"white"}
        m={"5px 0"}
        border={"1px solid black"}
        padding={1}
        sx={{
          "&:hover": {
            bgcolor: "#e5e5e5",
            cursor: "pointer",
          },
          borderRadius: "5px",
        }}
      >
        <Typography style={{ textAlign: "left" }}>
          <Typography style={{ display: "inline" }}>{count}</Typography> People{" "}
          {voteType} your question
        </Typography>
      </Grid>
    );
  };

  const comment = (name, comment, questionId) => {
    return (
      <Grid
        bgcolor={"white"}
        m={"5px 0"}
        border={"1px solid black"}
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
          navigate(`/${questionId}`);
        }}
      >
        <span style={{ fontWeight: "bold" }}>{name}</span>
        <span style={{ display: "inline", textAlign: "left" }}>
          {" "}
          commented on your question{" "}
          <span
            style={{ display: "inline", fontWeight: "bold", textAlign: "left" }}
          >
            {limitComment(comment)}
          </span>
        </span>
      </Grid>
    );
  };
  const notification = props.notification;
  const notificationItems = [];

  if (notification && notification.upvoteCount > 0) {
    notificationItems.push(vote(notification.upvoteCount, "upvoted"));
  }

  if (notification && notification.downvoteCount > 0) {
    notificationItems.push(vote(notification.downvoteCount, "downvoted"));
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
            textDecoration: "underLine",
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
      width={"90%"}
      p={1}
      border={"1px solid gray"}
      maxHeight={"300px"}
      overflow={"scroll"}
    >
      {notificationItems}
    </Grid>
  );
};

export default NotificationBox;
