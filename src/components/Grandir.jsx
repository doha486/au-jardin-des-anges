import React, { useState } from 'react';
import { Baby, Footprints, ShieldCheck, Sparkles, Feather, Smile, Compass, Users, Sun, Star } from 'lucide-react';
import './Grandir.css';

export default function Grandir() {
  const [activeStage, setActiveStage] = useState('angelots');

  const stages = {
    'angelots': {
      id: 'angelots',
      badge: '3 à 12 mois',
      title: 'Section 1 — Les Angelots',
      subTitle: 'Cocon de douceur, sécurité affective & premiers éveils',
      accentColor: 'var(--rose-powder)',
      themeClass: 'theme-rose',
      tagline: 'Un espace paisible et douillet façonné pour rassurer le nourrisson et accompagner ses premiers gestes.',
      highlights: [
        {
          title: 'Cocon & Sécurité Affective',
          desc: 'Un environnement chaleureux où chaque bébé bénéficie de repères stables et d’une présence bienveillante.',
          icon: ShieldCheck,
          color: '#E8B7B5'
        },
        {
          title: 'Éveil Sensoriel Doux',
          desc: 'Stimulation visuelle et auditive par des berceuses, jeux de textures et hochets en bois naturel.',
          icon: Sparkles,
          color: '#D5DEE6'
        },
        {
          title: 'Motricité Libre au Sol',
          desc: 'Tapis adaptés pour favoriser le retournement, l’assise et la liberté de mouvement en toute sécurité.',
          icon: Baby,
          color: '#E8B7B5'
        },
        {
          title: 'Rythmes Biologiques Respectés',
          desc: 'Sommeil et biberons calqués strictement sur le rythme individuel de chaque angelot.',
          icon: Feather,
          color: '#D5DEE6'
        }
      ]
    },
    'ailes': {
      id: 'ailes',
      badge: '12 à 24 mois (1 à 2 ans)',
      title: 'Section 2 — Les Petites Ailes',
      subTitle: 'Premiers pas, motricité libre & exploration tactile',
      accentColor: 'var(--blue-sky)',
      themeClass: 'theme-blue',
      tagline: 'L’étape clé de la marche, de la découverte du monde debout et des jeux de manipulation.',
      highlights: [
        {
          title: 'Apprentissage de la Marche',
          desc: 'Parcours moteurs sécurisés pour acquérir l’équilibre et la confiance en son corps.',
          icon: Footprints,
          color: '#D5DEE6'
        },
        {
          title: 'Exploration Tactile & Matières',
          desc: 'Manipulation de cubes en chêne massif, pâte à modeler naturelle et bacs sensoriels.',
          icon: Sparkles,
          color: '#BFC5AF'
        },
        {
          title: 'Premiers Mots & Comptines',
          desc: 'Éveil au langage par des histoires illustrées, comptines gestuelles et jeux d’imitation.',
          icon: Smile,
          color: '#E8B7B5'
        },
        {
          title: 'Autonomie au Quotidien',
          desc: 'Apprentissage doux du lavage des mains et des premiers gestes d’indépendance.',
          icon: Compass,
          color: '#D6B06B'
        }
      ]
    },
    'etoiles': {
      id: 'etoiles',
      badge: '2 à 3 ans',
      title: 'Section 3 — Les Étoiles',
      subTitle: 'Socialisation, langage, ateliers créatifs & autonomie',
      accentColor: 'var(--green-sage)',
      themeClass: 'theme-sage',
      tagline: 'Un monde d’exploration active où l’enfant affirme sa personnalité et développe l’empathie.',
      highlights: [
        {
          title: 'Socialisation & Vie en Groupe',
          desc: 'Jeux coopératifs et apprentissage respectueux du partage avec les camarades.',
          icon: Users,
          color: '#BFC5AF'
        },
        {
          title: 'Ateliers Créatifs Quotidiens',
          desc: 'Initiation à la peinture écologique, au fusain, au théâtre, à la musique et au yoga.',
          icon: Sparkles,
          color: '#D6B06B'
        },
        {
          title: 'Enrichissement du Langage',
          desc: 'Échanges animés, jeux de rôles, marionnettes et structuration de la parole.',
          icon: Smile,
          color: '#D5DEE6'
        },
        {
          title: 'Confiance & Indépendance',
          desc: 'L’enfant apprend à choisir ses activités et à exprimer clairement ses besoins.',
          icon: Compass,
          color: '#7D826C'
        }
      ]
    },
    'lumieres': {
      id: 'lumieres',
      badge: '3 à 4 ans',
      title: 'Section 4 — Les Lumières',
      subTitle: 'Épanouissement, expression artistique & préparation douce à la maternelle',
      accentColor: 'var(--gold-soft)',
      themeClass: 'theme-gold',
      tagline: 'Accompagnement vers la maturité affective, la logique créative et la grande entrée à l’école.',
      highlights: [
        {
          title: 'Préparation Douce à la Maternelle',
          desc: 'Activités de pré-écriture, repérage spatial, écoute et autonomie vestimentaire.',
          icon: Star,
          color: '#D6B06B'
        },
        {
          title: 'Expression Artistique Évoluée',
          desc: 'Pliages origami, travail de l’argile naturelle et projets plastiques au fusain.',
          icon: Sparkles,
          color: '#E8B7B5'
        },
        {
          title: 'Développement de la Logique',
          desc: 'Jeux d’assemblage en bois noble, puzzles, raisonnement et curiosité scientifique.',
          icon: Sun,
          color: '#BFC5AF'
        },
        {
          title: 'Épanouissement Émotionnel',
          desc: 'Reconnaissance des émotions, maîtrise de soi et grande bienveillance collective.',
          icon: ShieldCheck,
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
            <span>Épanouissement & Sections d'Âge</span>
          </div>
          <h2 className="section-title">Nos 4 Sections d'Accueil Adaptées</h2>
          <p className="section-subtitle">
            Un fil continu de bienveillance réparti en 4 tranches d'âge pensées pour respecter le développement physique, cognitif et affectif de chaque enfant.
          </p>
        </div>

        {/* Interactive 4-Stage Navigation Ribbon */}
        <div className="timeline-ribbon-container">
          <div className="timeline-steps steps-4">
            
            {/* Stage 1 */}
            <button 
              className={`timeline-step-btn step-rose ${activeStage === 'angelots' ? 'active' : ''}`}
              onClick={() => setActiveStage('angelots')}
              aria-label="Voir la Section 1 : Les Angelots (3 à 12 mois)"
            >
              <div className="step-node">
                <Baby size={20} />
              </div>
              <div className="step-info">
                <span className="step-age">3 → 12 mois</span>
                <span className="step-name">Les Angelots</span>
              </div>
            </button>

            {/* Stage 2 */}
            <button 
              className={`timeline-step-btn step-blue ${activeStage === 'ailes' ? 'active' : ''}`}
              onClick={() => setActiveStage('ailes')}
              aria-label="Voir la Section 2 : Les Petites Ailes (12 à 24 mois)"
            >
              <div className="step-node">
                <Footprints size={20} />
              </div>
              <div className="step-info">
                <span className="step-age">12 → 24 mois</span>
                <span className="step-name">Les Petites Ailes</span>
              </div>
            </button>

            {/* Stage 3 */}
            <button 
              className={`timeline-step-btn step-sage ${activeStage === 'etoiles' ? 'active' : ''}`}
              onClick={() => setActiveStage('etoiles')}
              aria-label="Voir la Section 3 : Les Étoiles (2 à 3 ans)"
            >
              <div className="step-node">
                <Star size={20} />
              </div>
              <div className="step-info">
                <span className="step-age">2 → 3 ans</span>
                <span className="step-name">Les Étoiles</span>
              </div>
            </button>

            {/* Stage 4 */}
            <button 
              className={`timeline-step-btn step-gold ${activeStage === 'lumieres' ? 'active' : ''}`}
              onClick={() => setActiveStage('lumieres')}
              aria-label="Voir la Section 4 : Les Lumières (3 à 4 ans)"
            >
              <div className="step-node">
                <Sun size={20} />
              </div>
              <div className="step-info">
                <span className="step-age">3 → 4 ans</span>
                <span className="step-name">Les Lumières</span>
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
              🌿 <strong>Notre engagement :</strong> Chaque section dispose de son propre espace d'éveil aménagé et d'éducatrices dédiées pour veiller au bonheur des enfants.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
