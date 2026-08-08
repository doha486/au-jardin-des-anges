import React from 'react';
import { MessageCircle, Mail, Phone, Heart, Instagram, MapPin, ExternalLink } from 'lucide-react';
import FloralSeparator from './FloralSeparator';
import './Footer.css';

export default function Footer() {
  const whatsappUrl = "https://wa.me/212628681664?text=Bonjour,%20je%20souhaite%20avoir%20plus%20d'informations%20sur%20Au%20jardin%20des%20anges%20🌿";
  const googleMapsUrl = "https://maps.app.goo.gl/QHhJZMsDyqCJ8uUG7?g_st=ic";
  const instagramUrl = "https://www.instagram.com/au.jardin.des.anges?igsh=MTJrZDgwMGd3b3c0aw==";

  return (
    <footer className="footer">
      
      <div className="container">
        
        {/* Footer Top Brand Section */}
        <div className="footer-top">
          
          <div className="footer-brand">
            <div>
              <h3 className="footer-brand-title">AU JARDIN DES ANGES</h3>
              <p className="footer-slogan">« Grandir. S'éveiller. S'illuminer. »</p>
              <p className="footer-sub">Crèche & Pouponnière · 3 mois à 4 ans</p>

              {/* Instagram link under brand in footer */}
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-ig-link"
              >
                <Instagram size={18} color="#E1306C" />
                <span>@au.jardin.des.anges</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="footer-nav" aria-label="Navigation pied de page">
            <h4>Accès Rapide</h4>
            <ul>
              <li><a href="#grandir">Le Parcours Grandir</a></li>
              <li><a href="#seveiller">Les Ateliers & Summer Camp</a></li>
              <li><a href="#silluminer">Nos Valeurs</a></li>
              <li><a href="#visites">Heures de Visite</a></li>
              <li><a href="#contact">Contact & Accès</a></li>
            </ul>
          </nav>

          {/* Direct CTA */}
          <div className="footer-contact-box">
            <h4>Nous Contacter</h4>
            <p className="footer-phone-text">📞 <strong>06 28 68 16 64</strong></p>
            <p className="footer-email-text">✉️ <strong>aujardindesangescreche@gmail.com</strong></p>
            
            <div className="footer-actions">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp-compact"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
              <a 
                href="mailto:aujardindesangescreche@gmail.com?subject=Demande%20d'information%20%E2%80%94%20Au%20jardin%20des%20anges"
                className="footer-mail-link"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </div>
          </div>

        </div>

        {/* Repetition of Signature Leaf Wreath Divider */}
        <FloralSeparator className="footer-floral-divider" />

        {/* Bottom Copyright */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} <strong>Au jardin des anges</strong> — Crèche & Pouponnière. Tous droits réservés.
          </p>
          <p className="caring-tagline">
            Fait avec <Heart size={14} className="heart-icon" /> pour le bonheur et l'éveil des tout-petits.
          </p>
        </div>

      </div>

    </footer>
  );
}
