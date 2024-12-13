import React from "react";
import BoutonSortie from "../../components/BoutonSortie/BoutonSortie";
import BoutonRefaire from "../../components/BoutonRefaire/BoutonRefaire";
import "./Home.css";
import BoutonQuiz from "../../components/BoutonQuiz/BoutonQuiz";
import Logo from "../../components/Logo/Logo";

function Home() {
  return (
    <div className="text-container">
      <Logo />

      <div className="text-content">
        <div>
          Bienvenue sur TOUT VA BIEN ! Ce site est là pour t'aider à mettre des mots sur ce que tu peux ressentir. 
          Tu n'auras qu'à répondre à quelques petites questions, c'est super simple !
        </div>

        <div className="text-button">
          <span>Tu peux recommencer du début à tout moment avec </span>

          <BoutonRefaire />
        </div>
          
        <div className="text-button">
          <span>Si tu as besoin de quitter ce site rapidement, clique sur</span>

          <BoutonSortie />
        </div>

        <div className="anonyme">
            Chez nous, aucune donnée n'est récupérée, tu es totalement anonyme !
        </div>
      </div>

      <BoutonQuiz />
    </div>
  );
}

export default Home;
