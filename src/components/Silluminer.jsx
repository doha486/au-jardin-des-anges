import React from 'react';
import { Sun, Heart, Shield, Users, Smile, Flower2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Silluminer.css';

export default function Silluminer() {
  const { t } = useLanguage();

  const values = [
    {
      title: t('val1Title'),
      desc: t('val1Desc'),
      icon: Heart,
      color: '#E8B7B5'
    },
    {
      title: t('val2Title'),
      desc: t('val2Desc'),
      icon: Shield,
      color: '#BFC5AF'
    },
    {
      title: t('val3Title'),
      desc: t('val3Desc'),
      icon: Users,
      color: '#D5DEE6'
    },
    {
      title: t('val4Title'),
      desc: t('val4Desc'),
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
            <span>{t('silluminerBadge')}</span>
          </div>

          <h2 className="section-title">{t('silluminerTitle')}</h2>

          <p className="section-subtitle">
            {t('silluminerSubtitle')}
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
            {t('philosophyQuote')}
          </blockquote>
          <p className="quote-author">{t('philosophyAuthor')}</p>
        </div>

      </div>
    </section>
  );
}
