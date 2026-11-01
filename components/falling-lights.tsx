import { round, seeded } from '@/lib/seeded'

const LIGHT_COUNT = 34

const lights = Array.from({ length: LIGHT_COUNT }, (_, i) => ({
  left: round(7 + seeded(i, 1) * 86),
  size: 3 + Math.round(seeded(i, 2) * 4),
  duration: round(6 + seeded(i, 3) * 7),
  delay: round(-seeded(i, 4) * 13),
  drift: round((seeded(i, 5) - 0.5) * 40),
}))

const keyframes = `
@keyframes falling-light {
  0% { transform: translate3d(0, 0, 0); opacity: 0; }
  10% { opacity: 1; }
  75% { opacity: 0.85; }
  100% { transform: translate3d(var(--drift), 100cqh, 0); opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .falling-light { animation: none !important; opacity: 0 !important; }
}
`

export function FallingLights({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute overflow-hidden ${className ?? ''}`}
      style={{ containerType: 'size' }}
    >
      <style>{keyframes}</style>
      {lights.map((light, i) => (
        <span
          key={i}
          className="falling-light absolute top-0 rounded-full"
          style={
            {
              left: `${light.left}%`,
              width: light.size,
              height: light.size,
              background: 'oklch(0.93 0.13 90)',
              boxShadow: `0 0 ${light.size * 2}px ${light.size / 2}px oklch(0.88 0.16 85 / 0.7)`,
              animation: `falling-light ${light.duration}s linear ${light.delay}s infinite`,
              '--drift': `${light.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
