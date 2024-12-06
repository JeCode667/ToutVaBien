import React, { useState, useEffect } from "react";
import "./Questions.css";
import { useNavigate } from "react-router-dom";

const Question = ({ questionTree }) => {
  const navigate = useNavigate();
  const [currentId, setCurrentId] = useState("root"); // Commence à la racine
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

  // Helper: recherche les parents en parcourant l'arbre
  const getParents = (id) => {
    const parents = [];
    let currentId = id;

    while (currentId) {
      const parentId = Object.keys(questionTree).find((key) => {
        const choice = questionTree[key];
        return choice.reponses_suivantes?.includes(currentId);
      });

      if (parentId) {
        const parentChoice = getChoice(parentId);
        if (parentChoice) {
          parents.unshift(parentChoice);
        }
        currentId = parentId;
      } else {
        currentId = null; // Aucun parent trouvé
      }
    }

    return parents;
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
    setCurrentId(id);
    setReponses(reponses_suivantes);
    setQuestion(getChoice(id)?.question);
  };

  // Gère le clic sur le bouton "Back"
  const handleBackClick = () => {
    const parents = getParents(currentId);
    // Remonte au parent immédiat
    const immediateParent = parents[parents.length - 1];
    setReponses(getChildren(immediateParent.id));
    setCurrentId(immediateParent.id);
    setQuestion(immediateParent.question);
  };

  const handleEraseClick = () => {
    const initialReponses = getChildren("root");
    setReponses(initialReponses);
    setCurrentId("root");
    setQuestion(getChoice("root")?.question);
  };

  return (
    <div>
      <header className="header">
        <h1 className="title">TOUT VA BIEN.</h1>
        <div className="buttons-header">

            <button onClick={() => window.location.reload()} class="bouton-tvb bleu"><img id="bouton-sortir" src={require("../../img/refaire.png")} alt="sortir"></img></button>
          
          <button onClick={() => navigate("/sortie")} class="bouton-tvb rouge"><img id="bouton-sortir" src={require("../../img/sortir.png")} alt="sortir"></img></button>
        </div>
        <img src={require("../../img/logo.png")} alt="Logo" className="logo" />
      </header>
      
      <div className="grand-conteneur">
  <div className="question-container">
    <p>{question}</p>
  </div>
  <div className="reponses-container">
    {reponses_suivantes.map((choice, index) => (
      <button
        key={choice.id}
        onClick={() => handleChoiceClick(choice.id)}
        className={`choice-button ${index === 0 ? "choice-oui" : "choice-non"}`}
      >
        {choice.reponse}
      </button>
    ))}
  </div>
</div>




    </div>
  );
};

export default Question;
