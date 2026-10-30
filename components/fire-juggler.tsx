import Image from 'next/image'
import { Music, Music2 } from 'lucide-react'

type NoteSpot = { left: string; top: string; delay: string; alt?: boolean }

const NOTES: NoteSpot[] = [
  { left: '8%', top: '28%', delay: '0s' },
  { left: '20%', top: '24%', delay: '1.1s', alt: true },
  { left: '30%', top: '36%', delay: '0.4s', alt: true },
  { left: '40%', top: '40%', delay: '1.5s' },
  { left: '58%', top: '20%', delay: '0.2s' },
  { left: '62%', top: '30%', delay: '1.3s', alt: true },
  { left: '79%', top: '24%', delay: '0.7s', alt: true },
  { left: '76%', top: '16%', delay: '1.8s' },
  { left: '84%', top: '36%', delay: '0.5s' },
  { left: '95%', top: '28%', delay: '1.6s', alt: true },
]

export function FireJuggler() {
  return (
    <div className="music-troupe relative mx-auto aspect-[1376/768] w-full max-w-md lg:max-w-lg">
      <style>{`
        .music-troupe { container-type: inline-size; }
        .music-note {
          width: 3.4cqw; height: 3.4cqw; color: #2b0b3f;
          filter: drop-shadow(0 0 .35cqw rgba(255,255,255,.35));
          animation: note-float 3s ease-in-out infinite;
          opacity: 0;
        }
        @keyframes note-float {
          0% { opacity: 0; transform: translate(-50%, 0) rotate(-10deg) scale(.7); }
          20% { opacity: 1; }
          100% { opacity: 0; transform: translate(-20%, -6cqw) rotate(12deg) scale(1.1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .music-note { animation: none; opacity: .8; }
        }
      `}</style>

      <Image
        src="/images/faq-musicos.png"
        alt="Músicos de papel tocando acordeón, bombo, violín, trompeta y guitarra"
        fill
        priority
        sizes="(min-width: 1024px) 512px, 448px"
        className="object-contain"
      />

      {NOTES.map((note) => {
        const Icon = note.alt ? Music2 : Music
        return (
          <Icon
            key={`${note.left}-${note.top}`}
            aria-hidden="true"
            className="music-note pointer-events-none absolute"
            style={{ left: note.left, top: note.top, animationDelay: note.delay }}
            strokeWidth={2.5}
          />
        )
      })}
    </div>
  )
}
