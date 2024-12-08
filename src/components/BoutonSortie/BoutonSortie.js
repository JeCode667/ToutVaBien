import React from "react";
import { useNavigate } from "react-router-dom";
import "./BoutonSortie.css";

const BoutonSortie = () => {
  const navigate = useNavigate();

  return (
            <p>
              <button className="sortie"
                onClick={() => navigate("/sortie")}
          
              >
                SORTIR
              </button>
            </p>
  );
};

export default BoutonSortie;
