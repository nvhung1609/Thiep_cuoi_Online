import React, { useState } from 'react';
import EnvelopeModal from './components/EnvelopeModal';
import SparkleCursor from './components/SparkleCursor';
import PetalsCanvas from './components/PetalsCanvas';
import AudioPlayer from './components/AudioPlayer';
import MobileNavBar from './components/MobileNavBar';
import Hero from './components/Hero';
import ParentsAndCouple from './components/ParentsAndCouple';
import InvitationSection from './components/InvitationSection';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import Timeline from './components/Timeline';
import PhotoGallery from './components/PhotoGallery';
import RSVPAndGuestbook from './components/RSVPAndGuestbook';
import GiftRegistry from './components/GiftRegistry';
import ThankYouNote from './components/ThankYouNote';

export default function App() {
  const [petalsActive, setPetalsActive] = useState(true);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans relative selection:bg-amber-800 selection:text-white pb-14 md:pb-0">
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
      <main>
        <Hero />
        <ParentsAndCouple />
        <InvitationSection />
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
