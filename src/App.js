import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import PageInformation from "./pages/PageInformation";
import Quiz from "./pages/Quiz";
import SortiePage from "./pages/SortiePage";
import Aide from "./components/Aide/Aide";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} /> {/* Redirection automatique vers la page d'accueil */}
          <Route path="/home" element={<Home />} /> {/* Page d'accueil par défaut */}
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

// Liste des tâches de mise à jour à réaliser :
// 2. Mettre à jour la page "Informations" pour utiliser toute la largeur de la page.
// 4. Créer un bouton "?" en bas à gauche de la page qui redirige vers la page "Informations".
// 5. Déterminer le thème de la page de redirection pour le bouton "Sortir".
// 6. Corriger l'alignement des carrés de réponses dans le Quiz.
