import Image from 'next/image'

type FireSpot = { left: string; top: string; size: number; delay: string }

const FIRE_SPOTS: FireSpot[] = [
  { left: '5.6%', top: '58.5%', size: 1, delay: '0s' },
  { left: '24.6%', top: '43.8%', size: 1, delay: '0.2s' },
  { left: '21.9%', top: '60.8%', size: 1, delay: '0.4s' },
  { left: '37.2%', top: '21.6%', size: 1.1, delay: '0.1s' },
  { left: '57.6%', top: '40.6%', size: 1.1, delay: '0.3s' },
  { left: '42%', top: '67.4%', size: 1.1, delay: '0.5s' },
  { left: '62.9%', top: '25.6%', size: 1, delay: '0.15s' },
  { left: '66.8%', top: '32.4%', size: 1.2, delay: '0.35s' },
  { left: '92%', top: '30%', size: 1.5, delay: '0.25s' },
  { left: '92.7%', top: '53%', size: 1.5, delay: '0.45s' },
]

export function FireJuggler() {
  return (
    <div className="fire-troupe relative mx-auto aspect-[1376/768] w-full max-w-4xl">
      <style>{`
        .fire-troupe { container-type: inline-size; }
        .fire-spot { width: calc(var(--s) * 6cqw); height: calc(var(--s) * 6cqw); transform: translate(-50%, -60%); }
        .fire-glow, .fire-flame { transition: transform 450ms cubic-bezier(.2,.9,.3,1.4), opacity 350ms ease; }
        .fire-glow { opacity: .45; transform: scale(.8); }
        .fire-flame { opacity: 0; transform: translateX(-50%) scale(.4); transform-origin: 50% 100%; }
        .fire-spot:hover .fire-glow, .fire-spot:focus-visible .fire-glow { opacity: 1; transform: scale(2.4); }
        .fire-spot:hover .fire-flame, .fire-spot:focus-visible .fire-flame { opacity: 1; transform: translateX(-50%) scale(2.2); }
        .fire-flicker { animation: fire-flicker .8s ease-in-out infinite alternate; transform-origin: 50% 100%; }
        .fire-layer { position: absolute; left: 50%; bottom: 0; transform: translateX(-50%) rotate(-45deg); border-radius: 50% 50% 50% 0; }
        .fire-outer { width: 100%; aspect-ratio: 1; background: #e8401c; }
        .fire-mid { width: 66%; aspect-ratio: 1; bottom: 6%; background: #f7931e; }
        .fire-core { width: 36%; aspect-ratio: 1; bottom: 12%; background: #ffe066; }
        @keyframes fire-flicker {
          0% { transform: scaleY(1) skewX(0deg); }
          50% { transform: scaleY(1.12) skewX(-5deg); }
          100% { transform: scaleY(.92) skewX(5deg); }
        }
        @media (prefers-reduced-motion: reduce) { .fire-flicker { animation: none; } }
      `}</style>
      <Image
        src="/images/faq-fire-troupe.png"
        alt="Artistas de fuego de papel: malabares con poi, antorcha, bastón de fuego, escupe fuego y abanicos de fuego"
        fill
        priority
        sizes="(min-width: 896px) 896px, 100vw"
        className="pointer-events-none object-contain"
      />
      {FIRE_SPOTS.map((spot) => (
        <span
          key={`${spot.left}-${spot.top}`}
          aria-hidden="true"
          className="fire-spot absolute cursor-pointer rounded-full"
          style={{ left: spot.left, top: spot.top, ['--s' as string]: spot.size }}
        >
          <span
            className="fire-glow pointer-events-none absolute inset-0 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(255,170,60,.6), transparent 70%)' }}
          />
          <span className="fire-flame pointer-events-none absolute bottom-1/2 left-1/2 block h-1/2 w-1/3">
            <span className="fire-flicker absolute inset-0 block" style={{ animationDelay: spot.delay }}>
              <span className="fire-layer fire-outer" />
              <span className="fire-layer fire-mid" />
              <span className="fire-layer fire-core" />
            </span>
          </span>
        </span>
      ))}
    </div>
  )
}
