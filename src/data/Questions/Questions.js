import React, { useState, useEffect } from "react";
import "./Questions.css";
import Question from "../../components/Question/Question";
import Reponse from "../../components/Reponse/Reponse";

const Questions = ({ questionTree }) => {
  const [reponses_suivantes, setReponses] = useState([]); // Choix à afficher
  const [question, setQuestion] = useState(""); // Titre affiché

  // Helper: récupère un choix par son ID
  const getChoice = (id) => {
    return questionTree[id] ? { ...questionTree[id], id } : null;
  };

  // Helper: récupère les enfants d'un choix donné
  const getChildren = (id) => {
    const choice = getChoice(id);
    if (choice?.reponses_suivantes) {
      return choice.reponses_suivantes
        .map((childId) => getChoice(childId))
        .filter(Boolean);
    }
    return [];
  };

  // Initialisation : affiche les choix initiaux
  useEffect(() => {
    const initialReponses = getChildren("root");
    setReponses(initialReponses);
    setQuestion(getChoice("root")?.question);
  }, [questionTree]);

  // Gère le clic sur un bouton pour afficher les enfants
  const handleChoiceClick = (id) => {
    const reponses_suivantes = getChildren(id);
    setReponses(reponses_suivantes);
    setQuestion(getChoice(id)?.question);
  };

  return (
    <div className="question-reponses-container">
      <Question question={question} />

      <Reponse
        reponses_suivantes={reponses_suivantes}
        handleChoiceClick={handleChoiceClick}
      />
    </div>
  );
};

export default Questions;
