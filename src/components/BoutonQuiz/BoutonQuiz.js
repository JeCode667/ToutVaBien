import React from "react";
import { useNavigate } from "react-router-dom";
import "./BoutonQuiz.css";

const BoutonQuiz = () => {
  const navigate = useNavigate();

  return (
    <div class="bouton bouton-quiz" onClick={() => navigate("/quiz")}>
        Commencer le quiz 
    </div>
  );
};

export default BoutonQuiz;
