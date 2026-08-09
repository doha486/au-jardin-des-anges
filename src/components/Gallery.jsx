import React, { useState } from 'react';
import { Camera, Trees, X, ZoomIn } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Gallery.css';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);
  const { t } = useLanguage();

  const galleryItems = [
    {
      id: 'oak-chair',
      src: '/gallery/oak-chair.jpg',
      title: t('oakBannerTitle'),
      subtitle: t('oakBadge'),
      description: t('oakQuote'),
      isFeature: true,
      tag: t('oakBadge')
    },
    {
      id: 'playroom',
      src: '/gallery/playroom-chairs.jpg',
      title: t('photo1Title'),
      subtitle: t('photo1Sub'),
      description: t('photo1Desc'),
      isFeature: false,
      tag: t('photo1Tag')
    },
    {
      id: 'drawings-1',
      src: '/gallery/wall-drawings-1.jpg',
      title: t('photo2Title'),
      subtitle: t('photo2Sub'),
      description: t('photo2Desc'),
      isFeature: false,
      tag: t('photo2Tag')
    }
  ];

  return (
    <section className="gallery-section" id="galerie">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Camera size={16} color="#7D826C" />
            <span>{t('galleryBadge')}</span>
          </div>

          <h2 className="section-title">{t('galleryTitle')}</h2>

          <p className="section-subtitle">
            {t('gallerySubtitle')}
          </p>
        </div>

        {/* Feature Highlight: Solid Oak Furniture Banner */}
        <div className="oak-feature-banner card">
          <div className="oak-banner-img-wrap" onClick={() => setActiveImage(galleryItems[0])}>
            <img src="/gallery/oak-chair.jpg" alt="Chaise artisanale en chêne massif" />
            <div className="img-overlay">
              <ZoomIn size={24} color="#FFFFFF" />
            </div>
          </div>

          <div className="oak-banner-content">
            <div className="oak-badge">
              <Trees size={16} color="#8C6A28" />
              <span>{t('oakBadge')}</span>
            </div>

            <h3 className="oak-banner-title">{t('oakBannerTitle')}</h3>

            <blockquote className="oak-quote">
              {t('oakQuote')}
            </blockquote>

            <div className="oak-tags-list">
              <span className="oak-tag-pill">{t('oakTag1')}</span>
              <span className="oak-tag-pill">{t('oakTag2')}</span>
              <span className="oak-tag-pill">{t('oakTag3')}</span>
            </div>
          </div>
        </div>

        {/* Grid of 2 Gallery Photos */}
        <div className="gallery-grid two-items">
          {galleryItems.slice(1).map((item) => (
            <div 
              key={item.id} 
              className="gallery-card card"
              onClick={() => setActiveImage(item)}
              tabIndex={0}
              role="button"
              aria-label={`Agrandir ${item.title}`}
              onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') setActiveImage(item); }}
            >
              <div className="gallery-img-wrap">
                <img src={item.src} alt={item.title} />
                <span className="gallery-tag">{item.tag}</span>
                <div className="gallery-zoom-overlay">
                  <ZoomIn size={26} color="#FFFFFF" />
                </div>
              </div>

              <div className="gallery-card-body">
                <h4 className="gallery-item-title">{item.title}</h4>
                <p className="gallery-item-sub">{item.subtitle}</p>
                <p className="gallery-item-desc-inline">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeImage && (
        <div className="lightbox-backdrop" onClick={() => setActiveImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-close-btn"
              onClick={() => setActiveImage(null)}
              aria-label="Fermer la galerie photo"
            >
              <X size={22} />
            </button>

            <div className="lightbox-img-box">
              <img src={activeImage.src} alt={activeImage.title} />
            </div>

            <div className="lightbox-caption">
              <span className="lightbox-tag">{activeImage.tag}</span>
              <h3 className="lightbox-title">{activeImage.title}</h3>
              <p className="lightbox-desc">{activeImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
