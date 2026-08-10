import React, { useState } from 'react';
import { Palette, Sparkles, Drama, Layers, Music, Flower2, HeartHandshake, Info, X, Check, ArrowRight, Sun, CalendarHeart, Grid3x3 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Seveiller.css';

export default function Seveiller() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const { t } = useLanguage();

  const workshops = [
    {
      id: 'peinture',
      title: t('ws1Title'),
      category: t('ws1Cat'),
      icon: Palette,
      iconBg: '#E8B7B5',
      summary: t('ws1Sum'),
      details: t('ws1Details'),
      benefits: [t('ws1B1'), t('ws1B2'), t('ws1B3')]
    },
    {
      id: 'mosaique',
      title: t('ws8Title'),
      category: t('ws8Cat'),
      icon: Grid3x3,
      iconBg: '#D6B06B',
      summary: t('ws8Sum'),
      details: t('ws8Details'),
      benefits: [t('ws8B1'), t('ws8B2'), t('ws8B3')]
    },
    {
      id: 'sculpture',
      title: t('ws2Title'),
      category: t('ws2Cat'),
      icon: Sparkles,
      iconBg: '#D5DEE6',
      summary: t('ws2Sum'),
      details: t('ws2Details'),
      benefits: [t('ws2B1'), t('ws2B2'), t('ws2B3')]
    },
    {
      id: 'theatre',
      title: t('ws3Title'),
      category: t('ws3Cat'),
      icon: Drama,
      iconBg: '#BFC5AF',
      summary: t('ws3Sum'),
      details: t('ws3Details'),
      benefits: [t('ws3B1'), t('ws3B2'), t('ws3B3')]
    },
    {
      id: 'origami',
      title: t('ws4Title'),
      category: t('ws4Cat'),
      icon: Layers,
      iconBg: '#E8B7B5',
      summary: t('ws4Sum'),
      details: t('ws4Details'),
      benefits: [t('ws4B1'), t('ws4B2'), t('ws4B3')]
    },
    {
      id: 'musique',
      title: t('ws5Title'),
      category: t('ws5Cat'),
      icon: Music,
      iconBg: '#D5DEE6',
      summary: t('ws5Sum'),
      details: t('ws5Details'),
      benefits: [t('ws5B1'), t('ws5B2'), t('ws5B3')]
    },
    {
      id: 'poterie',
      title: t('ws6Title'),
      category: t('ws6Cat'),
      icon: Flower2,
      iconBg: '#BFC5AF',
      summary: t('ws6Sum'),
      details: t('ws6Details'),
      benefits: [t('ws6B1'), t('ws6B2'), t('ws6B3')]
    },
    {
      id: 'yoga',
      title: t('ws7Title'),
      category: t('ws7Cat'),
      icon: HeartHandshake,
      iconBg: '#E8B7B5',
      summary: t('ws7Sum'),
      details: t('ws7Details'),
      benefits: [t('ws7B1'), t('ws7B2'), t('ws7B3')]
    }
  ];

  return (
    <section className="seveiller-section" id="seveiller">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={16} color="#7D826C" />
            <span>{t('seveillerBadge')}</span>
          </div>

          <h2 className="section-title">{t('seveillerTitle')}</h2>

          <p className="section-subtitle">
            {t('seveillerSubtitle')}
          </p>

          {/* Requirement note */}
          <div className="workshop-notice-pill">
            <Info size={18} className="notice-icon" />
            <span>{t('workshopNotice')}</span>
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
                aria-label={ws.title}
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
                  <span>{t('discoverWorkshop')}</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            );
          })}

          {/* Summer Camp Card */}
          <div className="workshop-card summer-camp-card card">
            <div className="summer-camp-top">
              <div className="summer-badge-coming">
                <CalendarHeart size={14} />
                <span>{t('summerCampBadge')}</span>
              </div>
              <div className="workshop-icon-wrap summer-icon-bg">
                <Sun size={26} color="#D6B06B" />
              </div>
            </div>

            <h3 className="workshop-title summer-title">{t('summerCampTitle')}</h3>
            <p className="workshop-summary summer-summary">
              {t('summerCampDesc')}
            </p>

            <div className="summer-footer-badge">
              <span>🌿 {t('summerCampFooter')}</span>
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
              aria-label={t('modalClose')}
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
              <h4 className="benefits-heading">{t('modalBenefitsTitle')}</h4>
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
              <span>🌿 {t('modalFooterNote')}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
