import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, Menu, X, Instagram } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Grandir', href: '#grandir', subtitle: 'Nos 2 forfaits' },
    { name: 'S\'éveiller', href: '#seveiller', subtitle: 'Les ateliers & Summer Camp' },
    { name: 'Galerie', href: '#galerie', subtitle: 'Photos & mobilier' },
    { name: 'S\'illuminer', href: '#silluminer', subtitle: 'Nos valeurs' },
    { name: 'Rendez-vous', href: '#visites', subtitle: 'Heures de visite' },
    { name: 'Contact', href: '#contact', subtitle: 'Nous trouver' },
  ];

  const whatsappUrl = "https://wa.me/212628681664?text=Bonjour,%20je%20souhaite%20avoir%20plus%20d'informations%20sur%20Au%20jardin%20des%20anges%20🌿";
  const mailtoUrl = "mailto:aujardindesangescreche@gmail.com?subject=Demande%20d'information%20%E2%80%94%20Au%20jardin%20des%20anges";
  const instagramUrl = "https://www.instagram.com/au.jardin.des.anges?igsh=MTJrZDgwMGd3b3c0aw==";

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        
        {/* Brand Name Only — Clean & Spacious */}
        <a href="#" className="brand-link" aria-label="Au jardin des anges - Accueil">
          <div className="brand-text">
            <span className="brand-title">AU JARDIN DES ANGES</span>
            <span className="brand-subtitle">Crèche & Pouponnière</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Navigation principale">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Action Icon Circles (Colored: Instagram Mauve, WhatsApp Green, Email White) */}
        <div className="header-actions">
          <a 
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-header-circle btn-header-insta"
            title="Suivez-nous sur Instagram"
            aria-label="Instagram Au Jardin des Anges"
          >
            <Instagram size={18} />
          </a>

          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-header-circle btn-header-wtsp"
            title="Discuter directement sur WhatsApp"
            aria-label="Discuter sur WhatsApp"
          >
            <MessageCircle size={18} />
          </a>

          <a 
            href={mailtoUrl}
            className="btn-header-circle btn-header-email"
            title="Nous écrire par email"
            aria-label="Nous écrire par email"
          >
            <Mail size={18} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu — Fixed Overlay with Backdrop Tap & Close Cross */}
      <div 
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className="mobile-drawer-content"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Drawer Header with Close Cross Button */}
          <div className="mobile-header-logo">
            <div>
              <p className="mobile-brand-name">AU JARDIN DES ANGES</p>
              <p className="mobile-brand-sub">Crèche & Pouponnière · 3 mois à 4 ans</p>
            </div>
            <button 
              className="mobile-drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="mobile-nav">
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="mobile-nav-link"
                  >
                    <span>{link.name}</span>
                    <span className="mobile-nav-sub">{link.subtitle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-drawer-cta">
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
    </header>
  );
}
