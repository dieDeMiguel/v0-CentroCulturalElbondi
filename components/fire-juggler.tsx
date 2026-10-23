import Image from 'next/image'

type FireSpot = { left: string; top: string; size: number; delay: string }

type Performer = {
  name: string
  clipLeft: number
  clipRight: number
  motion: string
  duration: string
  spots: FireSpot[]
}

const PERFORMERS: Performer[] = [
  {
    name: 'poi',
    clipLeft: 0,
    clipRight: 26.6,
    motion: 'perf-sway',
    duration: '2.6s',
    spots: [
      { left: '5.6%', top: '58.5%', size: 1, delay: '0s' },
      { left: '24.6%', top: '43.8%', size: 1, delay: '0.2s' },
      { left: '21.9%', top: '60.8%', size: 1, delay: '0.4s' },
    ],
  },
  {
    name: 'torch',
    clipLeft: 26.6,
    clipRight: 40.5,
    motion: 'perf-bob',
    duration: '2.2s',
    spots: [{ left: '37.2%', top: '21.6%', size: 1.1, delay: '0.1s' }],
  },
  {
    name: 'staff',
    clipLeft: 40.5,
    clipRight: 59.6,
    motion: 'perf-rock',
    duration: '3s',
    spots: [
      { left: '57.6%', top: '40.6%', size: 1.1, delay: '0.3s' },
      { left: '42%', top: '67.4%', size: 1.1, delay: '0.5s' },
    ],
  },
  {
    name: 'breather',
    clipLeft: 59.6,
    clipRight: 79,
    motion: 'perf-lean',
    duration: '2.8s',
    spots: [
      { left: '62.9%', top: '25.6%', size: 1, delay: '0.15s' },
      { left: '66.8%', top: '32.4%', size: 1.2, delay: '0.35s' },
    ],
  },
  {
    name: 'fans',
    clipLeft: 79,
    clipRight: 100,
    motion: 'perf-sway',
    duration: '2.4s',
    spots: [
      { left: '92%', top: '30%', size: 1.5, delay: '0.25s' },
      { left: '92.7%', top: '53%', size: 1.5, delay: '0.45s' },
    ],
  },
]

export function FireJuggler() {
  return (
    <div className="fire-troupe relative mx-auto aspect-[1376/768] w-full max-w-4xl">
      <style>{`
        .fire-troupe { container-type: inline-size; }
        .stage-floor {
          left: 2%; right: 2%; top: 72%; height: 20%;
          border-radius: 50%;
          background:
            radial-gradient(ellipse at 50% 45%, rgba(255,150,60,.35), transparent 60%),
            repeating-linear-gradient(90deg, rgba(0,0,0,.12) 0 1px, transparent 1px 7cqw),
            #6b3a7d;
          box-shadow: 0 1.2cqw 0 #3f1d4d, 0 2.4cqw 2cqw rgba(20,5,30,.45);
        }
        .stage-floor-inner {
          inset: 14% 8%;
          border-radius: 50%;
          background: radial-gradient(ellipse at 50% 40%, rgba(255,190,90,.28), transparent 70%), #7d4790;
          box-shadow: inset 0 .4cqw 0 rgba(255,255,255,.12), 0 .5cqw 0 #5a2c6b;
        }
        .performer { transform-origin: var(--ox) 82%; animation: var(--motion) var(--dur) ease-in-out infinite alternate; }
        @keyframes perf-sway { from { transform: rotate(-1.4deg); } to { transform: rotate(1.4deg); } }
        @keyframes perf-bob { from { transform: translateY(0); } to { transform: translateY(-1.2%); } }
        @keyframes perf-rock { from { transform: rotate(1.2deg) translateY(0); } to { transform: rotate(-1.2deg) translateY(-0.6%); } }
        @keyframes perf-lean { from { transform: rotate(-0.8deg); } to { transform: rotate(1.6deg) translateY(-0.5%); } }
        .fire-spot { width: calc(var(--s) * 6cqw); height: calc(var(--s) * 6cqw); transform: translate(-50%, -60%); }
        .fire-glow, .fire-flame { transition: transform 450ms cubic-bezier(.2,.9,.3,1.4), opacity 350ms ease; }
        .fire-glow { opacity: .45; transform: scale(.8); animation: fire-pulse 1.1s ease-in-out infinite alternate; }
        .fire-flame { opacity: 0; transform: translateX(-50%) scale(.4); transform-origin: 50% 100%; }
        .fire-spot:hover .fire-glow, .fire-spot:focus-visible .fire-glow { animation: none; opacity: 1; transform: scale(2.4); }
        .fire-spot:hover .fire-flame, .fire-spot:focus-visible .fire-flame { opacity: 1; transform: translateX(-50%) scale(2.2); }
        .fire-flicker { animation: fire-flicker .8s ease-in-out infinite alternate; transform-origin: 50% 100%; }
        .fire-layer { position: absolute; left: 50%; bottom: 0; transform: translateX(-50%) rotate(-45deg); border-radius: 50% 50% 50% 0; }
        .fire-outer { width: 100%; aspect-ratio: 1; background: #e8401c; }
        .fire-mid { width: 66%; aspect-ratio: 1; bottom: 6%; background: #f7931e; }
        .fire-core { width: 36%; aspect-ratio: 1; bottom: 12%; background: #ffe066; }
        @keyframes fire-pulse { from { opacity: .3; transform: scale(.75); } to { opacity: .6; transform: scale(1.05); } }
        @keyframes fire-flicker {
          0% { transform: scaleY(1) skewX(0deg); }
          50% { transform: scaleY(1.12) skewX(-5deg); }
          100% { transform: scaleY(.92) skewX(5deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .performer, .fire-glow, .fire-flicker { animation: none; }
        }
      `}</style>

      <div aria-hidden="true" className="stage-floor pointer-events-none absolute">
        <div className="stage-floor-inner absolute" />
      </div>

      <span className="sr-only">
        Artistas de fuego de papel: malabares con poi, antorcha, bastón de fuego, escupe fuego y abanicos de fuego
      </span>

      {PERFORMERS.map((performer) => (
        <div
          key={performer.name}
          className="performer pointer-events-none absolute inset-0"
          style={{
            ['--motion' as string]: performer.motion,
            ['--dur' as string]: performer.duration,
            ['--ox' as string]: `${(performer.clipLeft + performer.clipRight) / 2}%`,
          }}
        >
          <Image
            src="/images/faq-fire-troupe.png"
            alt=""
            fill
            priority
            sizes="(min-width: 896px) 896px, 100vw"
            className="object-contain"
            style={{ clipPath: `inset(0 ${100 - performer.clipRight}% 0 ${performer.clipLeft}%)` }}
          />
          {performer.spots.map((spot) => (
            <span
              key={`${spot.left}-${spot.top}`}
              aria-hidden="true"
              className="fire-spot pointer-events-auto absolute cursor-pointer rounded-full"
              style={{ left: spot.left, top: spot.top, ['--s' as string]: spot.size }}
            >
              <span
                className="fire-glow pointer-events-none absolute inset-0 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(255,170,60,.6), transparent 70%)', animationDelay: spot.delay }}
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
      ))}
    </div>
  )
}
