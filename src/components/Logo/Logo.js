import React from "react";
import "./Logo.css";
import logo from "../../img/logo.png"; // Assurez-vous que le chemin est correct
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <img
      src={logo}
      alt="Logo"
      className="logo"
      onClick={() => navigate("/home")}
    />
  );
};

export default Logo;
