import React from "react";
import { Box, Typography, Button } from "@mui/material";
import quizWarnStyles from "./quizWarn.styles";
import NavBarRemainingpages from "../navbar_remaining_pages/navbarRemainingPages";
import { Link } from "react-router-dom";

const QuizWarn = () => {
  return (
    <Box sx={quizWarnStyles.quizWarnPageContainer}>
      <Box sx={quizWarnStyles.childContainer}>
        <NavBarRemainingpages />
        <Box sx={quizWarnStyles.bodyContainer}>
          <Box sx={quizWarnStyles.textContainer}>
            <Typography component="p" sx={quizWarnStyles.quizTimePara}>
              Once the quiz has started, you cannot quit before completing!!
              Make Sure you are Fully Ready for it!! Remember you are a sun to
              shine and also to learn!! Make Sure the answer is selected in the
              box provided beside the question!!
            </Typography>
            <Box sx={quizWarnStyles.btnsContainer}>
              <Link to="/quiz">
                <Button sx={quizWarnStyles.button}>Start Quiz</Button>
              </Link>
              <Link to="/">
                <Button sx={quizWarnStyles.button}>Quit</Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QuizWarn;
