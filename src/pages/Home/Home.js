import React from "react";
import BoutonSortie from "../../components/BoutonSortie/BoutonSortie";
import BoutonRefaire from "../../components/BoutonRefaire/BoutonRefaire";
import "./Home.css";
import BoutonQuiz from "../../components/BoutonQuiz/BoutonQuiz";

function Home() {
  return (
    <div className="text-container">
      <div className="text-content">
        <p>
          Bienvenue sur <strong>TOUT VA BIEN</strong> !
        </p>
        <p>
          Ce site est là pour t'aider à mettre des mots sur ce que tu peux
          ressentir en quelques petites questions.
        </p>

        <BoutonQuiz />
<div id="recommencer">
        <p >
          Tu peux recommencer du début à tout moment avec <BoutonRefaire />
        </p>
        <p>
          Si tu as besoin de quitter ce site rapidement, clique sur <BoutonSortie />
        </p>
        <p className="anonyme">
          <strong>
            Chez nous, aucune donnée n'est récupérée, tu es totalement anonyme !
          </strong>
        </p>
      </div>
      </div>
     
    </div>
  );
}

export default Home;
