import React from "react";
import { Box, Typography, Button } from "@mui/material";
import quizCompletionStyles from "./quizCompletion.styles";
import NavBarRemainingpages from "../navbar_remaining_pages/navbarRemainingPages";

const QuizCompletion = () => {
  return (
    <Box sx={quizCompletionStyles.quizCompletionPageContainer}>
      <Box sx={quizCompletionStyles.childContainer}>
        <NavBarRemainingpages />
        <Box sx={quizCompletionStyles.bodyContainer}>
          <Box sx={quizCompletionStyles.textContainer}>
            <Typography component="p" sx={quizCompletionStyles.quizTimePara}>
              Congratulation!! You did your best and practice makes the man
              perfect!! Your score doesn’t define you but your willingness to
              learn makes different!! You scored 10/15..... A great
              Achievement!!
            </Typography>
            <Box sx={quizCompletionStyles.btnsContainer}>
              <Button sx={quizCompletionStyles.button}>Replay the Quiz</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QuizCompletion;
