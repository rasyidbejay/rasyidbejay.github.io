export default function Background() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        background: 'var(--rb-bg)',
        transition: 'background 0.3s ease',
      }}
    />
  )
}
