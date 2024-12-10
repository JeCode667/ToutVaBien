import React from "react";
import { useNavigate } from "react-router-dom";
import "./BoutonRefaire.css";

const BoutonRefaire = () => {
  const navigate = useNavigate();

  return (
    <button class="bouton-tvb bleu" onClick={() => window.location.reload()}>
      <img
        id="bouton-refaire"
        src={require("../../img/refaire.png")}
        alt="refaire"
      ></img>
    </button>
  );
};

export default BoutonRefaire;
