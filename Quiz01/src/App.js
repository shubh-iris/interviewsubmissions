import React, { useState } from "react";
import { questionsoriginal } from "./data";

//randomise quetions
const questions = questionsoriginal.sort(() => (Math.random() > 0.5 ? 1 : -1));

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  //Progess bar
  const move = (i) => {
    if (i === 0) {
      i = 1;
      var width = 0;
      var id = setInterval(frame, 100);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          Event.currentTarget.style.width = width + "%";
        }
      }
    }
  };
  //score check
  const failcheck = (score) => {
    if (score >= 4) return 1;
    else return 0;
  };
  function showQuiz() {
    return (
      <div>
        <div className="question-section">
          <div className="question-count">
            <span>{currentQuestion + 1}</span>/{questions.length}
          </div>
          <div id="myProgress">
            <div id="myBar" style={{ width: 50 + currentQuestion * 75 }}>
              {move}
            </div>
          </div>
          <div className="question-text">
            {questions[currentQuestion].question}
          </div>
        </div>

        <div className="answer-section">
          {questions[currentQuestion].options
            .sort(() => (Math.random() > 0.5 ? 1 : -1))
            .map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.label}
              </button>
            ))}
        </div>
      </div>
    );
  }
  const restartQuiz = function () {
    setCurrentQuestion(0);
    setShowScore(false);
    showQuiz();
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <h3>{failcheck(score) ? "Passed " : "Failed "}</h3>
          <button class="button-score">Retry</button>
        </div>
      ) : (
        showQuiz()
      )}
    </div>
  );
}
