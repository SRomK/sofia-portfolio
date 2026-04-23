import { useMemo } from 'react'

type Dot = { id: number; x: number; y: number; size: number; opacity: number }

export default function Particles() {
  const dots = useMemo<Dot[]>(
    () =>
      Array.from({ length: 70 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 1,
        opacity: Math.random() * 0.2 + 0.08,
      })),
    [],
  )

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {dots.map((dot) => (
        <div
          key={dot.id}
          style={{
            position: 'absolute',
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
            borderRadius: '50%',
            background: 'hsl(0 0% 70%)',
            opacity: dot.opacity,
          }}
        />
      ))}
    </div>
  )
}
