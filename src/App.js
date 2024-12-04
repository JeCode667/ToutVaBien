import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from "./pages/Home";
import PageInformation from "./pages/PageInformation";
import Quiz from "./pages/Quiz";
import SortiePage from "./pages/SortiePage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <a href="/" id="accueil">Accueil</a>
          <a href="/informations">Informations</a>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informations" element={<PageInformation />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/sortie" element={<SortiePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
