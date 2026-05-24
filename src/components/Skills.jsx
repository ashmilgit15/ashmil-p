import React from 'react';
import { Globe, Brain, Video, Smartphone } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <Globe size={28} style={{ color: 'var(--accent-cobalt)' }} />,
      title: 'Full-Stack Engineering',
      desc: 'Designing and building robust, low-latency web environments and modular API designs. Specializing in high-fidelity React interfaces, highly optimized backend schemas, and high-performance server structures.',
      stack: ['React / Vite', 'Node.js', 'PostgreSQL', 'TypeScript', 'REST / Sockets'],
      color: 'var(--accent-cobalt)',
      bgMuted: 'var(--accent-cobalt-muted)'
    },
    {
      icon: <Brain size={28} style={{ color: 'var(--accent-terracotta)' }} />,
      title: 'AI & ML Automation',
      desc: 'Deploying autonomous multi-agent pipelines, specialized prompt orchestration, and robust Gemini API integrations. Designing intelligent context-caching, structured outputs, and local vector search databases.',
      stack: ['Gemini API', 'Multi-Agent SDKs', 'Vector Search', 'Python Core', 'LLM Chains'],
      color: 'var(--accent-terracotta)',
      bgMuted: 'var(--accent-terracotta-muted)'
    },
    {
      icon: <Video size={28} style={{ color: 'var(--accent-cobalt)' }} />,
      title: 'YouTube Video Pipeline Automation',
      desc: 'Automating high-throughput programmatical content pipelines. Integrating FFmpeg core assets for programmatic video cutting and stitching, automatic Whisper transcription, and background API video rendering.',
      stack: ['FFmpeg Core', 'Whisper AI', 'YouTube Data API', 'Python / Bash', 'Media Transcoding'],
      color: 'var(--accent-cobalt)',
      bgMuted: 'var(--accent-cobalt-muted)'
    },
    {
      icon: <Smartphone size={28} style={{ color: 'var(--accent-terracotta)' }} />,
      title: 'Mobile Apps & Cross-Platform',
      desc: 'Developing lightweight desktop shells and responsive, offline-first mobile apps. Bridging high-performance Rust core logic to React interfaces via Tauri IPC, and leveraging Kotlin with Android SDK for native hardware capture.',
      stack: ['Kotlin / Compose', 'Android SDK', 'Tauri / Rust Core', 'IPC Bridges', 'SQLite / Room'],
      color: 'var(--accent-terracotta)',
      bgMuted: 'var(--accent-terracotta-muted)'
    }
  ];

  return (
    <section id="skills" style={{ minHeight: 'auto' }}>
      <div className="container">
        <h2 className="section-title reveal">Core Capabilities</h2>
        
        <div className="skills-grid reveal">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card hover-border-trigger card-scale skill-card"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div 
                  style={{ 
                    width: '44px', 
                    height: '44px', 
                    border: '1px solid var(--grid-border)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    background: 'var(--bg-deep)'
                  }}
                >
                  {skill.icon}
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-dimmer)' }}>
                  [CAP.0{idx + 1}]
                </span>
              </div>
              
              <div className="skill-card-body">
                <h3 className="skill-card-title">
                  {skill.title}
                </h3>
                <p className="skill-card-desc">
                  {skill.desc}
                </p>
              </div>

              {/* Tag Stack */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                {skill.stack.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: skill.color,
                      background: skill.bgMuted,
                      border: '1px solid var(--grid-border)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '2px'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
