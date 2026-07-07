import { useEffect, useState } from 'react'

const ROWS = [
  ['A', 'Y', 'E', 'S', 'H', 'A'],
  ['E', 'R', 'U', 'M'],
]

// Name rendered as keycaps that "type in" one by one. Click to replay.
export default function Typewriter() {
  const [count, setCount] = useState(0)
  const total = ROWS.flat().length

  useEffect(() => {
    if (count >= total) return
    const t = setTimeout(() => setCount((c) => c + 1), 130)
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
            return (
              <span key={idx} className={`keycap ${idx < count ? 'is-typed' : ''}`}>
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
