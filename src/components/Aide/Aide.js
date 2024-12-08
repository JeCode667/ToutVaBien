import React from "react";
import { Link } from "react-router-dom";
import "./Aide.css";

const Aide = () => {
  return (
    <div className="aide">
      <Link to="/informations" className="aide-button">
        ?
      </Link>
    </div>
  );
};

export default Aide;
