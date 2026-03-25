import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

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
    desc: 'Complete e-commerce storefront for a fictional luxury coffee brand based in Melbourne.',
    tools: ['Vue 3', 'Pinia', 'Vite'],
    bg: 'linear-gradient(135deg, #1a0d00 0%, #2d1500 100%)',
    label: 'BRØW',
    labelColor: '#c8a27a',
    labelFont: 'var(--font-mono)',
  },
  {
    id: 'lumen',
    category: 'Frontend',
    title: 'Lumen Agency',
    desc: 'Premium multi-page marketing agency website with smooth scroll animations.',
    tools: ['Vue 3', 'Vue Router', 'CSS3'],
    bg: 'linear-gradient(135deg, #06060f 0%, #10102a 100%)',
    label: 'LUMEN',
    labelColor: '#ffffff',
    labelFont: 'var(--font-display)',
  },
  {
    id: 'ripple',
    category: 'Full-Stack',
    title: 'Ripple Habits',
    desc: 'Habit tracking web app built with React and TypeScript. Clean UI, smooth interactions.',
    tools: ['React', 'TypeScript', 'Tailwind'],
    bg: 'linear-gradient(135deg, #00120e 0%, #00261e 100%)',
    label: 'Ripple Habits',
    labelColor: '#10b981',
    labelFont: 'var(--font-display)',
  },
]

