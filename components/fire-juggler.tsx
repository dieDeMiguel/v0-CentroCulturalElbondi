import Image from 'next/image'
import { Music, Music2 } from 'lucide-react'

type NoteSpot = { left: string; top: string; delay: string; alt?: boolean }

type Performer = {
  name: string
  clipLeft: number
  clipRight: number
  motion: string
  duration: string
  notes: NoteSpot[]
}

const PERFORMERS: Performer[] = [
  {
    name: 'acordeón',
    clipLeft: 0,
    clipRight: 23.4,
    motion: 'perf-sway',
    duration: '2.4s',
    notes: [
      { left: '8%', top: '28%', delay: '0s' },
      { left: '20%', top: '24%', delay: '1.1s', alt: true },
    ],
  },
  {
    name: 'bombo',
    clipLeft: 23.4,
    clipRight: 42.5,
    motion: 'perf-bob',
    duration: '0.9s',
    notes: [
      { left: '30%', top: '36%', delay: '0.4s', alt: true },
      { left: '40%', top: '40%', delay: '1.5s' },
    ],
  },
  {
    name: 'violín',
    clipLeft: 42.5,
    clipRight: 63.2,
    motion: 'perf-lean',
    duration: '2.8s',
    notes: [
      { left: '58%', top: '20%', delay: '0.2s' },
      { left: '62%', top: '30%', delay: '1.3s', alt: true },
    ],
  },
  {
    name: 'trompeta',
    clipLeft: 63.2,
    clipRight: 77.6,
    motion: 'perf-rock',
    duration: '1.8s',
    notes: [
      { left: '79%', top: '24%', delay: '0.7s', alt: true },
      { left: '76%', top: '16%', delay: '1.8s' },
    ],
  },
  {
    name: 'guitarra',
    clipLeft: 77.6,
    clipRight: 100,
    motion: 'perf-sway',
    duration: '2.6s',
    notes: [
      { left: '84%', top: '36%', delay: '0.5s' },
      { left: '95%', top: '28%', delay: '1.6s', alt: true },
    ],
  },
]

export function FireJuggler() {
  return (
    <div className="music-troupe relative mx-auto aspect-[1376/768] w-full max-w-4xl">
      <style>{`
        .music-troupe { container-type: inline-size; }
        .stage-floor {
          left: 2%; right: 2%; top: 78%; height: 18%;
          border-radius: 50%;
          background:
            radial-gradient(ellipse at 50% 45%, rgba(255,200,120,.25), transparent 60%),
            repeating-linear-gradient(90deg, rgba(0,0,0,.12) 0 1px, transparent 1px 7cqw),
            #6b3a7d;
          box-shadow: 0 1.2cqw 0 #3f1d4d, 0 2.4cqw 2cqw rgba(20,5,30,.45);
        }
        .stage-floor-inner {
          inset: 14% 8%;
          border-radius: 50%;
          background: radial-gradient(ellipse at 50% 40%, rgba(255,210,140,.22), transparent 70%), #7d4790;
          box-shadow: inset 0 .4cqw 0 rgba(255,255,255,.12), 0 .5cqw 0 #5a2c6b;
        }
        .performer { transform-origin: var(--ox) 88%; animation: var(--motion) var(--dur) ease-in-out infinite alternate; }
        @keyframes perf-sway { from { transform: rotate(-1.4deg); } to { transform: rotate(1.4deg); } }
        @keyframes perf-bob { from { transform: translateY(0); } to { transform: translateY(-1.2%); } }
        @keyframes perf-rock { from { transform: rotate(1.2deg) translateY(0); } to { transform: rotate(-1.2deg) translateY(-0.6%); } }
        @keyframes perf-lean { from { transform: rotate(-0.8deg); } to { transform: rotate(1.6deg) translateY(-0.5%); } }
        .music-note {
          width: 2.6cqw; height: 2.6cqw; color: #ffd36b;
          filter: drop-shadow(0 .2cqw 0 rgba(40,10,50,.5));
          animation: note-float 3s ease-in-out infinite;
          opacity: 0;
        }
        @keyframes note-float {
          0% { opacity: 0; transform: translate(-50%, 0) rotate(-10deg) scale(.7); }
          20% { opacity: 1; }
          100% { opacity: 0; transform: translate(-20%, -6cqw) rotate(12deg) scale(1.1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .performer { animation: none; }
          .music-note { animation: none; opacity: .8; }
        }
      `}</style>

      <div aria-hidden="true" className="stage-floor pointer-events-none absolute">
        <div className="stage-floor-inner absolute" />
      </div>

      <span className="sr-only">
        Músicos de papel tocando acordeón, bombo, violín, trompeta y guitarra
      </span>

      {PERFORMERS.map((performer) => (
        <div
          key={performer.name}
          aria-hidden="true"
          className="performer pointer-events-none absolute inset-0"
          style={{
            ['--motion' as string]: performer.motion,
            ['--dur' as string]: performer.duration,
            ['--ox' as string]: `${(performer.clipLeft + performer.clipRight) / 2}%`,
          }}
        >
          <Image
            src="/images/faq-musicos.png"
            alt=""
            fill
            priority
            sizes="(min-width: 896px) 896px, 100vw"
            className="object-contain"
            style={{ clipPath: `inset(0 ${100 - performer.clipRight}% 0 ${performer.clipLeft}%)` }}
          />
          {performer.notes.map((note) => {
            const Icon = note.alt ? Music2 : Music
            return (
              <Icon
                key={`${note.left}-${note.top}`}
                className="music-note absolute"
                style={{ left: note.left, top: note.top, animationDelay: note.delay }}
                strokeWidth={2.5}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}
