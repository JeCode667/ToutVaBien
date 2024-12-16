import React from "react";
import "./Question.css";

const Question = ({ question }) => {
  return (
    <div className="question-container">
      <span>{question}</span>
    </div>
  );
};

export default Question;
