import React from "react";
import { useNavigate } from "react-router-dom";
import "./Bouton.css";

const Bouton = ({ bouton }) => { // On récupère correctement la prop 'bouton'
  const navigate = useNavigate();

  return (
    <button
      className={bouton === "refaire" ? "bouton-tvb bleu" : "bouton-tvb rouge"}
      onClick={
        bouton === "refaire"
          ? () => window.location.reload()
          : () => navigate("/sortie")
      }
    >
      {bouton === "sortir" ? (
        <img
          id="bouton-sortir"
          src={require("../../img/sortir.png")}
          alt="sortir"
        />
      ) : (
        <img
          id="bouton-refaire"
          src={require("../../img/refaire.png")}
          alt="refaire"
        />
      )}
    </button>
  );
};

export default Bouton;
