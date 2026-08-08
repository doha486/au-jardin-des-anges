import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Heart, Clock, Instagram, Navigation, ExternalLink } from 'lucide-react';
import FloralSeparator from './FloralSeparator';
import './Contact.css';

export default function Contact() {
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
            <span>À Votre Écoute</span>
          </div>

          <h2 className="section-title">Prenez Contact avec Nous</h2>

          <p className="section-subtitle">
            Toute l'équipe d'Au jardin des anges se tient à votre entière disposition pour échanger sur vos besoins et vous accueillir.
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

            <span className="contact-label">Appelez-nous directement</span>
            <a href="tel:+212628681664" className="phone-display-link" title="Appeler le +212 6 28 68 16 64">
              +212 6 28 68 16 64
            </a>
            <p className="phone-subtext">Du lundi au vendredi · Accueil téléphonique chaleureux & bienveillant</p>

            <div className="contact-cta-buttons">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary contact-btn"
              >
                <MessageCircle size={20} />
                <span>Discuter sur WhatsApp</span>
              </a>

              <a 
                href={mailtoUrl} 
                className="btn btn-secondary contact-btn"
              >
                <Mail size={18} />
                <span>Nous écrire par email</span>
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
                  <span className="ig-handle-text">@au.jardin.des.anges</span>
                  <span className="ig-subtext">Suivez les activités et les coulisses de notre crèche sur Instagram</span>
                </div>
                <ExternalLink size={16} className="ig-external-icon" />
              </a>
            </div>

          </div>

          {/* Location & Map Card */}
          <div className="contact-card info-card card">
            <h3 className="info-card-title">Localisation & Accès</h3>
            
            <div className="info-list">
              
              <div className="info-item">
                <div className="info-icon" style={{ backgroundColor: 'var(--green-sage)' }}>
                  <MapPin size={22} color="#5C524E" />
                </div>
                <div>
                  <h4 className="info-item-title">Emplacement de la Crèche Privée</h4>
                  <p className="info-item-text">
                    Au jardin des anges — Crèche & Pouponnière Privée<br />
                    Un cadre calme, sécurisé et arboré, pensé pour le bien-être des enfants.
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon" style={{ backgroundColor: 'var(--rose-powder)' }}>
                  <Clock size={22} color="#5C524E" />
                </div>
                <div>
                  <h4 className="info-item-title">Visites sur Rendez-vous</h4>
                  <p className="info-item-text">
                    Les <strong>Mardi</strong> et <strong>Jeudi</strong><br />
                    Créneaux au choix : <strong>16h00</strong> ou <strong>16h30</strong>
                  </p>
                </div>
              </div>

            </div>

            {/* Google Maps Action Button & Preview Box */}
            <div className="map-action-card">
              <div className="map-badge-header">
                <Navigation size={18} color="#7D826C" />
                <span>Plan & Itinéraire</span>
              </div>
              <p className="map-desc">Retrouvez la crèche facilement sur votre application de navigation.</p>
              
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-gold btn-full map-btn"
              >
                <MapPin size={18} />
                <span>Ouvrir sur Google Maps</span>
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
