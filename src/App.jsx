import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Grandir from './components/Grandir';
import Seveiller from './components/Seveiller';
import Gallery from './components/Gallery';
import Silluminer from './components/Silluminer';
import Visites from './components/Visites';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import FloralSeparator from './components/FloralSeparator';

export default function App() {
  return (
    <LanguageProvider>
      <div className="app-root">
        <Header />
        <main>
          <Hero />
          <FloralSeparator />
          <Grandir />
          <FloralSeparator />
          <Seveiller />
          <FloralSeparator />
          <Gallery />
          <FloralSeparator />
          <Silluminer />
          <FloralSeparator />
          <Visites />
          <FloralSeparator />
          <Contact />
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </LanguageProvider>
  );
}
