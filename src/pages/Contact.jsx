import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
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

const inputBase = {
  width: '100%',
  background: 'var(--rb-bg-secondary)',
  border: '1px solid var(--rb-border)',
  borderRadius: '12px',
  padding: '14px 18px',
  fontSize: '15px',
  fontFamily: 'Inter, -apple-system, sans-serif',
  color: 'var(--rb-text-primary)',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
}

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(formRef.current)
    try {
      const res = await fetch('https://formspree.io/f/xldnzogn', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        formRef.current.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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
          Contact
        </motion.p>
        <motion.h1 {...fadeUp(0.1)} style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.0, color: 'var(--rb-text-primary)' }}>
          Let's work together.
        </motion.h1>
        <motion.p {...fadeUp(0.2)} style={{ fontSize: '19px', color: 'var(--rb-text-secondary)', marginTop: '20px', lineHeight: 1.6, maxWidth: '480px' }}>
          Have a project in mind? Get in touch.
        </motion.p>
      </section>

      {/* ── CONTACT LAYOUT ───────────────────────────────────────────── */}
      <section style={{ padding: '120px 0', borderBottom: '1px solid var(--rb-border-subtle)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '38% 62%', gap: '64px', alignItems: 'start' }}>

            {/* ── INFO CARD ── */}
            <motion.div
              {...fadeUpScroll}
              style={{
                background: 'var(--rb-bg-secondary)',
                border: '1px solid var(--rb-border-subtle)',
                borderRadius: '20px',
                padding: '48px',
              }}
            >
              <h3 style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--rb-text-primary)', marginBottom: '8px' }}>Get in touch</h3>
              <p style={{ fontSize: '15px', color: 'var(--rb-text-secondary)', lineHeight: 1.6, marginBottom: '40px' }}>
                Open to freelance projects, collaborations, and full-time opportunities.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  { icon: <Mail size={16} />, label: 'Email', val: 'rasyidbejay@gmail.com' },
                  { icon: <MapPin size={16} />, label: 'Location', val: 'Kuala Lumpur, Malaysia' },
                  { icon: <Phone size={16} />, label: 'Phone', val: '+60 11-1530 1464' },
                ].map(({ icon, label, val }) => (
                  <div key={label} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '12px',
                      background: 'var(--rb-bg-tertiary)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--rb-text-secondary)', flexShrink: 0, fontSize: '16px',
                    }}>{icon}</div>
                    <div>
                      <p style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--rb-text-tertiary)' }}>{label}</p>
                      <p style={{ fontSize: '15px', color: 'var(--rb-text-primary)', marginTop: '2px' }}>{val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ height: '1px', background: 'var(--rb-border-subtle)', margin: '40px 0' }} />

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {[
                  { label: 'GitHub', href: 'https://github.com/rasyidbejay' },
                  { label: 'LinkedIn', href: 'https://linkedin.com/in/rasyidbejay' },
                  { label: 'Instagram', href: 'https://instagram.com/rasyidbejay' },
                ].map(({ label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ color: 'var(--rb-text-primary)', borderColor: 'var(--rb-text-primary)' }}
                    style={{
                      padding: '8px 18px', fontSize: '13px', fontWeight: 500,
                      border: '1px solid var(--rb-border)', borderRadius: '999px',
                      color: 'var(--rb-text-secondary)', background: 'transparent',
                      textDecoration: 'none', transition: 'color 0.2s, border-color 0.2s',
                      display: 'inline-block',
                    }}
                  >
                    {label}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* ── FORM ── */}
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              {...fadeUpScroll}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {/* Name + Email row */}
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                {[
                  { label: 'Name', name: 'name', type: 'text', placeholder: 'Your name' },
                  { label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com' },
                ].map(({ label, name, type, placeholder }) => (
                  <div key={name}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--rb-text-secondary)', marginBottom: '8px' }}>{label}</label>
                    <input
                      name={name} type={type} placeholder={placeholder} required
                      style={inputBase}
                      onFocus={e => e.target.style.borderColor = 'var(--rb-text-primary)'}
                      onBlur={e => e.target.style.borderColor = 'var(--rb-border)'}
                    />
                  </div>
                ))}
              </div>

              {/* Subject */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--rb-text-secondary)', marginBottom: '8px' }}>Subject</label>
                <input
                  name="subject" type="text" placeholder="Project inquiry" required
                  style={inputBase}
                  onFocus={e => e.target.style.borderColor = 'var(--rb-text-primary)'}
                  onBlur={e => e.target.style.borderColor = 'var(--rb-border)'}
                />
              </div>

              {/* Message */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--rb-text-secondary)', marginBottom: '8px' }}>Message</label>
                <textarea
                  name="message" placeholder="Tell me about your project..." required rows={7}
                  style={{ ...inputBase, resize: 'vertical', minHeight: '180px' }}
                  onFocus={e => e.target.style.borderColor = 'var(--rb-text-primary)'}
                  onBlur={e => e.target.style.borderColor = 'var(--rb-border)'}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ opacity: 0.8 }} whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%', padding: '15px',
                  background: 'var(--rb-text-primary)', color: 'var(--rb-bg)',
                  fontSize: '15px', fontWeight: 500,
                  border: 'none', borderRadius: '999px', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  transition: 'opacity 0.2s',
                  opacity: status === 'sending' ? 0.6 : 1,
                  marginBottom: '16px',
                }}
              >
                <Send size={14} />
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </motion.button>

              {status === 'sent' && (
                <motion.p initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '14px', color: 'var(--rb-text-secondary)', textAlign: 'center' }}>
                  ✓ Message sent successfully!
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} style={{ fontSize: '14px', color: '#f87171', textAlign: 'center' }}>
                  Something went wrong. Try emailing directly.
                </motion.p>
              )}
            </motion.form>
          </div>
        </div>
      </section>

      {/* ── EMAIL BANNER ─────────────────────────────────────────────── */}
      <section style={{ padding: '0 0 120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
          <motion.div
            {...fadeUpScroll}
            style={{
              background: 'var(--rb-bg-secondary)',
              border: '1px solid var(--rb-border-subtle)',
              borderRadius: '24px',
              padding: '80px 64px',
              textAlign: 'center',
              marginTop: '80px',
            }}
          >
            <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--rb-text-secondary)' }}>
              Or reach out directly
            </p>
            <a
              href="mailto:rasyidbejay@gmail.com"
              style={{
                display: 'block', marginTop: '16px',
                fontSize: 'clamp(24px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.025em',
                color: 'var(--rb-text-primary)', textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.target.style.opacity = '0.7'}
              onMouseLeave={e => e.target.style.opacity = '1'}
            >
              rasyidbejay@gmail.com
            </a>
          </motion.div>
        </div>
      </section>

      <style>{`
        input::placeholder, textarea::placeholder { color: var(--rb-text-tertiary); }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          section > div { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>
    </PageTransition>
  )
}
