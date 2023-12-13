import React from "react";
import { Box, Typography, Button } from "@mui/material";
import NavBar from "../home_page_navbar/homePageNavbar";
import homePageStyles from "./homepage.styles";
import { Link } from "react-router-dom";

const HomePageAfterProfileCreation = () => {
  return (
    <Box sx={homePageStyles.homepageContainer}>
      <NavBar />
      <Box sx={homePageStyles.bodyContainer}>
        <Typography component="h1" sx={homePageStyles.quizTimeheading}>
          Quiz Time
        </Typography>

        <Box sx={homePageStyles.textContainer}>
          <Typography component="p" sx={homePageStyles.quizTimePara}>
            This quiz consist of fifteen question of duration five minutes. The
            only rule is you cannot quit the quiz in the middle of your
            answering. Once the time is out you cannot attempt any more question
            and besides you marked on the basis of full marks allocated for the
            quiz.
          </Typography>
          <Link to="/quizwarn">
            <Button sx={homePageStyles.button}>Start Quiz</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePageAfterProfileCreation;
