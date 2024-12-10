import React from "react";
import { useNavigate } from "react-router-dom";
import "./BoutonAide.css";

const BoutonAide = () => {
  const navigate = useNavigate();

  return (
    <p>
      <button className="aide" onClick={() => navigate("/informations")}>
        ?
      </button>
    </p>
  );
};

export default BoutonAide;
