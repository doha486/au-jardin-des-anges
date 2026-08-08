import React, { useState } from 'react';
import { Palette, Sparkles, Drama, Layers, Music, Flower2, HeartHandshake, Info, X, Check, ArrowRight, Sun, CalendarHeart } from 'lucide-react';
import './Seveiller.css';

export default function Seveiller() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const workshops = [
    {
      id: 'peinture',
      title: 'Peinture & Expression Plastique',
      category: 'Arts Visuels',
      icon: Palette,
      iconBg: '#E8B7B5',
      summary: 'Éveil aux matières, mélange des gouaches aux doigts et pinceaux doux.',
      details: 'L’atelier peinture permet à votre enfant d’explorer librement les couleurs et les textures. Il développe la coordination œil-main et l’expression émotionnelle dans un espace où l’expérimentation est encouragée sans jugement.',
      benefits: ['Sensibilisation aux couleurs', 'Motricité fine des doigts', 'Liberté d’expression créative']
    },
    {
      id: 'sculpture',
      title: 'Sculpture & Modelage 3D',
      category: 'Volume & Manipulation',
      icon: Sparkles,
      iconBg: '#D5DEE6',
      summary: 'Découverte des formes en relief, pâte à sel et assemblages ludiques.',
      details: 'Cet atelier propose de toucher, malaxer, rouler et sculpter différentes matières souples. L’enfant appréhende le volume dans l’espace et stimule son sens tactile.',
      benefits: ['Développement du sens tactile', 'Repérage tridimensionnel', 'Concentration et minutie']
    },
    {
      id: 'theatre',
      title: 'Théâtre & Expression Corporelle',
      category: 'Jeu & Émotions',
      icon: Drama,
      iconBg: '#BFC5AF',
      summary: 'Jeux de rôles, déguisements, mimes doux et marionnettes.',
      details: 'À travers de petites histoires racontées et des accessoires colorés, l’enfant donne vie à des personnages, apprend à reconnaître et nommer ses émotions, tout en s’amusant avec ses camarades.',
      benefits: ['Confiance en soi et prise de parole', 'Compréhension des émotions', 'Sens du collectif']
    },
    {
      id: 'origami',
      title: 'Origami & Pliage Magique',
      category: 'Agilité & Pliage',
      icon: Layers,
      iconBg: '#D6B06B',
      summary: 'Pliages simples, création d’animaux en papier et guirlandes.',
      details: 'Un atelier calme qui apprend à plier des feuilles de couleur pour leur donner vie (papillons, petits bateaux). Cet exercice développe une remarquable précision du geste.',
      benefits: ['Patience et persévérance', 'Précision de la préhension', 'Fierté du résultat accompli']
    },
    {
      id: 'musique',
      title: 'Éveil Musical & Percussions',
      category: 'Sons & Rythmes',
      icon: Music,
      iconBg: '#D5DEE6',
      summary: 'Maracas, marimbas, tambours d’eau et chant de comptines du monde.',
      details: 'L’éveil musical fait vibrer la sensibilité de l’enfant aux sonorités et aux rythmes. Il s’initie à la manipulation de petits instruments d’éveil naturels.',
      benefits: ['Écoute attentive et oreille musicale', 'Sens du rythme', 'Joie du chant collectif']
    },
    {
      id: 'poterie',
      title: 'Poterie & Argile Naturelle',
      category: 'Terre & Nature',
      icon: Flower2,
      iconBg: '#BFC5AF',
      summary: 'Travail de la terre cuite et séchée, empreintes de feuilles et coquillages.',
      details: 'Un contact direct avec l’élément terre. L’enfant imprime ses empreintes dans l’argile, façonne de petits bols et découvre la transformation de la matière naturelle.',
      benefits: ['Ancrage et apaisement sensoriel', 'Connexion aux éléments naturels', 'Dextérité digitale']
    },
    {
      id: 'yoga',
      title: 'Yoga & Éveil Corporel',
      category: 'Sérénité & Corps',
      icon: HeartHandshake,
      iconBg: '#E8B7B5',
      summary: 'Postures d’animaux (le chat, l’arbre), respiration et étirements ludiques.',
      details: 'Un moment de calme guidé par des comptines douces. L’enfant prend conscience de son schéma corporel, s’étire comme un petit chat et apprend à retrouver son calme.',
      benefits: ['Souplesse et équilibre', 'Gestion du calme et du souffle', 'Reconnexion à son corps']
    }
  ];

  return (
    <section className="seveiller-section" id="seveiller">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={16} color="#7D826C" />
            <span>S'éveiller & Créer</span>
          </div>

          <h2 className="section-title">Les Ateliers d'Éveil & de Créativité</h2>

          <p className="section-subtitle">
            Chaque atelier est pensé comme une porte ouverte sur la curiosité, l'imagination et l'expression personnelle.
          </p>

          {/* Discreet requirement note */}
          <div className="workshop-notice-pill">
            <Info size={18} className="notice-icon" />
            <span>Accessibles aux enfants du <strong>Forfait 2 (1 an et demi et +)</strong></span>
          </div>
        </div>

        {/* Workshops Grid */}
        <div className="workshops-grid">
          {workshops.map((ws) => {
            const IconComponent = ws.icon;
            return (
              <div 
                key={ws.id} 
                className="workshop-card card"
                onClick={() => setSelectedWorkshop(ws)}
                tabIndex={0}
                role="button"
                aria-label={`En savoir plus sur l'atelier ${ws.title}`}
                onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') setSelectedWorkshop(ws); }}
              >
                <div className="workshop-header">
                  <div className="workshop-icon-wrap" style={{ backgroundColor: ws.iconBg }}>
                    <IconComponent size={24} color="#5C524E" />
                  </div>
                  <span className="workshop-cat-badge">{ws.category}</span>
                </div>

                <h3 className="workshop-title">{ws.title}</h3>
                <p className="workshop-summary">{ws.summary}</p>

                <div className="workshop-action">
                  <span>Découvrir l'atelier</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            );
          })}

          {/* Summer Camp Card — Special Highlighted "À venir" Card */}
          <div className="workshop-card summer-camp-card card">
            <div className="summer-camp-top">
              <div className="summer-badge-coming">
                <CalendarHeart size={14} />
                <span>À venir · Pas cette année</span>
              </div>
              <div className="workshop-icon-wrap summer-icon-bg">
                <Sun size={26} color="#D6B06B" />
              </div>
            </div>

            <h3 className="workshop-title summer-title">Summer Camp</h3>
            <p className="workshop-summary summer-summary">
              Un programme d'été féérique en plein air combinant jeux d'eau doux, jardinage, ateliers nature et spectacles d'enfants pendant les grandes vacances.
            </p>

            <div className="summer-footer-badge">
              <span>🌿 Édition future (en cours de préparation)</span>
            </div>
          </div>

        </div>

      </div>

      {/* Workshop Detail Modal */}
      {selectedWorkshop && (
        <div className="workshop-modal-backdrop" onClick={() => setSelectedWorkshop(null)}>
          <div className="workshop-modal-card" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={() => setSelectedWorkshop(null)}
              aria-label="Fermer la boîte de dialogue"
            >
              <X size={22} />
            </button>

            <div className="modal-top">
              <div className="modal-icon-bubble" style={{ backgroundColor: selectedWorkshop.iconBg }}>
                {React.createElement(selectedWorkshop.icon, { size: 30, color: "#5C524E" })}
              </div>
              <div>
                <span className="modal-cat">{selectedWorkshop.category}</span>
                <h3 className="modal-title">{selectedWorkshop.title}</h3>
              </div>
            </div>

            <p className="modal-details">{selectedWorkshop.details}</p>

            <div className="modal-benefits-box">
              <h4 className="benefits-heading">Les bienfaits pour votre enfant :</h4>
              <ul>
                {selectedWorkshop.benefits.map((b, i) => (
                  <li key={i}>
                    <Check size={16} className="check-icon" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-footer-note">
              <span>🌿 Dispensé par nos éducatrices spécialisées dans une ambiance douce et sécurisante.</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
