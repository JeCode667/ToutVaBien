import React from "react";
import BoutonSortie from "../../components/BoutonSortie/BoutonSortie";
import BoutonRefaire from "../../components/BoutonRefaire/BoutonRefaire";
import "./Home.css";
import BoutonQuiz from "../../components/BoutonQuiz/BoutonQuiz";

function Home() {
  return (
    <div className="page-container">
      <div className="text-container">
        <div className="text-content">
          <p>
            Bienvenue sur <strong>TOUT VA BIEN</strong> ! Ce site est là pour
            t'aider à mettre des mots sur ce que tu peux ressentir. Tu n'auras
            qu'à répondre à quelques petites questions, c'est super simple !
          </p>
          <div>
            <p>Tu peux recommencer du début à tout moment avec :</p>
            <BoutonRefaire />
            <p>Si tu as besoin de quitter ce site rapidement, clique sur :</p>
            <BoutonSortie />
          </div>
          <p className="anonyme">
            <strong>
              Chez nous, aucune donnée n'est récupérée, tu es totalement anonyme
              !
            </strong>
          </p>
          <p>Pour commencer le quiz clique sur le bouton ci dessous :</p>
          <BoutonQuiz />
        </div>
      </div>
    </div>
  );
}

export default Home;
