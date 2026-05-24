import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#home' },
    { name: 'Journey', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'var(--transition-smooth)',
        background: scrolled ? 'rgba(8, 8, 10, 0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--grid-border)' : '1px solid transparent',
        padding: scrolled ? '1rem 0' : '2rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Crisp Monospace Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '0.08em',
              color: 'var(--text-primary)'
            }}
          >
            ASHMIL P. // <span style={{ color: 'var(--accent-cobalt)' }}>CREATIVE DEV</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-only">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-item"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 500,
                color: 'var(--text-dim)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                position: 'relative'
              }}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn btn-secondary" 
            style={{ 
              padding: '0.4rem 1rem', 
              borderRadius: '2px', 
              fontSize: '0.75rem',
              borderColor: 'var(--grid-border-highlight)'
            }}
          >
            CONTACT ME
          </a>
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            cursor: 'pointer',
            zIndex: 1100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            padding: 0,
            border: 'none',
            background: 'transparent',
            color: 'var(--text-primary)',
            transition: 'var(--transition-fast)',
            marginRight: '-8px'
          }}
          className="mobile-only"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '24px',
            height: '24px',
            position: 'relative'
          }}>
            <span style={{
              width: '20px',
              height: '2px',
              backgroundColor: 'currentColor',
              position: 'absolute',
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), top 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              top: isOpen ? '11px' : '6px',
              transform: isOpen ? 'rotate(45deg)' : 'none'
            }} />
            <span style={{
              width: '20px',
              height: '2px',
              backgroundColor: 'currentColor',
              position: 'absolute',
              transition: 'opacity 0.2s ease',
              opacity: isOpen ? 0 : 1,
              top: '11px'
            }} />
            <span style={{
              width: '20px',
              height: '2px',
              backgroundColor: 'currentColor',
              position: 'absolute',
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), bottom 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              bottom: isOpen ? '11px' : '6px',
              transform: isOpen ? 'rotate(-45deg)' : 'none'
            }} />
          </div>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            height: '100vh',
            width: '100vw',
            background: 'rgba(12, 13, 18, 0.98)',
            borderLeft: '1px solid var(--grid-border)',
            zIndex: 1050,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1.25rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                padding: '0.75rem 2rem',
                width: '100%',
                textAlign: 'center',
                display: 'block'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn btn-primary"
            style={{ marginTop: '1.5rem', width: '220px', borderRadius: '2px', minHeight: '48px' }}
          >
            CONTACT ME
          </a>
        </div>
      )}

      <style>{`
        .desktop-only {
          display: flex;
        }
        .mobile-only {
          display: none;
        }
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--accent-cobalt);
          transition: var(--transition-fast);
        }
        .nav-item:hover {
          color: var(--text-primary);
        }
        .nav-item:hover::after {
          width: 100%;
        }
        .mobile-nav-link {
          transition: var(--transition-fast);
        }
        .mobile-nav-link:hover, .mobile-nav-link:active {
          color: var(--accent-cobalt) !important;
          background: rgba(59, 130, 246, 0.05);
        }
        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
