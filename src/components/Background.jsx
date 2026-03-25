import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function Background() {
  const mouseX = useMotionValue(400)
  const mouseY = useMotionValue(400)

  const springX = useSpring(mouseX, { damping: 25, stiffness: 60 })
  const springY = useSpring(mouseY, { damping: 25, stiffness: 60 })

  const orbX = useTransform(springX, v => v - 300)
  const orbY = useTransform(springY, v => v - 300)

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
    }}>
      {/* Grid lines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(var(--border2) 1px, transparent 1px), linear-gradient(90deg, var(--border2) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        opacity: 0.5,
      }} />

      {/* Glow orb that follows mouse */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, rgba(16,185,129,0.02) 50%, transparent 70%)',
          x: orbX,
          y: orbY,
          pointerEvents: 'none',
        }}
      />

      {/* Static corner glow top right */}
      <div style={{
        position: 'absolute',
        top: '-200px', right: '-200px',
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)',
      }} />

      {/* Static corner glow bottom left */}
      <div style={{
        position: 'absolute',
        bottom: '-200px', left: '-200px',
        width: '400px', height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16,185,129,0.03) 0%, transparent 70%)',
      }} />
    </div>
  )
}
