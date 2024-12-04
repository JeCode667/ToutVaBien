import React from "react";
import { useNavigate } from "react-router-dom";
import "./Accueil.css";

const Accueil = () => {
  const navigate = useNavigate();

  return (
    <div className="accueil-container">
      <header className="header">
        <h1 className="title">TOUT VA BIEN.</h1>
        <div className="buttons-header">
          <button className="button refaire" onClick={() => window.location.reload()}>
            REFAIRE
          </button>
          <button className="button sortir" onClick={() => navigate("/sortie")}>
            SORTIR
          </button>
        </div>
      </header>

      <div className="content">
        <img src={require("../../img/logo.png")} alt="Logo" className="logo" />
        <div className="description">
          <p>
            Bienvenue sur <strong>TOUT VA BIEN</strong> ! Ce site est là pour t'aider à mettre des mots sur ce que tu peux ressentir. Tu n'auras qu'à répondre à quelques petites questions, c'est super simple !
          </p>
          <p>
            Tu peux recommencer du début à tout moment avec le bouton <span className="highlight">REFAIRE</span>.
          </p>
          <p>
            Si tu as besoin de quitter ce site rapidement, clique sur le bouton <span className="highlight">SORTIR</span>.
          </p>
          <p className="anonymat">Chez nous, aucune donnée n'est récupérée, tu es totalement anonyme !</p>
        </div>
        <button className="commencer-button" onClick={() => navigate("/quiz")}>
          COMMENCER LE QUIZ
        </button>
      </div>
    </div>
  );
};

export default Accueil;
