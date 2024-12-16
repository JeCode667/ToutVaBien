import React from "react";
import "./Reponse.css";

const Reponse = ({ reponses_suivantes, handleChoiceClick }) => {
  return (
    <div className="reponses-container">
      {reponses_suivantes.map((choice, index) => (
        <button
          key={choice.id}
          onClick={() => handleChoiceClick(choice.id)}
          className="choice-button"
        >
          {choice.reponse}
        </button>
      ))}
    </div>
  );
};

export default Reponse;
