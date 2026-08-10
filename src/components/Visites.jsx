import React, { useState } from 'react';
import { CalendarHeart, Clock, CheckCircle, MessageCircle, Mail, Sparkles, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Visites.css';

export default function Visites() {
  const [selectedDay, setSelectedDay] = useState('Mardi');
  const [selectedTime, setSelectedTime] = useState('16h00');
  const { t } = useLanguage();

  const dayLabel = selectedDay === 'Mardi' ? t('dayMardi') : t('dayJeudi');

  const whatsappMessage = encodeURIComponent(
    `Bonjour, je souhaite réserver une visite à Au jardin des anges le ${dayLabel} à ${selectedTime} 🌿`
  );
  const whatsappUrl = `https://wa.me/212628681664?text=${whatsappMessage}`;

  const emailSubject = encodeURIComponent(`Réservation de Visite — ${dayLabel} à ${selectedTime}`);
  const emailBody = encodeURIComponent(
    `Bonjour,\n\nJe souhaite réserver un créneau de visite individuelle pour le ${dayLabel} à ${selectedTime}.\n\nMerci de me confirmer la disponibilité.\n\nCordialement.`
  );
  const mailtoUrl = `mailto:aujardindesangescreche@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section className="visites-section" id="visites">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <CalendarHeart size={16} color="#7D826C" />
            <span>{t('visitesBadge')}</span>
          </div>

          <h2 className="section-title">{t('visitesTitle')}</h2>

          <p className="section-subtitle">
            {t('visitesSubtitle')}
          </p>
        </div>

        {/* Premium Interactive Booking Card */}
        <div className="rendezvous-card card">
          
          <div className="rendezvous-card-header">
            <div className="sparkle-icon-wrap">
              <Sparkles size={22} color="#8C6A28" />
            </div>
            <div>
              <h3 className="rdv-card-title">{t('visitesStepTitle')}</h3>
            </div>
          </div>

          <div className="booking-selector-container">
            
            {/* Step 1: Day Selector */}
            <div className="selector-group">
              <label className="selector-label">
                <CalendarHeart size={18} className="label-icon" />
                <span>{t('visitesChooseDay')}</span>
              </label>

              <div className="options-pills-grid">
                <button
                  type="button"
                  className={`pill-btn ${selectedDay === 'Mardi' ? 'active' : ''}`}
                  onClick={() => setSelectedDay('Mardi')}
                >
                  <CheckCircle size={18} className="pill-check-icon" />
                  <span>{t('dayMardi')}</span>
                </button>

                <button
                  type="button"
                  className={`pill-btn ${selectedDay === 'Jeudi' ? 'active' : ''}`}
                  onClick={() => setSelectedDay('Jeudi')}
                >
                  <CheckCircle size={18} className="pill-check-icon" />
                  <span>{t('dayJeudi')}</span>
                </button>
              </div>
            </div>

            {/* Step 2: Time Slot Selector */}
            <div className="selector-group">
              <label className="selector-label">
                <Clock size={18} className="label-icon" />
                <span>{t('visitesChooseTime')}</span>
              </label>

              <div className="options-pills-grid">
                <button
                  type="button"
                  className={`pill-btn ${selectedTime === '16h00' ? 'active' : ''}`}
                  onClick={() => setSelectedTime('16h00')}
                >
                  <CheckCircle size={18} className="pill-check-icon" />
                  <span>{t('visitesSelectedTime')}</span>
                </button>

                <button
                  type="button"
                  className={`pill-btn ${selectedTime === '16h30' ? 'active' : ''}`}
                  onClick={() => setSelectedTime('16h30')}
                >
                  <CheckCircle size={18} className="pill-check-icon" />
                  <span>{t('visitesSelectedTime2')}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Selected Summary Pill */}
          <div className="booking-summary-pill">
            <span className="summary-label">{t('visitesSelectedLabel')}</span>
            <span className="summary-value">
              🌿 <strong>{dayLabel}</strong> à <strong>{selectedTime}</strong>
            </span>
          </div>

          {/* Booking Action Buttons */}
          <div className="booking-actions">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary booking-btn"
            >
              <MessageCircle size={20} />
              <span>{t('visitesBookWa')}</span>
            </a>

            <a 
              href={mailtoUrl} 
              className="btn btn-secondary booking-btn"
            >
              <Mail size={18} />
              <span>{t('visitesBookEmail')}</span>
            </a>
          </div>

          {/* Reassuring Footer Note */}
          <div className="booking-footer-note">
            <Heart size={16} color="#E8B7B5" fill="#E8B7B5" />
            <span>{t('visitesNote')}</span>
          </div>

        </div>

      </div>
    </section>
  );
}
