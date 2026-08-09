import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, ChevronDown } from 'lucide-react';
import './LanguageSelector.css';

export default function LanguageSelector({ isMobile = false }) {
  const { lang, setLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef(null);

  const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷', short: 'FR' },
    { code: 'en', label: 'English', flag: '🇬🇧', short: 'EN' },
    { code: 'ar', label: 'العربية', flag: '🇲🇦', short: 'AR' },
  ];

  const currentLangObj = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (isMobile) {
    return (
      <div className="lang-bar-mobile">
        <span className="lang-mobile-title">
          <Globe size={16} />
          <span>Langue / Language / اللغة :</span>
        </span>
        <div className="lang-mobile-pills">
          {languages.map((l) => (
            <button
              key={l.code}
              className={`lang-pill ${lang === l.code ? 'active' : ''}`}
              onClick={() => setLanguage(l.code)}
            >
              <span>{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="lang-selector-container" ref={containerRef}>
      <button
        className="lang-trigger-btn"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-label="Sélectionner la langue"
        aria-expanded={dropdownOpen}
      >
        <span className="lang-flag">{currentLangObj.flag}</span>
        <span className="lang-short">{currentLangObj.short}</span>
        <ChevronDown size={14} className={`lang-chevron ${dropdownOpen ? 'open' : ''}`} />
      </button>

      {dropdownOpen && (
        <div className="lang-dropdown-menu">
          {languages.map((l) => (
            <button
              key={l.code}
              className={`lang-dropdown-item ${lang === l.code ? 'active' : ''}`}
              onClick={() => {
                setLanguage(l.code);
                setDropdownOpen(false);
              }}
            >
              <span className="item-flag">{l.flag}</span>
              <span className="item-label">{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
