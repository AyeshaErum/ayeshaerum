import { useState } from 'react'
import { skills } from '../data/cv.js'

// Interactive skill tree: hover (or tap, on touch screens) a branch to reveal
// its category label; the branch's subtopics fan out as leaf chips.
// Geometry is laid out in a 720x520 viewBox; branches alternate right/left
// down the trunk. Supports up to 8 branches.
const BRANCHES = [
  { x1: 360, y1: 150, cx: 450, cy: 128, x2: 560, y2: 96, side: 'right' },
  { x1: 360, y1: 216, cx: 260, cy: 194, x2: 158, y2: 160, side: 'left' },
  { x1: 360, y1: 282, cx: 465, cy: 262, x2: 576, y2: 230, side: 'right' },
  { x1: 360, y1: 348, cx: 255, cy: 328, x2: 146, y2: 298, side: 'left' },
  { x1: 360, y1: 414, cx: 455, cy: 398, x2: 560, y2: 372, side: 'right' },
  { x1: 360, y1: 468, cx: 262, cy: 456, x2: 168, y2: 436, side: 'left' },
  { x1: 360, y1: 120, cx: 300, cy: 96, x2: 240, y2: 66, side: 'left' },
  { x1: 360, y1: 100, cx: 420, cy: 72, x2: 470, y2: 40, side: 'right' },
]

const VB_W = 720
const VB_H = 520

export default function SkillTree() {
  const [active, setActive] = useState(null)
  const branches = skills.slice(0, BRANCHES.length)

  return (
    <div className="skilltree">
      <p className="skilltree__hint">HOVER OR TAP A BRANCH</p>

      <div className="skilltree__stage">
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="skilltree__svg" aria-hidden="true">
          {/* ground */}
          <path d="M 250 502 Q 360 484 470 502" stroke="var(--line)" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* trunk */}
          <path
            d="M 352 500 C 356 380 352 240 360 96 M 368 500 C 366 400 370 260 360 96"
            stroke="var(--accent)"
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
          />
          {branches.map((s, i) => {
            const b = BRANCHES[i]
            const isActive = active === i
            return (
              <g
                key={s.label}
                className={`skilltree__branch ${isActive ? 'is-active' : ''}`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(isActive ? null : i)}
              >
                {/* wide invisible hit area so hovering/tapping is easy */}
                <path
                  d={`M ${b.x1} ${b.y1} Q ${b.cx} ${b.cy} ${b.x2} ${b.y2}`}
                  stroke="transparent"
                  strokeWidth="44"
                  fill="none"
                />
                <path
                  className="skilltree__limb"
                  d={`M ${b.x1} ${b.y1} Q ${b.cx} ${b.cy} ${b.x2} ${b.y2}`}
                  fill="none"
                  strokeLinecap="round"
                />
                <circle className="skilltree__bud" cx={b.x2} cy={b.y2} r="8" />
              </g>
            )
          })}
        </svg>

        {/* category label + leaf chips, anchored at each branch tip */}
        {branches.map((s, i) => {
          const b = BRANCHES[i]
          const isActive = active === i
          return (
            <div
              key={s.label}
              className={`skilltree__reveal skilltree__reveal--${b.side} ${isActive ? 'is-open' : ''}`}
              style={{ left: `${(b.x2 / VB_W) * 100}%`, top: `${(b.y2 / VB_H) * 100}%` }}
            >
              <span className="skilltree__cat">{s.label}</span>
              <span className="skilltree__leaves">
                {s.items.map((item, j) => (
                  <span className="skilltree__leaf" key={item} style={{ transitionDelay: `${j * 30}ms` }}>
                    {item}
                  </span>
                ))}
              </span>
            </div>
          )
        })}
      </div>

      {/* small screens: the active branch's leaves show in a panel below the
          tree instead of floating beside it */}
      <div className={`skilltree__panel ${active !== null ? 'is-open' : ''}`}>
        {active !== null && (
          <>
            <span className="skilltree__cat">{branches[active].label}</span>
            <span className="skilltree__leaves">
              {branches[active].items.map((item) => (
                <span className="skilltree__leaf" key={item}>
                  {item}
                </span>
              ))}
            </span>
          </>
        )}
      </div>
    </div>
  )
}
