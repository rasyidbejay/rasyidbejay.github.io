import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const filters = ['All', 'Frontend', 'Full-Stack', 'E-Commerce']

const projects = [
  {
    id: 'brow',
    category: 'E-Commerce',
    title: 'BRØW — Luxury Coffee E-Commerce',
    desc: 'A complete e-commerce storefront for a fictional luxury coffee brand based in Melbourne. Built from scratch with Vue 3, Pinia for cart state management, and Vue Router.',
    tools: ['Vue 3', 'Pinia', 'Vue Router', 'Vite', 'CSS3'],
    live: 'https://rasyidbejay.github.io/brow-store/',
    github: 'https://github.com/rasyidbejay/brow-store',
    bg: 'linear-gradient(135deg, #1a0d00 0%, #2d1500 100%)',
    label: 'BRØW',
    labelColor: '#c8a27a',
    labelFont: 'var(--font-mono)',
    labelSpacing: '6px',
    image: '/brow.png',
  },
  {
    id: 'lumen',
    category: 'Frontend',
    title: 'Lumen Agency — Marketing Website',
    desc: 'A premium multi-page marketing agency website. Minimal luxury dark aesthetic, smooth scroll animations, filterable portfolio, validated contact form, and testimonials showcase.',
    tools: ['Vue 3', 'Vite', 'Vue Router', 'CSS3'],
    live: 'https://rasyidbejay.github.io/lumen-agency/',
    github: 'https://github.com/rasyidbejay/lumen-agency',
    bg: 'linear-gradient(135deg, #06060f 0%, #10102a 100%)',
    label: 'LUMEN',
    labelColor: '#ffffff',
    labelFont: 'var(--font-display)',
    labelSpacing: '4px',
    image: '/lumen.png',
  },
  {
    id: 'britannia',
    category: 'Frontend',
    title: 'Britannia Language Centre',
    desc: 'A custom WordPress site designed to improve online presence. Focused on custom frontend components, mobile responsiveness, and performance optimisation.',
    tools: ['WordPress', 'Core Web Vitals', 'Google Search Console', 'PageSpeed Insights'],
    live: 'https://britannia.edu.my',
    github: null,
    bg: 'linear-gradient(135deg, #0a1628 0%, #1a2a4a 100%)',
    label: 'Britannia',
    labelColor: '#ffffff',
    labelFont: 'var(--font-display)',
    labelSpacing: '2px',
    image: null,
  },
  {
    id: 'riwei',
    category: 'E-Commerce',
    title: 'ERP Webstore — Riwei Marketing',
    desc: 'Custom e-commerce website on SiteGiant with responsive frontend and enhanced UX. Implemented GA4 integration for tracking and insights. Delivered in 2-3 weeks.',
    tools: ['SiteGiant', 'GA4', 'Custom CSS', 'Responsive Design'],
    live: 'https://riwei.com.my',
    github: null,
    bg: 'linear-gradient(135deg, #0a1a0a 0%, #1a3a1a 100%)',
    label: 'Riwei',
    labelColor: '#4ade80',
    labelFont: 'var(--font-display)',
    labelSpacing: '2px',
    image: '/riwei.png',
  },
  {
    id: 'habitflow',
    category: 'Full-Stack',
    title: 'HabitFlow — Task Tracker',
    desc: 'Full-stack web application for task management using Python (Flask) and Bootstrap. Features user authentication, CRUD operations, and calendar visualisation.',
    tools: ['Python', 'Flask', 'Bootstrap', 'SQLAlchemy', 'Jinja2'],
    live: null,
    github: null,
    bg: 'linear-gradient(135deg, #1a0a1a 0%, #2a1a3a 100%)',
    label: 'HabitFlow',
    labelColor: '#a78bfa',
    labelFont: 'var(--font-display)',
    labelSpacing: '2px',
    image: null,
  },
  {
    id: 'ripple',
    category: 'Full-Stack',
    title: 'Ripple Habits — Habit Tracker',
    desc: 'A habit tracking web app built with React and TypeScript. Clean UI, smooth interactions, and a focus on building better daily routines.',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    live: 'https://www.rasyidbejay.com/ripplehabits',
    github: 'https://github.com/rasyidbejay/ripplehabits',
    bg: 'linear-gradient(135deg, #00120e 0%, #00261e 100%)',
    label: 'Ripple Habits',
    labelColor: '#10b981',
    labelFont: 'var(--font-display)',
    labelSpacing: '2px',
    image: '/ripple.png',
  },
]

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <PageTransition>

      {/* PAGE HERO */}
      <section className="projects-page-hero" style={{
        padding: '80px 48px 64px',
        borderBottom: '1px solid var(--border2)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <div style={{ width: '16px', height: '1px', background: 'var(--accent)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>Portfolio</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: '700', letterSpacing: '-1.5px', lineHeight: '1.0', marginBottom: '16px' }}>
            Projects<br />& Work.
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text2)', maxWidth: '480px', lineHeight: '1.7' }}>
            A collection of frontend, full-stack, and e-commerce projects.
          </p>
        </motion.div>
      </section>

      {/* FILTER BAR */}
      <div className="filter-bar-wrap" style={{
        display: 'flex', gap: '8px',
        padding: '24px 48px',
        borderBottom: '1px solid var(--border2)',
      }}>
        {filters.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              padding: '7px 18px',
              borderRadius: '100px',
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              border: '1px solid',
              borderColor: active === f ? 'var(--accent)' : 'var(--border2)',
              background: active === f ? 'var(--accent)' : 'transparent',
              color: active === f ? '#fff' : 'var(--text2)',
              transition: 'all 0.2s',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* PROJECTS GRID */}
      <div className="projects-full-wrap" style={{ padding: '48px 48px 0' }}>
        <motion.div
          layout
          className="projects-full-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <Link to={`/projects/${p.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border2)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'border-color 0.25s, box-shadow 0.25s',
                    height: '100%',
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const x = e.clientX - rect.left
                    const y = e.clientY - rect.top
                    const centerX = rect.width / 2
                    const centerY = rect.height / 2
                    const rotateX = (y - centerY) / 20
                    const rotateY = (centerX - x) / 20
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.25)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
                    e.currentTarget.style.borderColor = 'var(--border2)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  >
                    {/* Card image */}
                    <div className="project-card-img" style={{
                      height: '200px',
                      background: p.image ? `url(${p.image}) center/cover no-repeat` : p.bg,
                      position: 'relative',
                      overflow: 'hidden',
                    }}>
                      {!p.image && (
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ fontFamily: p.labelFont, fontSize: '22px', fontWeight: '700', color: p.labelColor, letterSpacing: p.labelSpacing }}>{p.label}</span>
                        </div>
                      )}
                      {/* Overlay gradient */}
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,11,8,0.6) 0%, transparent 60%)' }} />
                      {/* Category badge */}
                      <div style={{
                        position: 'absolute', top: '14px', left: '14px',
                        fontFamily: 'var(--font-mono)', fontSize: '8px',
                        color: 'var(--accent)',
                        background: 'rgba(8,11,8,0.7)',
                        border: '1px solid var(--border)',
                        padding: '2px 8px', borderRadius: '100px',
                        backdropFilter: 'blur(4px)',
                        letterSpacing: '1px', textTransform: 'uppercase',
                      }}>{p.category}</div>
                    </div>

                    {/* Card body */}
                    <div className="project-card-body" style={{ padding: '22px' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: '600', marginBottom: '8px', color: 'var(--text)', lineHeight: '1.3' }}>{p.title}</div>
                      <div style={{ fontSize: '12px', color: 'var(--text2)', lineHeight: '1.7', marginBottom: '16px' }}>{p.desc}</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
                        {p.tools.map(t => (
                          <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text2)', background: 'var(--surface2)', border: '1px solid var(--border2)', padding: '3px 8px', borderRadius: '4px' }}>{t}</span>
                        ))}
                      </div>
                      <div style={{ display: 'flex', gap: '12px' }}>
                        {p.live && (
                          <a href={p.live} target="_blank" rel="noreferrer"
                            onClick={e => e.stopPropagation()}
                            style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', textDecoration: 'none', letterSpacing: '0.5px' }}>
                            Live ↗
                          </a>
                        )}
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noreferrer"
                            onClick={e => e.stopPropagation()}
                            style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text2)', textDecoration: 'none', letterSpacing: '0.5px' }}>
                            GitHub →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* CURRENTLY BUILDING */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        style={{ margin: '40px 48px 72px' }}
      >
        <div className="building-card-wrap" style={{
          background: 'var(--surface)',
          border: '1px solid rgba(16,185,129,0.15)',
          borderRadius: '12px',
          padding: '28px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '9px',
              color: 'var(--accent)',
              background: 'rgba(16,185,129,0.08)',
              border: '1px solid rgba(16,185,129,0.2)',
              padding: '3px 10px', borderRadius: '100px',
              display: 'inline-block',
              marginBottom: '10px',
              letterSpacing: '1px', textTransform: 'uppercase',
            }}>🚧 In Development</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: '700', marginBottom: '6px', color: 'var(--text)' }}>SaaS Admin Dashboard</div>
            <div style={{ fontSize: '12px', color: 'var(--text2)', maxWidth: '500px' }}>A modern SaaS admin dashboard — currently in active development. Details coming soon.</div>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', opacity: 0.6 }}>Coming Soon →</div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .projects-page-hero {
            padding: 48px 24px 40px !important;
          }
          .filter-bar-wrap {
            padding: 16px 24px !important;
            gap: 6px !important;
            flex-wrap: wrap !important;
          }
          .projects-full-wrap {
            padding: 24px 24px 0 !important;
          }
          .projects-full-grid {
            grid-template-columns: 1fr !important;
          }
          .project-card-img {
            height: 160px !important;
          }
          .project-card-body {
            padding: 16px !important;
          }
          .building-card-wrap {
            margin: 20px 24px 48px !important;
            flex-direction: column !important;
            gap: 16px !important;
            align-items: flex-start !important;
          }
        }
      `}</style>

    </PageTransition>
  )
}
