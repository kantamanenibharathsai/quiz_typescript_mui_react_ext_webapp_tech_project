import { createContext } from "react";

interface Context {
  answersArray: number[];
  updateAnswersArray: (array: number[]) => void;
  rightAnswers: number;
  handleSubmitBtn: () => void;
}

const AppContext = createContext<Context>({
  answersArray: [],
  updateAnswersArray: (array: number[]) => {},
  rightAnswers: 0,
  handleSubmitBtn: () => {},
});

export default AppContext;
