import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";
import BoutonRefaire from "../BoutonRefaire/BoutonRefaire";
import BoutonSortie from "../BoutonSortie/BoutonSortie";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <h1 className="title">TOUT VA BIEN.</h1>
      <BoutonRefaire />
      <BoutonSortie />
    </header>
  );
};

export default Header;
