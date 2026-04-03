import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const ease = [0.25, 0.1, 0.25, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay },
})

const fadeUpScroll = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease },
}

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
    image: '/brow.png',
    bg: 'linear-gradient(135deg, #1a0d00 0%, #2d1500 100%)',
    label: 'BRØW',
    labelColor: '#c8a27a',
  },
  {
    id: 'lumen',
    category: 'Frontend',
    title: 'Lumen Agency — Marketing Website',
    desc: 'A premium multi-page marketing agency website. Minimal luxury dark aesthetic, smooth scroll animations, filterable portfolio, validated contact form, and testimonials showcase.',
    tools: ['Vue 3', 'Vite', 'Vue Router', 'CSS3'],
    live: 'https://rasyidbejay.github.io/lumen-agency/',
    github: 'https://github.com/rasyidbejay/lumen-agency',
    image: '/lumen.png',
    bg: 'linear-gradient(135deg, #06060f 0%, #10102a 100%)',
    label: 'LUMEN',
    labelColor: '#ffffff',
  },
  {
    id: 'britannia',
    category: 'Frontend',
    title: 'Britannia Language Centre',
    desc: 'A custom WordPress site designed to improve online presence. Focused on custom frontend components, mobile responsiveness, and performance optimisation.',
    tools: ['WordPress', 'Core Web Vitals', 'Google Search Console', 'PageSpeed Insights'],
    live: 'https://britannia.edu.my',
    github: null,
    image: null,
    bg: 'linear-gradient(135deg, #0a1628 0%, #1a2a4a 100%)',
    label: 'Britannia',
    labelColor: '#ffffff',
  },
  {
    id: 'riwei',
    category: 'E-Commerce',
    title: 'ERP Webstore — Riwei Marketing',
    desc: 'Custom e-commerce website on SiteGiant with responsive frontend and enhanced UX. Implemented GA4 integration for tracking and insights. Delivered in 2-3 weeks.',
    tools: ['SiteGiant', 'GA4', 'Custom CSS', 'Responsive Design'],
    live: 'https://riwei.com.my',
    github: null,
    image: '/riwei.png',
    bg: 'linear-gradient(135deg, #0a1a0a 0%, #1a3a1a 100%)',
    label: 'Riwei',
    labelColor: '#4ade80',
  },
  {
    id: 'habitflow',
    category: 'Full-Stack',
    title: 'HabitFlow — Task Tracker',
    desc: 'Full-stack web application for task management using Python (Flask) and Bootstrap. Features user authentication, CRUD operations, and calendar visualisation.',
    tools: ['Python', 'Flask', 'Bootstrap', 'SQLAlchemy', 'Jinja2'],
    live: null,
    github: null,
    image: null,
    bg: 'linear-gradient(135deg, #1a0a1a 0%, #2a1a3a 100%)',
    label: 'HabitFlow',
    labelColor: '#a78bfa',
  },
  {
    id: 'ripple',
    category: 'Full-Stack',
    title: 'Ripple Habits — Habit Tracker',
    desc: 'A habit tracking web app built with React and TypeScript. Clean UI, smooth interactions, and a focus on building better daily routines.',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    live: 'https://www.rasyidbejay.com/ripplehabits',
    github: 'https://github.com/rasyidbejay/ripplehabits',
    image: '/ripple.png',
    bg: 'linear-gradient(135deg, #00120e 0%, #00261e 100%)',
    label: 'Ripple Habits',
    labelColor: '#10b981',
  },
]

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <PageTransition>

      {/* ── PAGE HERO ────────────────────────────────────────────────── */}
      <section style={{
        minHeight: '50vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 24px 80px',
        borderBottom: '1px solid var(--rb-border-subtle)',
      }}>
        <motion.p {...fadeUp(0)} style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rb-text-secondary)', marginBottom: '16px' }}>
          Portfolio
        </motion.p>
        <motion.h1 {...fadeUp(0.1)} style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.0, color: 'var(--rb-text-primary)' }}>
          Projects &amp; work.
        </motion.h1>
        <motion.p {...fadeUp(0.2)} style={{ fontSize: '17px', color: 'var(--rb-text-secondary)', marginTop: '20px', lineHeight: 1.6, maxWidth: '560px' }}>
          A collection of frontend, full-stack, and e-commerce projects.
        </motion.p>
      </section>

      {/* ── FILTER BAR ───────────────────────────────────────────────── */}
      <div style={{ borderBottom: '1px solid var(--rb-border-subtle)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 48px', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                padding: '9px 22px', fontSize: '13px', fontWeight: 500,
                borderRadius: '999px', cursor: 'pointer',
                border: '1px solid',
                borderColor: active === f ? 'var(--rb-text-primary)' : 'var(--rb-border)',
                background: active === f ? 'var(--rb-text-primary)' : 'transparent',
                color: active === f ? 'var(--rb-bg)' : 'var(--rb-text-secondary)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { if (active !== f) { e.currentTarget.style.borderColor = 'var(--rb-text-primary)'; e.currentTarget.style.color = 'var(--rb-text-primary)' } }}
              onMouseLeave={e => { if (active !== f) { e.currentTarget.style.borderColor = 'var(--rb-border)'; e.currentTarget.style.color = 'var(--rb-text-secondary)' } }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ── PROJECTS GRID ────────────────────────────────────────────── */}
      <section style={{ padding: '64px 0 120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
          <motion.div layout className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(0,0,0,0.1)' }}
                  style={{ transition: 'box-shadow 0.4s ease' }}
                >
                  <Link to={`/projects/${p.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                    <div style={{
                      background: 'var(--rb-bg-secondary)',
                      border: '1px solid var(--rb-border-subtle)',
                      borderRadius: '18px', overflow: 'hidden',
                      height: '100%',
                      transition: 'border-color 0.25s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--rb-border)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--rb-border-subtle)'}
                    >
                      <div style={{
                        aspectRatio: '16/9',
                        background: p.image ? `url(${p.image}) center/cover no-repeat` : p.bg,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        position: 'relative', overflow: 'hidden',
                      }}>
                        {!p.image && <span style={{ fontSize: '22px', fontWeight: 700, color: p.labelColor, letterSpacing: '4px' }}>{p.label}</span>}
                        <div style={{ position: 'absolute', top: '14px', left: '14px', fontSize: '8px', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.15)', padding: '3px 10px', borderRadius: '999px', backdropFilter: 'blur(4px)' }}>{p.category}</div>
                      </div>
                      <div style={{ padding: '24px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--rb-text-primary)', marginBottom: '8px', lineHeight: 1.3 }}>{p.title}</h3>
                        <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--rb-text-secondary)', marginBottom: '16px' }}>{p.desc}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                          {p.tools.map(t => (
                            <span key={t} style={{ fontSize: '12px', color: 'var(--rb-text-secondary)', background: 'var(--rb-bg-tertiary)', border: '1px solid var(--rb-border-subtle)', borderRadius: '999px', padding: '4px 12px' }}>{t}</span>
                          ))}
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
                          {p.live && <a href={p.live} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} style={{ fontSize: '13px', color: 'var(--rb-text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--rb-text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--rb-text-secondary)'}>Live ↗</a>}
                          {p.github && <a href={p.github} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} style={{ fontSize: '13px', color: 'var(--rb-text-tertiary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--rb-text-secondary)'} onMouseLeave={e => e.target.style.color = 'var(--rb-text-tertiary)'}>GitHub →</a>}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* In Development card — full width */}
          <motion.div {...fadeUpScroll} style={{ gridColumn: '1 / -1', marginTop: '8px' }}>
            <div style={{
              background: 'var(--rb-bg-secondary)',
              border: '1px solid var(--rb-border-subtle)',
              borderRadius: '18px', padding: '40px 48px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: '24px',
            }}>
              <div>
                <span style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--rb-text-secondary)', background: 'var(--rb-bg-tertiary)', border: '1px solid var(--rb-border)', borderRadius: '999px', padding: '4px 14px', display: 'inline-block', marginBottom: '16px' }}>🚧 In Development</span>
                <h3 style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--rb-text-primary)', marginBottom: '8px' }}>SaaS Admin Dashboard</h3>
                <p style={{ fontSize: '14px', color: 'var(--rb-text-secondary)', lineHeight: 1.6, maxWidth: '560px' }}>A modern SaaS admin dashboard — currently in active development. Details coming soon.</p>
              </div>
              <span style={{ fontSize: '13px', color: 'var(--rb-text-tertiary)', flexShrink: 0 }}>Coming Soon →</span>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          section > div { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </PageTransition>
  )
}
