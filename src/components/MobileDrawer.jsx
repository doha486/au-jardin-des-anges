import React, { useEffect } from 'react';
import { MessageCircle, Mail, X, Instagram } from 'lucide-react';
import './MobileDrawer.css';

export default function MobileDrawer({ isOpen, onClose, navLinks }) {
  const whatsappUrl = "https://wa.me/212628681664?text=Bonjour,%20je%20souhaite%20avoir%20plus%20d'informations%20sur%20Au%20jardin%20des%20anges%20🌿";
  const mailtoUrl = "mailto:aujardindesangescreche@gmail.com?subject=Demande%20d'information%20%E2%80%94%20Au%20jardin%20des%20anges";
  const instagramUrl = "https://www.instagram.com/au.jardin.des.anges?igsh=MTJrZDgwMGd3b3c0aw==";

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div 
      className={`mobile-drawer-overlay ${isOpen ? 'open' : ''}`}
      onClick={onClose}
    >
      <div 
        className="mobile-drawer-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Header of the Panel */}
        <div className="drawer-panel-header">
          <div>
            <p className="drawer-brand-name">AU JARDIN DES ANGES</p>
            <p className="drawer-brand-sub">Crèche & Pouponnière · 3 mois à 4 ans</p>
          </div>
          <button 
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Fermer le menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Middle Navigation Section */}
        <nav className="drawer-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={onClose}
                  className="drawer-nav-link"
                >
                  <span className="nav-link-title">{link.name}</span>
                  <span className="nav-link-sub">{link.subtitle}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Fixed Bottom Action CTA Buttons */}
        <div className="drawer-panel-cta">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-full"
          >
            <MessageCircle size={18} />
            <span>Discuter sur WhatsApp</span>
          </a>

          <a 
            href={mailtoUrl} 
            className="btn btn-secondary btn-full"
          >
            <Mail size={18} />
            <span>Nous écrire par email</span>
          </a>

          <a 
            href={instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary btn-full"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
          >
            <Instagram size={18} />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}
