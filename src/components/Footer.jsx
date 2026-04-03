import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { theme } = useTheme()
  return (
    <footer style={{
      borderTop: '1px solid var(--rb-border-subtle)',
      background: 'var(--rb-bg)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <img
          src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
          alt="Rashid Abdullah"
          style={{ height: '28px', width: 'auto', objectFit: 'contain', display: 'block' }}
        />
        <p style={{ fontSize: '12px', color: 'var(--rb-text-tertiary)', fontFamily: "'Inter', sans-serif" }}>
          © 2025 Rashid Abdullah
        </p>
      </div>
    </footer>
  )
}
