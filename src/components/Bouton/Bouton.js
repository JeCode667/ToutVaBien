import React from "react";
import { useNavigate } from "react-router-dom";
import "./Bouton.css";

const Bouton = (bouton) => {
  const navigate = useNavigate();

  return (
    <button
      className={(bouton = "refaire" ? "bouton-tvb rouge" : "bouton-tvb bleu")}
      onClick={
        (bouton = "refaire"
          ? () => window.location.reload()
          : () => navigate("/sortie"))
      }
    >
      {
        (bouton = "refaire" ? (
          <img
            id="bouton-sortir"
            src={require("../../img/refaire.png")}
            alt="sortir"
          ></img>
        ) : (
          <img
            id="bouton-refaire"
            src={require("../../img/refaire.png")}
            alt="refaire"
          ></img>
        ))
      }
    </button>
  );
};

export default Bouton;
