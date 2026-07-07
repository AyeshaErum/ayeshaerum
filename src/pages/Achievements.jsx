import PageShell from '../components/PageShell.jsx'
import { achievements, leadership } from '../data/cv.js'

const medalClass = (place) => {
  if (place === '1st') return 'award__medal award__medal--gold'
  if (place === '2nd') return 'award__medal award__medal--silver'
  return 'award__medal'
}

export default function Achievements() {
  return (
    <PageShell>
      <p className="eyebrow">// ACHIEVEMENTS & AWARDS</p>
      <h1 className="h-serif" style={{ fontSize: 'clamp(1.4rem, 3.5vw, 1.9rem)' }}>
        Achievements
      </h1>

      <div style={{ marginTop: '0.75rem' }}>
        {achievements.map((a) => (
          <div className="award" key={a.title}>
            <span className={medalClass(a.place)}>{a.place === '—' ? '★' : a.place}</span>
            <h2 className="award__title h-serif">{a.title}</h2>
            {a.year && <span className="award__year">{a.year}</span>}
          </div>
        ))}
      </div>

      <hr className="rule" />

      <p className="eyebrow">LEADERSHIP</p>
      <div className="award">
        <span className="award__medal">✦</span>
        <div>
          <h2 className="award__title h-serif">{leadership.role}</h2>
          <ul className="bullets">
            {leadership.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </PageShell>
  )
}
