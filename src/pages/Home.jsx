import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import PageTransition from '../components/PageTransition'

function MarqueeImg({ src, alt, abbr, style }) {
  const [err, setErr] = useState(false)
  if (err) return (
    <div style={{ width: '26px', height: '26px', borderRadius: '6px', background: 'var(--rb-bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 600, color: 'var(--rb-text-secondary)' }}>
      {abbr}
    </div>
  )
  return <img src={src} alt={alt} onError={() => setErr(true)} style={{ width: '26px', height: '26px', objectFit: 'contain', ...style }} />
}

const roles = [
  'Frontend Developer.',
  'React Specialist.',
  'Vue 3 Developer.',
  'UI/UX Enthusiast.',
  'Available for Hire.',
]

const projects = [
  {
    id: 'brow',
    category: 'E-Commerce',
    title: 'BRØW — Luxury Coffee',
    desc: 'Complete e-commerce storefront for a fictional luxury coffee brand built with Vue 3 and Pinia.',
    tools: ['Vue 3', 'Pinia', 'Vite'],
    image: '/brow.png',
    bg: 'linear-gradient(135deg, #1a0d00 0%, #2d1500 100%)',
    label: 'BRØW',
    labelColor: '#c8a27a',
  },
  {
    id: 'riwei',
    category: 'E-Commerce',
    title: 'ERP Webstore — Riwei',
    desc: 'Custom e-commerce on SiteGiant with responsive frontend and GA4 integration.',
    tools: ['SiteGiant', 'GA4', 'Custom CSS'],
    image: '/riwei.png',
    bg: 'linear-gradient(135deg, #0a1a0a 0%, #1a3a1a 100%)',
    label: 'Riwei',
    labelColor: '#4ade80',
  },
  {
    id: 'ripple',
    category: 'Full-Stack',
    title: 'Ripple Habits',
    desc: 'Habit tracking web app built with React and TypeScript. Clean UI, smooth interactions.',
    tools: ['React', 'TypeScript', 'Tailwind'],
    image: '/ripple.png',
    bg: 'linear-gradient(135deg, #00120e 0%, #00261e 100%)',
    label: 'Ripple',
    labelColor: '#10b981',
  },
]

const techIcons = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vue 3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
  { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg', imgStyle: { filter: 'brightness(0) saturate(100%) invert(36%) sepia(80%) saturate(400%) hue-rotate(168deg) brightness(95%)' } },
  { name: 'Shopify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'WordPress', abbr: 'WP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain-wordmark.svg' },
  { name: 'Shopify', abbr: 'SH', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg' },
  { name: 'Webflow', abbr: 'WF', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg' },
  { name: 'Strapi', abbr: 'ST', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/strapi/strapi-original.svg' },
  { name: 'Contentful', abbr: 'CF', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/contentful/contentful-original.svg' },
  { name: 'Sanity', abbr: 'SN', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sanity/sanity-original.svg' },
  { name: 'Drupal', abbr: 'DR', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg' },
  { name: 'Ghost', abbr: 'GH', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ghost/ghost-original.svg' },
  { name: 'WooCommerce', abbr: 'WC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg' },
]
const marqueeItems = [...techIcons, ...techIcons]

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

export default function Home() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const current = roles[roleIndex]
    if (!deleting) {
      if (text.length < current.length) {
        timeoutRef.current = setTimeout(() => setText(current.slice(0, text.length + 1)), 95)
      } else {
        timeoutRef.current = setTimeout(() => setDeleting(true), 1800)
      }
    } else {
      if (text.length > 0) {
        timeoutRef.current = setTimeout(() => setText(current.slice(0, text.length - 1)), 55)
      } else {
        setDeleting(false)
        setRoleIndex(i => (i + 1) % roles.length)
      }
    }
    return () => clearTimeout(timeoutRef.current)
  }, [text, deleting, roleIndex])

  return (
    <PageTransition>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{
        minHeight: 'calc(100svh - 52px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 24px',
        position: 'relative',
        borderBottom: '1px solid var(--rb-border-subtle)',
      }}>
        <motion.p {...fadeUp(0)} style={{
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--rb-text-secondary)',
          marginBottom: '32px',
        }}>
          Frontend Developer · Kuala Lumpur
        </motion.p>

        <motion.h1 {...fadeUp(0.1)} style={{
          fontSize: 'clamp(64px, 10vw, 120px)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          lineHeight: 1.0,
          color: 'var(--rb-text-primary)',
          marginBottom: '24px',
        }}>
          Rashid Abdullah.
        </motion.h1>

        <motion.div {...fadeUp(0.2)} style={{
          fontSize: 'clamp(18px, 2.5vw, 24px)',
          fontWeight: 400,
          color: 'var(--rb-text-secondary)',
          letterSpacing: '-0.01em',
          marginBottom: '48px',
          minHeight: '1.4em',
        }}>
          {text}
          <span style={{
            display: 'inline-block', width: '2px', height: '0.85em',
            background: 'var(--rb-text-primary)', marginLeft: '2px',
            verticalAlign: 'middle', animation: 'blink 0.75s infinite',
          }} />
        </motion.div>

        <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/projects" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ opacity: 0.8 }} whileTap={{ scale: 0.97 }}
              style={{
                padding: '13px 28px', fontSize: '15px', fontWeight: 500,
                background: 'var(--rb-text-primary)', color: 'var(--rb-bg)',
                border: 'none', borderRadius: '999px', cursor: 'pointer',
                transition: 'opacity 0.2s',
              }}
            >
              View My Work →
            </motion.button>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ background: 'var(--rb-bg-secondary)' }} whileTap={{ scale: 0.97 }}
              style={{
                padding: '12px 28px', fontSize: '15px', fontWeight: 500,
                background: 'transparent', color: 'var(--rb-text-primary)',
                border: '1px solid var(--rb-border)', borderRadius: '999px',
                cursor: 'pointer', transition: 'background 0.2s',
              }}
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          {...fadeUp(0.6)}
          style={{
            position: 'absolute', bottom: '40px', left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          }}
        >
          <span style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rb-text-tertiary)' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={16} color="var(--rb-text-tertiary)" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────── */}
      <section>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '96px 48px' }}>
          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              ['5+', 'Years Experience'],
              ['9+', 'Projects Delivered'],
              ['15+', 'Technologies'],
              ['∞', 'Passion'],
            ].map(([n, l], i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                style={{
                  textAlign: 'center', padding: '48px 32px',
                  background: 'var(--rb-bg-secondary)',
                  border: '1px solid var(--rb-border-subtle)',
                  borderRadius: '18px',
                }}
              >
                <div style={{ fontSize: 'clamp(48px, 6vw, 72px)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--rb-text-primary)', lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--rb-text-secondary)', marginTop: '12px' }}>{l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ────────────────────────────────────────────── */}
      <section style={{ padding: '120px 0', borderTop: '1px solid var(--rb-border-subtle)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
          <motion.div {...fadeUpScroll} style={{ marginBottom: '64px' }}>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rb-text-secondary)', marginBottom: '16px' }}>Selected Work</p>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>Highlighted projects.</h2>
          </motion.div>

          <div className="selected-work-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 48px rgba(0,0,0,0.1)' }}
                style={{
                  background: 'var(--rb-bg-secondary)',
                  border: '1px solid var(--rb-border-subtle)',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.4s ease, transform 0.4s ease',
                  cursor: 'pointer',
                }}
              >
                <Link to={`/projects/${p.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{
                    aspectRatio: '16/9',
                    background: p.image ? `url(${p.image}) center/cover no-repeat` : p.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative',
                  }}>
                    {!p.image && <span style={{ fontSize: '18px', fontWeight: 700, color: p.labelColor, letterSpacing: '4px' }}>{p.label}</span>}
                  </div>
                  <div style={{ padding: '24px' }}>
                    <p style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--rb-text-tertiary)', marginBottom: '8px' }}>{p.category}</p>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--rb-text-primary)' }}>{p.title}</h3>
                    <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--rb-text-secondary)', marginTop: '8px' }}>{p.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px' }}>
                      {p.tools.map(t => (
                        <span key={t} style={{
                          fontSize: '12px', color: 'var(--rb-text-secondary)',
                          background: 'var(--rb-bg-tertiary)',
                          border: '1px solid var(--rb-border-subtle)',
                          borderRadius: '999px', padding: '4px 12px',
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────────────── */}
      <div style={{
        padding: '48px 0',
        borderTop: '1px solid var(--rb-border-subtle)',
        borderBottom: '1px solid var(--rb-border-subtle)',
        background: 'var(--rb-bg)',
        overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', gap: '48px', animation: 'marquee 28s linear infinite', width: 'max-content', alignItems: 'center' }}>
          {marqueeItems.map((tech, i) => (
            <div key={i} className="marquee-icon" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              <div style={{
                width: '44px', height: '44px',
                background: 'var(--rb-bg-secondary)',
                border: '1px solid var(--rb-border-subtle)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px',
              }}>
                <MarqueeImg src={tech.icon} alt={tech.name} abbr={tech.abbr || tech.name.slice(0, 2).toUpperCase()} style={tech.imgStyle} />
              </div>
              <span style={{ fontSize: '9px', color: 'var(--rb-text-tertiary)', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA BANNER ───────────────────────────────────────────────── */}
      <section style={{ padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
          <motion.div
            {...fadeUpScroll}
            className="cta-banner"
            style={{
              background: 'var(--rb-bg-secondary)',
              border: '1px solid var(--rb-border-subtle)',
              borderRadius: '24px',
              padding: '96px 80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '40px',
            }}
          >
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, letterSpacing: '-0.025em', maxWidth: '560px', lineHeight: 1.15 }}>
              Let's build something together.
            </h2>
            <Link to="/contact" style={{ textDecoration: 'none', flexShrink: 0 }}>
              <motion.button
                whileHover={{ opacity: 0.8 }} whileTap={{ scale: 0.97 }}
                style={{
                  padding: '13px 28px', fontSize: '15px', fontWeight: 500,
                  background: 'var(--rb-text-primary)', color: 'var(--rb-bg)',
                  border: 'none', borderRadius: '999px', cursor: 'pointer',
                  transition: 'opacity 0.2s', whiteSpace: 'nowrap',
                }}
              >
                Start a Project →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }

        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .selected-work-grid { grid-template-columns: 1fr !important; }
          .cta-banner { flex-direction: column !important; align-items: flex-start !important; padding: 48px 40px !important; }
          .cta-banner h2 { max-width: 100% !important; }
        }
        @media (max-width: 600px) {
          .cta-banner { padding: 40px 28px !important; }
        }
      `}</style>
    </PageTransition>
  )
}
