import React from "react";
import "./App.css";
import HomePageAfterProfileCreation from "./components/home_page/homePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizWarn from "./components/quiz_warn/quizWarn";
import Quiz from "./components/quiz/quiz";
import QuizCompletion from "./components/quiz_completion/quizCompletion";
import QuizContinution from "./components/case_of_mid_exit/caseOfMidExit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageAfterProfileCreation />} />
        <Route path="/quizwarn" element={<QuizWarn />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quizcompletion" element={<QuizCompletion />} />
        <Route path="/midexit" element={<QuizContinution />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
