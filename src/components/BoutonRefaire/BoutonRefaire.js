import React from "react";
import { useNavigate } from "react-router-dom";
import "./BoutonRefaire.css";
import { TbReload } from "react-icons/tb";

const BoutonRefaire = () => {
  const navigate = useNavigate();

  return (
    <button class="bouton-tvb bleu" onClick={() => window.location.reload()}>
      Refaire 
      <TbReload />
    </button>
  );
};

export default BoutonRefaire;
