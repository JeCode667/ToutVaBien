import React from "react";
import { useNavigate } from "react-router-dom";
import "./BoutonAide.css";
import Aide from "../../pages/PageInformation"

const BoutonAide = () => {
  const navigate = useNavigate();

  return (
            <p>
              <button className="aide"
                onClick={() => navigate("/informations")}
          
              >
                ?
              </button>
            </p>
  );
};

export default BoutonAide;
