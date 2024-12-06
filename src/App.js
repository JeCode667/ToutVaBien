import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageInformation from "./pages/PageInformation";
import Quiz from "./pages/Quiz";
import SortiePage from "./pages/SortiePage";
import Aide from "./components/Aide/Aide";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <a href="/" id="accueil">
            Accueil
          </a>
          <a href="/informations">Informations</a>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informations" element={<PageInformation />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/sortie" element={<SortiePage />} />
        </Routes>
        <Aide />
      </div>
    </Router>
  );
}

export default App;

//mettre le bouton sortir en plus gros ?
// dans informations mettre les infos sur toutes la largeur de la page
//dans informations mettre bien le logo et le nom TOUT VA BIEN
// faire que le bouton ? en bas à gauche renvoie vers la page d'informations
//designer et trouver le thème de la page vers laquelle on re dirige quand on clique sur sortir
//mettre bien les 2 carrés de réponses dans le quizz (ils sont décalé)
