import { useEffect, useState } from 'react'

const ROWS = [
  ['A', 'Y', 'E', 'S', 'H', 'A'],
  ['E', 'R', 'U', 'M'],
]

// Name rendered as keyboard keys. Each key physically depresses and pops back
// in sequence, like someone typing. Click anywhere on the name to replay.
export default function Typewriter() {
  const [count, setCount] = useState(0)
  const total = ROWS.flat().length

  useEffect(() => {
    if (count >= total) return
    const t = setTimeout(() => setCount((c) => c + 1), 150)
    return () => clearTimeout(t)
  }, [count, total])

  const replay = () => setCount(0)

  let i = 0
  return (
    <button className="typename" onClick={replay} aria-label="Ayesha Erum — click to replay animation">
      {ROWS.map((row, r) => (
        <span className="typename__row" key={r}>
          {row.map((ch) => {
            const idx = i++
            const cls = ['keycap', idx < count && 'is-typed', idx === count - 1 && 'is-pressed']
              .filter(Boolean)
              .join(' ')
            return (
              <span key={idx} className={cls}>
                {ch}
              </span>
            )
          })}
        </span>
      ))}
      <span className="typename__hint">CLICK TO REPLAY</span>
    </button>
  )
}
