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
            {[
              ['Location', 'Kuala Lumpur, Malaysia'],
              ['Email', 'rasyidbejay@gmail.com'],
              ['GitHub', 'github.com/rasyidbejay'],
              ['LinkedIn', 'linkedin.com/in/rasyidbejay'],
            ].map(([label, val]) => (
              <div key={label} style={{ display: 'flex', gap: '16px', fontSize: '13px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text2)', minWidth: '76px', letterSpacing: '0.5px', paddingTop: '1px' }}>{label}</span>
                <span style={{ color: 'var(--text)' }}>{val}</span>
              </div>
            ))}
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
