import React from "react";
import {
  Card,
  Typography,
  Grid,
  Avatar,
  Chip,
  Box,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import face from "../../assets/images/face.jpg";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link, useNavigate } from "react-router-dom";
import { isUserAuthenticated } from "../../utils/utils";
import { useDispatch } from "react-redux";
import { currentLocation, openLoginModal } from "../../actions/actions";
import '../../../App.css'
import { getLoggedInUserId } from "../../assets/constant/constants";

const CardDetails = ({ question }) => {
  const chipColor = "#F0F0F0";
  const success = "#4BB543";
  const primary = "#0275FF";
  const orange = "#ff781f";
  const defaultColor = "#848484";
  const danger = "#DC4C64";

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleQuestionTitleClick = () => {
    if(isUserAuthenticated()) {
      navigate(`/${question.questionId}`)
    } else{
      dispatch(currentLocation(`${question.questionId}`))
      dispatch(openLoginModal())
      document.body.classList.add('bodyNoScroll')
    }
  }

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
      md={12}
    >
      <Grid item xs={1.5}>
        {/* Block 1 */}
      </Grid>
      <Grid
        item
        xs={10.5}
        container
        justifyContent="center"
        alignItems="flex-start"
      >
        {/* Block 2 */}
        <Grid container direction="row" flexWrap="nowrap" pl={2} pr={2} mt={1}>
          <Chip
            label="Database"
            size="small"
            style={{
              color: primary,
              backgroundColor: chipColor,
              padding: "0 20px",
              margin: "5px",
              fontSize: "10px",
            }}
          />
          <Chip
            label="Java"
            size="small"
            style={{
              color: success,
              backgroundColor: chipColor,
              padding: "0 20px",
              margin: "5px",
              fontSize: "10px",
            }}
          />
          <Chip
            label="Spring Boot"
            size="small"
            style={{
              color: orange,
              backgroundColor: chipColor,
              padding: "0 20px",
              margin: "5px",
              fontSize: "10px",
            }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        xs={1.5}
        container
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          mt={3}
        >
          <Avatar alt="Remy Sharp" src={face} />
          <Typography variant="body1" style={{ fontSize: "10px" }}>
            {question.userName}
          </Typography>
        </Grid>
        {/* Block 3 */}
      </Grid>
      <Grid
        item
        xs={10.5}
        container
        justifyContent="center"
        alignItems="flex-start"
        pl={2}
        pr={2}
        mt={1.5}
      >
        {/* Block 4 */}
        <Grid style={{ maxHeight: "200px", overflow: "hidden" }} width={"100%"}>
          <Box display={"flex"} justifyContent={"space-between"} >
              <Typography
                variant="h6"
                fontWeight={700}
                lineHeight={1.4}
                style={{
                  textAlign: "left",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  cursor: "pointer",
                  maxWidth: '80%',
                }}
                whiteSpace={"nowrap"}
                fontSize={"14px"}
                onClick={ handleQuestionTitleClick }
              >
                {question.questionTitle} 
              </Typography>
            <Box display={"flex"} alignItems={"center"}>
              <AccessTimeIcon style={{ fontSize: "15px" }} />
              <Typography fontSize={"12px"} ml={0.5} fontWeight={600}>
                {question.lastModifiedDate}
              </Typography>
            </Box>
          </Box>

          <Typography
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              textAlign: "left",
            }}
            mt={1}
            fontSize={"14px"}
            whiteSpace={"pre-line"}
          >
            {question.questionDescription.replace(/%n%/g, "\n")}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={1.5}
        container
        justifyContent="center"
        alignItems="flex-start"
      >
        {/* Block 5 */}
      </Grid>
      <Grid item xs={10.5} pl={2} pr={2}>
        <Box display="flex" justifyContent="space-between" pt={2} pb={2}>
          <Box display="flex" alignItems="center">
            <ArrowUpwardIcon
              style={{ color: isUserAuthenticated() && question?.upvotedUsers?.includes(getLoggedInUserId())? success : defaultColor, fontSize: "18px" }}
            />
            <Typography
              variant="body1"
              ml={0.5}
              mr={2}
              color={defaultColor}
              fontSize={"11px"}
            >
              {question.upvotes}
            </Typography>
            <ArrowDownwardIcon
              style={{ color: isUserAuthenticated() && question?.downvotedUsers?.includes(getLoggedInUserId())? danger : defaultColor, fontSize: "18px" }}
            />
            <Typography
              variant="body1"
              ml={0.5}
              mr={2}
              color={defaultColor}
              fontSize={"11px"}
            >
              {question.downvotes}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <CommentIcon style={{ color: defaultColor, fontSize: "15px" }} />
            <Typography
              variant="body1"
              ml={0.5}
              mr={2}
              color={defaultColor}
              fontSize={"11px"}
            >
              {`${question.answersCount} Comment`}
            </Typography>
            <VisibilityIcon style={{ color: defaultColor, fontSize: "15px" }} />
            <Typography
              variant="body1"
              ml={0.5}
              mr={2}
              color={defaultColor}
              fontSize={"11px"}
            >
              {`${question.views} Views`}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CardDetails;
