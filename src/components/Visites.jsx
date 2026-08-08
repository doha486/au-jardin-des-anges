import React, { useState } from 'react';
import { Calendar, Clock, MessageCircle, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import './Visites.css';

export default function Visites() {
  const [selectedDay, setSelectedDay] = useState('Mardi');
  const [selectedTime, setSelectedTime] = useState('16h00');

  const days = ['Mardi', 'Jeudi'];
  const times = ['16h00', '16h30'];

  const getWhatsAppBookingUrl = () => {
    const text = `Bonjour,%20je%20souhaite%20réserver%20une%20visite%20pour%20mon%20enfant%20le%20${selectedDay}%20à%20${selectedTime}%20au%20Jardin%20des%20Anges%20🌿`;
    return `https://wa.me/212628681664?text=${text}`;
  };

  const getEmailBookingUrl = () => {
    const subject = `Demande%20de%20visite%20%E2%80%94%20${selectedDay}%20%C3%A0%20${selectedTime}`;
    const body = `Bonjour,%0A%0AJe%20souhaite%20demander%20un%20rendez-vous%20de%20visite%20pour%20mon%20enfant%20le%20${selectedDay}%20à%20${selectedTime}.%0A%0AMerci%20de%20me%20confirmer%20votre%20disponibilité.%0A%0ACordialement.`;
    return `mailto:aujardindesangescreche@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="visites-section" id="visites">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <Calendar size={16} color="#7D826C" />
            <span>Visiter la Crèche</span>
          </div>

          <h2 className="section-title">Heures de Visite sur Rendez-vous</h2>

          <p className="section-subtitle">
            Nous avons hâte de vous faire découvrir nos locaux et notre équipe. 
            Sélectionnez le créneau qui vous convient le mieux (Mardi & Jeudi à 16h00 ou 16h30).
          </p>
        </div>

        {/* Mini Appointment Card */}
        <div className="rendezvous-card card">
          <div className="rdv-card-header">
            <div className="rdv-icon-badge">
              <Sparkles size={24} color="#D6B06B" />
            </div>
            <div>
              <h3 className="rdv-title">Carte Rendez-Vous Visite</h3>
              <p className="rdv-sub">Sélection rapide de votre créneau préféré</p>
            </div>
          </div>

          <div className="rdv-body">
            
            {/* Day Selector */}
            <div className="rdv-field-group">
              <label className="rdv-label">
                <Calendar size={18} />
                <span>1. Choisissez le jour :</span>
              </label>
              <div className="rdv-options-grid">
                {days.map((day) => (
                  <button
                    key={day}
                    className={`rdv-chip ${selectedDay === day ? 'selected' : ''}`}
                    onClick={() => setSelectedDay(day)}
                  >
                    <span>{day}</span>
                    {selectedDay === day && <CheckCircle2 size={16} className="chip-check" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slot Selector (16h00 & 16h30) */}
            <div className="rdv-field-group">
              <label className="rdv-label">
                <Clock size={18} />
                <span>2. Choisissez l'heure (16h00 ou 16h30) :</span>
              </label>
              <div className="rdv-options-grid">
                {times.map((time) => (
                  <button
                    key={time}
                    className={`rdv-chip ${selectedTime === time ? 'selected' : ''}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    <span>{time}</span>
                    {selectedTime === time && <CheckCircle2 size={16} className="chip-check" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Summary preview box */}
            <div className="rdv-summary-box">
              <p className="summary-text">
                📍 Votre visite souhaitée : <strong>{selectedDay} à {selectedTime}</strong>
              </p>
            </div>

            {/* Direct Booking CTA */}
            <div className="rdv-actions">
              <a 
                href={getWhatsAppBookingUrl()}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary rdv-btn"
              >
                <MessageCircle size={20} />
                <span>Réserver ce créneau via WhatsApp</span>
              </a>

              <a 
                href={getEmailBookingUrl()}
                className="btn btn-secondary rdv-btn"
              >
                <Mail size={18} />
                <span>Demander par email</span>
              </a>
            </div>

          </div>

          <div className="rdv-footer-info">
            <p>
              💡 <em>Les visites sont individuelles afin de consacrer tout notre temps à répondre à vos questions et à échanger sur votre enfant.</em>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
