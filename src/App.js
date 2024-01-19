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
    <div>
      {showResult ? (
        <Result finalScore={score} />):(<QuestionBox finalScore={handleFinalScore} /> )}
    </div>
  );
}

export default App;
