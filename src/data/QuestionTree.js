const questionTree = {
  // Confiance en soi
  root: {
    // Question initiale
    question: "Te sens-tu parfois inférieur(e) à d'autres personnes de ton âge ?",
    reponses_suivantes: ["oui-question", "non-question"],
  },

  // Question 1 (Réponse oui à la question initiale)
  "oui-question": {
    reponse: "Oui",
    question:
      "Quand tu te sens inférieur(e), est-ce que tu arrives à en parler avec des ami(e)s ou quelqu'un de ta famille ?",
    reponses_suivantes: ["oui-question1", "non-question1"],
  },

  // Question 1.1 (Réponse oui à la question 1)
  "oui-question1": {
    reponse: "Oui",
    question: "Quand tu leur en parles, est-ce que tu te sens soutenu(e) ?",
    reponses_suivantes: ["oui-question1.1", "non-question1.1"],
  },

  // Question 1.1.1 (Réponse oui à la question 1.1)
  "oui-question1.1": {
    reponse: "Oui",
    question: "Continuer sur d'autres aspects de l'estime de soi",
    reponses_suivantes: [],
  },

  // Question 1.1.2 (Réponse non à la question 1.1)
  "non-question1.1": {
    reponse: "Non",
    question: "Penses-tu qu'ils ne comprennent pas ce que tu ressens ?",
    reponses_suivantes: ["oui-question1.1.2", "non-question1.1.2"],
  },

  // Question 1.1.2.1 (Réponse oui à la question 1.1.2)
  "oui-question1.1.2": {
    reponse: "Oui",
    question: "Continuer vers les relations familiales",
    reponses_suivantes: [],
  },

  // Question 1.1.2.2 (Réponse non à la question 1.1.2)
  "non-question1.1.2": {
    reponse: "Non",
    question: "Explorer la qualité du soutien entre amis",
    reponses_suivantes: [],
  },

  // Question 1.2 (Réponse non à la question 1)
  "non-question1": {
    reponse: "Non",
    question: "Est-ce que c'est parce que tu as peur de leur réaction ?",
    reponses_suivantes: ["oui-question1.2", "non-question1.2"],
  },

  // Question 1.2.1 (Réponse oui à la question 1.2)
  "oui-question1.2": {
    reponse: "Oui",
    question:
      "Est-ce que cette peur t'empêche de parler de beaucoup d'autres choses aussi ?",
    reponses_suivantes: ["oui-question1.2.1", "non-question1.2.1"],
  },

  // Question 1.2.1.1 (Réponse oui à la question 1.2.1)
  "oui-question1.2.1": {
    reponse: "Oui",
    question: "Explorer si ça bloque au quotidien",
    reponses_suivantes: [],
  },

  // Question 1.2.1.2 (Réponse oui à la question 1.2.1)
  "non-question1.2.1": {
    reponse: "Non",
    question: "Continuer sur la communication avec la famille",
    reponses_suivantes: [],
  },

  // Question 1.2.2 (Réponse non à la question 1.2)
  "non-question1.2": {
    reponse: "Non",
    question: "Vérifier si c'est par manque de confiance en général",
    reponses_suivantes: [],
  },

  //  Question 2 (Réponse non à la question initiale)
  "non-question": {
    reponse: "Non",
    question: "Te sens-tu à l'aise pour te comparer aux autres ?",
    reponses_suivantes: ["oui-question2", "non-question2"],
  },

  //  Question 2.1 (Réponse oui à la question 2)
  "oui-question2": {
    reponse: "Oui",
    question:
      "Est-ce que tu trouves que ces comparaisons te motive ou te démotive ?",
    reponses_suivantes: ["motive-question2.1", "demotive-question2.1"],
  },

  //  Question 2.1.1 (Réponse motive à la question 2.1)
  "motive-question2.1": {
    reponse: "Ça me motive",
    question: "Explorer d'autres aspects positifs dans la vie sociale",
    reponses_suivantes: [],
  },

  //  Question 2.1.2 (Réponse demotive à la question 2.1)
  "demotive-question2.1": {
    reponse: "Ça me démotive",
    question: "Voir si cela touche aussi la confiance dans d'autres situations",
    reponses_suivantes: [],
  },

  //  Question 2.2 (Réponse non à la question 2)
  "non-question2": {
    reponse: "Non",
    question: "C'est parce que tu trouves ça inutile ou stressant ?",
    reponses_suivantes: ["inutile-question2.2", "stressant-question2.2"],
  },

  //  Question 2.2.1 (Réponse inutile à la question 2.2)
  "inutile-question2.2": {
    reponse: "Je trouve ça inutile",
    question: "Transition vers sommeil",
    reponses_suivantes: [],
  },

  //  Question 2.2.2 (Réponse stressant à la question 2.2)
  "stressant-question2.2": {
    reponse: "Je trouve ça stressant",
    question:
      "Creuser sur comment cela affecte les autres domaines (amis, école)",
    reponses_suivantes: [],
  },
};

export default questionTree;
