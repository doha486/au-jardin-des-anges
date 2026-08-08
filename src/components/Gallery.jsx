import React, { useState } from 'react';
import { Camera, Trees, X, ZoomIn } from 'lucide-react';
import './Gallery.css';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  const galleryItems = [
    {
      id: 'oak-chair',
      src: '/gallery/oak-chair.jpg',
      title: 'Mobilier en Chêne Massif',
      subtitle: 'Des matériaux nobles, naturels & durables',
      description: 'Au Jardin des Anges, nous avons choisi le chêne massif, des matériaux nobles, naturels et durables, pour offrir à nos petits anges un environnement chaleureux, qualitatif et pensé pour leur bien-être. 🤍🪽',
      isFeature: true,
      tag: 'Qualité & Bien-être'
    },
    {
      id: 'playroom',
      src: '/gallery/playroom-chairs.jpg',
      title: 'Espace de Jeu & Fresque Arc-en-Ciel',
      subtitle: 'Un cadre coloré et lumineux',
      description: 'Des chaises pastel, du parquet chaleureux et une magnifique fresque murale peinte à la main représentant de douces montagnes et un arc-en-ciel vibrant.',
      isFeature: false,
      tag: 'Lieu de Vie'
    },
    {
      id: 'drawings-1',
      src: '/gallery/wall-drawings-1.jpg',
      title: 'Illustrations Murales — Montgolfière & Fusée',
      subtitle: 'Éveil à l’imaginaire',
      description: 'Des illustrations délicates réalisées à la main sur les murs de la crèche : montgolfière, petite fusée, abeille et fleurs champêtres.',
      isFeature: false,
      tag: 'Décoration Fait-Main'
    },
    {
      id: 'drawings-2',
      src: '/gallery/wall-drawings-2.jpg',
      title: 'Illustrations Murales — Cerf-Volant & Étoiles',
      subtitle: 'Douceur graphique',
      description: 'Un univers graphique poétique avec cerf-volant, coccinelle, glace gourmande, petite voiture et étoiles pour faire rêver les enfants.',
      isFeature: false,
      tag: 'Univers Poétique'
    }
  ];

  return (
    <section className="gallery-section" id="galerie">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Camera size={16} color="#7D826C" />
            <span>Découvrir Nos Espaces</span>
          </div>

          <h2 className="section-title">Galerie Photo de la Crèche</h2>

          <p className="section-subtitle">
            Plongez dans l'univers chaleureux et poétique du Jardin des Anges. Un cadre pensé dans les moindres détails pour la sécurité et l'épanouissement de votre enfant.
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
              <span>Chêne Massif & Matériaux Nobles</span>
            </div>

            <h3 className="oak-banner-title">Un Mobilier Chaleureux & Durable</h3>

            <blockquote className="oak-quote">
              « Au Jardin des Anges, nous avons choisi le <strong>chêne massif</strong>, des matériaux nobles, naturels et durables, pour offrir à nos petits anges un environnement chaleureux, qualitatif et pensé pour leur bien-être. 🤍🪽 »
            </blockquote>

            <div className="oak-tags-list">
              <span className="oak-tag-pill">🌱 100% Naturel</span>
              <span className="oak-tag-pill">🛡️ Bois Noble & Robuste</span>
              <span className="oak-tag-pill">🎨 Finitions Douces</span>
            </div>
          </div>
        </div>

        {/* Grid of Other Gallery Photos */}
        <div className="gallery-grid">
          {galleryItems.slice(1).map((item) => (
            <div 
              key={item.id} 
              className="gallery-card card"
              onClick={() => setActiveImage(item)}
              tabIndex={0}
              role="button"
              aria-label={`Agrandir l'image ${item.title}`}
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
