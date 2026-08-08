import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, Instagram, ArrowUp } from 'lucide-react';
import './FloatingActions.css';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = "https://wa.me/212628681664?text=Bonjour,%20je%20souhaite%20avoir%20plus%20d'informations%20sur%20Au%20jardin%20des%20anges%20🌿";
  const mailtoUrl = "mailto:aujardindesangescreche@gmail.com?subject=Demande%20d'information%20%E2%80%94%20Au%20jardin%20des%20anges";
  const instagramUrl = "https://www.instagram.com/au.jardin.des.anges?igsh=MTJrZDgwMGd3b3c0aw==";

  return (
    <aside className="floating-right-dock" aria-label="Actions rapides de contact">
      
      {/* WhatsApp Floating Button */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="dock-circle float-wa"
        title="Discuter sur WhatsApp"
        aria-label="Discuter sur WhatsApp"
      >
        <MessageCircle size={22} />
      </a>

      {/* Email Floating Button */}
      <a 
        href={mailtoUrl}
        className="dock-circle float-mail"
        title="Nous écrire par email"
        aria-label="Nous écrire par email"
      >
        <Mail size={20} />
      </a>

      {/* Instagram Floating Button */}
      <a 
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="dock-circle float-insta"
        title="Suivez-nous sur Instagram"
        aria-label="Instagram Au Jardin des Anges"
      >
        <Instagram size={20} />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop} 
          className="dock-circle float-top"
          title="Remonter en haut de page"
          aria-label="Remonter en haut"
        >
          <ArrowUp size={20} />
        </button>
      )}

    </aside>
  );
}
