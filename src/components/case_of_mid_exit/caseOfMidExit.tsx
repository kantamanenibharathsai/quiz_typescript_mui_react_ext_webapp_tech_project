import React from "react";
import { Box } from "@mui/material";

import quizStyles from "./caseOfMidexit.styles";
import NavBarRemainingpages from "../navbar_remaining_pages/navbarRemainingPages";
import Question from "../each_question/eachQuestion";

const QuizContinution = () => {
  return (
    <Box sx={quizStyles.quizPageContainer}>
      <Box sx={quizStyles.childContainer}>
        <NavBarRemainingpages />
        <Box sx={quizStyles.bodyContainer}>
          <Question />
        </Box>
      </Box>
    </Box>
  );
};

export default QuizContinution;
