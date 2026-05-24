import React, { useEffect } from 'react';
import Background from './components/Background';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  // IntersectionObserver to orchestrate smooth, premium scroll reveals
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.12
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app">
      {/* Precision cursor trailer */}
      <CustomCursor />
      
      {/* High-performance canvas backdrop */}
      <Background />

      {/* Glassmorphic responsive header */}
      <Navbar />

      {/* Main presentation content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Precision systems footer */}
      <footer
        style={{
          padding: '5rem 0',
          textAlign: 'center',
          borderTop: '1px solid var(--grid-border)',
          position: 'relative',
          zIndex: 10,
          background: 'var(--bg-deep)'
        }}
      >
        <div className="container">
          <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.05em', fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} ASHMIL P. // WEB, APP & AI DEVELOPER.
          </p>
          <p style={{ color: 'var(--text-dimmer)', fontSize: '0.7rem', marginTop: '0.5rem', fontFamily: 'var(--font-mono)' }}>
            BUILT WITH VITE + REACT // DESIGNED BY ASHMIL
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
