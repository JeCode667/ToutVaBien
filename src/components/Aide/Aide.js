import React from 'react';
import './Aide.css'; // Fichier de styles

const Aide = () => {
  const gererClic = () => {
    alert('CAide');
  };

  return (
    <div className="aide-flottante" onClick={gererClic}>
      <span className="point-interrogation">?</span>
    </div>
  );
};

export default Aide;
