import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' }
  }),
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

      {/* PAGE HERO */}
      <section className="contact-page-hero" style={{
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
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>Contact</span>
        </motion.div>
        <motion.h1
          variants={fadeUp} custom={1} initial="hidden" animate="show"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: '700', letterSpacing: '-1.5px', lineHeight: '1.0', marginBottom: '16px' }}
        >
          Let's work<br />together.
        </motion.h1>
        <motion.p
          variants={fadeUp} custom={2} initial="hidden" animate="show"
          style={{ fontSize: '15px', color: 'var(--text2)', maxWidth: '480px', lineHeight: '1.7' }}
        >
          Have a project in mind? I'd love to hear about it. Let's build something great together.
        </motion.p>
      </section>

      {/* MAIN GRID */}
      <section className="contact-main-grid" style={{
        display: 'grid',
        gridTemplateColumns: '360px 1fr',
        gap: '40px',
        padding: '64px 48px',
      }}>

        {/* INFO CARD */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border2)',
            borderRadius: '16px',
            padding: '36px',
            height: 'fit-content',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          }} />
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: '700', letterSpacing: '-0.3px', marginBottom: '8px', color: 'var(--text)' }}>
            Get in touch
          </h3>
          <p style={{ fontSize: '13px', color: 'var(--text2)', lineHeight: '1.7', marginBottom: '28px' }}>
            Open to freelance projects, collaborations, and full-time opportunities.
          </p>

          {[
            { icon: <Mail size={15} />, label: 'Email', val: 'rasyidbejay@gmail.com' },
            { icon: <MapPin size={15} />, label: 'Location', val: 'Kuala Lumpur, Malaysia' },
            { icon: <Phone size={15} />, label: 'Phone', val: '+60 11-1530 1464' },
          ].map(({ icon, label, val }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '38px', height: '38px',
                background: 'var(--surface2)',
                border: '1px solid var(--border2)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--accent)', flexShrink: 0,
              }}>{icon}</div>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text2)', letterSpacing: '1px', textTransform: 'uppercase' }}>{label}</div>
                <div style={{ fontSize: '13px', color: 'var(--text)', marginTop: '2px' }}>{val}</div>
              </div>
            </div>
          ))}

          {/* Socials */}
          <div style={{
            display: 'flex', gap: '10px',
            marginTop: '28px', paddingTop: '28px',
            borderTop: '1px solid var(--border2)',
          }}>
            {[
              { label: 'GitHub', text: 'GH', href: 'https://github.com/rasyidbejay' },
              { label: 'LinkedIn', text: 'in', href: 'https://linkedin.com/in/rasyidbejay' },
              { label: 'Instagram', text: 'IG', href: 'https://instagram.com/rasyidbejay' },
            ].map(({ label, text, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ borderColor: 'var(--accent)', color: 'var(--accent)', y: -2 }}
                style={{
                  width: '38px', height: '38px',
                  background: 'var(--surface2)',
                  border: '1px solid var(--border2)',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text2)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  fontWeight: '600',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
              >
                {text}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CONTACT FORM */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          {/* Name + Email row */}
          <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { label: 'Name', name: 'name', type: 'text', placeholder: 'Your name' },
              { label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com' },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text2)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{label}</label>
                <input
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  required
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border2)',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    color: 'var(--text)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border2)'}
                />
              </div>
            ))}
          </div>

          {/* Subject */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text2)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Subject</label>
            <input
              name="subject"
              type="text"
              placeholder="Project inquiry"
              required
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border2)',
                borderRadius: '8px',
                padding: '12px 14px',
                color: 'var(--text)',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border2)'}
            />
          </div>

          {/* Message */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text2)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>Message</label>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              required
              rows={6}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border2)',
                borderRadius: '8px',
                padding: '12px 14px',
                color: 'var(--text)',
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                outline: 'none',
                resize: 'vertical',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border2)'}
            />
          </div>

          {/* Submit */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ y: -2, boxShadow: '0 8px 28px rgba(16,185,129,0.35)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '12px 28px',
                background: status === 'sending' ? 'var(--accent2)' : 'var(--accent)',
                color: '#fff',
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                fontWeight: '600',
                borderRadius: '8px',
                border: 'none',
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background 0.2s',
              }}
            >
              <Send size={13} />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status === 'sent' && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)' }}
              >
                ✓ Message sent successfully!
              </motion.span>
            )}
            {status === 'error' && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#f87171' }}
              >
                Something went wrong. Try emailing directly.
              </motion.span>
            )}
          </div>
        </motion.form>
      </section>

      {/* CTA BANNER */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        style={{ margin: '0 48px 72px' }}
      >
        <div className="contact-cta-wrap" style={{
          background: 'var(--surface)',
          border: '1px solid var(--border2)',
          borderRadius: '12px',
          padding: '44px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center, var(--accent-glow), transparent 70%)',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '10px' }}>
              Or reach out directly
            </div>
            <a
              href="mailto:rasyidbejay@gmail.com"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                fontWeight: '700',
                letterSpacing: '-0.3px',
                color: 'var(--text)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--accent)'}
              onMouseLeave={e => e.target.style.color = 'var(--text)'}
            >
              rasyidbejay@gmail.com
            </a>
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .contact-page-hero {
            padding: 48px 24px 40px !important;
          }
          .contact-main-grid {
            grid-template-columns: 1fr !important;
            padding: 40px 24px !important;
            gap: 32px !important;
          }
          .contact-form-row {
            grid-template-columns: 1fr !important;
          }
          .contact-cta-wrap {
            margin: 0 24px 48px !important;
            padding: 32px 24px !important;
          }
        }
      `}</style>

    </PageTransition>
  )
}
