import React from 'react';
import { MessageCircle, Mail, Heart, ShieldCheck, Sun, Instagram } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const whatsappUrl = "https://wa.me/212628681664?text=Bonjour,%20je%20souhaite%20avoir%20plus%20d'informations%20sur%20Au%20jardin%20des%20anges%20🌿";
  const mailtoUrl = "mailto:aujardindesangescreche@gmail.com?subject=Demande%20d'information%20%E2%80%94%20Au%20jardin%20des%20anges";
  const instagramUrl = "https://www.instagram.com/au.jardin.des.anges?igsh=MTJrZDgwMGd3b3c0aw==";

  return (
    <section className="hero" id="hero">
      
      {/* Background Subtle Soft Glowing Halos */}
      <div className="hero-bg-decor" aria-hidden="true">
        <div className="halo-glow halo-top-left"></div>
        <div className="halo-glow halo-bottom-right"></div>
      </div>

      <div className="container hero-container">
        
        {/* Cherubs Illustration Showcase — Clean Artwork on Soft Beige Background */}
        <div className="hero-cherubs-wrapper animate-float">
          <div className="cherubs-img-container">
            <img 
              src="/angels.png" 
              alt="Les petits angelots du Jardin des Anges" 
              className="hero-cherubs-img"
            />
          </div>
        </div>

        {/* Brand Title & Slogan */}
        <div className="hero-content">
          
          <h1 className="hero-title">
            AU JARDIN DES ANGES
          </h1>

          <p className="hero-slogan">
            <span>Grandir</span>
            <span className="slogan-sep">•</span>
            <span>S'éveiller</span>
            <span className="slogan-sep">•</span>
            <span>S'illuminer</span>
          </p>

          <div className="subtitle-badge">
            <span className="badge-dot"></span>
            <span>Crèche & pouponnière privée · 3 mois à 4 ans</span>
          </div>

          <p className="hero-description">
            Bienvenue dans notre havre de paix dédié au tout-petit. Nous offrons à votre enfant un cocon chaleureux, 
            sécurisant et stimulant où chaque journée est une douce aventure faite d'éveil, de rires et de bienveillance.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary hero-btn"
            >
              <MessageCircle size={20} />
              <span>Discuter sur WhatsApp</span>
            </a>

            <a 
              href={mailtoUrl} 
              className="btn btn-secondary hero-btn"
            >
              <Mail size={18} />
              <span>Nous écrire par email</span>
            </a>
          </div>

          {/* Social link */}
          <div className="hero-social-pill">
            <a 
              href={instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="instagram-hero-link"
            >
              <Instagram size={18} color="#E1306C" />
              <span>Suivez nos doux moments sur Instagram @au.jardin.des.anges</span>
            </a>
          </div>

          {/* Trust Pillars */}
          <div className="hero-pillars">
            <div className="pillar-item">
              <div className="pillar-icon" style={{ backgroundColor: 'var(--rose-powder)', color: 'var(--text-main)' }}>
                <Heart size={18} />
              </div>
              <span>Sécurité affective</span>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon" style={{ backgroundColor: 'var(--blue-sky)', color: 'var(--text-main)' }}>
                <Sun size={18} />
              </div>
              <span>Éveil sensoriel</span>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon" style={{ backgroundColor: 'var(--green-sage)', color: 'var(--green-olive)' }}>
                <ShieldCheck size={18} />
              </div>
              <span>Cadre bienveillant</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
