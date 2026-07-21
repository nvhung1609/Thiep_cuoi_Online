import React, { useEffect } from 'react';

export default function SparkleCursor() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (Math.random() > 0.4) return; // Throttle sparkles

      const sparkle = document.createElement('div');
      sparkle.className = 'fixed pointer-events-none z-50 rounded-full bg-amber-300 shadow-md';
      
      const size = Math.random() * 6 + 3;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.left = `${e.clientX}px`;
      sparkle.style.top = `${e.clientY}px`;
      sparkle.style.boxShadow = '0 0 10px #d4af37';
      sparkle.style.transition = 'all 0.8s ease-out';
      sparkle.style.opacity = '1';

      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.style.transform = `translate(${(Math.random() - 0.5) * 30}px, ${Math.random() * -40 - 20}px) scale(0)`;
        sparkle.style.opacity = '0';
      }, 20);

      setTimeout(() => {
        sparkle.remove();
      }, 850);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
}
