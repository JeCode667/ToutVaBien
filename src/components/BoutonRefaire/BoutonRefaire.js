import React from "react";
import { useNavigate } from "react-router-dom";
import "./BoutonRefaire.css";

const BoutonRefaire = () => {
  const navigate = useNavigate();

  return (
            <p>
              <button  className="refaire"
                onClick={() => window.location.reload()}
          
              >REFAIRE
              </button>
            </p>
  );
};

export default BoutonRefaire;
