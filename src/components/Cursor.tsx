import { useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'

const isTouch = window.matchMedia('(pointer: coarse)').matches

export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  useEffect(() => {
    if (isTouch) return
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (isTouch) return null

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        x,
        y,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="3,1 3,21 7.5,16 10.5,23 13.5,21.5 10.5,14.5 18,14.5"
          fill="white"
          stroke="rgba(0,0,0,0.4)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  )
}
