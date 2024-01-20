import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleFinalScore = (finalScore) => {
    setScore(finalScore);
    setShowResult(true);
  };

  return (
    <>
      {/* when the 5 questions are done then this is redirecting us to the result.jsx page */}
      {showResult ? (
        <Result finalScore={score} />):(<QuestionBox finalScore={handleFinalScore} /> )}
    </>
  );
}

export default App;
