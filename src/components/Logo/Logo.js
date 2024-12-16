import React from "react";
import "./Logo.css";
import logo from "../../img/logo.png"; 

const Logo = () => {
  return (
    <img
      src={logo}
      alt="Logo"
      className="logo"
    />
  );
};

export default Logo;
