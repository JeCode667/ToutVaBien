import React from "react";
import { TbReload } from "react-icons/tb";
import "./BoutonRefaire.css";

const BoutonRefaire = () => {
  return (
    <div class="bouton bouton-refaire" onClick={() => window.location.reload()}>
      Refaire 
      <TbReload />
    </div>
  );
};

export default BoutonRefaire;
