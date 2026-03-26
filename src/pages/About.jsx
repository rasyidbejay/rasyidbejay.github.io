import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
  }),
}

const toolkit = [
  {
    cat: 'Frontend',
    items: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Vue 3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
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
      { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    cat: 'DevOps & Tools',
    items: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg' },
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

export default function About() {
  return (
    <PageTransition>

      {/* PAGE HERO */}
      <section className="page-hero-section" style={{
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
          variants={fadeUp} custom={0} initial="hidden" animate="show"
          style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}
        >
          <div style={{ width: '16px', height: '1px', background: 'var(--accent)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>About Me</span>
        </motion.div>
        <motion.h1
          variants={fadeUp} custom={1} initial="hidden" animate="show"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: '700', letterSpacing: '-1.5px', lineHeight: '1.0', marginBottom: '16px' }}
        >
          I build things<br />for the web.
        </motion.h1>
        <motion.p
          variants={fadeUp} custom={2} initial="hidden" animate="show"
          style={{ fontSize: '15px', color: 'var(--text2)', maxWidth: '480px', lineHeight: '1.7' }}
        >
          Frontend Developer with a passion for clean code, great UX, and beautiful interfaces.
        </motion.p>
      </section>

      {/* BIO */}
      <section className="about-bio-grid" style={{
        display: 'grid',
        gridTemplateColumns: '260px 1fr',
        gap: '56px',
        padding: '72px 48px',
        borderBottom: '1px solid var(--border2)',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="profile-img-wrap" style={{
            width: '220px',
            height: '260px',
            borderRadius: '16px',
            border: '1px solid var(--border2)',
            overflow: 'hidden',
            position: 'relative',
            flexShrink: 0,
          }}>
            <img
              src="/profile.jpg"
              alt="Rashid Abdullah"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(8,11,8,0.4) 0%, transparent 60%)',
            }} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontSize: '11px', color: '#34d399',
            background: 'rgba(52,211,153,0.07)',
            border: '1px solid rgba(52,211,153,0.2)',
            padding: '5px 12px', borderRadius: '100px',
            marginBottom: '20px',
          }}>
            <div style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: '#34d399',
              animation: 'pulse 2s infinite',
            }} />
            Available for freelance work
          </div>

          <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: '1.8', marginBottom: '16px' }}>
            Frontend Developer with a Bachelor's in Business Administration (Minor in Information Systems) from International Islamic University Malaysia (IIUM), graduating with Dean's List honours.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text2)', lineHeight: '1.8', marginBottom: '24px' }}>
            I create responsive, high-performance websites using modern frontend frameworks and tools. Passionate about clean code, great UX, and building things that work beautifully across all devices.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Location row - text only */}
            <div style={{ display: 'flex', gap: '16px', fontSize: '13px' }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px',
                color: 'var(--text2)', minWidth: '76px',
                letterSpacing: '0.5px', paddingTop: '1px',
              }}>Location</span>
              <span style={{ color: 'var(--text)' }}>Kuala Lumpur, Malaysia</span>
            </div>

            {/* Social icons row */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
              {[
                {
                  label: 'Email',
                  href: 'mailto:rasyidbejay@gmail.com',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  ),
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/rasyidbejay',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  href: 'https://linkedin.com/in/rasyidbejay',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                },
                {
                  label: 'Instagram',
                  href: 'https://instagram.com/rasyidbejay',
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                  ),
                },
              ].map(({ label, href, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noreferrer"
                  title={label}
                  whileHover={{ y: -2, borderColor: 'var(--accent)', color: 'var(--accent)' }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '38px',
                    height: '38px',
                    background: 'var(--surface)',
                    border: '1px solid var(--border2)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text2)',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, color 0.2s',
                    cursor: 'pointer',
                  }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* TOOLKIT */}
      <section className="toolkit-section" style={{ padding: '72px 48px', borderBottom: '1px solid var(--border2)' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <div style={{ width: '16px', height: '1px', background: 'var(--accent)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>My Toolkit</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', fontWeight: '700', letterSpacing: '-0.8px', marginBottom: '40px' }}>
            Tools I work with.
          </h2>
        </motion.div>

        <div className="toolkit-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {toolkit.map((t, i) => (
            <motion.div
              key={t.cat}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border2)',
                borderRadius: '16px',
                padding: '28px',
              }}
            >
              {/* Category header */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                marginBottom: '20px',
                paddingBottom: '16px',
                borderBottom: '1px solid var(--border2)',
              }}>
                <div style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  background: 'var(--accent)',
                }} />
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px',
                  color: 'var(--accent)', letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                }}>{t.cat}</span>
              </div>

              {/* Icons grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(64px, 1fr))',
                gap: '12px',
              }}>
                {t.items.map(item => (
                  <div
                    key={item.name}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '14px 8px',
                      background: 'var(--surface2)',
                      border: '1px solid var(--border2)',
                      borderRadius: '12px',
                      cursor: 'default',
                      transition: 'border-color 0.2s, transform 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--border)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border2)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.name}
                      style={{
                        width: '28px',
                        height: '28px',
                        objectFit: 'contain',
                        filter: item.name === 'Flask' || item.name === 'GitHub' || item.name === 'Next.js' ? 'invert(1)' : 'none',
                      }}
                    />
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '9px',
                      color: 'var(--text2)',
                      textAlign: 'center',
                      whiteSpace: 'nowrap',
                      lineHeight: 1,
                    }}>{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="certs-section" style={{ padding: '72px 48px' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <div style={{ width: '16px', height: '1px', background: 'var(--accent)' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>Certifications</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', fontWeight: '700', letterSpacing: '-0.8px', marginBottom: '32px' }}>
            Credentials.
          </h2>
        </motion.div>

        <div className="certs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ borderColor: 'var(--border)' }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border2)',
                borderRadius: '12px',
                padding: '22px',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                cursor: c.link ? 'pointer' : 'default',
              }}
              onClick={() => c.link && window.open(c.link, '_blank')}
            >
              <div style={{
                width: '40px', height: '40px',
                borderRadius: '10px',
                background: 'var(--surface2)',
                border: '1px solid var(--border2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, fontSize: '18px',
              }}>{c.icon}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--accent)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>{c.issuer}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: '600', marginBottom: '5px', lineHeight: '1.3', color: 'var(--text)' }}>{c.name}</div>
                <div style={{ fontSize: '11px', color: 'var(--text2)' }}>{c.skills}</div>
                {c.link && (
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--accent)', marginTop: '8px', letterSpacing: '0.5px' }}>View Certificate →</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #34d399 }
          50% { opacity: 0.5; box-shadow: 0 0 3px #34d399 }
        }

        @media (max-width: 768px) {
          .about-bio-grid {
            grid-template-columns: 1fr !important;
            padding: 40px 24px !important;
            gap: 32px !important;
          }
          .profile-img-wrap {
            width: 100% !important;
            height: 280px !important;
          }
          .profile-img-wrap img {
            width: 100% !important;
            height: 100% !important;
          }
          .toolkit-section {
            padding: 48px 24px !important;
          }
          .toolkit-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .certs-section {
            padding: 48px 24px !important;
          }
          .certs-grid {
            grid-template-columns: 1fr !important;
          }
          .page-hero-section {
            padding: 48px 24px 40px !important;
          }
        }
      `}</style>
    </PageTransition>
  )
}
