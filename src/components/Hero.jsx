import React, { useState, useEffect } from 'react';
import Terminal from './Terminal';
import { ArrowRight, Terminal as TerminalIcon } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const phrases = [
    'Web Developer.',
    'App Developer.',
    'AI Automation Expert.',
    'Full-Stack Software Engineer.'
  ];
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[phraseIdx];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, charIdx - 1));
        setCharIdx(prev => prev - 1);
        setSpeed(35); // faster deleting
      }, speed);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentPhrase.substring(0, charIdx + 1));
        setCharIdx(prev => prev + 1);
        setSpeed(75); // deliberate typing speed
      }, speed);
    }

    if (!isDeleting && charIdx === currentPhrase.length) {
      timer = setTimeout(() => setIsDeleting(true), 2500); // longer pause at end
    } 
    else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setPhraseIdx(prev => (prev + 1) % phrases.length);
      setSpeed(180); // pause before starting next
    }

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, phraseIdx]);

  return (
    <section id="home" style={{ justifyContent: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="container hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'center', zIndex: 10 }}>
        {/* Editorial Hero Copy */}
        <div style={{ textAlign: 'left' }} className="reveal hero-copy">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--accent-cobalt-muted)',
              border: '1px solid var(--grid-border)',
              padding: '0.4rem 0.85rem',
              borderRadius: '20px',
              color: 'var(--accent-cobalt)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              marginBottom: '2rem'
            }}
          >
            <TerminalIcon size={12} />
            PORTFOLIO://ASHMIL-P.DEV
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 6vw, 4.25rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              marginBottom: '0.75rem',
              color: 'var(--text-primary)'
            }}
          >
            Hi, I'm <span className="gradient-text" style={{ fontStyle: 'italic', fontWeight: 600 }}>Ashmil P.</span>
          </h1>

          <div className="hero-typewriter">
            <span>
              {typedText}
              <span className="cursor-blink" style={{ color: 'var(--accent-cobalt)', fontWeight: 'bold' }}>|</span>
            </span>
          </div>

          <p
            style={{
              color: 'var(--text-dim)',
              fontSize: '1.1rem',
              lineHeight: '1.75',
              maxWidth: '540px',
              marginBottom: '2.5rem'
            }}
          >
            Building websites, apps, and AI-powered tools — from content repurposing platforms and automated video pipelines to startup client portals and creative side projects.
          </p>

          <div className="hero-buttons-container" style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary hero-btn" style={{ borderRadius: '2px' }}>
              Explore Shipped Work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary hero-btn" style={{ borderRadius: '2px' }}>
              Get In Touch
            </a>
          </div>
        </div>

        {/* Systems Terminal Interface */}
        <div className="reveal delay-200 terminal-column" style={{ display: 'flex', justifyContent: 'center' }}>
          <Terminal />
        </div>
      </div>

      <style>{`
        @keyframes cursorBlink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor-blink {
          animation: cursorBlink 1s step-end infinite;
        }
        .hero-typewriter {
          font-size: clamp(1.3rem, 3.8vw, 2.3rem);
          color: var(--text-dim);
          font-family: var(--font-sans);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.25;
          min-height: 1.25em;
          margin-bottom: 2rem;
          display: flex;
          align-items: flex-start;
          text-align: left;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
        }
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .hero-copy {
            text-align: left !important;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          .hero-typewriter {
            min-height: 2.5em; /* Reserves space for wrapped typewriter text on mobile, preventing layout shift */
          }
          #home p {
            margin-left: 0 !important;
            margin-right: auto !important;
            text-align: left;
          }
          .hero-buttons-container {
            justify-content: flex-start !important;
            width: 100%;
          }
        }
        @media (max-width: 480px) {
          .hero-grid {
            gap: 2rem !important;
          }
          .hero-buttons-container {
            flex-direction: column;
            width: 100%;
            gap: 0.85rem !important;
          }
          .hero-btn {
            width: 100% !important;
            text-align: center;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
