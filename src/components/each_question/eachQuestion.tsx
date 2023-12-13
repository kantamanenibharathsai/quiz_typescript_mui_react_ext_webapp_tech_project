import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import styles from "./eachQuestion.styles";
import questionsData from "../../data/data";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/appContext";

interface IState {
  seconds: number;
}

const Question = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState<IState["seconds"]>(300);
  const { answersArray, updateAnswersArray } = useContext(AppContext);

  const eachRadioBtnSingleEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    eachOption: { option: string; isCorrect: boolean }
  ) => {
    if (e.target.value === eachOption.option) {
      updateAnswersArray([...answersArray, 1]);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      navigate("/another-page");
    }
  }, [seconds, navigate]);

  const formatTime = (timeInSeconds: number) => {
    const minutes: number = Math.floor(timeInSeconds / 60);
    const remainingSeconds: number = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };
  return (
    <Box sx={styles.mainBox}>
      <Typography variant="body1" sx={styles.questionsTime}>
        {formatTime(seconds)}
      </Typography>
      <Box sx={styles.allQuestionsContainer}>
        {questionsData.map((eachQuestionObj) => {
          return (
            <Box key={eachQuestionObj.id} sx={styles.questionsBox}>
              <Typography variant="body1" sx={styles.questionsText}>
                {eachQuestionObj.id} . {eachQuestionObj.question}
              </Typography>
              <FormControl>
                <RadioGroup
                  defaultValue=""
                  name="radio-buttons-group"
                  sx={{ border: "4px solid green" }}
                  //   onChange={handleChange}
                >
                  {eachQuestionObj.answers.map((eachOption) => (
                    <FormControlLabel
                      key={`group${eachQuestionObj.id}`}
                      value={eachOption.option}
                      labelPlacement="start"
                      sx={styles.formControlLabel}
                      control={
                        <Radio
                          size="medium"
                          sx={styles.radioInput}
                          value={eachOption.option}
                          name={`group${eachQuestionObj.id}`}
                          onChange={(e) =>
                            eachRadioBtnSingleEventHandler(e, eachOption)
                          }
                        />
                      }
                      label={
                        <Typography variant="body1" sx={styles.optionsText}>
                          a) {eachOption.option}
                        </Typography>
                      }
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>
          );
        })}
        <Box sx={styles.submitBtnBox}>
          <Button
            sx={styles.commonButton}
            onClick={() => {
              // onBtnClick();
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Question;
