import React from "react";
import Questions from '../components/Questions/Questions';

import questionTree from "../data/QuestionTree";

const Quiz = () => {
  return (
    <div className="quiz-container">
      <Questions questionTree={questionTree} />
    </div>
  );
};

export default Quiz;
