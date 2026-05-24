import React from 'react';
import { ShieldCheck, Video, Zap, Layers } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Video size={24} style={{ color: 'var(--accent-cobalt)' }} />, value: '50K+', label: 'Videos Automated' },
    { icon: <Zap size={24} style={{ color: 'var(--accent-cobalt)' }} />, value: '< 180ms', label: 'Avg Response Latency' },
    { icon: <ShieldCheck size={24} style={{ color: 'var(--accent-cobalt)' }} />, value: '99.98%', label: 'Engine Uptime' },
    { icon: <Layers size={24} style={{ color: 'var(--accent-cobalt)' }} />, value: 'React / FFmpeg', label: 'Core Media Stack' }
  ];

  const milestones = [
    {
      date: '2025 — PRESENT',
      title: 'Hacker & AI Project Builder',
      company: 'Hobbyist Development',
      desc: 'Building autonomous video automation pipelines and custom full-stack solutions. Experimenting with advanced LLM prompting, custom contextual memories, and multi-agent SaaS models to solve real-world problems.'
    },
    {
      date: '2024 — 2025',
      title: 'Web & Video Automation Developer',
      company: 'Personal Labs / Startup Work',
      desc: 'Shipped dynamic web tools including Repurpose.ai and highly optimized media dashboards (YT Automation). Collaborated on high-performance web landing interfaces for client startups like Hello Doctor.'
    },
    {
      date: '2023 — 2024',
      title: 'Beginning of Coding Journey',
      company: 'Student & Self-Taught Explorer',
      desc: 'Discovered passion for software engineering. Built solid foundation in modern frontend (React, JavaScript, Vite) and backend structures, exploring command-line interfaces and custom coordinate canvases.'
    }
  ];

  return (
    <section id="about" style={{ minHeight: 'auto' }}>
      <div className="container">
        <h2 className="section-title reveal">Development Journey</h2>
        
        <div className="about-grid">
          
          {/* Left Column: Bio & Stats */}
          <div className="about-left-col reveal">
            <div className="about-intro">
              <h3 className="about-lead">
                Building high-throughput media pipelines, AI utilities, and full-stack web architectures as a passionate hobbyist.
              </h3>
              <p className="about-paragraph">
                I am a student developer who views coding not just as a study path, but as a highly creative canvas. As an AI-first builder, I focus on turning complex challenges into simple, elegant, and highly automated applications—specializing in custom media generation workflows, automated AI agents, and polished web interfaces.
              </p>
              <p className="about-paragraph">
                My projects pair cutting-edge AI models with robust engineering: from programmatically slicing and stitching video segments (FFmpeg / Celery), to building high-conversion responsive client portals like Hello Doctor, to deploying semantic context-caching search tools. I focus on modular architectures, lightning-fast interfaces, and clean, beautiful design systems.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="about-stats-grid">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card hover-border-trigger about-stat-card"
                >
                  <div className="about-stat-card-header">
                    {stat.icon}
                    <span className="about-stat-card-number">
                      [0{idx + 1}]
                    </span>
                  </div>
                  <h4 className="about-stat-card-value">
                    {stat.value}
                  </h4>
                  <p className="about-stat-card-label">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Professional Timeline */}
          <div className="about-right-col reveal delay-200">
            <h3 className="about-timeline-heading">
              My Timeline
            </h3>
            
            <div className="timeline">
              {milestones.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-date">{item.date}</div>
                  <h4 className="timeline-title">
                    {item.title}
                  </h4>
                  <div className="timeline-company">
                    {item.company}
                  </div>
                  <p className="timeline-desc">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
