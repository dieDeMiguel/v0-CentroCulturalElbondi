'use client'

import { useEffect, useRef, useSyncExternalStore } from 'react'

const subscribeNoop = () => () => {}

/**
 * Minimal, on-trend cursor spotlight for the purple page headers.
 *
 * The header section keeps the exact brand color (`bg-primary`); this overlay
 * adds a soft, lighter-purple spotlight that smoothly follows the cursor and
 * fades in on hover (Linear/Vercel-style). Dependency-free, respects reduced
 * motion.
 *
 * Drop it as the first child of any `relative isolate overflow-hidden`
 * `bg-primary` section.
 */
export function InteractiveGlow() {
  const overlayRef = useRef<HTMLDivElement>(null)
  // Render only on the client, after hydration, to avoid SSR mismatch.
  const mounted = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  )

  useEffect(() => {
    if (!mounted) return
    const overlay = overlayRef.current
    if (!overlay) return
    const parent = overlay.parentElement
    if (!parent) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Eased pointer state for smooth, fluid movement.
    const target = { x: 50, y: 50, on: 0 }
    const eased = { x: 50, y: 50, on: 0 }

    let raf = 0
    // The loop only runs while easing toward the target and stops once settled,
    // so an idle page does no per-frame repaint work.
    const render = () => {
      const ease = reduceMotion ? 1 : 0.12
      eased.x += (target.x - eased.x) * ease
      eased.y += (target.y - eased.y) * ease
      eased.on += (target.on - eased.on) * (reduceMotion ? 1 : 0.08)

      overlay.style.opacity = String(eased.on)
      overlay.style.background = `radial-gradient(420px circle at ${eased.x}% ${eased.y}%, oklch(0.78 0.14 305 / 0.55), oklch(0.7 0.16 305 / 0.22) 40%, transparent 70%)`

      const settled =
        Math.abs(target.x - eased.x) < 0.05 &&
        Math.abs(target.y - eased.y) < 0.05 &&
        Math.abs(target.on - eased.on) < 0.005
      raf = settled ? 0 : requestAnimationFrame(render)
    }
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(render)
    }

    const onMove = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect()
      target.x = ((e.clientX - rect.left) / rect.width) * 100
      target.y = ((e.clientY - rect.top) / rect.height) * 100
      kick()
    }
    const onEnter = () => {
      target.on = 1
      kick()
    }
    const onLeave = () => {
      target.on = 0
      kick()
    }
    parent.addEventListener('pointermove', onMove)
    parent.addEventListener('pointerenter', onEnter)
    parent.addEventListener('pointerleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      parent.removeEventListener('pointermove', onMove)
      parent.removeEventListener('pointerenter', onEnter)
      parent.removeEventListener('pointerleave', onLeave)
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 opacity-0"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
