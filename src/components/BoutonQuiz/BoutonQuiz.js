import React from "react";
import { useNavigate } from "react-router-dom";
import "./BoutonQuiz.css";

const BoutonQuiz = () => {
  const navigate = useNavigate();

  return (
            <p>
              <button className="quiz"
                onClick={() => navigate("/Quiz")}
          
              >
                Commencer le quiz
              </button>
            </p>
  );
};

export default BoutonQuiz;
