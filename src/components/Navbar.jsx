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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        height: '62px',
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border2)',
      }}>
        <NavLink to="/" style={{ textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
          <img
            src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
            alt="Rashid Abdullah"
            style={{ height: '32px', width: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </NavLink>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          {navLinks.map(({ to, label, end }) => {
            const isActive = end ? location.pathname === to : location.pathname.startsWith(to)
            return (
              <NavLink key={to} to={to} end={end} style={{ textDecoration: 'none', position: 'relative', paddingBottom: '4px' }}>
                <span style={{
                  fontSize: '12px', fontWeight: '500',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.8px', textTransform: 'uppercase',
                  color: isActive ? 'var(--accent)' : 'var(--text2)',
                  transition: 'color 0.2s',
                }}>{label}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      height: '1.5px', background: 'var(--accent)', borderRadius: '1px',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </NavLink>
            )
          })}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            style={{
              width: '36px', height: '36px', borderRadius: '8px',
              background: 'var(--surface2)', border: '1px solid var(--border2)',
              cursor: 'pointer', display: 'flex', alignItems: 'center',
              justifyContent: 'center', color: 'var(--text2)',
            }}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </motion.button>
        </div>

        {/* Mobile right side */}
        <div className="mobile-nav" style={{ display: 'none', alignItems: 'center', gap: '12px' }}>
          <motion.button
            onClick={toggleTheme}
            whileTap={{ scale: 0.95 }}
            style={{
              width: '36px', height: '36px', borderRadius: '8px',
              background: 'var(--surface2)', border: '1px solid var(--border2)',
              cursor: 'pointer', display: 'flex', alignItems: 'center',
              justifyContent: 'center', color: 'var(--text2)',
            }}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </motion.button>
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.95 }}
            style={{
              width: '36px', height: '36px', borderRadius: '8px',
              background: 'var(--surface2)', border: '1px solid var(--border2)',
              cursor: 'pointer', display: 'flex', alignItems: 'center',
              justifyContent: 'center', color: 'var(--text2)',
            }}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </motion.button>
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
              top: '62px', left: 0, right: 0,
              zIndex: 99,
              background: 'var(--bg)',
              borderBottom: '1px solid var(--border2)',
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
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: '500',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: isActive ? 'var(--accent)' : 'var(--text2)',
                  background: isActive ? 'var(--surface)' : 'transparent',
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
          nav { padding: 0 20px !important; }
        }
      `}</style>
    </>
  )
}
