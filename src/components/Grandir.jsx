import React, { useState } from 'react';
import { Baby, Footprints, ShieldCheck, Sparkles, Feather, Smile, Compass, Users } from 'lucide-react';
import './Grandir.css';

export default function Grandir() {
  const [activeStage, setActiveStage] = useState('tout-petits');

  const stages = {
    'tout-petits': {
      id: 'tout-petits',
      badge: '3 mois à 1 an et demi',
      title: 'Forfait 1 — Les Tout-Petits',
      subTitle: 'Le cocon des premières découvertes & de la sécurité affective',
      accentColor: 'var(--rose-powder)',
      themeClass: 'theme-rose-blue',
      tagline: 'Un univers paisible et douillet façonné pour bercer, rassurer et encourager l’éveil sensoriel à son propre rythme.',
      highlights: [
        {
          title: 'Cocon & Sécurité Affective',
          desc: 'Un espace chaleureux où chaque bébé bénéficie de repères stables et d’une présence attentive pour grandir en toute confiance.',
          icon: ShieldCheck,
          color: '#E8B7B5'
        },
        {
          title: 'Éveil Sensoriel & Écoute',
          desc: 'Stimulation douce à travers des berceuses, des jeux de textures, des hochets en bois naturel et des bains de sons apaisants.',
          icon: Sparkles,
          color: '#D5DEE6'
        },
        {
          title: 'Motricité Libre',
          desc: 'Un aménagement adapté au sol pour explorer le retournement, le ramper et l’assise en toute liberté et sécurité.',
          icon: Baby,
          color: '#E8B7B5'
        },
        {
          title: 'Temps Calmes & Rythmes Respectés',
          desc: 'Le sommeil et les repas sont strictement calqués sur le rythme biologique individuel de chaque tout-petit.',
          icon: Feather,
          color: '#D5DEE6'
        }
      ]
    },
    'explorateurs': {
      id: 'explorateurs',
      badge: '1 an et demi à 4 ans',
      title: 'Forfait 2 — Les Explorateurs',
      subTitle: 'L’aventure de l’autonomie, de la socialisation & des ateliers',
      accentColor: 'var(--green-sage)',
      themeClass: 'theme-sage-gold',
      tagline: 'Un monde d’exploration active où l’enfant s’épanouit, affirme sa personnalité et participe aux ateliers créatifs.',
      highlights: [
        {
          title: 'Autonomie & Confiance',
          desc: 'L’enfant apprend à s’habiller, choisir ses activités et développer son indépendance en toute sérénité.',
          icon: Compass,
          color: '#7D826C'
        },
        {
          title: 'Socialisation & Partage',
          desc: 'Jeux en groupe, activités coopératives et apprentissage doux de la vie en collectivité et de l’empathie.',
          icon: Users,
          color: '#BFC5AF'
        },
        {
          title: 'Accès Direct aux Ateliers',
          desc: 'Accès quotidien aux ateliers créatifs et artistiques (peinture, sculpture, éveil musical, poterie, yoga, théâtre...).',
          icon: Footprints,
          color: '#D6B06B'
        },
        {
          title: 'Préparation Douce à la Maternelle',
          desc: 'Acquisition des compétences clés pour une transition sereine et enthousiaste vers l’école.',
          icon: Smile,
          color: '#7D826C'
        }
      ]
    }
  };

  const current = stages[activeStage];

  return (
    <section className="grandir-section" id="grandir">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Baby size={16} />
            <span>Grandir au Jardin des Anges</span>
          </div>
          <h2 className="section-title">Le Parcours d'Épanouissement de Votre Enfant</h2>
          <p className="section-subtitle">
            Deux étapes pensées comme un fil continu de bienveillance, adaptées aux besoins physiologiques et émotionnels de chaque âge.
          </p>
        </div>

        {/* Interactive Age Timeline Ribbon */}
        <div className="timeline-ribbon-container">
          <div className="timeline-steps">
            {/* Step 1 */}
            <button 
              className={`timeline-step-btn step-rose ${activeStage === 'tout-petits' ? 'active' : ''}`}
              onClick={() => setActiveStage('tout-petits')}
              aria-label="Voir le Forfait 1 : Les Tout-Petits (3 mois à 1 an et demi)"
            >
              <div className="step-node">
                <Baby size={22} />
              </div>
              <div className="step-info">
                <span className="step-age">3 mois → 1 an et demi</span>
                <span className="step-name">Les Tout-Petits</span>
              </div>
            </button>

            {/* Path connector line */}
            <div className="timeline-connector">
              <span className="connector-dot"></span>
              <span className="connector-line"></span>
              <span className="connector-dot"></span>
            </div>

            {/* Step 2 */}
            <button 
              className={`timeline-step-btn step-sage ${activeStage === 'explorateurs' ? 'active' : ''}`}
              onClick={() => setActiveStage('explorateurs')}
              aria-label="Voir le Forfait 2 : Les Explorateurs (1 an et demi à 4 ans)"
            >
              <div className="step-node">
                <Footprints size={22} />
              </div>
              <div className="step-info">
                <span className="step-age">1 an et demi → 4 ans</span>
                <span className="step-name">Les Explorateurs</span>
              </div>
            </button>
          </div>
        </div>

        {/* Dynamic Display Card */}
        <div className={`stage-card-wrapper ${current.themeClass}`}>
          <div className="stage-header">
            <div className="stage-badge-pill">
              {current.badge}
            </div>
            <h3 className="stage-title">{current.title}</h3>
            <p className="stage-subtitle">{current.subTitle}</p>
            <p className="stage-tagline">{current.tagline}</p>
          </div>

          <div className="stage-grid">
            {current.highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div className="stage-feature-card" key={idx}>
                  <div className="feature-icon-bubble" style={{ backgroundColor: item.color }}>
                    <IconComp size={24} color="#5C524E" />
                  </div>
                  <div className="feature-text">
                    <h4 className="feature-title">{item.title}</h4>
                    <p className="feature-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reassuring note footer */}
          <div className="stage-footer-note">
            <p>
              🌿 <strong>Notre promesse :</strong> Chaque enfant évolue à son propre rythme, entouré de bras bienveillants et d'éducatrices passionnées.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
