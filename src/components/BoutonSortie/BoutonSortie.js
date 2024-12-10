import React from "react";
import { useNavigate } from "react-router-dom";
import "./BoutonSortie.css";

const BoutonSortie = () => {
  return (
    <button
      class="bouton-tvb rouge"
      onClick={() => (window.location.href = "https://www.youtube.com")}
    >
      <img
        id="bouton-sortir"
        src={require("../../img/sortir.png")}
        alt="sortir"
      ></img>
    </button>
  );
};

export default BoutonSortie;
