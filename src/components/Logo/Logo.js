import React from "react";
import "./Logo.css";
import logo from "../../img/logo.png"; // Assurez-vous que le chemin est correct



const Logo = () => {
    return (
      <div className="logo-container">
        <img src={logo} alt="Logo" id="logo" />
      </div>
    );
  };
  

export default Logo;
