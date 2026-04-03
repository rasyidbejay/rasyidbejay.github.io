import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { Sun, Moon, Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: '52px',
        background: 'var(--rb-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--rb-border-subtle)',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 48px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <NavLink to="/" style={{ textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
            <img
              src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
              alt="Rashid Abdullah"
              style={{ height: '28px', width: 'auto', objectFit: 'contain', display: 'block' }}
            />
          </NavLink>

          {/* Desktop links */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
            {navLinks.map(({ to, label, end }) => {
              const isActive = end ? location.pathname === to : location.pathname.startsWith(to)
              return (
                <NavLink key={to} to={to} end={end} style={{ textDecoration: 'none' }}>
                  <span style={{
                    fontFamily: "'Inter', -apple-system, sans-serif",
                    fontSize: '14px',
                    fontWeight: isActive ? '500' : '400',
                    color: isActive ? 'var(--rb-text-primary)' : 'var(--rb-text-secondary)',
                    transition: 'color 0.2s',
                  }}>{label}</span>
                </NavLink>
              )
            })}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '999px',
                background: 'var(--rb-bg-secondary)',
                border: '1px solid var(--rb-border)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--rb-text-primary)',
              }}
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </motion.button>
          </div>

          {/* Mobile right side */}
          <div className="mobile-nav" style={{ display: 'none', alignItems: 'center', gap: '12px' }}>
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '999px',
                background: 'var(--rb-bg-secondary)',
                border: '1px solid var(--rb-border)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--rb-text-primary)',
              }}
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </motion.button>
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '36px', height: '36px', borderRadius: '8px',
                background: 'var(--rb-bg-secondary)', border: '1px solid var(--rb-border)',
                cursor: 'pointer', display: 'flex', alignItems: 'center',
                justifyContent: 'center', color: 'var(--rb-text-primary)',
              }}
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '52px', left: 0, right: 0,
              zIndex: 99,
              background: 'var(--rb-bg)',
              borderBottom: '1px solid var(--rb-border-subtle)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {navLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setMenuOpen(false)}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  padding: '14px 16px',
                  borderRadius: '8px',
                  fontFamily: "'Inter', -apple-system, sans-serif",
                  fontSize: '14px',
                  fontWeight: isActive ? '500' : '400',
                  color: isActive ? 'var(--rb-text-primary)' : 'var(--rb-text-secondary)',
                  background: isActive ? 'var(--rb-bg-secondary)' : 'transparent',
                  transition: 'all 0.2s',
                })}
              >
                {label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
          nav > div { padding: 0 20px !important; }
        }
      `}</style>
    </>
  )
}
