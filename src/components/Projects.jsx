import React, { useState } from 'react';
import { ExternalLink, Globe, Cpu, Sparkles, Video, Activity, Shield } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
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

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'repurpose-ai',
      icon: <Cpu size={20} style={{ color: 'var(--accent-cobalt)' }} />,
      category: 'ai',
      tag: 'AI/ML & SaaS',
      title: 'Repurpose.ai',
      desc: 'An AI-powered content transformation platform that accepts URLs from blog posts, Reddit discussions, or any online content and transforms them into fresh, repurposed content. Perfect for content creators and marketers looking to maximize their content reach.',
      github: '#',
      link: 'https://repurpose-ai-ashmil.vercel.app/',
      stack: ['Next.js', 'TypeScript', 'AI/ML', 'TailwindCSS', 'Vercel']
    },
    {
      id: 'ai-frontier',
      icon: <Globe size={20} style={{ color: 'var(--accent-cobalt)' }} />,
      category: 'ai',
      tag: 'AI Research Platform',
      title: 'AI Frontier 2026',
      desc: 'A futuristic AI news and research platform built to track the transition to AGI. Features a "Research Radar" for deep technical dives and an indexed toolkit of 60+ autonomous agents and AI tools.',
      github: 'github.com/ashmilgit15/ai-frontier-2026',
      link: 'https://ashmilgit15.github.io/ai-frontier-2026/',
      stack: ['HTML5', 'Vanilla CSS', 'JavaScript', 'Automation']
    },
    {
      id: 'yt-automation',
      icon: <Video size={20} style={{ color: 'var(--accent-cobalt)' }} />,
      category: 'automation',
      tag: 'Automation & Media',
      title: 'YT Automation',
      desc: 'A private YouTube automation dashboard that turns a topic or niche into fully produced videos and Shorts, with review controls, job management, and multi-channel publishing.',
      github: 'github.com/ashmilgit15/yt-automation',
      link: '#',
      stack: ['Next.js', 'FastAPI', 'Celery', 'Redis', 'PostgreSQL']
    },
    {
      id: 'yt-video-gen',
      icon: <Sparkles size={20} style={{ color: 'var(--accent-cobalt)' }} />,
      category: 'automation',
      tag: 'Media Rendering Engine',
      title: 'YT Video Gen',
      desc: 'An AI Shorts generator that turns a topic into vertical videos, connects multiple YouTube accounts, and uploads or schedules Shorts with AI-generated metadata, retry support, and FFmpeg-based rendering.',
      github: 'github.com/ashmilgit15/yt-video-gen',
      link: '#',
      stack: ['React', 'Vite', 'FastAPI', 'SQLAlchemy', 'Clerk', 'Neon Postgres']
    },
    {
      id: 'hello-doctor-family',
      icon: <Activity size={20} style={{ color: 'var(--accent-cobalt)' }} />,
      category: 'startup',
      tag: 'Startup Client',
      title: 'Hello Doctor Platform',
      desc: 'A continuous, doctor-led care platform for chronic conditions (diabetes, hypertension, cardiac care, neurological recovery, cancer support) providing personalized daily monitoring, medication compliance tracking, and lifestyle optimization for elderly parents.',
      github: '#',
      link: 'https://hellodoctor.family',
      stack: ['Next.js', 'React', 'TailwindCSS', 'Framer Motion', 'SEO & Analytics']
    },
    {
      id: 'hello-doctor-app',
      icon: <Shield size={20} style={{ color: 'var(--accent-cobalt)' }} />,
      category: 'startup',
      tag: 'Patient Portal',
      title: 'Hello Doctor Portal',
      desc: 'The patient and care-team coordination application portal. Enables real-time logging of daily health vitals (blood sugar, BP, heart rate, symptoms), automated tracking of medication compliance, real-time chat with Personal Health Managers, and emergency triage routing.',
      github: '#',
      link: 'https://app.hellodoctor.family',
      stack: ['React Router', 'Vite', 'REST API', 'Vitals Logging', 'Secured Client Portal']
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ minHeight: 'auto' }}>
      <div className="container">
        <h2 className="section-title reveal">Selected Works</h2>

        {/* Filter Navigation */}
        <div className="reveal projects-filter-nav">
          {['all', 'ai', 'automation', 'startup'].map((cat) => {
            const isActive = filter === cat;
            let displayName = cat.toUpperCase();
            if (cat === 'all') displayName = 'ALL PROJECTS';
            else if (cat === 'ai') displayName = 'AI & SAAS';
            else if (cat === 'automation') displayName = 'MEDIA AUTOMATION';
            else if (cat === 'startup') displayName = 'STARTUP CLIENTS';

            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '0 1.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  border: `1px solid ${isActive ? 'var(--accent)' : 'var(--glass-border)'}`,
                  background: isActive ? 'var(--accent-muted)' : 'transparent',
                  color: isActive ? 'var(--accent)' : 'var(--text-dim)',
                  transition: 'var(--transition-fast)',
                  minHeight: '44px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {displayName}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="reveal projects-grid">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="glass-card hover-border-trigger card-scale"
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              {/* Header Panel */}
              <div className="project-card-header">
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', minWidth: 0, flex: 1 }}>
                  <div 
                    style={{ 
                      width: '42px', 
                      height: '42px', 
                      border: '1px solid var(--glass-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'var(--bg-card)',
                      flexShrink: 0
                    }}
                  >
                    {proj.icon}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--accent)', textTransform: 'uppercase', display: 'block' }}>
                      {proj.tag}
                    </span>
                    <h3 className="project-title">
                      {proj.title}
                    </h3>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.25rem', flexShrink: 0 }}>
                  {proj.github && proj.github !== '#' && (
                    <a 
                      href={proj.github.startsWith('http') ? proj.github : `https://${proj.github}`} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="project-link-btn"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}
                  {proj.link && proj.link !== '#' && (
                    <a 
                      href={proj.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="project-link-btn"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description Body */}
              <div className="project-card-body">
                <p className="project-desc">
                  {proj.desc}
                </p>

                {/* Tech Stack List */}
                <div className="project-tech-list">
                  {proj.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="project-tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
