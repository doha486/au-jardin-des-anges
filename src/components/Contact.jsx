import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Heart, Clock, Instagram, Navigation, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import FloralSeparator from './FloralSeparator';
import './Contact.css';

export default function Contact() {
  const { t } = useLanguage();

  const whatsappUrl = "https://wa.me/212628681664?text=Bonjour,%20je%20souhaite%20avoir%20plus%20d'informations%20sur%20Au%20jardin%20des%20anges%20🌿";
  const mailtoUrl = "mailto:aujardindesangescreche@gmail.com?subject=Demande%20d'information%20%E2%80%94%20Au%20jardin%20des%20anges";
  const googleMapsUrl = "https://maps.app.goo.gl/QHhJZMsDyqCJ8uUG7?g_st=ic";
  const instagramUrl = "https://www.instagram.com/au.jardin.des.anges?igsh=MTJrZDgwMGd3b3c0aw==";

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Heart size={16} color="#E8B7B5" />
            <span>{t('contactBadge')}</span>
          </div>

          <h2 className="section-title">{t('contactTitle')}</h2>

          <p className="section-subtitle">
            {t('contactSubtitle')}
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="contact-grid">
          
          {/* Main Direct Phone & Messaging Banner */}
          <div className="contact-card primary-contact-card card">
            <div className="phone-badge-wrapper">
              <div className="phone-icon-circle">
                <Phone size={30} />
              </div>
            </div>

            <span className="contact-label">{t('callUsDirectly')}</span>
            <a href="tel:+212628681664" className="phone-display-link" title="Appeler le +212 6 28 68 16 64">
              +212 6 28 68 16 64
            </a>
            <p className="phone-subtext">{t('phoneSchedule')}</p>

            <div className="contact-cta-buttons">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary contact-btn"
              >
                <MessageCircle size={20} />
                <span>{t('btnWhatsapp')}</span>
              </a>

              <a 
                href={mailtoUrl} 
                className="btn btn-secondary contact-btn"
              >
                <Mail size={18} />
                <span>{t('btnEmail')}</span>
              </a>
            </div>

            {/* Email display pill */}
            <div className="contact-email-display">
              <Mail size={16} color="#7D826C" />
              <span>aujardindesangescreche@gmail.com</span>
            </div>

            {/* Instagram Social Banner */}
            <div className="contact-instagram-box">
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-ig-link"
              >
                <Instagram size={22} color="#E1306C" />
                <div>
                  <span className="ig-handle-text">{t('igHandleText')}</span>
                  <span className="ig-subtext">{t('igSubtext')}</span>
                </div>
                <ExternalLink size={16} className="ig-external-icon" />
              </a>
            </div>

          </div>

          {/* Location & Map Card */}
          <div className="contact-card info-card card">
            <h3 className="info-card-title">{t('locationTitle')}</h3>
            
            <div className="info-list">
              
              <div className="info-item">
                <div className="info-icon" style={{ backgroundColor: 'var(--green-sage)' }}>
                  <MapPin size={22} color="#5C524E" />
                </div>
                <div>
                  <h4 className="info-item-title">{t('locationHeading')}</h4>
                  <p className="info-item-text" style={{ whiteSpace: 'pre-line' }}>
                    {t('locationText')}
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon" style={{ backgroundColor: 'var(--rose-powder)' }}>
                  <Clock size={22} color="#5C524E" />
                </div>
                <div>
                  <h4 className="info-item-title">{t('visitesHeader')}</h4>
                  <p className="info-item-text" style={{ whiteSpace: 'pre-line' }}>
                    {t('visitesSubtext')}
                  </p>
                </div>
              </div>

            </div>

            {/* Google Maps Action Button */}
            <div className="map-action-card">
              <div className="map-badge-header">
                <Navigation size={18} color="#7D826C" />
                <span>{t('mapHeader')}</span>
              </div>
              <p className="map-desc">{t('mapDesc')}</p>
              
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-gold btn-full map-btn"
              >
                <MapPin size={18} />
                <span>{t('btnGoogleMaps')}</span>
                <ExternalLink size={16} />
              </a>
            </div>

          </div>

        </div>

        {/* Repetition of Floral Motif */}
        <FloralSeparator className="contact-separator" />

      </div>
    </section>
  );
}
