import React from "react";
import Questions from "../data/Questions/Questions";
import Header from "../components/Navbar/Header";
import Logo from "../components/Logo/Logo";
import BoutonSortie from "../components/BoutonSortie/BoutonSortie";
import BoutonRefaire from "../components/BoutonRefaire/BoutonRefaire";
import questionTree from "../data/QuestionTree";
import Aide from "../components/BoutonAide/BoutonAide";

function Quiz() {
  return (
    <div>
      <Header />
      <div className="bouton-container">
        <BoutonRefaire />
        <BoutonSortie />
      </div>
      <Logo />
      <Questions questionTree={questionTree} />
      <Aide />
    </div>
  );
}

export default Quiz;
