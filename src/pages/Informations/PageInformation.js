import React from "react";
import "./PageInformation.css";

const PageInformation = () => {
  return (
    <div className="info-container">
      <h1>Besoin d’aide ? Trouve des solutions ici</h1>

      <div className="section">
        <h2>Informations pour les Jeunes</h2>
        
        <p>
          Découvrez les ressources et aides disponibles pour vous. Vous n'êtes pas seul.
        </p>
      </div>

      <div className="section">
        <h3>Violence ou maltraitance</h3>
        
        <p>
          Si vous êtes confronté(e) à des situations de violence, il existe des services spécialisés pour vous aider.
        </p>
          
        <ul>
          <li>
            <strong>SOS Violences :</strong> Appelez le <strong>3919</strong>{" "}
              pour obtenir de l’aide et des conseils.
          </li>
          
          <li>
            <strong>Enfance en Danger :</strong> Appelez le{" "}
            
            <strong>119</strong> pour signaler une situation dangereuse.
          </li>
            
          <li>
            <strong>Associations locales :</strong> Contactez les Maisons des Adolescents pour un espace sûr et de l'écoute.
          </li>
        </ul>
        
        <em>En parler, c’est le premier pas pour changer les choses.</em>
      </div>

      <div className="section">
        <h3>Harcèlement (scolaire ou en ligne)</h3>
        
        <p>
          Le harcèlement peut être dur à vivre, que ce soit à l’école ou en
          ligne. Il existe des aides utiles :
        </p>
        
        <ul>
          <li>
            <strong>Numéro national 3020 :</strong> Ligne dédiée pour les jeunes victimes de harcèlement scolaire.
          </li>
            
          <li>
            <strong>Net-Écoute :</strong> Appelez le <strong>3018</strong> ou visitez{" "}
              
            <a
              href="https://www.net-ecoute.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Net-Écoute
            </a>{" "} pour signaler un harcèlement en ligne.
          </li>
          
          <li>
            <strong>Adultes à l'écoute :</strong> Parlez à un prof, CPE ou un adulte de confiance.
          </li>
        </ul>
          
        <em>Ce n’est jamais de ta faute et tu mérites le respect.</em>
      </div>

      <div className="section">
        <h3>Stress, anxiété ou santé mentale</h3>
        
        <p>
          Si ça ne va pas, voici des pistes pour trouver du soutien et des solutions.
        </p>
        
        <ul>
          <li>
            <strong>Fil Santé Jeunes :</strong> Appelez le{" "}
            
            <strong>0800 235 236</strong> ou consultez leur site.
          </li>
          
          <li>
            <strong>Applis bien-être :</strong> Essayez des applis comme{" "}
            
            <em>Calm</em> ou <em>Petit Bambou</em>.
          </li>
          
          <li>
            <strong>Psychologue ou infirmière scolaire :</strong> Parlez-en avec un pro pour des conseils adaptés.
          </li>
        </ul>
        
        <em>Prendre soin de toi, c’est essentiel.</em>
      </div>

      <div className="section">
        <h3>Addictions</h3>
        
        <p>
          Si tu te sens dépendant(e) aux écrans, substances ou autre, voici de l’aide :
        </p>
        
        <ul>
          <li>
            <strong>Drogues Info Service :</strong> Appelez le{" "}
            
            <strong>0800 23 13 13</strong>.
          </li>
          
          <li>
            <strong>Applications :</strong> Utilisez <em>Forest</em> ou{" "}
            
            <em>Offtime</em> pour limiter le temps d’écran.
          </li>
          
          <li>
            <strong>Éducateurs spécialisés :</strong> Ils t’accompagnent pour trouver des alternatives saines.
          </li>
        </ul>
      </div>

      <div className="section">
        <h3>Orientation sexuelle et identité</h3>
        
        <p>
          Si tu te poses des questions sur toi-même, des ressources sont disponibles :
        </p>
        
        <ul>
          <li>
            <strong>SOS Homophobie :</strong> Appelez le{" "}
            <strong>01 48 06 42 41</strong>.
          </li>
          
          <li>
            <strong>Le Refuge :</strong>{" "}
            
            <a
              href="https://www.le-refuge.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aide aux jeunes LGBTQ+
            </a>.
          </li>
          
          <li>
            <strong>Groupes de parole :</strong> Rejoins des espaces pour échanger avec d’autres jeunes.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PageInformation;
