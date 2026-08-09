import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, Menu, X, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';
import MobileDrawer from './MobileDrawer';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navGrandir'), href: '#grandir', subtitle: t('navGrandirSub') },
    { name: t('navSeveiller'), href: '#seveiller', subtitle: t('navSeveillerSub') },
    { name: t('navGalerie'), href: '#galerie', subtitle: t('navGalerieSub') },
    { name: t('navSilluminer'), href: '#silluminer', subtitle: t('navSilluminerSub') },
    { name: t('navRendezvous'), href: '#visites', subtitle: t('navRendezvousSub') },
    { name: t('navContact'), href: '#contact', subtitle: t('navContactSub') },
  ];

  const whatsappUrl = "https://wa.me/212628681664?text=Bonjour,%20je%20souhaite%20avoir%20plus%20d'informations%20sur%20Au%20jardin%20des%20anges%20🌿";
  const mailtoUrl = "mailto:aujardindesangescreche@gmail.com?subject=Demande%20d'information%20%E2%80%94%20Au%20jardin%20des%20anges";
  const instagramUrl = "https://www.instagram.com/au.jardin.des.anges?igsh=MTJrZDgwMGd3b3c0aw==";

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          
          {/* Brand Name Only */}
          <a href="#" className="brand-link" aria-label="Au jardin des anges - Accueil">
            <div className="brand-text">
              <span className="brand-title">{t('brandName')}</span>
              <span className="brand-subtitle">{t('brandSubtitle')}</span>
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

          {/* Header Action Icon Circles + Language Selector */}
          <div className="header-actions">
            
            {/* Language Selector Dropdown */}
            <LanguageSelector />

            <a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-header-circle btn-header-insta"
              title="Instagram"
              aria-label="Instagram Au Jardin des Anges"
            >
              <Instagram size={18} />
            </a>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-header-circle btn-header-wtsp"
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>

            <a 
              href={mailtoUrl}
              className="btn-header-circle btn-header-email"
              title="Email"
              aria-label="Email"
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
      </header>

      {/* Standalone Mobile Drawer */}
      <MobileDrawer 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        navLinks={navLinks} 
      />
    </>
  );
}
