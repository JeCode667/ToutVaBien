import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import BoutonRefaire from "../BoutonRefaire/BoutonRefaire";
import BoutonSortie from "../BoutonSortie/BoutonSortie";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo-title" onClick={() => navigate("/home")}>
        <Logo />
        <span className="title">TOUT VA BIEN.</span>
      </div>

      <div className="buttons">
        <BoutonRefaire />
        <BoutonSortie />
      </div>
    </header>
  );
};

export default Header;
