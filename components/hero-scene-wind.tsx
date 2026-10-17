// Plants bend on this gust's cycle so the trees feel the wind on a steady rhythm.
export const PRIMARY_GUST = { cycle: 19, offset: 3, crossing: 5 }

export function HeroSceneWind() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="scene-shooting-star" />
      <span className="scene-ufo-path">
        <span className="scene-ufo">
          <span className="ufo-beam" />
          <span className="ufo-dome">
            <span className="ufo-alien" />
          </span>
          <span className="ufo-saucer">
            <span className="ufo-light" />
            <span className="ufo-light" />
            <span className="ufo-light" />
          </span>
        </span>
      </span>
    </div>
  )
}
