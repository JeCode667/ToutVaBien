import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";


const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
    <nav id="header">
      <button onClick={() => navigate("/home")}>Accueil</button>
      <button onClick={() => navigate("/informations")}>Informations</button>
    </nav>

    <h1 className="title">TOUT VA BIEN.</h1>

    </div>

  );
};

export default Header;
