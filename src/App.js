import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header";
import PageInformation from "./pages/Informations/PageInformation";
import Quiz from "./pages/Quiz/Quiz";
import Home from "./pages/Home/Home";
import BoutonAide from "./components/BoutonAide/BoutonAide";

function App() {
  return (
    <Router>
      <Header />

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />{" "}

          {/* Redirection automatique vers la page d'accueil */}
          <Route path="/home" element={<Home />} />{" "}

          {/* Page d'accueil par défaut */}
          <Route path="/informations" element={<PageInformation />} />

          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>

      <BoutonAide />
    </Router>
  );
}

export default App;

// Liste des tâches de mise à jour à réaliser :
// 2. Mettre à jour la page "Informations" pour utiliser toute la largeur de la page.
// 4. Créer un bouton "?" en bas à gauche de la page qui redirige vers la page "Informations".
// 5. Déterminer le thème de la page de redirection pour le bouton "Sortir".
// 6. Corriger l'alignement des carrés de réponses dans le Quiz.
