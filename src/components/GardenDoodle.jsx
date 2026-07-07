// Decorative hand-drawn wildflower strip for the bottom of the homepage.
// Pure inline SVG (no assets, recolors with the theme), pointer-events: none
// so it never interferes with the folder icons.

const TUFTS = [15, 105, 190, 275, 365, 455, 545, 635, 725, 815, 905, 995, 1085, 1175, 1265, 1355, 1430]

const FLOWERS = [
  { type: 'daisy', x: 65, s: 1, color: 'var(--terracotta)' },
  { type: 'star', x: 150, s: 0.85, color: 'var(--purple)' },
  { type: 'bud', x: 225, s: 0.9, color: 'var(--pink)' },
  { type: 'dots', x: 320, s: 1, color: 'var(--blue)' },
  { type: 'tulip', x: 410, s: 0.95, color: 'var(--accent)' },
  { type: 'daisy', x: 505, s: 0.8, color: 'var(--lavender)' },
  { type: 'star', x: 590, s: 1, color: 'var(--terracotta)' },
  { type: 'bud', x: 680, s: 0.85, color: 'var(--blue)' },
  { type: 'daisy', x: 770, s: 1.05, color: 'var(--purple)' },
  { type: 'tulip', x: 860, s: 0.85, color: 'var(--pink)' },
  { type: 'dots', x: 950, s: 0.9, color: 'var(--terracotta)' },
  { type: 'star', x: 1040, s: 0.95, color: 'var(--blue)' },
  { type: 'daisy', x: 1135, s: 0.85, color: 'var(--pink)' },
  { type: 'bud', x: 1220, s: 1, color: 'var(--purple)' },
  { type: 'star', x: 1310, s: 0.85, color: 'var(--lavender)' },
  { type: 'daisy', x: 1395, s: 0.95, color: 'var(--terracotta)' },
]

export default function GardenDoodle() {
  return (
    <div className="garden" aria-hidden="true">
      <svg viewBox="0 0 1440 130" preserveAspectRatio="xMidYMax slice">
        <defs>
          {/* sketchy grass tuft */}
          <g id="g-tuft" fill="none" stroke="var(--doodle-grass)" strokeWidth="3" strokeLinecap="round">
            <path d="M0 0 C -3 -8 -8 -13 -12 -17" />
            <path d="M5 0 C 4 -10 2 -16 4 -24" />
            <path d="M11 0 C 13 -8 17 -14 22 -18" />
            <path d="M17 0 C 18 -6 21 -10 26 -12" />
          </g>
          {/* six-petal crayon daisy */}
          <g id="g-daisy">
            <path d="M0 0 C 2 -12 -2 -30 0 -44" fill="none" stroke="var(--doodle-grass)" strokeWidth="3" strokeLinecap="round" />
            <path d="M0 -18 C -7 -20 -12 -24 -14 -28" fill="none" stroke="var(--doodle-grass)" strokeWidth="2.5" strokeLinecap="round" />
            <g fill="currentColor">
              <ellipse cx="0" cy="-56" rx="4.5" ry="8" />
              <ellipse cx="0" cy="-56" rx="4.5" ry="8" transform="rotate(60 0 -56)" />
              <ellipse cx="0" cy="-56" rx="4.5" ry="8" transform="rotate(120 0 -56)" />
            </g>
            <circle cx="0" cy="-56" r="4" fill="var(--brand-cream)" stroke="var(--accent)" strokeWidth="1.5" />
          </g>
          {/* spiky asterisk flower */}
          <g id="g-star">
            <path d="M0 0 C -2 -12 2 -24 0 -38" fill="none" stroke="var(--doodle-grass)" strokeWidth="3" strokeLinecap="round" />
            <g stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
              <path d="M0 -46 v -9" />
              <path d="M0 -46 l 8 -5" />
              <path d="M0 -46 l -8 -5" />
              <path d="M0 -46 l 6 7" />
              <path d="M0 -46 l -6 7" />
            </g>
            <circle cx="0" cy="-46" r="3" fill="var(--accent)" />
          </g>
          {/* tulip cup */}
          <g id="g-tulip">
            <path d="M0 0 C 2 -10 -2 -22 0 -34" fill="none" stroke="var(--doodle-grass)" strokeWidth="3" strokeLinecap="round" />
            <path d="M0 -16 C 6 -18 10 -22 12 -26" fill="none" stroke="var(--doodle-grass)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M -7 -34 Q -9 -48 0 -50 Q 9 -48 7 -34 Q 3 -31 0 -34 Q -3 -31 -7 -34 Z" fill="currentColor" />
          </g>
          {/* berry / dot cluster */}
          <g id="g-dots">
            <path d="M0 0 C -1 -12 1 -22 0 -34" fill="none" stroke="var(--doodle-grass)" strokeWidth="3" strokeLinecap="round" />
            <g fill="currentColor">
              <circle cx="0" cy="-44" r="3.2" />
              <circle cx="-7" cy="-39" r="3.2" />
              <circle cx="7" cy="-39" r="3.2" />
              <circle cx="-4" cy="-49" r="3.2" />
              <circle cx="5" cy="-48" r="3.2" />
            </g>
          </g>
          {/* single bud */}
          <g id="g-bud">
            <path d="M0 0 C 2 -8 -2 -18 0 -28" fill="none" stroke="var(--doodle-grass)" strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="0" cy="-34" rx="5" ry="7" fill="currentColor" />
          </g>
        </defs>

        {/* wobbly grass baseline, two passes for a crayon feel */}
        <path
          d="M-10 118 q 22 -8 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0 t 44 0"
          fill="none"
          stroke="var(--doodle-grass)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M-30 124 q 26 -7 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0 t 52 0"
          fill="none"
          stroke="var(--doodle-grass)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.6"
        />

        {TUFTS.map((x, i) => (
          <use key={x} href="#g-tuft" x={x} y={118} transform={i % 2 ? `translate(${x} 118) scale(-1 1) translate(${-x} -118)` : undefined} />
        ))}

        {FLOWERS.map((f) => (
          <use
            key={f.x}
            href={`#g-${f.type}`}
            style={{ color: f.color }}
            transform={`translate(${f.x} 119) scale(${f.s})`}
          />
        ))}
      </svg>
    </div>
  )
}
