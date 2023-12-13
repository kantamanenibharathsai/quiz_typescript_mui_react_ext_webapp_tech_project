import { ReactNode, useState } from "react";
import AppContext from "./appContext";

const AppState = ({ children }: { children: ReactNode }) => {
  const [answersArray, setAnswersArray] = useState<number[]>([0]);
  const [rightAnswers, setRightAnswers] = useState<number>(0);

  const updateAnswersArray = (array: number[]) => {
    setAnswersArray(array);
  };

  const handleSubmitBtn = () => {
    setRightAnswers(answersArray.reduce((a, b) => a + b));
  };

  return (
    <AppContext.Provider
      value={{
        answersArray,
        updateAnswersArray,
        rightAnswers,
        handleSubmitBtn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
