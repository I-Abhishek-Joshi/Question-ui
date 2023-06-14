import React from "react";
import {
  Card,
  Typography,
  Grid,
  Avatar,
  Chip,
  Item,
  Container,
  Box,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import face from "../../assets/images/face.jpg";
import avatar from "../../assets/images/avatar.jpg";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const CardDetails = () => {
  const chipColor = "#F0F0F0";
  const success = "#4BB543";
  const primary = "#0275FF";
  const orange = "#ff781f";
  const defaultColor = "#848484";
  return (
    <Grid
      container
      spacing={1}
      bgcolor={"white"}
      color={"black"}
      overflow={"hidden"}
      style={{
        borderRadius: "10px",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Grid item xs={2}>
        {/* Block 1 */}
      </Grid>
      <Grid
        item
        xs={10}
        container
        justifyContent="center"
        alignItems="flex-start"
      >
        {/* Block 2 */}
        <Grid container direction="row" flexWrap="nowrap" pl={2} pr={2}>
          <Chip
            label="Database"
            size="small"
            style={{
              color: primary,
              backgroundColor: chipColor,
              padding: "0 20px",
              margin: "5px",
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
            }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        xs={2}
        container
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar alt="Remy Sharp" src={face} />
          <Typography variant="body1" style={{ fontSize: "12px" }}>
            Abhishek Joshi
          </Typography>
        </Grid>
        {/* Block 3 */}
      </Grid>
      <Grid
        item
        xs={10}
        container
        justifyContent="center"
        alignItems="flex-start"
        pl={2}
        pr={2}
      >
        {/* Block 4 */}
        <Grid style={{ maxHeight: "200px", overflow: "hidden" }}>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography
              variant="h6"
              fontWeight={700}
              lineHeight={1.4}
              style={{
                width: "60%",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              whiteSpace={"nowrap"}
              fontSize={"15px"}
            >
              Database design structure needs to be incorporated Database design
              structure needs to be incorporated Database design structure needs
              to be incorporated Database design structure needs to be
              incorporated
            </Typography>
            <Box display={"flex"} alignItems={"center"}>
              <AccessTimeIcon style={{ fontSize: "15px" }} />
              <Typography fontSize={"12px"} ml={0.5} fontWeight={600}>
                11:56 am
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
            }}
            mt={1}
            fontSize={"15px"}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            qui sunt alias unde consectetur. Fuga vel architecto, molestiae
            exercitationem vitae similique soluta harum ea, cum, assumenda
            corrupti magnam veniam iusto. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Aliquam qui sunt alias unde
            consectetur. Fuga vel architecto, molestiae exercitationem vitae
            similique soluta harum ea, cum, assumenda corrupti magnam veniam
            iusto. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aliquam qui sunt alias unde consectetur. Fuga vel architecto,
            molestiae exercitationem vitae similique soluta harum ea, cum,
            assumenda corrupti magnam veniam iusto.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={2}
        container
        justifyContent="center"
        alignItems="flex-start"
      >
        {/* Block 5 */}
      </Grid>
      <Grid item xs={10} pl={2} pr={2}>
        <Box display="flex" justifyContent="space-between" pt={2} pb={2}>
          <Box display="flex" alignItems="center">
            <ArrowUpwardIcon
              style={{ color: defaultColor, fontSize: "15px" }}
            />
            <Typography
              variant="body1"
              ml={0.5}
              mr={2}
              color={defaultColor}
              fontSize={"12px"}
            >
              20
            </Typography>
            <ArrowDownwardIcon
              style={{ color: defaultColor, fontSize: "15px" }}
            />
            <Typography
              variant="body1"
              ml={0.5}
              mr={2}
              color={defaultColor}
              fontSize={"12px"}
            >
              20
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <CommentIcon style={{ color: defaultColor, fontSize: "15px" }} />
            <Typography
              variant="body1"
              ml={0.5}
              mr={2}
              color={defaultColor}
              fontSize={"12px"}
            >
              12 Comment
            </Typography>
            <VisibilityIcon style={{ color: defaultColor, fontSize: "15px" }} />
            <Typography
              variant="body1"
              ml={0.5}
              mr={2}
              color={defaultColor}
              fontSize={"12px"}
            >
              15 Views
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CardDetails;