const marqueeItems = [
  'React', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite',
  'Framer Motion', 'Python', 'Flask', 'WordPress', 'GitHub Actions',
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
  }),
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
      {/* HERO */}
      <section className="hero-section" style={{
        minHeight: 'calc(100vh - 62px)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Left */}
        <div className="hero-left" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '64px 48px',
          position: 'relative',
          zIndex: 2,
        }}>
          <motion.div
            variants={fadeUp} custom={0} initial="hidden" animate="show"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}
          >
            <div style={{ width: '28px', height: '1px', background: 'var(--accent)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Frontend Developer · KL
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp} custom={1} initial="hidden" animate="show"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 4.5vw, 4.2rem)', fontWeight: '700', lineHeight: '1.05', letterSpacing: '-1.5px', marginBottom: '16px' }}
          >
            Rashid<br />
            <span style={{ color: 'var(--accent)' }}>Abdullah.</span>
          </motion.h1>

          <motion.div
            variants={fadeUp} custom={2} initial="hidden" animate="show"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text2)', marginBottom: '20px', minHeight: '22px' }}
          >
            {text}
            <span style={{
              display: 'inline-block', width: '2px', height: '1em',
              background: 'var(--accent)', marginLeft: '1px',
              verticalAlign: 'middle',
              animation: 'blink 0.75s infinite',
            }} />
          </motion.div>

          <motion.p
            variants={fadeUp} custom={3} initial="hidden" animate="show"
            style={{ fontSize: '15px', color: 'var(--text2)', lineHeight: '1.75', marginBottom: '36px', maxWidth: '420px' }}
          >
            Based in Kuala Lumpur. I craft fast, beautiful, and accessible web experiences using modern frontend tools.
          </motion.p>

          <motion.div
            variants={fadeUp} custom={4} initial="hidden" animate="show"
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
          >
            <Link to="/projects" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ y: -2, boxShadow: '0 8px 28px rgba(16,185,129,0.35)' }}
                whileTap={{ scale: 0.97 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = e.clientX - rect.left - rect.width / 2
                  const y = e.clientY - rect.top - rect.height / 2
                  e.currentTarget.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0px, 0px)'
                }}
                style={{
                  padding: '12px 24px',
                  background: 'var(--accent)',
                  color: '#fff',
                  fontFamily: 'var(--font-display)',
                  fontSize: '13px',
                  fontWeight: '600',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.2s',
                }}
              >
                View My Work →
              </motion.button>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = e.clientX - rect.left - rect.width / 2
                  const y = e.clientY - rect.top - rect.height / 2
                  e.currentTarget.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0px, 0px)'
                  e.currentTarget.style.borderColor = 'var(--border2)'
                  e.currentTarget.style.color = 'var(--text)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--accent)'
                }}
                style={{
                  padding: '12px 24px',
                  background: 'transparent',
                  color: 'var(--text)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '13px',
                  fontWeight: '600',
                  borderRadius: '8px',
                  border: '1px solid var(--border2)',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Right */}
        <div className="hero-right" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '40px',
        }}>
          {/* Grid bg */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(var(--border2) 1px, transparent 1px), linear-gradient(90deg, var(--border2) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.6,
          }} />
          {/* Glow */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%)',
          }} />

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '340px' }}
          >
            {/* Floating badge */}
            <div style={{
              position: 'absolute', top: '-16px', right: '0',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '8px 14px',
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--text2)',
              zIndex: 3,
            }}>
              ✦ <span style={{ color: 'var(--accent)' }}>Open to work</span>
            </div>

            {/* Main card */}
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '28px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
              }} />
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text2)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px' }}>
                At a glance
              </div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                {[['5+', 'Years'], ['9+', 'Projects'], ['15+', 'Tech']].map(([n, l]) => (
                  <div key={l} style={{ flex: 1, background: 'var(--surface2)', borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: '700', color: 'var(--accent)', lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: '10px', color: 'var(--text2)', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{l}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                {['React', 'Vue 3', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vite'].map(t => (
                  <span key={t} style={{
                    fontFamily: 'var(--font-mono)', fontSize: '10px',
                    color: 'var(--accent)',
                    background: 'rgba(16,185,129,0.08)',
                    border: '1px solid rgba(16,185,129,0.2)',
                    padding: '3px 10px', borderRadius: '100px',
                  }}>{t}</span>
                ))}
              </div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                fontSize: '12px', color: 'var(--text2)',
                borderTop: '1px solid var(--border2)', paddingTop: '16px',
              }}>
                <div style={{
                  width: '7px', height: '7px', borderRadius: '50%',
                  background: 'var(--accent)',
                  boxShadow: '0 0 8px var(--accent)',
                  animation: 'pulse 2s infinite',
                }} />
                Available for freelance projects
              </div>
            </div>

            {/* Mini card */}
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border2)',
              borderRadius: '12px',
              padding: '16px 20px',
              marginTop: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text2)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Latest Project</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: '600', color: 'var(--text)' }}>Ripple Habits</div>
              </div>
              <Link to="/projects/ripple" style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', textDecoration: 'none' }}>View →</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="stats-bar-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid var(--border2)',
          borderBottom: '1px solid var(--border2)',
        }}
      >
        {[
          ['5+', 'Years Experience'],
          ['9+', 'Projects Delivered'],
          ['15+', 'Technologies'],
          ['∞', 'Passion'],
        ].map(([n, l], i) => (
          <motion.div
            key={l}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              padding: '24px 20px',
              borderRight: i < 3 ? '1px solid var(--border2)' : 'none',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: '700',
                color: 'var(--accent)',
                lineHeight: 1,
              }}
            >
              {n}
            </motion.div>
            <div style={{
              fontSize: '11px',
              color: 'var(--text2)',
              marginTop: '4px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}>
              {l}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* SELECTED WORK */}
      <section className="section-padding" style={{ padding: '72px 48px' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <div style={{ width: '16px', height: '1px', background: 'var(--accent)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>Selected Work</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', fontWeight: '700', letterSpacing: '-0.8px', marginBottom: '40px' }}>
            Projects I'm proud of.
          </h2>
        </motion.div>

        <div className="selected-work-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link to={`/projects/${p.id}`} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border2)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'border-color 0.25s, box-shadow 0.25s',
                }}>
                  <div style={{ height: '170px', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: p.labelFont, fontSize: '20px', fontWeight: '700', color: p.labelColor, letterSpacing: p.id === 'brow' ? '6px' : '2px' }}>{p.label}</span>
                  </div>
                  <div style={{ padding: '20px' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--accent)', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '6px' }}>{p.category}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: '600', marginBottom: '7px', color: 'var(--text)' }}>{p.title}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text2)', lineHeight: '1.6' }}>{p.desc}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '12px' }}>
                      {p.tools.map(t => (
                        <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text2)', background: 'var(--surface2)', border: '1px solid var(--border2)', padding: '3px 8px', borderRadius: '4px' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ padding: '32px 0', borderTop: '1px solid var(--border2)', borderBottom: '1px solid var(--border2)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '48px', animation: 'marquee 28s linear infinite', width: 'max-content', alignItems: 'center' }}>
          {[
            { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Vue 3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
            { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
            { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
            { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
            { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
            // duplicate for seamless loop
            { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Vue 3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
            { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
            { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
            { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
            { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
          ].map((tech, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              flexShrink: 0,
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                background: 'var(--surface)',
                border: '1px solid var(--border2)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
              }}>
                <img
                  src={tech.icon}
                  alt={tech.name}
                  style={{
                    width: '26px',
                    height: '26px',
                    objectFit: 'contain',
                    filter: tech.name === 'Flask' || tech.name === 'GitHub' ? 'invert(1)' : 'none',
                  }}
                />
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                color: 'var(--text2)',
                letterSpacing: '0.5px',
                whiteSpace: 'nowrap',
              }}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA BANNER */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        style={{ margin: '72px 48px' }}
      >
        <div
          className="cta-banner-inner"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '52px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', top: '-60px', right: '-60px',
            width: '220px', height: '220px',
            background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          }} />
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.4rem, 2.2vw, 2rem)',
            fontWeight: '700',
            letterSpacing: '-0.5px',
            maxWidth: '440px',
            lineHeight: '1.2',
            color: 'var(--text)',
            position: 'relative',
            zIndex: 1,
          }}>
            Let's build something great together.
          </h2>
          <Link to="/contact" style={{ textDecoration: 'none', position: 'relative', zIndex: 1 }}>
            <motion.button
              className="cta-button"
              whileHover={{ y: -2, boxShadow: '0 8px 28px rgba(16,185,129,0.35)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '12px 24px',
                background: 'var(--accent)',
                color: '#fff',
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                fontWeight: '600',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              Start a Project →
            </motion.button>
          </Link>
        </div>
      </motion.div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
        @keyframes pulse { 0%, 100% { opacity: 1; box-shadow: 0 0 8px var(--accent) } 50% { opacity: 0.5; box-shadow: 0 0 3px var(--accent) } }
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }

        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr !important;
          }
          .hero-right {
            display: none !important;
          }
          .hero-left {
            padding: 40px 24px 48px !important;
            min-height: auto !important;
          }
          .stats-bar-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stats-bar-grid > div:nth-child(2) {
            border-right: none !important;
          }
          .stats-bar-grid > div:nth-child(3) {
            border-right: 1px solid var(--border2) !important;
            border-top: 1px solid var(--border2) !important;
          }
          .stats-bar-grid > div:nth-child(4) {
            border-right: none !important;
            border-top: 1px solid var(--border2) !important;
          }
          .selected-work-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .cta-banner-inner {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 24px !important;
            padding: 32px 24px !important;
            margin: 0 !important;
          }
          .cta-button {
            width: auto !important;
          }
          .section-padding {
            padding: 48px 24px !important;
          }
        }
      `}</style>
    </PageTransition>
  )
}
