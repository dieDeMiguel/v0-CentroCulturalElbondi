/**
 * Deterministic pseudo-random value in [0, 1) for SSR-rendered decorations.
 *
 * Uses only 32-bit integer math (Math.imul / shifts), which is bit-exact in every
 * JS engine. `Math.sin`-based hashes are not: tiny engine differences get amplified
 * and make server and client styles disagree, causing hydration mismatches.
 */
export function seeded(...parts: number[]) {
  let h = 0x9e3779b9
  for (const part of parts) {
    h = Math.imul(h ^ (part | 0), 0x85ebca6b)
    h ^= h >>> 13
    h = Math.imul(h, 0xc2b2ae35)
    h ^= h >>> 16
  }
  return (h >>> 0) / 4294967296
}

/** Rounds to a fixed number of decimals so serialized style strings stay short and stable. */
export function round(value: number, decimals = 2) {
  const factor = 10 ** decimals
  return Math.round(value * factor) / factor
}
