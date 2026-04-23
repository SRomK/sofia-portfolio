import { useState, useEffect } from 'react'
import { GradientTracing } from './ui/GradientTracing'

export default function GradientBackground() {
  const [dims, setDims] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  })

  useEffect(() => {
    const handler = () =>
      setDims({ w: window.innerWidth, h: window.innerHeight })
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const { w, h } = dims

  const lines = [
    {
      path: `M0,${h * 0.18} Q${w * 0.3},${h * 0.04} ${w * 0.6},${h * 0.22} T${w},${h * 0.18}`,
      colors: ['#aa3bff', '#aa3bff', '#2EB9DF'] as [string, string, string],
      duration: 5,
    },
    {
      path: `M0,${h * 0.42} Q${w * 0.25},${h * 0.28} ${w * 0.55},${h * 0.46} T${w},${h * 0.42}`,
      colors: ['#2EB9DF', '#aa3bff', '#aa3bff'] as [string, string, string],
      duration: 6.5,
    },
    {
      path: `M0,${h * 0.65} Q${w * 0.35},${h * 0.52} ${w * 0.65},${h * 0.68} T${w},${h * 0.65}`,
      colors: ['#aa3bff', '#c084fc', '#2EB9DF'] as [string, string, string],
      duration: 7,
    },
    {
      path: `M0,${h * 0.85} Q${w * 0.2},${h * 0.72} ${w * 0.5},${h * 0.88} T${w},${h * 0.85}`,
      colors: ['#2EB9DF', '#9E00FF', '#aa3bff'] as [string, string, string],
      duration: 5.5,
    },
  ]

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        opacity: 0.6,
      }}
    >
      {lines.map((line, i) => (
        <div key={i} style={{ position: 'absolute', inset: 0 }}>
          <GradientTracing
            width={w}
            height={h}
            path={line.path}
            gradientColors={line.colors}
            animationDuration={line.duration}
            strokeWidth={1}
          />
        </div>
      ))}
    </div>
  )
}
