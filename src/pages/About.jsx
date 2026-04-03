import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import PageTransition from '../components/PageTransition'

function ToolIcon({ item, theme }) {
  const [err, setErr] = useState(false)
  const filter = item.invert && theme === 'dark' ? 'invert(1)' : (item.imgFilter || 'none')
  if (err) return (
    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--rb-bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 600, color: 'var(--rb-text-secondary)' }}>
      {item.abbr || item.name.slice(0, 2).toUpperCase()}
    </div>
  )
  return <img src={item.icon} alt={item.name} onError={() => setErr(true)} style={{ width: '36px', height: '36px', objectFit: 'contain', filter }} />
}

const ease = [0.25, 0.1, 0.25, 1]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease, delay },
})

const fadeUpScroll = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease, delay },
})

const toolkit = [
  {
    cat: 'Frontend',
    items: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Vue 3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invert: true },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    ],
  },
  {
    cat: 'Styling & Motion',
    items: [
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ],
  },
  {
    cat: 'Backend & DB',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', invert: true },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    cat: 'DevOps & Tools',
    items: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
    ],
  },
  {
    cat: 'CMS & E-Commerce',
    items: [
      { name: 'WordPress', abbr: 'WP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain-wordmark.svg' },
      { name: 'Shopify', abbr: 'SH', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg' },
      { name: 'Webflow', abbr: 'WF', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg' },
      { name: 'Strapi', abbr: 'ST', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/strapi/strapi-original.svg' },
      { name: 'Contentful', abbr: 'CF', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/contentful/contentful-original.svg' },
      { name: 'Sanity', abbr: 'SN', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sanity/sanity-original.svg' },
      { name: 'Drupal', abbr: 'DR', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg' },
      { name: 'Ghost', abbr: 'GH', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ghost/ghost-original.svg' },
      { name: 'WooCommerce', abbr: 'WC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg' },
    ],
  },
]

const certs = [
  {
    icon: '🎓',
    issuer: 'Google · Coursera · Mar 2025',
    name: 'Google Data Analytics',
    skills: 'Data Analysis, SQL, R, Tableau, Data Visualization',
    link: 'https://www.coursera.org/account/accomplishments/specialization/YM89MN1AS20X',
  },
  {
    icon: '🏆',
    issuer: 'Microsoft · LinkedIn Learning · Jul 2024',
    name: 'Career Essentials in Data Analysis',
    skills: 'Data Analytics, Data Analysis, Data Visualization',
    link: 'https://www.linkedin.com/learning/certificates/b885b95ff5b02316',
  },
  {
    icon: '🎖️',
    issuer: 'Google · Credly · Mar 2025',
    name: 'Google Data Analytics Professional Certificate',
    skills: 'Data Analytics, SQL, Spreadsheets, Data Visualization',
    link: 'https://www.credly.com/badges/f7453f48-784d-4eae-95d1-149f93450cc4',
  },
  {
    icon: '🌐',
    issuer: 'MDEC Malaysia · Aug 2025',
    name: 'MOHE-MDEC Global Outsourcing Talent Programme',
    skills: 'Web Design, Web Marketing Strategy, SEO, WordPress',
    link: null,
  },
  {
    icon: '📊',
    issuer: 'freeCodeCamp · Jul 2024',
    name: 'Data Visualization',
    skills: 'D3.js, Data Visualization, JavaScript, HTML, CSS',
    link: 'https://www.freecodecamp.org/certification/rasyidbejay/data-visualization',
  },
]

const socials = [
  { label: 'Email', href: 'mailto:rasyidbejay@gmail.com', target: undefined,
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
  { label: 'GitHub', href: 'https://github.com/rasyidbejay', target: '_blank',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg> },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rasyidbejay', target: '_blank',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { label: 'Instagram', href: 'https://instagram.com/rasyidbejay', target: '_blank',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg> },
]

export default function About() {
  const { theme } = useTheme()

  return (
    <PageTransition>

      {/* ── PAGE HERO ────────────────────────────────────────────────── */}
      <section style={{
        minHeight: '60vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 24px 80px',
        borderBottom: '1px solid var(--rb-border-subtle)',
      }}>
        <motion.p {...fadeUp(0)} style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rb-text-secondary)', marginBottom: '24px' }}>
          About Me
        </motion.p>
        <motion.h1 {...fadeUp(0.1)} style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.0, color: 'var(--rb-text-primary)', maxWidth: '900px' }}>
          I build things for the web.
        </motion.h1>
        <motion.p {...fadeUp(0.2)} style={{ fontSize: '19px', color: 'var(--rb-text-secondary)', marginTop: '24px', lineHeight: 1.6 }}>
          Frontend Developer. Clean code. Great UX.
        </motion.p>
      </section>

      {/* ── BIO ──────────────────────────────────────────────────────── */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid var(--rb-border-subtle)' }}>
        <div className="bio-grid" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '40% 60%', gap: '80px', alignItems: 'start' }}>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, ease }}
          >
            <img
              src="/profile.jpg"
              alt="Rashid Abdullah"
              style={{
                borderRadius: '24px', width: '100%',
                objectFit: 'cover', objectPosition: 'center top',
                aspectRatio: '3/4', display: 'block',
                boxShadow: '0 24px 64px rgba(0,0,0,0.1)',
              }}
            />
          </motion.div>

          {/* Bio content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, ease, delay: 0.1 }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'var(--rb-bg-secondary)', border: '1px solid var(--rb-border)',
              borderRadius: '999px', padding: '6px 16px',
              fontSize: '13px', color: 'var(--rb-text-secondary)',
              marginBottom: '40px',
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34C759', animation: 'pulse 2s infinite' }} />
              Available for freelance work
            </div>

            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--rb-text-secondary)', marginBottom: '20px' }}>
              Frontend Developer with a Bachelor's in Business Administration (Minor in Information Systems) from International Islamic University Malaysia (IIUM), graduating with Dean's List honours.
            </p>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--rb-text-secondary)' }}>
              I create responsive, high-performance websites using modern frontend frameworks and tools. Passionate about clean code, great UX, and building things that work beautifully across all devices.
            </p>

            {/* Info rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '40px' }}>
              {[
                { label: 'Location', value: 'Kuala Lumpur, Malaysia' },
                { label: 'Email', value: 'rasyidbejay@gmail.com' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--rb-text-tertiary)' }}>{label}</span>
                  <span style={{ fontSize: '15px', color: 'var(--rb-text-primary)' }}>{value}</span>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '40px' }}>
              {socials.map(({ label, href, target, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={target}
                  rel="noreferrer"
                  title={label}
                  whileHover={{ color: 'var(--rb-text-primary)', borderColor: 'var(--rb-text-primary)' }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '40px', height: '40px', borderRadius: '999px',
                    border: '1px solid var(--rb-border)',
                    background: 'var(--rb-bg-secondary)',
                    color: 'var(--rb-text-secondary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none', transition: 'color 0.2s, border-color 0.2s',
                    cursor: 'pointer',
                  }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TOOLKIT ──────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--rb-bg-secondary)', borderBottom: '1px solid var(--rb-border-subtle)', padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
          <motion.div {...fadeUpScroll(0)} style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rb-text-secondary)', marginBottom: '16px' }}>My Toolkit</p>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>Tools I work with.</h2>
          </motion.div>

          <div className="toolkit-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {toolkit.map((t, i) => (
              <motion.div
                key={t.cat}
                {...fadeUpScroll(i * 0.1)}
                style={{
                  background: 'var(--rb-bg)', border: '1px solid var(--rb-border-subtle)',
                  borderRadius: '20px', padding: '40px',
                  gridColumn: t.cat === 'CMS & E-Commerce' ? '1 / -1' : undefined,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--rb-text-tertiary)' }} />
                  <span style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--rb-text-secondary)' }}>{t.cat}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginTop: '28px' }}>
                  {t.items.map(item => (
                    <div key={item.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                      <ToolIcon item={item} theme={theme} />
                      <span style={{ fontSize: '11px', color: 'var(--rb-text-tertiary)', whiteSpace: 'nowrap' }}>{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ───────────────────────────────────────────── */}
      <section style={{ padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
          <motion.div {...fadeUpScroll(0)} style={{ marginBottom: '56px' }}>
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rb-text-secondary)', marginBottom: '16px' }}>Certifications</p>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1 }}>Credentials.</h2>
          </motion.div>

          <div className="certs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {certs.map((c, i) => (
              <motion.div
                key={c.name}
                {...fadeUpScroll(i * 0.08)}
                onClick={() => c.link && window.open(c.link, '_blank')}
                style={{
                  background: 'var(--rb-bg-secondary)', border: '1px solid var(--rb-border-subtle)',
                  borderRadius: '18px', padding: '32px',
                  display: 'flex', gap: '20px', alignItems: 'flex-start',
                  cursor: c.link ? 'pointer' : 'default',
                  transition: 'border-color 0.2s',
                }}
                whileHover={c.link ? { borderColor: 'var(--rb-border)' } : {}}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'var(--rb-bg-tertiary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, fontSize: '20px',
                }}>{c.icon}</div>
                <div>
                  <p style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--rb-text-tertiary)' }}>{c.issuer}</p>
                  <p style={{ fontSize: '16px', fontWeight: 600, color: 'var(--rb-text-primary)', marginTop: '6px', lineHeight: 1.3 }}>{c.name}</p>
                  <p style={{ fontSize: '13px', color: 'var(--rb-text-secondary)', marginTop: '6px' }}>{c.skills}</p>
                  {c.link && (
                    <span style={{
                      display: 'inline-block', fontSize: '13px', color: 'var(--rb-text-secondary)',
                      marginTop: '16px', transition: 'color 0.2s', cursor: 'pointer',
                    }}
                    onMouseEnter={e => e.target.style.color = 'var(--rb-text-primary)'}
                    onMouseLeave={e => e.target.style.color = 'var(--rb-text-secondary)'}
                    >
                      View Certificate →
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #34C759 }
          50% { opacity: 0.5; box-shadow: 0 0 3px #34C759 }
        }
        @media (max-width: 900px) {
          .bio-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .toolkit-grid { grid-template-columns: 1fr !important; }
          .certs-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          section > div { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </PageTransition>
  )
}
