import React from "react";
import Questions from "../../data/Questions/Questions";
import questionTree from "../../data/QuestionTree";
import BoutonAide from "../../components/BoutonAide/BoutonAide";
import "./Quiz.css";

function Quiz() {
  return (
    <div>
      <Questions questionTree={questionTree} />
      
      <BoutonAide />
    </div>
  );
}

export default Quiz;
