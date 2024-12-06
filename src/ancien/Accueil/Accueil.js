import React from "react";
import { useNavigate } from "react-router-dom";
import "./Accueil.css";
import Bouton from "../../components/Bouton/Bouton";

const Accueil = () => {
  const navigate = useNavigate();

  return (
    <div className="accueil-container">
      <header className="header">
        <h1 className="title">TOUT VA BIEN.</h1>
        <div className="buttons-header">
          <Bouton bouton="refaire" />
          <Bouton bouton="sortir" />
        </div>
      </header>
      <div>
        <img src={require("../../img/logo.png")} alt="Logo" id="logo" />
      </div>

      <div className="content">
        <div className="description">
          <p class="textbox">
            Bienvenue sur <strong>TOUT VA BIEN</strong> ! Ce site est là pour
            t'aider à mettre des mots sur ce que tu peux ressentir. Tu n'auras
            qu'à répondre à quelques petites questions, c'est super simple !
          </p>
          <div class="textbox">
            <p>
              Tu peux recommencer du début à tout moment avec{" "}
              <button
                class="bouton-tvb rouge"
                onClick={() => navigate("/sortie")}
              >
                <img
                  id="bouton-sortir"
                  src={require("../../img/sortir.png")}
                  alt="sortir"
                ></img>
              </button>
              .
            </p>

            <p>
              Si tu as besoin de quitter ce site rapidement, clique sur{" "}
              <button
                class="bouton-tvb bleu"
                onClick={() => window.location.reload()}
              >
                <img
                  id="bouton-sortir"
                  src={require("../../img/refaire.png")}
                  alt="sortir"
                ></img>
              </button>
              .
            </p>
          </div>
          <p id="anonyme" class="textbox">
            Chez nous, aucune donnée n'est récupérée, tu es totalement anonyme !
          </p>
        </div>
        <button
          onClick={() => navigate("/quiz")}
          class="bouton-tvb jaune commencer"
        >
          <img
            id="bouton-sortir"
            src={require("../../img/commencer.png")}
            alt="sortir"
          ></img>
        </button>
        .
      </div>
    </div>
  );
};

export default Accueil;
