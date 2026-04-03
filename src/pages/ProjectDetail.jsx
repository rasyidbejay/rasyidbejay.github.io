import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
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

const projects = [
  {
    id: 'brow',
    category: 'E-Commerce',
    title: 'BRØW — Luxury Coffee E-Commerce',
    desc: 'A complete e-commerce storefront for a fictional luxury coffee brand based in Melbourne. Built from scratch with Vue 3, Pinia for cart state management, and Vue Router.',
    about: 'This project was built to demonstrate a complete e-commerce flow with Vue 3 and Pinia for state management. The design focuses on a luxury aesthetic with a dark colour palette, smooth transitions, and a fully functional cart system with persistent state.',
    tools: ['Vue 3', 'Pinia', 'Vue Router', 'Vite', 'CSS3'],
    skills: ['State Management', 'SPA Routing', 'E-Commerce UX', 'CSS Animations'],
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
    about: 'Lumen Agency was designed to showcase premium agency work with a focus on motion and visual hierarchy. The site features smooth scroll animations, a filterable portfolio section, and a fully validated contact form — all built with Vue 3 and no external UI libraries.',
    tools: ['Vue 3', 'Vite', 'Vue Router', 'CSS3'],
    skills: ['Multi-page SPA', 'Scroll Animations', 'Form Validation', 'Responsive Design'],
    live: 'https://rasyidbejay.github.io/lumen-agency/',
    github: 'https://github.com/rasyidbejay/lumen-agency',
    image: '/lumen.png',
    bg: 'linear-gradient(135deg, #06060f 0%, #10102a 100%)',
    label: 'LUMEN',
    labelColor: '#ffffff',
  },
  {
    id: 'britannia',
    category: 'CMS',
    title: 'Britannia Language Centre',
    desc: 'A custom WordPress site designed to improve online presence. Focused on custom frontend components, mobile responsiveness, and performance optimisation.',
    about: 'Built for a real language centre in Malaysia, this project involved customising a WordPress theme from the ground up. The focus was on improving Core Web Vitals scores, mobile responsiveness, and overall site performance using PageSpeed Insights and Google Search Console.',
    tools: ['WordPress', 'Core Web Vitals', 'Google Search Console', 'PageSpeed Insights'],
    skills: ['WordPress Customisation', 'Performance Optimisation', 'Mobile Responsiveness', 'SEO'],
    live: 'https://britannia.edu.my',
    github: null,
    image: null,
    bg: 'linear-gradient(135deg, #0a1628 0%, #1a2a4a 100%)',
    label: 'Britannia',
    labelColor: '#ffffff',
  },
  {
    id: 'riwei',
    category: 'CMS',
    title: 'ERP Webstore — Riwei Marketing',
    desc: 'Custom e-commerce website on SiteGiant with responsive frontend and enhanced UX. Implemented GA4 integration for tracking and insights. Delivered in 2-3 weeks.',
    about: 'Riwei Marketing needed a fast turnaround on a fully functional e-commerce store. Built on SiteGiant with custom CSS overrides for branding, responsive layout improvements, and GA4 tracking implemented for conversion insights. Delivered within 2-3 weeks.',
    tools: ['SiteGiant', 'GA4', 'Custom CSS', 'Responsive Design'],
    skills: ['E-Commerce Setup', 'Analytics Integration', 'Custom CSS', 'Fast Delivery'],
    live: 'https://riwei.com.my',
    github: null,
    image: '/riwei.png',
    bg: 'linear-gradient(135deg, #0a1a0a 0%, #1a3a1a 100%)',
    label: 'Riwei',
    labelColor: '#4ade80',
  },
  {
    id: 'so-content-studio',
    category: 'CMS',
    title: 'So Content Studio',
    desc: 'Photography studio website with online booking, gift cards, and Stripe payment integration.',
    about: 'Full website for an aesthetic photography and lifestyle studio in Manchester. Includes an online booking system with 8 session tiers, studio gallery, gift cards, and custom Stripe payment integration. Built on WordPress with Astra theme, Elementor, and Amelia for end-to-end booking management.',
    tools: ['WordPress', 'Elementor', 'Amelia', 'Stripe', 'Astra'],
    skills: ['Booking System', 'Payment Integration', 'Custom CSS', 'E-Commerce UX'],
    live: 'https://creativestudiosni.co.uk/',
    github: null,
    image: '/socontent.png',
    bg: 'linear-gradient(135deg, #1a0a14 0%, #2d1525 100%)',
    label: 'So Content',
    labelColor: '#f4c2d8',
  },
  {
    id: 'habitflow',
    category: 'Full-Stack',
    title: 'HabitFlow — Task Tracker',
    desc: 'Full-stack web application for task management using Python (Flask) and Bootstrap. Features user authentication, CRUD operations, and calendar visualisation.',
    about: 'HabitFlow is a full-stack task management app built with Python and Flask. It includes a full authentication system, CRUD task management, and a calendar view for visualising task completion over time. The backend uses SQLAlchemy for database management with Jinja2 for server-side rendering.',
    tools: ['Python', 'Flask', 'Bootstrap', 'SQLAlchemy', 'Jinja2'],
    skills: ['Full-Stack Development', 'User Authentication', 'Database Design', 'CRUD Operations'],
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
    about: 'Ripple Habits is a habit tracking app built entirely with React and TypeScript. The app focuses on a clean, distraction-free UI with smooth micro-interactions. Users can create, track, and visualise daily habits with streak tracking and completion history.',
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    skills: ['React Hooks', 'TypeScript', 'State Management', 'UI/UX Design'],
    live: 'https://www.rasyidbejay.com/ripplehabits',
    github: 'https://github.com/rasyidbejay/ripplehabits',
    image: '/ripple.png',
    bg: 'linear-gradient(135deg, #00120e 0%, #00261e 100%)',
    label: 'Ripple Habits',
    labelColor: '#10b981',
  },
]

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <PageTransition>
        <div style={{ padding: '120px 48px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 700, color: 'var(--rb-text-primary)', marginBottom: '16px' }}>Project not found.</h1>
          <Link to="/projects" style={{ fontSize: '14px', color: 'var(--rb-text-secondary)', textDecoration: 'none' }}>← Back to Projects</Link>
        </div>
      </PageTransition>
    )
  }

  const more = projects.filter(p => p.id !== id).slice(0, 2)

  return (
    <PageTransition>

      {/* ── BACK LINK ────────────────────────────────────────────────── */}
      <div style={{ paddingTop: '64px', paddingLeft: '48px', paddingRight: '48px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            {...fadeUp(0)}
            onClick={() => navigate(-1)}
            whileHover={{ x: -4 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontSize: '14px', color: 'var(--rb-text-secondary)',
              cursor: 'pointer', transition: 'color 0.2s',
              userSelect: 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--rb-text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--rb-text-secondary)'}
          >
            <ArrowLeft size={14} /> Back to Projects
          </motion.div>
        </div>
      </div>

      {/* ── PROJECT HERO ─────────────────────────────────────────────── */}
      <section style={{
        minHeight: '50vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '64px 24px',
        borderBottom: '1px solid var(--rb-border-subtle)',
      }}>
        <motion.p {...fadeUp(0.05)} style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rb-text-secondary)', marginBottom: '16px' }}>
          {project.category}
        </motion.p>
        <motion.h1 {...fadeUp(0.1)} style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.0, color: 'var(--rb-text-primary)', maxWidth: '900px' }}>
          {project.title}
        </motion.h1>
        <motion.p {...fadeUp(0.2)} style={{ fontSize: '19px', lineHeight: 1.6, color: 'var(--rb-text-secondary)', marginTop: '24px', maxWidth: '640px' }}>
          {project.desc}
        </motion.p>
        <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: '12px', marginTop: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <motion.button whileHover={{ opacity: 0.8 }} whileTap={{ scale: 0.97 }} style={{ padding: '13px 28px', fontSize: '15px', fontWeight: 500, background: 'var(--rb-text-primary)', color: 'var(--rb-bg)', border: 'none', borderRadius: '999px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', transition: 'opacity 0.2s' }}>
                <ExternalLink size={14} /> Live Site
              </motion.button>
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <motion.button whileTap={{ scale: 0.97 }} style={{ padding: '12px 28px', fontSize: '15px', fontWeight: 500, background: 'transparent', color: 'var(--rb-text-primary)', border: '1px solid var(--rb-border)', borderRadius: '999px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', transition: 'border-color 0.2s' }} onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--rb-text-primary)'} onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--rb-border)'}>
                <span>↗</span> GitHub
              </motion.button>
            </a>
          )}
        </motion.div>
      </section>

      {/* ── INFO ROW ─────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '900px', margin: '64px auto', padding: '0 48px' }}>
        <motion.div
          {...fadeUpScroll}
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px', background: 'var(--rb-border-subtle)',
            borderRadius: '16px', overflow: 'hidden',
          }}
        >
          {[
            ['Category', project.category],
            ['Tools', project.tools.slice(0, 3).join(', ')],
            ['Skills', project.skills.slice(0, 2).join(', ')],
          ].map(([label, val]) => (
            <div key={label} style={{ background: 'var(--rb-bg)', padding: '32px 40px' }}>
              <p style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--rb-text-tertiary)' }}>{label}</p>
              <p style={{ fontSize: '15px', fontWeight: 500, color: 'var(--rb-text-primary)', marginTop: '8px' }}>{val}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── PROJECT IMAGE ────────────────────────────────────────────── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 48px' }}>
        <motion.div
          {...fadeUpScroll}
          style={{
            aspectRatio: '16/9', borderRadius: '20px', overflow: 'hidden',
            background: project.image ? `url(${project.image}) center/cover no-repeat` : project.bg,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 32px 80px rgba(0,0,0,0.12)',
          }}
        >
          {!project.image && <span style={{ fontSize: '40px', fontWeight: 700, color: project.labelColor, letterSpacing: '6px' }}>{project.label}</span>}
        </motion.div>
      </div>

      {/* ── ABOUT PROJECT ────────────────────────────────────────────── */}
      <section style={{ borderTop: '1px solid var(--rb-border-subtle)', padding: '0 0 120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 48px 0' }}>
          <motion.div
            {...fadeUpScroll}
            className="about-grid"
            style={{ display: 'grid', gridTemplateColumns: '55% 45%', gap: '80px' }}
          >
            <div>
              <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rb-text-secondary)', marginBottom: '16px' }}>About This Project</p>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.2, color: 'var(--rb-text-primary)', marginBottom: '24px' }}>{project.title}</h2>
              <p style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--rb-text-secondary)' }}>{project.about}</p>
            </div>
            <div>
              <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rb-text-secondary)', marginBottom: '16px' }}>Tech Stack</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '48px' }}>
                {project.tools.map(t => (
                  <span key={t} style={{ fontSize: '13px', color: 'var(--rb-text-secondary)', background: 'var(--rb-bg-secondary)', border: '1px solid var(--rb-border-subtle)', padding: '7px 16px', borderRadius: '999px' }}>{t}</span>
                ))}
              </div>
              <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rb-text-secondary)', marginBottom: '16px' }}>Skills</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.skills.map(s => (
                  <span key={s} style={{ fontSize: '13px', color: 'var(--rb-text-secondary)', background: 'var(--rb-bg-secondary)', border: '1px solid var(--rb-border)', padding: '7px 16px', borderRadius: '999px' }}>{s}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MORE PROJECTS ────────────────────────────────────────────── */}
      <section style={{ background: 'var(--rb-bg-secondary)', borderTop: '1px solid var(--rb-border-subtle)', padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
          <motion.div {...fadeUpScroll} style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rb-text-secondary)', marginBottom: '16px' }}>More Projects</p>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.025em' }}>Keep exploring.</h2>
          </motion.div>
          <div className="more-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {more.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <Link to={`/projects/${p.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{
                    background: 'var(--rb-bg)', border: '1px solid var(--rb-border-subtle)',
                    borderRadius: '18px', overflow: 'hidden',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--rb-border)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--rb-border-subtle)'}
                  >
                    <div style={{ height: '160px', background: p.image ? `url(${p.image}) center/cover no-repeat` : p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                      {!p.image && <span style={{ fontSize: '18px', fontWeight: 700, color: p.labelColor }}>{p.label}</span>}
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)' }} />
                    </div>
                    <div style={{ padding: '20px' }}>
                      <p style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--rb-text-tertiary)', marginBottom: '6px' }}>{p.category}</p>
                      <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--rb-text-primary)' }}>{p.title}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .more-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          section > div, div[style*="max-width: 900px"], div[style*="max-width: 1200px"] {
            padding-left: 24px !important; padding-right: 24px !important;
          }
        }
      `}</style>
    </PageTransition>
  )
}
