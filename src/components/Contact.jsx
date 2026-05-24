import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1200);
  };

  const contactChannels = [
    { icon: <Mail size={18} />, title: 'Email', value: 'ashmildax15@gmail.com', subValue: 'Best way to reach me', href: 'mailto:ashmildax15@gmail.com' },
    { icon: <Phone size={18} />, title: 'Phone', value: '+91 938 341 2745', subValue: 'Available most days', href: 'tel:+919383412745' },
    { icon: <MapPin size={18} />, title: 'Dev Setup', value: 'Fedora OS // Hyprland', subValue: 'My daily workstation', href: '#' },
    { icon: <GithubIcon size={18} />, title: 'Github', value: 'github.com/ashmilgit15', subValue: 'My projects & code', href: 'https://github.com/ashmilgit15' }
  ];

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title reveal">Contact</h2>

        <div className="contact-grid reveal">
          {/* Left Column: Direct Channels */}
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 600, color: 'var(--text-primary)' }}>
              Let’s connect
            </h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '1.025rem', lineHeight: '1.75' }}>
              Whether you have a project idea, want to collaborate on something, or just want to chat about web dev, apps, or AI — feel free to reach out through any of the channels below.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem' }}>
              {contactChannels.map((channel, idx) => (
                <a
                  key={idx}
                  href={channel.href}
                  target={channel.href !== '#' ? '_blank' : undefined}
                  rel="noreferrer"
                  className="contact-card hover-border-trigger"
                >
                  <div className="contact-card-icon-container">
                    {channel.icon}
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-dimmer)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {channel.title}
                    </h4>
                    <p className="contact-card-value">
                      {channel.value}
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-dimmer)', marginTop: '0.05rem' }}>
                      {channel.subValue}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Message Dispatch Form */}
          <div className="reveal delay-200" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            
            {submitted ? (
              <div className="glass-card contact-success-card">
                <CheckCircle2 size={48} style={{ color: 'var(--accent-cobalt)' }} />
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    Message Sent
                  </h3>
                  <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '340px', margin: '0 auto' }}>
                    Your message has been received. I’ll get back to you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ fontSize: '0.8rem', marginTop: '1rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card contact-form">
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  Send a Message
                </h3>
                
                {/* Sender Name */}
                <div className="form-group">
                  <label htmlFor="name-input" className="form-label">
                    Your Name
                  </label>
                  <input
                    id="name-input"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter name / organization"
                    className="form-input"
                  />
                </div>

                {/* Sender Email */}
                <div className="form-group">
                  <label htmlFor="email-input" className="form-label">
                    Your Email
                  </label>
                  <input
                    id="email-input"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter email address"
                    className="form-input"
                  />
                </div>

                {/* Message Content */}
                <div className="form-group">
                  <label htmlFor="message-input" className="form-label">
                    Message Content
                  </label>
                  <textarea
                    id="message-input"
                    name="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell me about your project, idea, or question..."
                    className="form-input"
                    style={{ resize: 'none' }}
                  />
                </div>

                {/* Submit Trigger */}
                <button
                  type="submit"
                  disabled={loading}
                  className={`btn-submit ${loading ? 'loading' : ''}`}
                  style={{
                    marginTop: '0.5rem'
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', zIndex: 2 }}>
                    {loading ? 'Sending...' : 'Send Message'}
                    {!loading && <Send size={14} />}
                  </span>
                  <div className="loading-bar" style={{ width: loading ? '100%' : '0%' }} />
                </button>
              </form>
            )}

          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 5rem;
          align-items: flex-start;
          margin-top: 2rem;
        }
        .contact-card {
          padding: 1.25rem;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          transition: var(--transition-smooth);
          background: var(--bg-card);
          border: 1px solid var(--grid-border);
        }
        .contact-card:hover {
          border-color: var(--grid-border-highlight);
          background: var(--bg-card-hover);
        }
        .contact-card-icon-container {
          width: 42px;
          height: 42px;
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          background: var(--bg-deep);
          flex-shrink: 0;
        }
        .contact-card-value {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-top: 0.15rem;
          word-break: break-all;
          overflow-wrap: anywhere;
        }
        .contact-form {
          padding: 2.5rem;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: left;
        }
        .contact-success-card {
          padding: 3.5rem 2rem;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          flex: 1;
          text-align: center;
          background: rgba(37, 99, 235, 0.02);
          border: 1px solid rgba(37, 99, 235, 0.2);
          animation: fadeInScale 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--text-dimmer);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color var(--transition-fast);
        }
        .form-group:focus-within .form-label {
          color: var(--accent-cobalt);
        }
        .form-input {
          width: 100%;
          background: var(--bg-card);
          border: 1px solid var(--grid-border);
          border-radius: 4px;
          padding: 0.95rem 1.125rem;
          color: var(--text-primary);
          font-size: 16px;
          outline: none;
          transition: border-color var(--transition-fast), background var(--transition-fast), outline var(--transition-fast);
        }
        .form-input:focus {
          border-color: var(--accent-cobalt);
          background: var(--bg-card-hover);
          outline: 2px solid var(--accent-cobalt);
          outline-offset: -1px;
        }
        /* Custom styled autofilled states to match dark palette */
        .form-input:autofill,
        .form-input:-webkit-autofill {
          border: 1px solid var(--grid-border);
          -webkit-text-fill-color: var(--text-primary) !important;
          box-shadow: 0 0 0 1000px var(--bg-card) inset !important;
          transition: background-color 5000s ease-in-out 0s;
        }
        .form-input:autofill:focus,
        .form-input:-webkit-autofill:focus {
          border-color: var(--accent-cobalt) !important;
          outline: 2px solid var(--accent-cobalt) !important;
          outline-offset: -1px !important;
        }
        .btn-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 0.95rem 2rem;
          font-size: 0.875rem;
          font-weight: 700;
          border-radius: 4px;
          cursor: pointer;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          background: var(--accent-cobalt);
          color: #ffffff;
          border: 1px solid var(--accent-cobalt);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          width: max-content;
        }
        .btn-submit:hover:not(:disabled) {
          background: #1d4ed8;
          border-color: #1d4ed8;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
        }
        .btn-submit:active:not(:disabled) {
          transform: translateY(0);
        }
        .btn-submit:disabled {
          background: rgba(37, 99, 235, 0.3);
          border-color: var(--grid-border);
          color: var(--text-dimmer);
          cursor: not-allowed;
        }
        .btn-submit .loading-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: #60a5fa;
          transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
        }
        @media (max-width: 576px) {
          .contact-grid {
            gap: 2.5rem;
            margin-top: 1rem;
          }
          .contact-card {
            padding: 1rem;
            gap: 1rem;
          }
          .contact-card-icon-container {
            width: 38px;
            height: 38px;
          }
          .contact-card-value {
            font-size: 0.875rem;
          }
          .contact-form {
            padding: 1.5rem 1.25rem;
            gap: 1.25rem;
          }
          .contact-success-card {
            padding: 2.5rem 1.25rem;
            gap: 1.25rem;
          }
          .btn-submit {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
