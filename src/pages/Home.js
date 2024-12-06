import React from "react";
import { useNavigate } from "react-router-dom";
import Accueil from "../ancien/Accueil/Accueil";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Accueil />
    </div>
  );
}

export default Home;
