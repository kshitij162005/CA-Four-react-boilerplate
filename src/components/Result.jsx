import React, { useEffect, useState } from "react";
import "../components/Result.css";

export default function Result({ finalScore }) {
  const totalQuestions = 5;

  // used .round method here to round of the percentage of the marks scored.
  const percentage = Math.round((finalScore / totalQuestions) * 100);

  // toggling the dark mode functionality
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`outsideContainerR ${isDarkMode ? "darkMode" : ""}`}>
        <div className="outsideContainerR">
          <div className="upperContainerR">
            <div className="modeButtonR">
              <button
                className="switchButton"
                type="button"
                // on click functionality given to the Dark mode button
                onClick={toggleDarkMode}
              >
                {isDarkMode ? "🌕" : "🌑"}
              </button>
            </div>
          </div>
          <div className="resultContainerR">
            <div className="resultBoxR">
              <div className="finalResultHeading">
                <h1>Final Result</h1>
              </div>
              <div className="resultCountR">
                <h3>
                  {/* calculating the percentage of the correct questions*/}
                  <span>{finalScore}</span> out of 5 is Correct :-
                  <span>({percentage}%)</span>
                </h3>
              </div>
              <div className="restartButtondiv">
                {/* after clicking on the restert button it is redirecting to the outerContainer
               which is in the QuestionBox.jsx as we gave id to the outerContainer div */}
                <a href="restartR">
                  <button className="restartButtonR"> Restart Game </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
