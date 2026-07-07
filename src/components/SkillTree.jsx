import { skills } from '../data/cv.js'

// Static skill-tree diagram: every category label and its subtopics are
// permanently visible. Branches radiate from a central trunk with a label
// node at the end of each branch. Geometry lives in a 720x700 viewBox;
// branch tips are pulled in toward the trunk so the label blocks fit inside
// the stage. Supports up to 6 branches (alternating right/left, top-down).
const BRANCHES = [
  { y1: 235, x2: 462, y2: 95, side: 'right' },
  { y1: 300, x2: 258, y2: 215, side: 'left' },
  { y1: 430, x2: 468, y2: 375, side: 'right' },
  { y1: 470, x2: 256, y2: 425, side: 'left' },
  { y1: 575, x2: 462, y2: 540, side: 'right' },
  { y1: 640, x2: 262, y2: 615, side: 'left' },
]

const TRUNK_X = 360
const VB_W = 720
const VB_H = 700

export default function SkillTree() {
  const branches = skills.slice(0, BRANCHES.length)

  return (
    <div className="skilltree">
      {/* wide screens: illustrated tree with label nodes at branch tips */}
      <div className="skilltree__stage">
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="skilltree__svg" aria-hidden="true">
          {/* ground */}
          <path d="M 250 682 Q 360 664 470 682" stroke="var(--line)" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* trunk */}
          <path
            d="M 352 680 C 356 520 352 300 360 120 M 368 680 C 366 540 370 320 360 120"
            stroke="var(--accent)"
            strokeWidth="7"
            fill="none"
            strokeLinecap="round"
          />
          {branches.map((s, i) => {
            const b = BRANCHES[i]
            const cx = (TRUNK_X + b.x2) / 2
            const cy = b.y2 - 8
            return (
              <g key={s.label}>
                <path
                  className="skilltree__limb"
                  d={`M ${TRUNK_X} ${b.y1} Q ${cx} ${cy} ${b.x2} ${b.y2}`}
                  fill="none"
                  strokeLinecap="round"
                />
                <circle className="skilltree__bud" cx={b.x2} cy={b.y2} r="8" />
              </g>
            )
          })}
        </svg>

        {branches.map((s, i) => {
          const b = BRANCHES[i]
          return (
            <div
              key={s.label}
              className={`skilltree__block skilltree__block--${b.side}`}
              style={{ left: `${(b.x2 / VB_W) * 100}%`, top: `${(b.y2 / VB_H) * 100}%` }}
            >
              <span className="skilltree__cat">{s.label}</span>
              <span className="skilltree__leaves">
                {s.items.map((item) => (
                  <span className="skilltree__leaf" key={item}>
                    {item}
                  </span>
                ))}
              </span>
            </div>
          )
        })}
      </div>

      {/* narrow screens: same content as a compact static legend */}
      <div className="skilltree__legend">
        {branches.map((s) => (
          <div className="skilltree__group" key={s.label}>
            <span className="skilltree__cat">{s.label}</span>
            <span className="skilltree__leaves">
              {s.items.map((item) => (
                <span className="skilltree__leaf" key={item}>
                  {item}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
