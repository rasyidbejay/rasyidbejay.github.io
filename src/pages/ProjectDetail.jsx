import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import PageTransition from '../components/PageTransition'

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
    bg: 'linear-gradient(135deg, #1a0d00 0%, #2d1500 100%)',
    label: 'BRØW',
    labelColor: '#c8a27a',
    image: '/brow.png',
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
    bg: 'linear-gradient(135deg, #06060f 0%, #10102a 100%)',
    label: 'LUMEN',
    labelColor: '#ffffff',
    image: '/lumen.png',
  },
  {
    id: 'britannia',
    category: 'Frontend',
    title: 'Britannia Language Centre',
    desc: 'A custom WordPress site designed to improve online presence. Focused on custom frontend components, mobile responsiveness, and performance optimisation.',
    about: 'Built for a real language centre in Malaysia, this project involved customising a WordPress theme from the ground up. The focus was on improving Core Web Vitals scores, mobile responsiveness, and overall site performance using PageSpeed Insights and Google Search Console.',
    tools: ['WordPress', 'Core Web Vitals', 'Google Search Console', 'PageSpeed Insights'],
    skills: ['WordPress Customisation', 'Performance Optimisation', 'Mobile Responsiveness', 'SEO'],
    live: 'https://britannia.edu.my',
    github: null,
    bg: 'linear-gradient(135deg, #0a1628 0%, #1a2a4a 100%)',
    label: 'Britannia',
    labelColor: '#ffffff',
    image: null,
  },
  {
    id: 'riwei',
    category: 'E-Commerce',
    title: 'ERP Webstore — Riwei Marketing',
    desc: 'Custom e-commerce website on SiteGiant with responsive frontend and enhanced UX. Implemented GA4 integration for tracking and insights. Delivered in 2-3 weeks.',
    about: 'Riwei Marketing needed a fast turnaround on a fully functional e-commerce store. Built on SiteGiant with custom CSS overrides for branding, responsive layout improvements, and GA4 tracking implemented for conversion insights. Delivered within 2-3 weeks.',
    tools: ['SiteGiant', 'GA4', 'Custom CSS', 'Responsive Design'],
    skills: ['E-Commerce Setup', 'Analytics Integration', 'Custom CSS', 'Fast Delivery'],
    live: 'https://riwei.com.my',
    github: null,
    bg: 'linear-gradient(135deg, #0a1a0a 0%, #1a3a1a 100%)',
    label: 'Riwei',
    labelColor: '#4ade80',
    image: '/riwei.png',
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
    bg: 'linear-gradient(135deg, #1a0a1a 0%, #2a1a3a 100%)',
    label: 'HabitFlow',
    labelColor: '#a78bfa',
    image: null,
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
    bg: 'linear-gradient(135deg, #00120e 0%, #00261e 100%)',
    label: 'Ripple Habits',
    labelColor: '#10b981',
    image: '/ripple.png',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
  }),
}

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <PageTransition>
        <div style={{ padding: '80px 48px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--text)' }}>Project not found.</h1>
          <Link to="/projects" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>← Back to Projects</Link>
        </div>
      </PageTransition>
    )
  }

  const more = projects.filter(p => p.id !== id).slice(0, 2)

  return (
    <PageTransition>

      {/* DETAIL HERO */}
      <section className="detail-hero-wrap" style={{ padding: '72px 48px 56px' }}>
        <motion.div
          variants={fadeUp} custom={0} initial="hidden" animate="show"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer', marginBottom: '36px', fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text2)', textTransform: 'uppercase', letterSpacing: '1px' }}
          onClick={() => navigate(-1)}
          whileHover={{ x: -3 }}
        >
          <ArrowLeft size={12} /> Back to Projects
        </motion.div>

        <motion.div variants={fadeUp} custom={1} initial="hidden" animate="show"
          style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <div style={{ width: '16px', height: '1px', background: 'var(--accent)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>{project.category}</span>
        </motion.div>

        <motion.h1
          variants={fadeUp} custom={2} initial="hidden" animate="show"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '700', letterSpacing: '-1.5px', lineHeight: '1.05', marginBottom: '18px', color: 'var(--text)' }}
        >
          {project.title}
        </motion.h1>

        <motion.p
          variants={fadeUp} custom={3} initial="hidden" animate="show"
          style={{ fontSize: '15px', color: 'var(--text2)', maxWidth: '600px', lineHeight: '1.75', marginBottom: '28px' }}
        >
          {project.desc}
        </motion.p>

        <motion.div
          variants={fadeUp} custom={4} initial="hidden" animate="show"
          style={{ display: 'flex', gap: '12px' }}
        >
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ y: -2, boxShadow: '0 8px 28px rgba(16,185,129,0.35)' }}
                whileTap={{ scale: 0.97 }}
                style={{ padding: '11px 22px', background: 'var(--accent)', color: '#fff', fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: '600', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <ExternalLink size={13} /> Live Site
              </motion.button>
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
                whileTap={{ scale: 0.97 }}
                style={{ padding: '11px 22px', background: 'transparent', color: 'var(--text)', fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: '600', borderRadius: '8px', border: '1px solid var(--border2)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <span>↗</span> GitHub
              </motion.button>
            </a>
          )}
        </motion.div>
      </section>

      {/* INFO CARD */}
      <motion.div
        className="info-card-grid"
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          border: '1px solid var(--border2)', borderRadius: '12px',
          overflow: 'hidden', margin: '0 48px',
        }}
      >
        {[
          ['Category', project.category],
          ['Tools', project.tools.slice(0, 3).join(', ')],
          ['Skills', project.skills.slice(0, 2).join(', ')],
        ].map(([label, val]) => (
          <div key={label} style={{ padding: '24px', borderRight: '1px solid var(--border2)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text2)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>{label}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>{val}</div>
          </div>
        ))}
      </motion.div>

      {/* PROJECT IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        style={{ margin: '40px 48px' }}
      >
        <div className="detail-img-wrap" style={{
          height: '360px',
          borderRadius: '12px',
          border: '1px solid var(--border2)',
          overflow: 'hidden',
          background: project.image ? `url(${project.image}) center/cover no-repeat` : project.bg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative',
        }}>
          {!project.image && (
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '700', color: project.labelColor, letterSpacing: '4px' }}>{project.label}</span>
          )}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,11,8,0.3) 0%, transparent 60%)' }} />
        </div>
      </motion.div>

      {/* ABOUT PROJECT */}
      <motion.section
        className="about-project-grid"
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        style={{ padding: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', borderTop: '1px solid var(--border2)' }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <div style={{ width: '16px', height: '1px', background: 'var(--accent)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>About This Project</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: '700', letterSpacing: '-0.3px', marginBottom: '16px', lineHeight: '1.2', color: 'var(--text)' }}>
            {project.title}
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: '1.85' }}>{project.about}</p>
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <div style={{ width: '16px', height: '1px', background: 'var(--accent)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>Tech Stack</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '14px' }}>
            {project.tools.map(t => (
              <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text2)', background: 'var(--surface)', border: '1px solid var(--border2)', padding: '7px 14px', borderRadius: '6px' }}>{t}</span>
            ))}
          </div>
          <div style={{ marginTop: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <div style={{ width: '16px', height: '1px', background: 'var(--accent)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>Skills</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.skills.map(s => (
                <span key={s} style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)', padding: '7px 14px', borderRadius: '6px' }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* MORE PROJECTS */}
      <motion.section
        className="more-projects-wrap"
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        style={{ padding: '48px', borderTop: '1px solid var(--border2)' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <div style={{ width: '16px', height: '1px', background: 'var(--accent)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>More Projects</span>
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: '700', letterSpacing: '-0.3px', marginBottom: '24px', color: 'var(--text)' }}>Keep exploring.</h2>
        <div className="more-projects-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {more.map(p => (
            <motion.div key={p.id} whileHover={{ y: -4 }}>
              <Link to={`/projects/${p.id}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'var(--surface)', border: '1px solid var(--border2)',
                  borderRadius: '12px', overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border2)'}
                >
                  <div style={{
                    height: '140px',
                    background: p.image ? `url(${p.image}) center/cover no-repeat` : p.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative',
                  }}>
                    {!p.image && <span style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: p.labelColor }}>{p.label}</span>}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,11,8,0.5) 0%, transparent 60%)' }} />
                  </div>
                  <div style={{ padding: '18px' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--accent)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>{p.category}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '600', color: 'var(--text)' }}>{p.title}</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <style>{`
        @media (max-width: 768px) {
          .detail-hero-wrap {
            padding: 40px 24px !important;
          }
          .info-card-grid {
            grid-template-columns: 1fr !important;
            margin: 0 24px !important;
          }
          .info-card-grid > div {
            border-right: none !important;
            border-bottom: 1px solid var(--border2) !important;
          }
          .detail-img-wrap {
            margin: 24px 24px !important;
            height: 220px !important;
          }
          .about-project-grid {
            grid-template-columns: 1fr !important;
            padding: 32px 24px !important;
            gap: 32px !important;
          }
          .more-projects-wrap {
            padding: 32px 24px !important;
          }
          .more-projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </PageTransition>
  )
}
