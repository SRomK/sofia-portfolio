import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      style={{
        position: 'fixed',
        right: 0,
        top: 0,
        width: 3,
        height: '100vh',
        background: 'var(--border)',
        zIndex: 500,
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          background: 'var(--primary)',
          transformOrigin: 'top',
          scaleY,
          boxShadow: '0 0 8px var(--primary-glow)',
        }}
      />
    </motion.div>
  )
}
