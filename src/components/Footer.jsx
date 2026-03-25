export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border2)',
      padding: '24px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <img
        src="/logo-dark.png"
        alt="Rashid Abdullah"
        style={{ height: '28px', width: 'auto', objectFit: 'contain', display: 'block' }}
      />
      <p style={{ fontSize: '11px', color: 'var(--text2)', fontFamily: 'var(--font-mono)' }}>
        © 2025 Rashid Abdullah
      </p>
    </footer>
  )
}
