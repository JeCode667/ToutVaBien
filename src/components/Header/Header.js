import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import BoutonRefaire from "../BoutonRefaire/BoutonRefaire";
import BoutonSortie from "../BoutonSortie/BoutonSortie";

const Header = () => {
  return (
    <header className="header">
      <div className="button-left">
        <BoutonRefaire />
      </div>
      <div className="logo-container">
        <Logo class="logo"/>
        <h1 className="title">TOUT VA BIEN.</h1>
      </div>
      <div className="button-right">
        <BoutonSortie />
      </div>
    </header>
  );
};

export default Header;
