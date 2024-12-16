import React from "react";
import Questions from "../../data/Questions/Questions";
import questionTree from "../../data/QuestionTree";
import "./Quiz.css";
import vagues from "../../img/vagues.png"; 

function Quiz() {
  return (
    <div>
      <Questions questionTree={questionTree} />
      
      <img
        src={vagues}
        alt="vagues"
        className="vagues"
      />
    </div>
  );
}

export default Quiz;
