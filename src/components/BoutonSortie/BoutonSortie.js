import React from "react";
import "./BoutonSortie.css";
import { RxExit } from "react-icons/rx";

const BoutonSortie = () => {
  return (
    <div className="bouton bouton-sortir" onClick={() => (window.location.href = "https://www.youtube.com")}>
        Sortir 
        <RxExit />
    </div>
  );
};

export default BoutonSortie;
