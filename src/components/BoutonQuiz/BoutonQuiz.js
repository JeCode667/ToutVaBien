import React from "react";
import { useNavigate } from "react-router-dom";
import "./BoutonQuiz.css";

const BoutonQuiz = () => {
  const navigate = useNavigate();

  return (
    <button
      class="bouton-tvb jaune commencer"
      onClick={() => navigate("/quiz")}
    >
      <img
        id="bouton-refaire"
        src={require("../../img/commencer.png")}
        alt="refaire"
      ></img>
    </button>
  );
};

export default BoutonQuiz;
