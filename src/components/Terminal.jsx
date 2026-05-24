import { useState, useRef, useEffect } from 'react';

const Terminal = () => {
  const [history, setHistory] = useState([
    { text: 'Ashmil P // Dev Shell v3.2.0 initialized.', type: 'info' },
    { text: 'Type "help" to view active command routes.', type: 'accent' },
    { text: '', type: 'space' }
  ]);
  const [input, setInput] = useState('');
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const focusInput = (e) => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim() !== '') {
      return;
    }
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
      return;
    }
    inputRef.current?.focus();
  };

  const handleFocus = () => {
    setTimeout(() => {
      scrollToBottom();
    }, 150);
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const trimmedInput = input.trim().toLowerCase();
      const currentPrompt = `visitor@ashmil:~$ ${input}`;
      
      const newHistory = [...history, { text: currentPrompt, type: 'prompt' }];

      if (trimmedInput) {
        switch (trimmedInput) {
          case 'help':
            newHistory.push(
              { text: 'Available commands:', type: 'info' },
              { text: '  about     - Developer profile', type: 'text' },
              { text: '  skills    - Technical capabilities', type: 'text' },
              { text: '  projects  - Shipped projects index', type: 'text' },
              { text: '  contact   - Contact info', type: 'text' },
              { text: '  audit     - Run status check', type: 'text' },
              { text: '  clear     - Clear terminal', type: 'text' }
            );
            break;
            
          case 'about':
            newHistory.push(
              { text: 'Profile: Ashmil P', type: 'accent' },
              { text: 'Status : Student // Creative Developer // Coding Hobbyist & AI Project Builder', type: 'text' },
              { text: 'Specs  : Building automated media rendering queues, autonomous AI agent workflows, and fluid responsive frontend interfaces with mathematical vector fields and clean design.', type: 'text' }
            );
            break;
            
          case 'skills':
            newHistory.push(
              { text: 'Technical Capabilities Matrix:', type: 'accent' },
              { text: '  * AI & ML Automation   - Dynamic repurposing workflows, multi-agent frameworks, semantic APIs', type: 'text' },
              { text: '  * Full-Stack Web       - Next.js, React, Node.js, Vercel, responsive Swiss layouts', type: 'text' },
              { text: '  * Media Render Engines - Automated video rendering pipelines via FFmpeg, Redis, & Celery', type: 'text' },
              { text: '  * Platform Integration - Rust Tauri core, native Android SDK, Kotlin Room/SQLite local DBs', type: 'text' }
            );
            break;
            
          case 'projects':
            newHistory.push(
              { text: 'Projects:', type: 'accent' },
              { text: '  1. Repurpose.ai       - AI content transformation SaaS platform.', type: 'text' },
              { text: '  2. AI Frontier 2026   - A futuristic AGI research platform and agent directory.', type: 'text' },
              { text: '  3. YT Automation      - Private YouTube channel automated production dashboard.', type: 'text' },
              { text: '  4. YT Video Gen       - Vertical video AI Shorts generator with FFmpeg render core.', type: 'text' },
              { text: '  5. Hello Doctor       - Continuous medical care platform for chronic conditions.', type: 'text' },
              { text: '  6. Hello Doctor Portal - Secure patients vitals logger and care dashboard.', type: 'text' }
            );
            break;
            
          case 'contact':
            newHistory.push(
              { text: 'Communication Coordinates:', type: 'accent' },
              { text: '  Email   : ashmildax15@gmail.com', type: 'text' },
              { text: '  Phone   : +91 9383412745', type: 'text' },
              { text: '  Github  : github.com/ashmilgit15', type: 'text' }
            );
            break;
            
          case 'audit':
            newHistory.push(
              { text: 'Running checks...', type: 'warning' },
              { text: 'STATUS: ALL GOOD // PORTFOLIO ONLINE', type: 'success' }
            );
            break;
            
          case 'clear':
            setHistory([]);
            setInput('');
            return;
            
          default:
            newHistory.push({ text: `sh: command not found: ${trimmedInput}. Type "help" for active routes.`, type: 'error' });
            break;
        }
      }
      
      newHistory.push({ text: '', type: 'space' });
      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <>
      <style>{`
        .terminal-container {
          width: 100%;
          max-width: 750px;
          margin: 2rem auto;
          overflow: hidden;
          box-shadow: none;
          border-radius: 4px;
          border: 1px solid var(--grid-border);
          cursor: text;
          font-family: var(--font-mono);
          box-sizing: border-box;
          background: rgba(12, 12, 16, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .terminal-header {
          background: #0c0c10;
          border-bottom: 1px solid var(--grid-border);
          padding: 0.75rem 1.25rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-sizing: border-box;
          width: 100%;
        }

        .terminal-dots {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .terminal-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #22222b;
          border: 1px solid rgba(255, 255, 255, 0.03);
          position: relative;
          transition: background-color 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.15s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .terminal-dot:active {
          transform: scale(0.92);
        }

        .terminal-dots:hover .terminal-dot-close {
          background-color: #ff5f56;
          border-color: #e0443e;
        }
        .terminal-dots:hover .terminal-dot-minimize {
          background-color: #ffbd2e;
          border-color: #dfa224;
        }
        .terminal-dots:hover .terminal-dot-maximize {
          background-color: #27c93f;
          border-color: #1aab2f;
        }

        .terminal-dot::before {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 8px;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.55);
          opacity: 0;
          transition: opacity 0.2s ease;
          position: absolute;
          line-height: 1;
        }

        .terminal-dots:hover .terminal-dot-close::before {
          content: '×';
          opacity: 1;
        }
        .terminal-dots:hover .terminal-dot-minimize::before {
          content: '−';
          opacity: 1;
          top: 0px;
        }
        .terminal-dots:hover .terminal-dot-maximize::before {
          content: '+';
          opacity: 1;
          font-size: 7px;
        }

        .terminal-title {
          font-size: 0.725rem;
          color: var(--text-dimmer);
          letter-spacing: 0.08em;
          font-weight: 600;
          text-transform: uppercase;
        }

        .terminal-body {
          padding: 1.5rem;
          height: 320px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          font-size: 0.85rem;
          line-height: 1.7;
          text-align: left;
          box-sizing: border-box;
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
          width: 100%;
        }

        .terminal-body::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .terminal-body::-webkit-scrollbar-track {
          background: transparent;
        }
        .terminal-body::-webkit-scrollbar-thumb {
          background: rgba(49, 49, 62, 0.4);
          border-radius: 3px;
        }
        .terminal-body::-webkit-scrollbar-thumb:hover {
          background: var(--accent-cobalt);
        }

        .terminal-log {
          white-space: pre-wrap;
          word-wrap: break-word;
          overflow-wrap: anywhere;
          box-sizing: border-box;
          width: 100%;
        }

        .terminal-prompt-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          color: var(--text-primary);
          font-weight: bold;
          box-sizing: border-box;
          width: 100%;
        }

        .terminal-prompt-prefix {
          margin-right: 8px;
          color: var(--text-dimmer);
          white-space: nowrap;
          flex-shrink: 0;
          display: inline-flex;
        }

        .prefix-medium,
        .prefix-short {
          display: none;
        }

        .terminal-input {
          flex: 1;
          background-color: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          min-width: 0;
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          caret-color: var(--accent-cobalt, #58a6ff);
        }

        @media (max-width: 768px) {
          .terminal-container {
            margin: 1.5rem auto;
          }
          .terminal-body {
            padding: 1.25rem;
            height: 290px;
            font-size: 15px;
          }
          .terminal-input {
            font-size: 16px;
          }
          .terminal-header {
            padding: 0.65rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .terminal-container {
            margin: 0.75rem auto;
          }
          .terminal-body {
            padding: 1rem;
            height: 270px;
          }
          .prefix-full {
            display: none;
          }
          .prefix-medium {
            display: inline;
          }
        }

        @media (max-width: 360px) {
          .prefix-medium {
            display: none;
          }
          .prefix-short {
            display: inline;
          }
        }
      `}</style>
      
      <div
        onClick={focusInput}
        className="terminal-container glass-card"
      >
        {/* Header Bar */}
        <div className="terminal-header">
          <div className="terminal-dots">
            <div className="terminal-dot terminal-dot-close" />
            <div className="terminal-dot terminal-dot-minimize" />
            <div className="terminal-dot terminal-dot-maximize" />
          </div>
          <div className="terminal-title">sh — ashmil</div>
          <div style={{ width: '48px' }} />
        </div>

        {/* Terminal Body */}
        <div
          ref={terminalBodyRef}
          className="terminal-body"
        >
          {history.map((log, idx) => {
            let color = 'var(--text-primary)';
            let fontWeight = 'normal';
            
            if (log.type === 'info') color = 'var(--text-primary)';
            else if (log.type === 'accent') color = 'var(--accent-cobalt)';
            else if (log.type === 'prompt') {
              color = 'var(--text-primary)';
              fontWeight = 'bold';
            }
            else if (log.type === 'error') color = '#ef4444';
            else if (log.type === 'warning') color = '#d97706';
            else if (log.type === 'success') color = '#10b981';
            else if (log.type === 'text') color = 'var(--text-dim)';
            
            return (
              <div
                key={idx}
                className="terminal-log"
                style={{ color, fontWeight, minHeight: log.type === 'space' ? '12px' : 'auto' }}
              >
                {log.text}
              </div>
            );
          })}
          
          {/* Terminal active prompt */}
          <div className="terminal-prompt-row">
            <span className="terminal-prompt-prefix">
              <span className="prefix-full">visitor@ashmil:~$</span>
              <span className="prefix-medium">visitor:~$</span>
              <span className="prefix-short">~$</span>
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              onFocus={handleFocus}
              className="terminal-input"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              autoFocus
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Terminal;
