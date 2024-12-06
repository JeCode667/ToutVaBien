import React from "react";
import { useNavigate } from "react-router-dom";

import "./Informations.css";

const Informations = () => {
  const navigate = useNavigate();

  return (
    <div className="informations-container">
      <img src={require("../../img/logo.png")} alt="Logo" className="logo" />
      <h1>TOUT VA BIEN.</h1>
      <button
        className="sortir-button"
        onClick={() => navigate("/sortie")} // Redirige vers la page "/sortie"
      >
        SORTIR
      </button>
      <h2>Informations pour les Jeunes</h2>
      <p>
        Découvrez les ressources et aides disponibles pour vous, en fonction des
        différents problèmes que vous pourriez rencontrer.
      </p>

      <div className="section">
        <h3>Problèmes de Violences</h3>
        <p>
          Si vous êtes confronté(e) à des situations de violence, il existe des
          services spécialisés pour vous aider. Vous pouvez contacter des
          associations locales ou des lignes d'assistance dédiées à votre
          bien-être et à votre sécurité.
        </p>
        <ul>
          <li>
            <strong>SOS Violences Conjugales :</strong> Ligne d'écoute et de
            soutien pour les victimes de violences. Contactez-les au 3919 pour
            obtenir de l'aide.
          </li>
          <li>
            <strong>Associations de protection de l'enfance :</strong> Pour
            signaler des situations de négligence ou d'abus, contactez les
            services de protection de l'enfance de votre région.
          </li>
          <li>
            <strong>Associations locales :</strong> Il existe des associations
            locales qui offrent une assistance pour les jeunes en situation
            difficile. N'hésitez pas à consulter les services municipaux pour en
            savoir plus.
          </li>
        </ul>
        <p>
          <em>
            Rappelez-vous, il est toujours important de parler à quelqu'un et de
            chercher de l'aide.
          </em>
        </p>
      </div>

      <div className="section">
        <h3>Harcèlement Scolaire</h3>
        <p>
          Le harcèlement scolaire peut affecter votre bien-être émotionnel et
          mental. Ne restez pas seul(e) : il existe des ressources pour vous
          soutenir et vous aider à en parler.
        </p>
        <ul>
          <li>
            <strong>Numéro national de prévention du harcèlement :</strong> Le
            3020 est une ligne dédiée pour les jeunes victimes de harcèlement
            scolaire.
          </li>
          <li>
            <strong>Chatbot de soutien :</strong> Des chatbots disponibles sur
            des sites de soutien aux jeunes, comme{" "}
            <a
              href="https://www.e-enfance.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              e-Enfance
            </a>
            , pour une assistance immédiate.
          </li>
          <li>
            <strong>Enseignants et conseillers scolaires :</strong> Parlez à un
            adulte de confiance à l'école pour vous aider à gérer la situation
            et à trouver des solutions.
          </li>
        </ul>
        <p>
          <em>
            Vous n'êtes pas seul(e) et il y a des personnes prêtes à vous aider.
          </em>
        </p>
      </div>

      <div className="section">
        <h3>Bien-être et Santé Mentale</h3>
        <p>
          La santé mentale est essentielle, surtout dans des moments de stress
          ou de difficulté. Il est important de trouver du soutien et des
          ressources adaptées.
        </p>
        <ul>
          <li>
            <strong>Centre de prévention et de soutien psychologique :</strong>{" "}
            Pour des consultations et des conseils anonymes, contactez les
            centres de santé mentale locaux ou les services de consultation en
            ligne.
          </li>
          <li>
            <strong>Application de relaxation et de méditation :</strong> Des
            applications comme Calm ou Headspace peuvent vous aider à gérer le
            stress et à trouver des moments de calme dans votre journée.
          </li>
          <li>
            <strong>Associations de soutien :</strong> Des associations telles
            que la{" "}
            <a
              href="https://www.fnes.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              FNES
            </a>{" "}
            offrent des programmes de soutien pour les jeunes qui traversent des
            périodes difficiles.
          </li>
        </ul>
        <p>
          <em>
            Prendre soin de votre santé mentale est tout aussi important que
            prendre soin de votre santé physique.
          </em>
        </p>
      </div>

      <div className="section">
        <h3>Cyberharcèlement</h3>
        <p>
          Le cyberharcèlement peut être une expérience traumatisante, mais il
          est important de savoir qu'il existe des solutions pour y faire face.
        </p>
        <ul>
          <li>
            <strong>Plateformes d'accompagnement en ligne :</strong> Signalement
            de comportements abusifs sur des plateformes comme{" "}
            <a
              href="https://www.net-ecoute.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Net-écoute
            </a>{" "}
            pour une assistance en ligne.
          </li>
          <li>
            <strong>Outils de protection numérique :</strong> Utilisez des
            applications telles que <em>Google Family Link</em> et des
            paramètres de confidentialité sur les réseaux sociaux pour limiter
            les interactions non désirées.
          </li>
          <li>
            <strong>Programmes de sensibilisation :</strong> Participez à des
            ateliers de prévention organisés par des écoles et associations
            locales pour apprendre comment se protéger en ligne.
          </li>
        </ul>
        <p>
          <em>
            Rappelez-vous, vous avez le droit de vous sentir en sécurité en
            ligne comme dans la vie réelle.
          </em>
        </p>
      </div>
    </div>
  );
};

export default Informations;
