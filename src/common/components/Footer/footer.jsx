import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import semiLogo from "../../assets/images/semiLogo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Box bgcolor="#001f3f" color="#fff" mt={"80px"} p={3}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Link to={"/"} style={{textDecoration: 'none'}}>
            <Grid
              display={"flex"}
              marginLeft={"10px"}
              justifyContent={"center"}
            >
              <img
                src={semiLogo}
                height={"40px"}
                style={{ cursor: "pointer" }}
              />

              <Typography
                variant="h6"
                fontWeight="bold"
                gutterBottom
                style={{ cursor: "pointer" }}
                marginLeft={"12px"}
                color={'white'}
              >
                Question Bank
              </Typography>
            </Grid>
            </Link>

            <Typography
              variant="body2"
              gutterBottom
              style={{ cursor: "pointer" }}
            >
              Questions
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ cursor: "pointer" }}
            >
              Jobs
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ cursor: "pointer" }}
            >
              Developer Jobs Directory
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ cursor: "pointer" }}
            >
              Careers
            </Typography>
            {/* Add more links as needed */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              style={{ cursor: "pointer" }}
            >
              Products
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ cursor: "pointer" }}
            >
              Teams
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ cursor: "pointer" }}
            >
              Talent
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ cursor: "pointer" }}
            >
              Advertising
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ cursor: "pointer" }}
            >
              Enterprise
            </Typography>
            {/* Add more links as needed */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              style={{ cursor: "pointer" }}
            >
              Company
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ cursor: "pointer" }}
            >
              About
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ cursor: "pointer" }}
            >
              Press
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ cursor: "pointer" }}
            >
              Work Here
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ cursor: "pointer" }}
            >
              Legal
            </Typography>
            {/* Add more links as needed */}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              style={{ cursor: "pointer" }}
            >
              Stack Exchange Network
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ cursor: "pointer" }}
            >
              Technology
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ cursor: "pointer" }}
            >
              Life / Arts
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ cursor: "pointer" }}
            >
              Culture / Recreation
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              style={{ cursor: "pointer" }}
            >
              Science
            </Typography>
            {/* Add more links as needed */}
          </Grid>
        </Grid>
        <Box mt={3} textAlign="center" marginTop={"50px"}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Joshi Inc.
          </Typography>
          <Typography variant="body2">
            This site is for educational purposes only. Question Bank is a
            privately held website and is not affiliated with any company.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
