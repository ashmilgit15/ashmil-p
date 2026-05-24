import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    const addHoverListeners = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"], .interactive-card, input, textarea');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => setHovered(true));
        el.addEventListener('mouseleave', () => setHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    addHoverListeners();

    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let animationFrameId;
    
    const updateTrail = () => {
      setTrail((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.2, // Faster, tighter follow
          y: prev.y + dy * 0.2
        };
      });
      animationFrameId = requestAnimationFrame(updateTrail);
    };

    updateTrail();

    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (hidden) return null;

  return (
    <>
      {/* Precision Core Pixel Dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '4px',
          height: '4px',
          backgroundColor: '#ffffff',
          transform: `translate3d(${position.x - 2}px, ${position.y - 2}px, 0)`,
          pointerEvents: 'none',
          zIndex: 9999
        }}
      />
      
      {/* Precision Structural Square Reticle */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: hovered ? '24px' : '16px',
          height: hovered ? '24px' : '16px',
          border: hovered ? '1px solid var(--accent-cobalt)' : '1px solid #3f3f46',
          transform: `translate3d(${trail.x - (hovered ? 12 : 8)}px, ${trail.y - (hovered ? 12 : 8)}px, 0)`,
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.15s, height 0.15s, border-color 0.15s'
        }}
      />
    </>
  );
};

export default CustomCursor;
