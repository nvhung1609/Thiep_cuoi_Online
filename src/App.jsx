import React, { useState, useEffect } from 'react';
import EnvelopeModal from './components/EnvelopeModal';
import SparkleCursor from './components/SparkleCursor';
import PetalsCanvas from './components/PetalsCanvas';
import AudioPlayer from './components/AudioPlayer';
import MobileNavBar from './components/MobileNavBar';
import Hero from './components/Hero';
import ParentsAndCouple from './components/ParentsAndCouple';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import Timeline from './components/Timeline';
import PhotoGallery from './components/PhotoGallery';
import RSVPAndGuestbook from './components/RSVPAndGuestbook';
import GiftRegistry from './components/GiftRegistry';
import ThankYouNote from './components/ThankYouNote';

export default function App() {
  const [petalsActive, setPetalsActive] = useState(true);

  useEffect(() => {
    // Always force website to start at the top on load/refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Security Protection: Disable Right Click & DevTools shortcuts (F12, Ctrl+Shift+I/J, Ctrl+U)
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || // Ctrl+Shift+I, Ctrl+Shift+J
        (e.ctrlKey && e.keyCode === 85) // Ctrl+U
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-stone-50 text-stone-900 font-sans relative selection:bg-amber-800 selection:text-white pb-14 md:pb-0">
      {/* Interactive Envelope Modal */}
      <EnvelopeModal />

      {/* Golden Cursor Sparkles Effect */}
      <SparkleCursor />

      {/* Falling Sakura / Champagne Petals Canvas Effect */}
      <PetalsCanvas active={petalsActive} />

      {/* Floating Controls (Audio & Petals toggle) */}
      <AudioPlayer petalsActive={petalsActive} setPetalsActive={setPetalsActive} />

      {/* Mobile Sticky Quick Navigation Bar */}
      <MobileNavBar />

      {/* Page Sections */}
      <main className="w-full max-w-full overflow-x-hidden">
        <Hero />
        <ParentsAndCouple />
        <Countdown />
        <EventDetails />
        <Timeline />
        <PhotoGallery />
        <RSVPAndGuestbook />
        <GiftRegistry />
      </main>

      {/* Thank you note & Footer */}
      <ThankYouNote />
    </div>
  );
}
