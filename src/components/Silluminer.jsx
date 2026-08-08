import React from 'react';
import { Sun, Heart, Shield, Users, Smile, Flower2 } from 'lucide-react';
import './Silluminer.css';

export default function Silluminer() {
  const values = [
    {
      title: 'Bienveillance & Écoute au Quotidien',
      desc: 'Chaque geste, mot et regard est empreint de douceur. Nous respectons le rythme de sommeil, d’apprentissage et d’expression de votre enfant.',
      icon: Heart,
      color: '#E8B7B5'
    },
    {
      title: 'Cadre d’Épanouissement Sécurisé',
      desc: 'Des espaces pensés et aménagés spécifiquement pour la petite enfance, conformes aux plus hautes exigences de sécurité et de propreté.',
      icon: Shield,
      color: '#BFC5AF'
    },
    {
      title: 'Équipe Passionnée & Qualifiée',
      desc: 'Une équipe de professionnelles diplômées et dévouées, régulièrement formées aux pédagogies positives et aux gestes de premiers secours.',
      icon: Users,
      color: '#D5DEE6'
    },
    {
      title: 'Partenariat de Confiance avec les Parents',
      desc: 'Un dialogue quotidien attentif, des transmissions vivantes de la journée de votre enfant et une écoute constante de vos attentes.',
      icon: Smile,
      color: '#D6B06B'
    }
  ];

  return (
    <section className="silluminer-section" id="silluminer">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sun size={16} color="#D6B06B" />
            <span>Notre Philosophie</span>
          </div>

          <h2 className="section-title">S'illuminer au Quotidien</h2>

          <p className="section-subtitle">
            Parce que chaque enfant porte en lui une étincelle unique, notre mission est de la préserver et de la faire rayonner dans un climat de totale confiance.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="values-grid">
          {values.map((v, i) => {
            const IconComp = v.icon;
            return (
              <div key={i} className="value-card card">
                <div className="value-icon-bubble" style={{ backgroundColor: v.color }}>
                  <IconComp size={26} color="#5C524E" />
                </div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Philosophy Quote Card */}
        <div className="philosophy-quote-card">
          <div className="quote-icon">
            <Flower2 size={34} color="#7D826C" />
          </div>
          <blockquote className="quote-text">
            « Permettre à votre enfant d'explorer le monde à son propre rythme, bercé par l'affection et guidé par la curiosité. »
          </blockquote>
          <p className="quote-author">— L'équipe d'Au jardin des anges</p>
        </div>

      </div>
    </section>
  );
}
