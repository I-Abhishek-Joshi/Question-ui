import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LinkIcon from "@mui/icons-material/Link";

const CreatePostModal = (props) => {
  const name = "Abhishek";
  const textPlaceHolder = `Whats in your mind, ${name}`;
  const primary = "#0275FF";
  return (
    <Grid
      width={"100vw"}
      height={"100vh"}
      bgcolor={"rgb(255, 255, 255, 0.8)"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={15}
    >
      <Grid
        display={"flex"}
        flexDirection={"column"}
        width={"45%"}
        bgcolor={"white"}
        borderRadius={"10px"}
        overflow={"hidden"}
        boxShadow={"0px 2px 6px rgba(0, 0, 0, 0.5)"}
      >
        <Grid
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          position={"relative"}
          alignItems={"center"}
          bgcolor={primary}
          padding={"10px"}
        >
          <Box width={"100%"}>
            <Typography color={"white"} fontWeight={600} fontSize={18}>
              Create Post
            </Typography>
          </Box>
          <CancelIcon
            style={{
              position: "absolute",
              right: "20px",
              color: "white",
              cursor: "pointer",
              fontSize: "30px",
            }}
            onClick={() => props.closeModal(false)}
          />
        </Grid>
        <Grid padding={"10px 20px 20px"}>
          <Grid width={"100%"}>
            <TextField
              placeholder={textPlaceHolder}
              multiline
              rows={6}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
            borderRadius={"5px"}
            margin={"20px 0"}
            padding={"10px 0"}
            border={"1px solid"}
            borderColor={primary}
          >
            <Box flex={1}>
              <Typography color={primary}>Add to your post</Typography>
            </Box>
            <Box flex={1}>
              <Box display={"flex"} justifyContent={"center"}>
                <PhotoLibraryIcon
                  style={{
                    margin: "0 20px",
                    color: primary,
                    cursor: "pointer",
                  }}
                />
                <LinkIcon
                  style={{
                    margin: "0 20px",
                    color: primary,
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid>
            <Button
              style={{
                backgroundColor: primary,
                width: "100%",
                color: "white",
                fontWeight: "600",
              }}
            >
              Post
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreatePostModal;
