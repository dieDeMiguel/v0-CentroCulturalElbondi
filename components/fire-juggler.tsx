import Image from 'next/image'

const TORCH_TIPS = [
  { left: '41.4%', top: '17.6%', rotate: -28, delay: '0s' },
  { left: '47.3%', top: '9.4%', rotate: -62, delay: '0.25s' },
  { left: '58.3%', top: '18.4%', rotate: 22, delay: '0.5s' },
]

function Flame({ delay }: { delay: string }) {
  return (
    <span
      className="fire-flame absolute bottom-0 left-1/2 block origin-bottom"
      style={{ animationDelay: delay }}
    >
      <span className="fire-layer fire-outer" />
      <span className="fire-layer fire-mid" />
      <span className="fire-layer fire-core" />
    </span>
  )
}

export function FireJuggler() {
  return (
    <div className="fire-juggler group relative mx-auto aspect-[1408/768] w-full max-w-3xl cursor-pointer">
      <style>{`
        .fire-flame {
          width: 2.6cqw; height: 4.2cqw;
          animation: fire-flicker 0.9s ease-in-out infinite alternate;
        }
        .fire-juggler { container-type: inline-size; }
        .fire-scale { transform: scale(1); transform-origin: 0 0; transition: transform 450ms cubic-bezier(.2,.9,.3,1.4); }
        .fire-juggler:hover .fire-scale,
        .fire-juggler:active .fire-scale { transform: scale(2.4); }
        .fire-layer {
          position: absolute; left: 50%; bottom: 0;
          transform: translateX(-50%) rotate(45deg);
          border-radius: 50% 0 50% 50%;
          transform-origin: center;
          box-shadow: 0 1px 2px rgba(0,0,0,.25);
        }
        .fire-outer { width: 100%; aspect-ratio: 1; bottom: 0; background: #e8401c; }
        .fire-mid { width: 68%; aspect-ratio: 1; bottom: 4%; background: #f7931e; }
        .fire-core { width: 38%; aspect-ratio: 1; bottom: 8%; background: #ffe066; }
        .fire-glow {
          transition: opacity 450ms ease, transform 450ms ease;
          opacity: .55; transform: translate(-50%,-50%) scale(1);
        }
        .fire-juggler:hover .fire-glow,
        .fire-juggler:active .fire-glow { opacity: 1; transform: translate(-50%,-50%) scale(2.2); }
        @keyframes fire-flicker {
          0%   { transform: translateX(-50%) scaleY(1) skewX(0deg); }
          50%  { transform: translateX(-50%) scaleY(1.12) skewX(-4deg); }
          100% { transform: translateX(-50%) scaleY(.94) skewX(4deg); }
        }
        @media (prefers-reduced-motion: reduce) { .fire-flame { animation: none; } }
      `}</style>
      <Image
        src="/images/faq-fire-juggler.png"
        alt="Malabarista de papel haciendo malabares con antorchas de fuego"
        fill
        priority
        sizes="(min-width: 768px) 768px, 100vw"
        className="object-contain"
      />
      {TORCH_TIPS.map((tip) => (
        <span
          key={tip.left}
          aria-hidden="true"
          className="pointer-events-none absolute"
          style={{ left: tip.left, top: tip.top }}
        >
          <span
            className="fire-glow absolute left-0 top-0 block size-[7cqw] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(255,170,60,.55), transparent 70%)' }}
          />
          <span
            className="absolute left-0 top-0 block"
            style={{ transform: `rotate(${tip.rotate}deg)`, transformOrigin: '0 0' }}
          >
            <span className="fire-scale absolute left-0 top-0 block">
              <Flame delay={tip.delay} />
            </span>
          </span>
        </span>
      ))}
    </div>
  )
}
