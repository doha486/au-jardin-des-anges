import React from 'react';
import { Phone, Mail, MapPin, Heart, Instagram, ChevronRight, MessageCircle } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/212628681664?text=Bonjour,%20je%20souhaite%20avoir%20plus%20d'informations%20sur%20Au%20jardin%20des%20anges%20🌿";
  const mailtoUrl = "mailto:aujardindesangescreche@gmail.com?subject=Demande%20d'information%20%E2%80%94%20Au%20jardin%20des%20anges";
  const googleMapsUrl = "https://maps.app.goo.gl/QHhJZMsDyqCJ8uUG7?g_st=ic";
  const instagramUrl = "https://www.instagram.com/au.jardin.des.anges?igsh=MTJrZDgwMGd3b3c0aw==";

  return (
    <footer className="footer">
      <div className="container footer-container">
        
        {/* Brand Info Column */}
        <div className="footer-col brand-col">
          <h3 className="footer-brand-title">AU JARDIN DES ANGES</h3>
          <p className="footer-brand-sub">Crèche & Pouponnière Privée · 3 mois à 4 ans</p>
          <p className="footer-slogan">« Grandir • S'éveiller • S'illuminer »</p>
          <p className="footer-desc">
            Un havre de paix dédié à la petite enfance. Sécurité affective, éveil sensoriel et bienveillance au quotidien.
          </p>
          
          <div className="footer-social-links">
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-btn btn-insta" 
              title="Suivez-nous sur Instagram"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-btn btn-wa" 
              title="Discuter sur WhatsApp"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a 
              href={mailtoUrl} 
              className="footer-social-btn btn-mail" 
              title="Nous écrire par email"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col links-col">
          <h4 className="footer-col-title">Navigation Rapide</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#grandir">
                <ChevronRight size={14} className="link-arrow" />
                <span>Nos 4 Sections d'Âge</span>
              </a>
            </li>
            <li>
              <a href="#seveiller">
                <ChevronRight size={14} className="link-arrow" />
                <span>Ateliers & Summer Camp</span>
              </a>
            </li>
            <li>
              <a href="#galerie">
                <ChevronRight size={14} className="link-arrow" />
                <span>Galerie & Mobilier Chêne</span>
              </a>
            </li>
            <li>
              <a href="#silluminer">
                <ChevronRight size={14} className="link-arrow" />
                <span>Nos Valeurs & Philosophie</span>
              </a>
            </li>
            <li>
              <a href="#visites">
                <ChevronRight size={14} className="link-arrow" />
                <span>Heures de Visite sur RDV</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <ChevronRight size={14} className="link-arrow" />
                <span>Nous Trouver sur la Carte</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="footer-col contact-col">
          <h4 className="footer-col-title">Contact Direct</h4>
          <ul className="footer-contact-list">
            <li>
              <div className="contact-icon-pill">
                <Phone size={16} />
              </div>
              <a href="tel:+212628681664">+212 6 28 68 16 64</a>
            </li>
            <li>
              <div className="contact-icon-pill">
                <Mail size={16} />
              </div>
              <a href={mailtoUrl}>aujardindesangescreche@gmail.com</a>
            </li>
            <li>
              <div className="contact-icon-pill">
                <MapPin size={16} />
              </div>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                Au jardin des anges (Google Maps)
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>© {currentYear} Au jardin des anges — Crèche & Pouponnière Privée. Tous droits réservés.</p>
          <p className="footer-heart">
            Fait avec <Heart size={14} color="#E8B7B5" fill="#E8B7B5" /> pour l'épanouissement des tout-petits.
          </p>
        </div>
      </div>
    </footer>
  );
}
