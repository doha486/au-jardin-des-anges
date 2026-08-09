import React, { useState } from 'react';
import { Baby, Footprints, ShieldCheck, Sparkles, Feather, Smile, Compass, Users, Sun, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Grandir.css';

export default function Grandir() {
  const [activeStage, setActiveStage] = useState('angelots');
  const { t } = useLanguage();

  const stages = {
    'angelots': {
      id: 'angelots',
      badge: t('sec1Badge'),
      title: t('sec1Title'),
      subTitle: t('sec1Sub'),
      accentColor: 'var(--rose-powder)',
      themeClass: 'theme-rose',
      tagline: t('sec1Tagline'),
      highlights: [
        {
          title: t('sec1F1Title'),
          desc: t('sec1F1Desc'),
          icon: ShieldCheck,
          color: '#E8B7B5'
        },
        {
          title: t('sec1F2Title'),
          desc: t('sec1F2Desc'),
          icon: Sparkles,
          color: '#D5DEE6'
        },
        {
          title: t('sec1F3Title'),
          desc: t('sec1F3Desc'),
          icon: Baby,
          color: '#E8B7B5'
        },
        {
          title: t('sec1F4Title'),
          desc: t('sec1F4Desc'),
          icon: Feather,
          color: '#D5DEE6'
        }
      ]
    },
    'ailes': {
      id: 'ailes',
      badge: t('sec2Badge'),
      title: t('sec2Title'),
      subTitle: t('sec2Sub'),
      accentColor: 'var(--blue-sky)',
      themeClass: 'theme-blue',
      tagline: t('sec2Tagline'),
      highlights: [
        {
          title: t('sec2F1Title'),
          desc: t('sec2F1Desc'),
          icon: Footprints,
          color: '#D5DEE6'
        },
        {
          title: t('sec2F2Title'),
          desc: t('sec2F2Desc'),
          icon: Sparkles,
          color: '#BFC5AF'
        },
        {
          title: t('sec2F3Title'),
          desc: t('sec2F3Desc'),
          icon: Smile,
          color: '#E8B7B5'
        },
        {
          title: t('sec2F4Title'),
          desc: t('sec2F4Desc'),
          icon: Compass,
          color: '#D6B06B'
        }
      ]
    },
    'etoiles': {
      id: 'etoiles',
      badge: t('sec3Badge'),
      title: t('sec3Title'),
      subTitle: t('sec3Sub'),
      accentColor: 'var(--green-sage)',
      themeClass: 'theme-sage',
      tagline: t('sec3Tagline'),
      highlights: [
        {
          title: t('sec3F1Title'),
          desc: t('sec3F1Desc'),
          icon: Users,
          color: '#BFC5AF'
        },
        {
          title: t('sec3F2Title'),
          desc: t('sec3F2Desc'),
          icon: Sparkles,
          color: '#D6B06B'
        },
        {
          title: t('sec3F3Title'),
          desc: t('sec3F3Desc'),
          icon: Smile,
          color: '#D5DEE6'
        },
        {
          title: t('sec3F4Title'),
          desc: t('sec3F4Desc'),
          icon: Compass,
          color: '#7D826C'
        }
      ]
    },
    'lumieres': {
      id: 'lumieres',
      badge: t('sec4Badge'),
      title: t('sec4Title'),
      subTitle: t('sec4Sub'),
      accentColor: 'var(--gold-soft)',
      themeClass: 'theme-gold',
      tagline: t('sec4Tagline'),
      highlights: [
        {
          title: t('sec4F1Title'),
          desc: t('sec4F1Desc'),
          icon: Star,
          color: '#D6B06B'
        },
        {
          title: t('sec4F2Title'),
          desc: t('sec4F2Desc'),
          icon: Sparkles,
          color: '#E8B7B5'
        },
        {
          title: t('sec4F3Title'),
          desc: t('sec4F3Desc'),
          icon: Sun,
          color: '#BFC5AF'
        },
        {
          title: t('sec4F4Title'),
          desc: t('sec4F4Desc'),
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
            <span>{t('grandirBadge')}</span>
          </div>
          <h2 className="section-title">{t('grandirTitle')}</h2>
          <p className="section-subtitle">
            {t('grandirSubtitle')}
          </p>
        </div>

        {/* Interactive 4-Stage Navigation Ribbon */}
        <div className="timeline-ribbon-container">
          <div className="timeline-steps steps-4">
            
            {/* Stage 1 */}
            <button 
              className={`timeline-step-btn step-rose ${activeStage === 'angelots' ? 'active' : ''}`}
              onClick={() => setActiveStage('angelots')}
              aria-label={t('sec1Title')}
            >
              <div className="step-node">
                <Baby size={20} />
              </div>
              <div className="step-info">
                <span className="step-age">{t('sec1Badge')}</span>
                <span className="step-name">{t('sec1Title').split('—')[1] || t('sec1Title')}</span>
              </div>
            </button>

            {/* Stage 2 */}
            <button 
              className={`timeline-step-btn step-blue ${activeStage === 'ailes' ? 'active' : ''}`}
              onClick={() => setActiveStage('ailes')}
              aria-label={t('sec2Title')}
            >
              <div className="step-node">
                <Footprints size={20} />
              </div>
              <div className="step-info">
                <span className="step-age">{t('sec2Badge')}</span>
                <span className="step-name">{t('sec2Title').split('—')[1] || t('sec2Title')}</span>
              </div>
            </button>

            {/* Stage 3 */}
            <button 
              className={`timeline-step-btn step-sage ${activeStage === 'etoiles' ? 'active' : ''}`}
              onClick={() => setActiveStage('etoiles')}
              aria-label={t('sec3Title')}
            >
              <div className="step-node">
                <Star size={20} />
              </div>
              <div className="step-info">
                <span className="step-age">{t('sec3Badge')}</span>
                <span className="step-name">{t('sec3Title').split('—')[1] || t('sec3Title')}</span>
              </div>
            </button>

            {/* Stage 4 */}
            <button 
              className={`timeline-step-btn step-gold ${activeStage === 'lumieres' ? 'active' : ''}`}
              onClick={() => setActiveStage('lumieres')}
              aria-label={t('sec4Title')}
            >
              <div className="step-node">
                <Sun size={20} />
              </div>
              <div className="step-info">
                <span className="step-age">{t('sec4Badge')}</span>
                <span className="step-name">{t('sec4Title').split('—')[1] || t('sec4Title')}</span>
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
              🌿 <strong>{t('grandirFooterNote')}</strong>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
