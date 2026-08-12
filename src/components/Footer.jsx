import React from 'react';
import { Phone, Mail, MapPin, Heart, Instagram, ChevronRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const whatsappUrl = "https://wa.me/212628681664?text=Bonjour,%20je%20souhaite%20avoir%20plus%20d'informations%20sur%20Au%20jardin%20des%20anges%20🌿";
  const mailtoUrl = "mailto:aujardindesangescreche@gmail.com?subject=Demande%20d'information%20%E2%80%94%20Au%20jardin%20des%20anges";
  const googleMapsUrl = "https://maps.app.goo.gl/QHhJZMsDyqCJ8uUG7?g_st=ic";
  const instagramUrl = "https://www.instagram.com/au.jardin.des.anges?igsh=MTJrZDgwMGd3b3c0aw==";

  return (
    <footer className="footer">
      <div className="container footer-container">
        
        {/* Brand Info Column */}
        <div className="footer-col brand-col">
          <h3 className="footer-brand-title">{t('brandName')}</h3>
          <p className="footer-brand-sub">{t('brandSubtitle')} · {t('heroBadge').split('·')[1] || "3 mois à 4 ans"}</p>
          <p className="footer-slogan">« {t('sloganPart1')} • {t('sloganPart2')} • {t('sloganPart3')} »</p>
          <p className="footer-desc">
            {t('footerDesc')}
          </p>
          
          <div className="footer-social-links">
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-btn btn-insta" 
              title="Instagram"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-btn btn-wa" 
              title="WhatsApp"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a 
              href={mailtoUrl} 
              className="footer-social-btn btn-mail" 
              title="Email"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col links-col">
          <h4 className="footer-col-title">{t('footerNavTitle')}</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#grandir">
                <ChevronRight size={14} className="link-arrow" />
                <span>{t('navGrandir')} — {t('navGrandirSub')}</span>
              </a>
            </li>
            <li>
              <a href="#seveiller">
                <ChevronRight size={14} className="link-arrow" />
                <span>{t('navSeveiller')} — {t('navSeveillerSub')}</span>
              </a>
            </li>
            <li>
              <a href="#galerie">
                <ChevronRight size={14} className="link-arrow" />
                <span>{t('navGalerie')} — {t('navGalerieSub')}</span>
              </a>
            </li>
            <li>
              <a href="#silluminer">
                <ChevronRight size={14} className="link-arrow" />
                <span>{t('navSilluminer')} — {t('navSilluminerSub')}</span>
              </a>
            </li>
            <li>
              <a href="#visites">
                <ChevronRight size={14} className="link-arrow" />
                <span>{t('navRendezvous')} — {t('navRendezvousSub')}</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <ChevronRight size={14} className="link-arrow" />
                <span>{t('navContact')} — {t('navContactSub')}</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="footer-col contact-col">
          <h4 className="footer-col-title">{t('footerContactTitle')}</h4>
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
                {t('brandName')} (Google Maps)
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>© {currentYear} {t('copyright')}</p>
          <p className="footer-heart">
            <span>{t('footerHeart')}</span> <Heart size={14} color="#E8B7B5" fill="#E8B7B5" />
          </p>
        </div>
      </div>
    </footer>
  );
}
